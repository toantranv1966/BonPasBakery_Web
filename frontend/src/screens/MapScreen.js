import axios from 'axios';
import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Store} from '../Store';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 16.0471, // Tọa độ mặc định (Đà Nẵng City)
  lng: 108.2068
};

const defaultLocation = { lat: 16.0471, lng: 108.2068 };
const libs = ['places'];

function MapComponent({ onLocationSelect }) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  const [center, setCenter] = useState(defaultLocation);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [location, setLocation] = useState(center);

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);

  const getUserCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition((position) => {
      //   setSelectedPosition({
      //     lat: position.coords.latitude,
      //     lng: position.coords.longitude,
      //   });
      // });
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data } = await axios.get('/api/keys/google', {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });

        setGoogleMapsApiKey(data.key);
        getUserCurrentLocation();
      } catch (error) {
        console.error('Error fetching Google Maps API key:', error);
      }
    };

    fetchApiKey();

    ctxDispatch({
      type: 'SET_FULLBOX_ON',
    });
  }, [userInfo, ctxDispatch, getUserCurrentLocation]);

  console.log('Google API Key: ', googleMapsApiKey);

  const onLoad = (map) => {
    mapRef.current = map;
  };
  const onIdle = () => {
    setLocation({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const onLoadPlaces = (place) => {
    placeRef.current = place;
  };

  const onPlacesChanged = () => {
    const place = placeRef.current.getPlaces()[0].geometry.location;
    setCenter({ lat: place.lat(), lng: place.lng() });
    setLocation({ lat: place.lat(), lng: place.lng() });
  };

  const onMarkerLoad = (marker) => {
    markerRef.current = marker;
  };

  const onConfirm = () => {
    const places = placeRef.current.getPlaces() || [{}];
    // console.log("Address: ", places[0].formatted_address);
    console.log("Place: ", places[0]);
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION',
      payload: {
        lat: location.lat,
        lng: location.lng,
        address: places[0].formatted_address,
        name: places[0].name,
        vicinity: places[0].vicinity,
        googleAddressId: places[0].id,
      },
    });
    toast.success('location selected successfully.');
    navigate('/shipping');
  };


  return (
    <div className="fix-botton full-box">
      {googleMapsApiKey ? (
        <LoadScript libraries={libs} googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            // onClick={(event) => {
            //   const newPosition = {
            //     lat: event.latLng.lat(),
            //     lng: event.latLng.lng(),
            //   };
            //   setSelectedPosition(newPosition);
            //   onLocationSelect(newPosition);
            // }}
            onLoad={onLoad}
          onIdle={onIdle}
          >
            {/* {selectedPosition && <Marker position={selectedPosition} />} */}
            <StandaloneSearchBox
            onLoad={onLoadPlaces}
            onPlacesChanged={onPlacesChanged}
          >
            <div className="map-input-box">
              <input type="text" placeholder="Nhập địa chỉ của bạn"></input>
              <Button type="button" onClick={onConfirm}>
                Xác nhận
              </Button>
            </div>
          </StandaloneSearchBox>
          <Marker position={location} onLoad={onMarkerLoad}></Marker>
          </GoogleMap>
        </LoadScript>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MapComponent;
