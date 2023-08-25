import { Layout } from './Layout.js';
import { GlobalStyle } from './GlobalStyle.js';
//*** */
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';
//*** */

import { useState } from 'react';

export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  //*** */

  // const countGood = () => {
  //   setGood(prevState => ({
  //     ...prevState,
  //     good: prevState.good + 1,
  //   }));
  // };
  // const countNeutral = () => {
  //   setNeutral(prevState => ({
  //     ...prevState,
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // const countBad = () => {
  //   setBad(prevState => ({
  //     ...prevState,
  //     bad: prevState.bad + 1,
  //   }));
  // };

  //*** */

  const count = feedbackType => {
    setFeedback(prevState => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };
  //*** */

  const countTotalFeedback = () => {
    let total = Object.values(feedback).reduce((a, b) => a + b);
    // console.log(total);
    return total;
  };

  //**** */
  const countPositiveFeedbackPercentage = () => {
    let positive = Math.round((feedback.good * 100) / countTotalFeedback());
    //console.log(positive);
    return positive;
  };
  //*** */

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={count} />
      </Section>

      <Section title="Statistics ">
        {feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
