import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        const{name,SurName,Salary} = this.props
        return (
          <div className="card card-default  mt-3">
            <div className="card-header d-flex justify-content-between">
              <h3>{name}</h3>
              <i className="fas fa-trash" style = {{ fontSize:30}}></i>
            </div>
            <div className="card-body">
              <h5>Your SurName: {SurName}</h5>
              <h5>Your Salary: {Salary}</h5>
            </div>
          </div>
        );
    }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  SurName: PropTypes.string.isRequired,
  Salary: PropTypes
};
User.defaultProps = {
  name: "No information",
  SurName: "No Information",
  Salary: "No Information",
};
export default User