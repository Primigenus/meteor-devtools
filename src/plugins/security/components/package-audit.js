import React, { PropTypes } from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes : {
    packages: PropTypes.object.isRequired
  },

  _checkPackageIsRemoved (packageName) {
    if(this.props.packages.includes(packageName)){
      return (
        <li className="warning">
          <div className="status warning"></div>
          <p className="desc">You should consider removing the <strong>{packageName}</strong> package.</p>
        </li>);
    } else {
      return (
        <li className="valid">
          <div className="status valid"></div>
          <p className="desc"><strong>{packageName}</strong> package was removed.</p>
        </li>);
    }
  },

  _checkPackageIsIncluded (packageName) {
    if(!this.props.packages.includes(packageName)){
      return (
        <li className="warning">
          <div className="status warning"></div>
          <p className="desc">Consider using the <strong>{packageName}</strong> package.</p>
        </li>);
    } else {
      return (
        <li className="valid">
          <div className="status valid"></div>
          <p className="desc"><strong>{packageName}</strong> package is included.</p>
        </li>
      );
    }
  },

  render () {
    return (
      <div>
        <div className="panel-header">
          <h3>Packages:</h3>
          <p>Some package recommendations based on: <a href="https://guide.meteor.com/security.html#method-rules." target="_blank">https://guide.meteor.com/security.html#method-rules.</a></p>
        </div>
        <ul className="package-status">
            {this._checkPackageIsRemoved('insecure')}
            {this._checkPackageIsRemoved('autopublish')}
            {this._checkPackageIsIncluded('aldeed:simple-schema')}
            {this._checkPackageIsIncluded('audit-argument-checks')}
            {this._checkPackageIsIncluded('mdg:validated-methods')}
        </ul>
      </div>
    )
  }
});