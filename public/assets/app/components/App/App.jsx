'use strict';

import './_App.scss';

import React from 'react';
import Report from '../Report/Report';
import AppActions from '../../actions/AppActions';
import {LOCATIONS} from '../../constants/AppConstants';

LOCATIONS.forEach(location => AppActions.getReport(location));

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {
          LOCATIONS.map((location, index) => {
            return <Report key={index} location={location} />
          })
        }
      </div>
    );
  }
}
