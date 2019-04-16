import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { FETCHING, SUCCESS, FAILURE } from '../actions';
import { getPeople } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <Loader type="Ball-Triangle" color="#00BFFF" height="100" width="65" />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,/* mapStateToProps replaces null here */
  {
    /* action creators go here */
    getPeople
  }
)(CharacterListView);
