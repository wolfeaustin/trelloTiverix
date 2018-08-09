import React from "react";
import List from "./List";
import { Modal, Button, Input } from "antd";
import { connect } from "react-redux";
import { activeBoard } from "../Actions/activeActions";
import { changeList } from "../Actions/itemActions";
import { addList } from "../Actions/listActions";

class ListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      name: ""
    };
  }

  componentWillMount() {
    this.props.boards.find(b => b.id === this.props.active_board)
      ? null
      : this.props.onActiveBoard(-1);
  }

  handleNewClick = () => {
    this.setState({
      visible: true
    });
  };

  addNewList = () => {
    this.props.onAddList(this.state.name, this.props.active_board);
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
          title="Add a List"
          visible={this.state.visible}
          onOk={this.addNewList}
          onCancel={this.handleCancel}
        >
          <p>Enter name for new the List</p>
          <Input
            placeholder="To-Do"
            onChange={e => this.updateText(e.target.value)}
          />
        </Modal>
        <Button className="Button" onClick={() => this.props.onActiveBoard(-1)}>
          Back To Boards
        </Button>
        <Button onClick={this.handleNewClick}>Add List</Button>
        <div className="ListContainer">
          {this.props.lists
            .filter(l => l.board_id === this.props.active_board)
            .map(e => (
              <List
                changeList={this.props.onChangeList}
                key={e.id}
                name={e.name}
                id={e.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
  active_board: state.active_board,
  boards: state.boards
});

const mapActionsToProps = {
  onActiveBoard: activeBoard,
  onAddList: addList,
  onChangeList: changeList
};

export default connect(mapStateToProps, mapActionsToProps)(ListContainer);
