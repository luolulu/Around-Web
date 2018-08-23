import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import {AroundMarker} from "./AroundMarker";

export class AroundMap extends React.Component {

    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >

                <AroundMarker position={{ lat: -34.397, lng: 150.644 }}/>
                <AroundMarker
                    position={{ lat: -34.397, lng: 150.644 }}
                >
                </AroundMarker>
            </GoogleMap>
        );
    }

}
export const WrappedAroundMapForm = withScriptjs(withGoogleMap(AroundMap));
