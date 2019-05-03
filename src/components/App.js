import React from 'react';
import './App.css';

import FetchReservation from './FetchReservation';
import Reservations from './Reservations';
import ReservationFrom from './ReservateForm';

const App = () => {
  return (
    <div className="App">
      <h1>Graphql Test React App</h1>

      <div className="row center">
        <FetchReservation />
      </div>
      <div className="row">
        <div className="col-md center">
          <Reservations />
        </div>
        <div className="col-md center">
          <ReservationFrom />
        </div>
      </div>
    </div>
  );
};

export default App;
