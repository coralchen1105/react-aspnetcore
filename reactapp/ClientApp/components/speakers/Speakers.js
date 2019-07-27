import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeakersHeader from "./SpeakersHeader";
import SpeakerList from "./SpeakerList";

// import the action as the props
import { speakersFetchData } from "../../../redux/actions/speakersActions";
import { connect } from "react-redux";
// import axios from "axios";

class Speakers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      appData: []
    };
  }

  //call actions to patch state data
  componentDidMount() {
    // reducer call from props from Provider store props
    // store props includes reducer state status and action functions
    // load props state to this component state info
    console.log(this.props);
    // import from actions and create new props,and new state
    this.props.speakersFetchData();
  }

  // already transfer state data to props data
  render() {
    if (this.props.isLoading) {
      return (
        <span>
          <i>Loading...</i>
        </span>
      );
    } else if (this.props.hasErrored) {
      return (
        <span>
          <b>Failed to load data: {this.props.errorMessage}</b>
        </span>
      );
    } else {
      return (
        <div>
          <SpeakersHeader />
          <SpeakerList speakers={this.props.speakers} />
        </div>
      );
    }
  }
}

Speakers.propTypes = {};
Speakers.defaultProps = {};

// map state to props (set to props) state.speakers is from reducer class, done after mount state
const mapStateToProps = state => {
  return {
    speakers: state.speakers.data,
    hasErrored: state.speakers.hasErrored,
    isLoading: state.speakers.isLoading,
    errorMessage: state.speakers.errorMessage
  };
};

// this is returning a promise
function loadData(store) {
  return store.dispatch(speakersFetchData());
}

// mapStateToProps: pass new state and set new properties
// speakerFetchData: action function and connect to reducer
// dispatch reducers and action compoment here
export default {
  component: connect(
    mapStateToProps,
    { speakersFetchData }
  )(Speakers),
  loadData
};

// dispatch reducer here to add new state based on the actions
// get speakersFetchData by didMount to create new props and pass current state (base on action and reducer)with map to props
