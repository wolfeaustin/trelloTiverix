import React from "react";
import { DragSource } from "react-dnd";
import { connect } from "react-redux";
import { deleteItem } from "../Actions/itemActions";

const itemSource = {
  beginDrag(props) {
    return props.item;
  }
};

function collect(connect, monitor, component) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Item extends React.Component {
  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className="Item">
        <span>
          {this.props.description}
          <a
            style={{ marginLeft: "30px" }}
            onClick={() => this.props.onDeleteItem(this.props.id)}
          >
            X
          </a>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  description: props.description,
  id: props.item.id
});

const mapActionsToProps = {
  onDeleteItem: deleteItem
};

Item = DragSource("item", itemSource, collect)(Item);
Item = connect(mapStateToProps, mapActionsToProps)(Item);

export default Item;
