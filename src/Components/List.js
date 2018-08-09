import React from "react";
import { Card, Button, Input, Modal } from "antd";
import { DropTarget } from "react-dnd";
import Item from "./Item";
import { deleteList } from "../Actions/listActions";
import { addItem } from "../Actions/itemActions";
import { compose } from "redux";
import { connect } from "react-redux";

const dropItem = {
  drop(props, monitor, component) {
    component.props.changeList(monitor.getItem().id, props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class List extends React.Component {
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

  addNewItem = () => {
    this.props.onAddItem(this.state.name, this.props.id);
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
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="List">
        <Modal
          title="Add an Item to the List"
          visible={this.state.visible}
          onOk={this.addNewItem}
          onCancel={this.handleCancel}
        >
          <p>Enter name for new the Item</p>
          <Input
            placeholder="To-Do"
            onChange={e => this.updateText(e.target.value)}
          />
        </Modal>
        <Card
          title={this.props.name}
          extra={
            <a onClick={() => this.props.onDeleteList(this.props.id)}>X</a>
          }
        >
          {this.props.items
            .filter(e => e.list_id === this.props.id)
            .map(c => <Item key={c.id} item={c} description={c.name} />)}
        </Card>
        <Button className="ItemButton" onClick={this.handleNewClick}>
          Add Item
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  items: state.items,
  id: props.id
});

const mapActionsToProps = {
  onDeleteList: deleteList,
  onAddItem: addItem
};

export default compose(
  DropTarget("item", dropItem, collect),
  connect(mapStateToProps, mapActionsToProps)
)(List);
