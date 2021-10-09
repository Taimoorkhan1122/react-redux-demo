import React from "react";
import { connect } from "react-redux";
import { buyCake, stockCake } from ".././store";

const CakeCount = (props) => {
  return (
    <div data-testid="cake-count">
      <h1>Welcom to my Cake store</h1>
      <h3>Cake Counts - {props.noOfCakes}</h3>
    <button onClick={props.buyCake}>buy cake</button>
    <button onClick={props.stockCake}>stock cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    stockCake: () => dispatch(stockCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeCount);
