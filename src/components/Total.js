import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.reducer.car,
    additionalPrice: state.reducer.additionalPrice
  }
}

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(mapStateToProps, {})(Total);
