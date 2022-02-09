import { CssBaseline, Grid } from '@mui/material';
import React, { useEffect, useState} from 'react';
import Header from './pages/Header';
import List from './pages/List';
import Map from './pages/Map';
import { getPlaceData } from './api';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClick, setChildClicked] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) =>{
        setCoordinates({ lat: latitude, lng: longitude });
      })
  }, [])
  
  useEffect(() => {
    setIsLoading(true);

    getPlaceData( bounds.sw, bounds.ne)
      .then((data) =>{
          setPlaces(data);
          setIsLoading(false)
      })
  }, [coordinates, bounds]);

  return (
    <>
     <CssBaseline />      
     <Header />
     <Grid container spacing={3} style={{ width: "100%" }}>
     <Grid item xs={12} md={4}>
       <List 
            places = {places}
            childClick = {childClick}
            isLoading = {isLoading}
       />
     </Grid>
     <Grid item xs={12} md={8}>
       <Map
            setCoordinates={setCoordinates}       
            setBounds={setBounds}       
            coordinates={coordinates}
            places = {places}
            setChildClicked = {setChildClicked}       
       />
     </Grid>
     </Grid>
    </>
  );
};

export default App;
