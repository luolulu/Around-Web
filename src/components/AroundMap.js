import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";

export class AroundMap extends React.Component {
    prevState = {
        isOpen: false,
    }
    onToggleOpen = () => {
       return {
           isOpen: !prevState.isOpen,
       }
    }
    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                    onClick={this.onToggleOpen}
                >
                    {this.state.isOpen ? (<InfoWindow>
                        <div> info window content</div>
                    </InfoWindow>) : null }
                </Marker>

                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                    onClick={this.onToggleOpen}
                >
                    {this.state.isOpen ? (<InfoWindow>
                        <div> info window content</div>
                    </InfoWindow>) : null }
                </Marker>
            </GoogleMap>
        )
    }

}
export const WrappedAroundMapForm = withScriptjs(withGoogleMap(AroundMap));
