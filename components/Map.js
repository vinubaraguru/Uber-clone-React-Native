import { StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker ,MapViewDirections } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { setOrigin } from '../slices/navSlice';
import { GOOGLE_MAPS_API_KEY } from '@env'

const Map = () => {
    const origin = useSelector(setOrigin)
    const destination = useSelector(setDestination)
    const mapRef = useRef(null);
    useEffect(() => {
     if(!origin && !destination) return;
     mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
         edgePadding : {top:50, right:50, bottom:50,left:50}
     })
    }, [origin,destination]);
    
  return (
    <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
        {
            origin && destination && (
                <MapViewDirections
                    origin='Bengaluru'
                    destination = 'Hassan'
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth = {3}
                    strokeColor = 'black'
                />
            )
            
        }
        {
            origin?.location &&  (
                <Marker
                    coordinate={{
                        // latitude:origin.location.lat,
                        // longitude:origin.location.lat
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="origin"
                    description="Bengaluru"
                    identifier="origin"
                />
            )
        }
        {
            destination?.location &&  (
                <Marker
                    coordinate={{
                        // latitude:origin.location.lat,
                        // longitude:origin.location.lat
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="origin"
                    description="Hassan"
                    identifier="destination"
                />
            )
        }
        </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
