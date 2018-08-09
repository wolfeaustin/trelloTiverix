import React from "react";
import { Card } from "antd";
import { activeBoard } from "../Actions/activeActions";
import { deleteBoard } from "../Actions/boardActions";
import { connect } from "react-redux";

class Board extends React.Component {
  render() {
    return (
      <div
        className="Board"
        onClick={() => this.props.onActiveBoard(this.props.id)}
      >
        <Card>
          {this.props.name}
          <a
            style={{ marginLeft: "30px" }}
            onClick={() => this.props.onDeleteBoard(this.props.id)}
          >
            X
          </a>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  id: props.id,
  boards: state.boards //need to check to see if that board still exists
});

const mapActionsToProps = {
  onActiveBoard: activeBoard,
  onDeleteBoard: deleteBoard
};

export default connect(mapStateToProps, mapActionsToProps)(Board);
