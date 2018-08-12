import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import 'react-day-picker/lib/style.css';

import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment';

import locales from './assets/locales.json';

import 'moment/locale/he';
import 'moment/locale/ja';
import 'moment/locale/ar';
import 'moment/locale/de';
import 'moment/locale/zh-cn';
import 'moment/locale/vi';
import 'moment/locale/gu';
import 'moment/locale/ru';

class App extends Component {
  state = {
    selectedDay: null,
    locale: 'ja'
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

  handleSelectChange = e => {
    this.setState({
      locale: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React-Calendar</h1>
          </header>
          <h1>Day Picker</h1>
          {this.renderDay()}
          <DayPicker onDayClick={this.handleDayClick} />
        </div>
        <div className="App">
          <h1>Input Picker</h1>
          <DayPickerInput
            dayPickerProps={{
              month: new Date(2018, 10),
              showWeekNumbers: true,
              todayButton: 'Today'
            }}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`${formatDate(new Date())}`}
          />
          <p>
            In Hebrew, using <code>{'format="LL"'}</code>:
          </p>
          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            format="LL"
            placeholder={`${formatDate(new Date(), 'LL', 'he')}`}
            dayPickerProps={{
              locale: 'he',
              localeUtils: MomentLocaleUtils
            }}
          />
          <p>
            <select onChange={this.handleSelectChange}>
              {locales.map((l, i) => {
                return (
                  <option value={l.format} key={i}>
                    {l.language}
                  </option>
                );
              })}
            </select>
          </p>
          <DayPicker
            localeUtils={MomentLocaleUtils}
            locale={this.state.locale}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
