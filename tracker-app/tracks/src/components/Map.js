import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    // const initialLocation = {
    //     latitude: -1.69329,
    //     longitude: 29.23301,
    // };
    // JSX
    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01,
            // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(74, 137, 243, 1.0)"
                fillColor="rgba(74, 137, 243, 1.0)"
            />

            <Polyline coordinates={locations.map(loc => loc.coords)}/>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;