import { useState } from 'react';
// import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  // handleFeedback = option => {
  //   // this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  // };

  const handleFeedback = option => {
   switch (option) {
    case 'good': setGood(prevState => prevState + 1)
      break;
      case 'neutral': setNeutral(prevState => prevState + 1)
      break;
      case 'bad': setBad(prevState => prevState + 1)
      break;
    default:
      break;
   }
  }


  const total = good + neutral + bad;
  //   () => {
  //   // const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  const positivePercent = Math.round((good / total) * 100);
  //   () => {
  //   // const { good } = this.state;
  //   // const total = this.totalFeedback();
  //    const total = totalFeedback();
  //   return total ? Math.round((good / total) * 100) : 0;
  // };

  // render() {
    // const { good, neutral, bad } = this.state;
  // const total = this.totalFeedback();
  // const total = totalFeedback();
  // //  const percent = this.positivePercent();
  // const percent = positivePercent();
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
          //  options={Object.keys(this.state)}
          //   onLeaveFeedback={this.handleFeedback}
            options={['good','neutral','bad']}
            // {Object.keys(this.state)} 
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={positivePercent}
          />
        </Section>
      </>
    );
  // }
}

export default App;
