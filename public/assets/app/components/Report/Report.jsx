'use strict';

import './_Report.scss';
import React from 'react';
import ItemsStore from '../../stores/ItemsStore';
import TextFormat from '../../util/TextFormat';
import ReportDetails from '../ReportDetails/ReportDetails';

function getStateFromStore(location) {
  return ItemsStore.getReport(location);
}

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStateFromStore(this.props.location);
  }

  componentDidMount() {
    ItemsStore.addChangeListener(this._onChange.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!(!this.state.report && nextState.report);
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(getStateFromStore(this.props.location));
  }

  render() {
    let reportComponent = <div className="panel-body text-center">Loading</div>;

    if (this.state.report) {
      reportComponent = <ReportDetails details={this.state.report} images={this.state.images} />
    }

    return (
      <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title capitalize" >
              {TextFormat.humanize(this.props.location)}
            </h3>
          </div>
          {reportComponent}
        </div>
      </div>
    )
  }
}

export default Report;
