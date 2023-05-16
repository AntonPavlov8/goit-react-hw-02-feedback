import { useState } from 'react';
import Feedback from './Feedback/Feedback';

export const App = () => {
  const [feedbackStats, setFeedbackStats] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Feedback
        feedbackStats={feedbackStats}
        setFeedbackStats={setFeedbackStats}
      />
    </div>
  );
};
