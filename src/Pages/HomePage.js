import ListingGrid from '../Components/ListingGrid.js';
import { useState, useEffect } from "react";

function HomePage() {
  const[listings]=useState([]);
  const[grids]=useState([]);
  
  useEffect( ()=>{
      fetch('http://localhost:8000/api/allListings',{
        method:'GET',
        mode: 'cors',
        cache: 'no-cache'})
        .then(res => { return res.json(); })
        .then(data => {
          var dataArray=Array.from(data['listings']); //important
          dataArray.map(function(item){
            listings.push({
              "mlsnumber":item['mlsnumber'],
              "price":item['price'],
              "address":item['address'],
              "latitude":item['latitude'],
              "longitude":item['longitude'],
              "bedrooms":item['bedrooms'],
              "washrooms":item['washrooms']
            });
          });
        }).catch(err => console.error(err));
        
        listings.map((item)=>{
          grids.push(<ListingGrid 
            key={item.mlsnumber}
            mlsnumber={item.mlsnumber} 
            price={item.price} 
            address={item.address} 
            latitude={item.latitude} 
            longitude={item.longitude} 
            bedrooms={item.bedrooms} 
            washrooms={item.washrooms}
            />);
          });
 },[listings]);
    
    return (
      <div>
      {grids}
      </div>
      )
    }
    
    export default HomePage;