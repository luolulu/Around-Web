import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

export class AroundMap extends React.Component {
    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                />
            </GoogleMap>
        )
    }

}
export const WrappedAroundMapForm = withScriptjs(withGoogleMap(AroundMap));
