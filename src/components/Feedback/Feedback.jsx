import PropTypes from 'prop-types';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export default function Feedback({ feedbackStats, setFeedbackStats }) {
  const countTotalFeedback = Object.values(feedbackStats).reduce(
    (acc, nextNumber) => {
      return (acc += nextNumber);
    }
  );

  const countPositiveFeedbackPercentage =
    Math.round((feedbackStats.Good / countTotalFeedback) * 100) + '%';

  const onLeaveFeedback = e => {
    const name = e.target.name;
    setFeedbackStats(prevData => ({
      ...prevData,
      [name]: feedbackStats[name] + 1,
    }));
  };
  return (
    <div>
      <Section title="">
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {/* statistics */}
      {countTotalFeedback > 0 && (
        <Statistics
          good={feedbackStats.Good}
          neutral={feedbackStats.Neutral}
          bad={feedbackStats.Bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </div>
  );
}
Feedback.propTypes = {
  feedbackStats: PropTypes.object.isRequired,
  setFeedbackStats: PropTypes.func.isRequired,
};
