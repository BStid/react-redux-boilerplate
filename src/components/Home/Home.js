import React, { Component } from "react";
//import connect form react-redux to connec the store to your component
import { connect } from "react-redux";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homeOuter">
        <h1>Home</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
