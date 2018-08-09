import React from "react";
import Board from "./Board";
import { Modal, Button, Input } from "antd";
import { connect } from "react-redux";
import { addBoard } from "../Actions/boardActions";

class BoardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      name: ""
    };
  }

  handleNewClick = () => {
    this.setState({
      visible: true
    });
  };

  addNewBoard = () => {
    this.props.onAddBoard(this.state.name);
    this.setState({
      visible: false,
      name: ""
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      name: ""
    });
  };

  updateText = text => {
    this.setState({
      name: text
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="Add a Board"
          visible={this.state.visible}
          onOk={this.addNewBoard}
          onCancel={this.handleCancel}
        >
          <p>Enter name for new Board</p>
          <Input
            placeholder="To-Do"
            onChange={e => this.updateText(e.target.value)}
          />
        </Modal>
        <div className="BoardContainer">
          {this.props.boards.map(b => (
            <Board key={b.id} id={b.id} name={b.name} />
          ))}
        </div>
        <Button className="Button" onClick={this.handleNewClick}>
          Add Board
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards
});

const mapActionsToProps = {
  onAddBoard: addBoard
};

export default connect(mapStateToProps, mapActionsToProps)(BoardContainer);
