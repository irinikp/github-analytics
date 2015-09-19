/** @jsx React.DOM */

'use strict';

var Layout = require('./layout.jsx');
var React = require('react');
var _ = require('lodash');
var BarChart = require("react-chartjs").Bar;

var InfoPanel = React.createClass({

  render: function(){
    return (
      <ul className="infopanel">
        <li>Repository: /{this.props.data.user}/{this.props.data.repo}</li>
        <li>Issue Labels: {this.props.data.labels}</li>
        <li>Issue State: {this.props.data.state}</li>
        <li>Search term: {this.props.data.term}</li>
      </ul>
    );
  }
});

var IssueInfoBox = React.createClass({
  
  renderItem: function(issue){
    return (
      <div>
        <h3>#{issue.key} {issue.title}</h3>
        <ul className="list-group">
          {issue.votes.map(function(user, i) {
            return (
              <li className="list-group-item" key={i}>{user}</li>
            );
          })}
        </ul>
      </div>
    );
  },

  render: function(){
    return (
      <div>
        {this.renderItem(this.props.issue)}
      </div>
    );
  }
});

var chartOptions = {
  responsive: true
};

module.exports = React.createClass({

  render: function () {
    return (
      <Layout {...this.props}>
        <div id='index' className="row-fluid">
          <h1>Github Issues Analytics</h1>
        </div>
        <div className="row-fluid">
          <InfoPanel
            data={this.props.ghParams}/>
        </div>
        <div className="row-fluid">
          <BarChart data={this.props.chartData} options={chartOptions}/>
        </div>
        <div className="row-fluid">
          <h2>Upvoting users per issue</h2>
          {Object.keys(this.props.allData).map(function(v, i) {
            var issue = this.props.allData[v];
            issue.key = v;
            return (
              <div key={issue.key}>
                <IssueInfoBox issue={issue}/>
              </div>
            );
          }, this)}
        </div>
      </Layout>
    );
  }

});
