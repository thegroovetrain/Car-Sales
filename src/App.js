import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { add, remove } from './actions/actions';


const mapStateToProps = state => {
  console.log(state);
  return state.reducer;
};

const App = props => {

  const removeFeature = item => {
    console.log('REMOVE', item);
    props.remove(item);
  };
  
  const buyItem = item => {
    console.log('ADD', item);
    props.add(item);
  };

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

export default connect(mapStateToProps, { add, remove })(App);
