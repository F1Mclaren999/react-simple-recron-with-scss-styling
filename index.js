import React, { Component } from 'react';
import { render } from 'react-dom';
import { ReQuartzCron } from '@sbzen/re-cron';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Custom Scss styling Cron Gen - ReCron',
      cron: '0',
    };
  }

  onChangeHandler = (event) => {
    console.log('event...from cron...', event);
    this.setState({ cron: event });
  };

  render() {
    return (
      <div id="main" style={{ margin: '30px' }}>
        <h3>{this.state.name}</h3>
        <input className="form-control mb-4" readOnly value={this.state.cron} />
        <ReQuartzCron
          cssClassPrefix="my-"
          onChange={this.onChangeHandler}
          value={this.state.cron}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
