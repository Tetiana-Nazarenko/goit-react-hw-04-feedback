import { Layout } from './Layout.js';
import { GlobalStyle } from './GlobalStyle.js';
//*** */
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';
//*** */
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //*** I METHOD */
  // countGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // countNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // countBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  //*** */

  count = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  //*** */

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((a, b) => a + b);
    //console.log(total);
    return total;
  };

  //**** */
  countPositiveFeedbackPercentage = () => {
    let positive = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    //console.log(positive);
    return positive;
  };

  render() {
    const feedback = ['good', 'neutral', 'bad'];

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedback} onLeaveFeedback={this.count} />
        </Section>
        {/* <button type="button" onClick={this.countGood}>
          Good
        </button>
        <button type="button" onClick={this.countNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.countBad}>
          Bad
        </button> */}

        <Section title="Statistics ">
          {this.state.good === 0 &&
          this.state.neutral === 0 &&
          this.state.bad === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}{' '}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
