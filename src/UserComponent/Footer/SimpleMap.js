import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" style={{width:'40px',height:'40px', color:'red'}}  />
      
    </div>
  )
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.86306,
      lng: 106.74872
    },
    zoom: 13
  };
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.86306}
            lng={106.74872}
            //text="My Marker"
          />
            <LocationPin
           lat={10.86306}
           lng={106.74872}
           width='500px'
         //  text="My Marker"
        />

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;