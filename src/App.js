import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const mapStateToProps = state => {
  console.log(state);
  return state.reducer;
};

const removeFeature = item => {
  return {
    type: "REMOVE_FEATURE",
    payload: item
  };
};

const buyItem = item => {
  return {
    type: "ADD_FEATURE",
    payload: item
  };
};

const App = props => {

  return (
    <div className="boxes">
      <div className="box">
        <Header 
          car={props.car} 
        />
        <AddedFeatures 
          car={props.car}
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures}
          buyItem={buyItem}
        />
        <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} 
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { removeFeature, buyItem })(App);
