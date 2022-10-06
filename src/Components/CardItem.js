import React from "react";
import "../../src/index.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import StarRating from "./AdditionalComponents/StarRating";
import Tooltip from "@material-ui/core/Tooltip";

const CartItem = (props) => {
  const { price, title, qty, img, alt, mrp, rating } = props.product;
  // product is object
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDelete } = props;
  return (
    <div
      className="cart-item card"
      style={{
        padding: "2px 2px",
      }}
    >
      <div className="left-block">
        <img style={styles.image} src={img} alt={alt} />
      </div>
      <div className="right-block">
        <div className="cartTitle">
          <h1>{title}</h1>
        </div>
        <hr />
        <div style={{ color: "#777" }} className="price">
          &#x20B9; {qty * price}
        </div>
        <div className="mrp" style={{ color: "#777" }}>
          &#x20B9; {qty * mrp}{" "}
        </div>
        <div style={{ color: "orange" }}>
          {(((mrp - price) / mrp) * 100).toFixed(0)}% Off
        </div>
        <div style={{ color: "#777" }} className="qty">
          Quantity: {qty}
        </div>
        <div className="cart-item-actions">
          <Tooltip title="Increase" aria-label="increase">
            <AddIcon
              className="action-icons"
              onClick={() => {
                onIncreaseQuantity(product);
              }}
            />
          </Tooltip>
          <Tooltip title="Decrease" aria-label="decrease">
            <RemoveIcon
              className="action-icons"
              onClick={() => {
                onDecreaseQuantity(product);
              }}
            />
          </Tooltip>
          <Tooltip title="Delete" aria-label="delete">
            <DeleteIcon
              className="action-icons"
              onClick={() => {
                onDelete(product);
              }}
            />
          </Tooltip>
        </div>
        <div>
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    // height: 160,
    // width: 140,
    borderRadius: 4,
    background: "#ccc",
    backgroundSize: "cover",
  },
};

export default CartItem;
