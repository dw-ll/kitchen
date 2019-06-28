import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Map from './components/MapContainer';


function App() {
  return (
    <div>
      <MyNavbar />
      <div style={{ height: "500px", width: "500px" }}>
        <Map />
      </div>
    </div>
  );
}

export default App;
