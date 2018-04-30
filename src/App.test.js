import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {calculateRemainingTime,isItTime, launchAlarm} from './helper/time.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('test time helper', () => {
  const currentTime = new Date('December 17, 1995 03:24:00');
  const futureDate = new Date('December 17, 1995 04:25:00');

  expect(calculateRemainingTime(futureDate, currentTime)).toEqual({"hours": 1, "minutes": 1})

  expect(isItTime(futureDate, currentTime)).toEqual(false)
  expect(isItTime(currentTime, currentTime)).toEqual(true)
});
