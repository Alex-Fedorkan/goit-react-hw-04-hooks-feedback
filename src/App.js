import React, { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptionBtnClick = event => {
    const option = event.target.dataset.buttonType;

    switch (option) {
      case 'good':
        setGood(good => good + 1);
        return;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        return;

      case 'bad':
        setBad(bad => bad + 1);
        return;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const persentage = Math.round((good / countTotalFeedback()) * 100);
    return persentage ? persentage : 0;
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={feedbackOptionBtnClick}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
