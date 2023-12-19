
import React, { useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

export const App = () => {

  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  function onClickBtn(evt) {

    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((+good * 100) / +countTotalFeedback());
  };

  const stats = ['good', 'neutral', 'bad'];

  return (
 <div>
  <Section title="Please leave feedback">
<FeedbackOptions options={stats} onClickBtn = {onClickBtn}/>
  </Section>

  <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
  </Section>
  </div>
  
  )
}