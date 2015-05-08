'use strict';

import './_ReportDetails.scss';
import React from 'react';

class ReportDetails extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <table className="table capitalize">
          <tbody>
            <tr>
              <th>Rating</th>
              <td>{this.props.details.rating}</td>
            </tr>
            <tr>
              <th>Surf</th>
              <td>{this.props.details.surf}</td>
            </tr>
            <tr>
              <th>Weather</th>
              <td>{this.props.details.weather}</td>
            </tr>
            <tr>
              <th>Report Time</th>
              <td>{this.props.details.report_time}</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>{this.props.details.winds}</td>
            </tr>
          </tbody>
        </table>
        <div className="panel-body">
          <div dangerouslySetInnerHTML={{__html: this.props.details.description}}></div>
          <p>
            <a href={this.props.details.link} target="_blank">Full Report</a>
          </p>
          <div className="images">
            {
              this.props.images.map((image, index) => {
                return <img key={index} src={image.location} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ReportDetails;
