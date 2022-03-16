import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
    // static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    //   };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          center={this.props.center}
          defaultZoom={10}
        >
          <Marker
            lat={this.props.lat[0]}
            lng={this.props.lng[0]}
            title= "here"
            color="blue"
          />
          <Marker
            lat={this.props.lat[1]}
            lng={this.props.lng[1]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[2]}
            lng={this.props.lng[2]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[3]}
            lng={this.props.lng[3]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[4]}
            lng={this.props.lng[4]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[5]}
            lng={this.props.lng[5]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[6]}
            lng={this.props.lng[6]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[7]}
            lng={this.props.lng[7]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[8]}
            lng={this.props.lng[8]}
            text= "here"
          />
          <Marker
            lat={this.props.lat[9]}
            lng={this.props.lng[9]}
            text= "here"
          />
          
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;