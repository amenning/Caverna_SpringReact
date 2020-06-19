import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RoomTile.css';
import RoomTile from './RoomTile';

import foodCornerRoomTile from '../../assets/images/RoomTiles/StartingRooms/FoodCorner.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class FoodCornerRoomTile extends Component {
  render () {
    return (
      <Aux>
        <RoomTile
          roomTileImage={foodCornerRoomTile}
          roomTileImageAlt='food corner room tile'
          onClick={this.props.onTakeAction}
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
    onTakeAction: () => dispatch({type: actionTypes.FOOD_CORNER})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCornerRoomTile);
