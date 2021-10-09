import React from "react";
import { connect } from "react-redux";
import { buyCake } from ".././store";

const CakeCount = (props) => {
  return (
    <div data-testid="cake-count">
      <h2>Cake Counts - {props.noOfCakes}</h2>
    <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dipatch) => {
  return {
    buyCake: () => dipatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeCount);
