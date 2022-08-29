import { useState, useEffect } from "react";
import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
function GenerateMap(props) {
    let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
    //props : Latitude, Longitude, Text
    var latitude = props.latitude;
    var longitude = props.longitude;
    var text = props.text;
    console.log(latitude);
    console.log(longitude);
    console.log(text);
    // <GenerateMap
    //     text={jsonData.address}
    //     latitude={jsonData.latitude}
    //     longitude={jsonData.longitude}
    //     key={jsonData.mlsnumber}
    // ></GenerateMap>
    useEffect(() => {
        var container = L.DomUtil.get("myMap");
        if (container != null) { container._leaflet_id = null; }
        var map = L.map("myMap").setView([latitude, longitude], 12);
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken: "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
            }
        ).addTo(map);
        L.Marker.prototype.options.icon = DefaultIcon;
        var marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(text).openPopup();
    });
    return (
        <div id="myMap"></div>
    );
}
export default GenerateMap;