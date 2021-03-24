import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  render() {
    const { name, surname, salary, id   } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="card card-default  mt-3">
        <div className="card-header d-flex justify-content-between">
          <h3 onClick={this.onClickEvent}>{name}</h3>
          <i
            className="fas fa-trash"
            style={{ fontSize: 30, cursor: "pointer" }}
          ></i>
        </div>
        {isVisible ? (
          <div className="card-body">
            <h5>Your ID: {id}</h5>
            <h5>Your SurName: {surname}</h5>
            <h5>Your Salary: {salary}</h5>
            <p>{this.state.test}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
User.defaultProps = {
  name: "No information",
  surname: "No Information",
  salary: "No Information",
  id:"No Information"
};
export default User;
