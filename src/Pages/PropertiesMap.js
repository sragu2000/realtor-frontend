import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import L from 'leaflet/dist/leaflet';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function PropertiesMap() {
    let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, });
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/allListings', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        })
            .then(res => { return res.json(); })
            .then(data => {
                setListings(data['listings']);
            }).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (p) {
            setLatitude(p.coords.latitude);
            setLongitude(p.coords.longitude);
        }, function (err) {
            console.warn("Error Code" + err.code + ": " + err.message);
            alert("Check the console");
        });

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
        marker.bindPopup("Current Location").openPopup();

        listings.forEach((e)=>{
            L.Marker.prototype.options.icon = DefaultIcon;
            var marker = L.marker([e.latitude, e.longitude]).addTo(map);
            marker.bindPopup(e.mlsnumber).openPopup();
        });
    });
    return (
        <>
            <NavBar></NavBar>
            <div id="myMap" style={{ height: "100vh" }}>
                {
                }
            </div>
        </>
    );

}

export default PropertiesMap;