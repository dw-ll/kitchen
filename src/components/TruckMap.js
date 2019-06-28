import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

//component for google maps API
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class TruckMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: 'AIzaSyBqf1sVlCFf8v8CDXZfvCFcnxrXzSAFtmY',
            language: 'en'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default TruckMap;
