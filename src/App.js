import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
  state = {
    selectedDay: null
  };

  handleDayClick = day => {
    this.setState({ selectedDay: day });
  };

  renderCalendar() {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-Calendar</h1>
        </header>
        <DayPicker onDayClick={this.handleDayClick} />
        {this.renderCalendar()}
      </div>
    );
  }
}

export default App;
