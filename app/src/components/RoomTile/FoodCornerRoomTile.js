import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrangeRoomTile from './OrangeRoomTile';

import foodCornerRoomTile from '../../assets/images/RoomTiles/StartingRooms/FoodCorner.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class FoodCornerRoomTile extends Component {
  render () {
    return (
      <Aux>
        <OrangeRoomTile
          roomTileImage={foodCornerRoomTile}
          roomTileImageAlt='food corner room tile'
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
    onTakeAction: () => dispatch({type: actionTypes.FOOD_CORNER})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCornerRoomTile);
