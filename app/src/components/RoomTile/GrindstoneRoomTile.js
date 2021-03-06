import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrangeRoomTile from './OrangeRoomTile';

import grindstoneRoomTile from '../../assets/images/RoomTiles/StartingRooms/Grindstone.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class GrindstoneRoomTile extends Component {
  render () {
    return (
      <Aux>
        <OrangeRoomTile
          roomTileImage={grindstoneRoomTile}
          roomTileImageAlt='grindstone room tile'
          onClick={this.props.onTakeAction}
          activeOption={this.props.activeOption}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTakeAction: () => dispatch({type: actionTypes.GRINDSTONE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrindstoneRoomTile);
