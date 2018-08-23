import React from 'react';
import {
    Marker,
    InfoWindow,
} from "react-google-maps";


export class AroundMarker extends React.Component {
    render() {
        return (
            <Marker
                position={{ lat: -34.397, lng: 150.644 }}
                onClick={this.onToggleOpen}
            >
                {this.state.isOpen ? (<InfoWindow>
                    <div> info window content</div>
                </InfoWindow>) : null }
            </Marker>
        );
    }
}