import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import useStyles from "../styles";

const Map = ({ setCoordinates, setChildClicked, setBounds, coordinates, places   }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqDQBLtTMWkRtSwpFZtPW1BAbOlvrnivg" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div 
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
          >
              { 
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.Typography} variant='subtitle2' gutterBottom>
                     {place.name}
                  </Typography>
                  <img 
                      className={classes.pointer} 
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png" 
                      } 
                      alt={place.name}  
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )    
              }
          </div>

        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
