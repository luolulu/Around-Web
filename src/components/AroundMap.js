import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import {AroundMarker} from "./AroundMarker";
import {POS_KEY} from '../constants';

export class AroundMap extends React.Component {


    render() {
        const { lat, lon } = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {
                    this.props.posts.map((post) =>  <AroundMarker post={post}/>)


                }

                <AroundMarker
                    position={{ lat: -34.397, lng: 150.644 }}
                >
                </AroundMarker>
            </GoogleMap>
        );
    }

}
export const WrappedAroundMapForm = withScriptjs(withGoogleMap(AroundMap));
