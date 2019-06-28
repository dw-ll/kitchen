import React from 'react';
import './App.css';
import {GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import MyNavbar from './components/MyNavbar';
import Map from './components/MapContainer';


function App() {
  return (
    <div>
      <MyNavbar/>
      <Map/>
    </div>
  );
}

export default App;
