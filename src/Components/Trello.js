import React from "react";
import BoardContainer from "./BoardContainer";
import ListContainer from "./ListContainer";
import { connect } from "react-redux";

class Trello extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        {this.props.active_board === -1 ? (
          <BoardContainer />
        ) : (
          <ListContainer />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  active_board: state.active_board
});

export default connect(mapStateToProps)(Trello);
