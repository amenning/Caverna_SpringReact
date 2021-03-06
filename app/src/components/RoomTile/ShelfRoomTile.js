import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrangeRoomTile from './OrangeRoomTile';

import shelfRoomTile from '../../assets/images/RoomTiles/StartingRooms/Shelf.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class ShelfRoomTile extends Component {
  render () {
    return (
      <Aux>
        <OrangeRoomTile
          roomTileImage={shelfRoomTile}
          roomTileImageAlt='shelf room tile'
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
    onTakeAction: () => dispatch({type: actionTypes.SHELF})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfRoomTile);
