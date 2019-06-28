import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//component for google maps API
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapStyles = {
  map:{
    position: 'absolute',
    width: '50%',
    height:'50%'
  }
};
 
 class TruckMap extends Component {
   constructor(props) {
     super(props);
     const { lat, lng } = this.props.initialCenter;
     this.state = {
       currentLocation: {
         lat: lat,
         lng: lng
       }
     };
   }
   componentDidUpdate(prevProps, prevState) {
     if (prevProps.google !== this.props.google) {
       this.loadMap();
     }
     if (prevState.currentLocation != this.state.currentLocation) {
       this.recenterMap();
     }
   }
   recenterMap() {
     const map = this.map;
     const currentLoc = this.state.currentLocation;
     const google = this.props.google;
     const maps = google.maps;
     if (map) {
       let center = new maps.LatLng(currentLoc.lat, currentLoc.lng);
       map.panTo(center);
     }
   }
   componentDidMount() {
     if (this.props.centerAroundCurrentLocation) {
       if (navigator && navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(pos => {
           const coords = pos.coords;
           this.setState({
             currentLocation: {
               lat: coords.latitude,
               lng: coords.longitude
             }
           });
         });
       }
     }
     this.loadMap();
   }
   loadMap(){
     if(this.props && this.props.google){
       // is google available?
       const {google} = this.props;
       const maps = google.maps;
       const mapReference = this.refs.map;

       const node = ReactDOM.findDOMNode(mapReference);
       let {zoom} = this.props;
       const {lat,lng} = this.state.currentLocation;
       const center = new maps.LatLng(lat,lng);
       const mapConfiguration = Object.assign(
         {},
         {
           center:center,
           zoom:zoom
         }
       );
       this.map = new maps.Map(node,mapConfiguration);
     }
   }
   renderChildren(){
     const {children} = this.props;
     if(!children) return;
     return React.Children.map(children, c => {
       if(!c) return;
       return React.cloneElement(c, {
         map:this.map,
         google:this.props.google,
         mapCenter: this.state.currentLocation
       });
     });
   }

   render() {
     const style = Object.assign({},MapStyles.map)
     return (
       // Important! Always set the container height explicitly
       <div>
         <div style = {style} ref="map">
           Loading the map.
         </div>
         {this.renderChildren()}
       </div>  
     );
   }
 }


export default TruckMap;

TruckMap.defaultProps = {
  zoom: 17,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation:false,
  visible:true
}
