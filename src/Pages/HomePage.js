import ListingGrid from '../Components/ListingGrid.js';
import { useState, useEffect } from "react";

function HomePage() {
  const[listings]=useState([{"mlsnumber":"W5715268","price":"$739,000 ","address":"#G8 -284 MILL RD, Toronto, Ontario ","latitude":"43.6375647","longitude":"-79.5824898","bedrooms":"2 + 1","washrooms":"2","created_at":null,"updated_at":null}]);
  /*  
  useEffect(
    () => {
      fetch('http://localhost:8000/api/allListings',{
        method:'GET',
        mode: 'cors',
        cache: 'no-cache'})
      .then(res => { return res.json(); })
      .then(data => {
        var dataArray=Array.from(data['listings']); //important
        dataArray.map(function(listing){
          listings.push({
            key:listing.id,
            mlsnumber:listing.mlsnumber, 
            price:listing.price, 
            address:listing.address, 
            latitude:listing.latitude, 
            longitude:listing.longitude, 
            bedrooms:listing.bedrooms, 
            washrooms:listing.washrooms
          });
        });
      }).catch(err => console.error(err));
    },[]
  );
*/

  return (
    <div>
    {
      listings.map(function(item){
        return <ListingGrid 
            key={item.mlsnumber}
            mlsnumber={item.mlsnumber} 
            price={item.price} 
            address={item.address} 
            latitude={item.latitude} 
            longitude={item.longitude} 
            bedrooms={item.bedrooms} 
            washrooms={item.washrooms}
        />;
      })
    }
    </div>
  )
  }
  
  export default HomePage;