import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class App extends Component {
  state = {
    selectedDay: null
  };

  handleDayClick = day => {
    this.setState({ selectedDay: day });
  };

  renderDay() {
    let { selectedDay } = this.state;
    return selectedDay ? (
      <div>
        <h3>English Date: {selectedDay.toLocaleDateString()}</h3>
        <h3>Arabic Date: {selectedDay.toLocaleDateString('ar')}</h3>
        <h3>
          Thai Date:{' '}
          {selectedDay.toLocaleDateString('th-u-ca-buddhist-nu-thai')}
        </h3>
      </div>
    ) : (
      <h3>Select a day</h3>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React-Calendar</h1>
          </header>
          <h1>Day Picker</h1>
          <DayPicker onDayClick={this.handleDayClick} />
          {this.renderDay()}
        </div>
        <div className="App">
          <h1>Input Picker</h1>
          <DayPickerInput
            dayPickerProps={{
              month: new Date(2018, 10),
              showWeekNumbers: true,
              todayButton: 'Today'
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
