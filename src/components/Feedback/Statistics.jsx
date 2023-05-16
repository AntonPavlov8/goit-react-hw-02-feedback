import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>
        <b>Good:</b> {good}
      </p>
      <p>
        <b>Neutral:</b> {neutral}
      </p>
      <p>
        <b>Bad:</b> {bad}
      </p>
      <b>Total: </b> {total}
      <p>Positive feedback: {positivePercentage} </p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
