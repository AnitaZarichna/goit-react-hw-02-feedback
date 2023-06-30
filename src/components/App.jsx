import { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';

export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  onClickBtn = evt => {
    this.setState(prevState => ({
        [evt.target.name]: prevState[evt.target.name] + 1,
    }));
};

  render(){
    return( 
      <div>
        <div>
        <title>Please leave feedback!</title>
        <FeedbackOptions
        options={this.state}
        onLeaveFeedback={this.onClickBtn}/>   
        </div>
        <div>
        <title>Statistics</title>
        <ul>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
          <li>Total</li>
          <li>Positive feedback</li>
        </ul>
        </div>
        </div>
    );
  }
}
