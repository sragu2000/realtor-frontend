import ListingGrid from '../Components/ListingGrid.js';
import { useState, useEffect } from "react";

function HomePage() {
  const[listings,setListings]=useState([]);

  useEffect(()=>{

      fetch('http://localhost:8000/api/allListings',{
      method:'GET',
      mode: 'cors',
      cache: 'no-cache'})
      .then(res => { return res.json(); })
      .then(data => {
        setListings(data['listings']);
        }).catch(err => console.error(err));

    },[]);

    return (<>
    {
      listings.map((item)=>{
        return (<ListingGrid 
          key={item.mlsnumber}
          mlsnumber={item.mlsnumber} 
          price={item.price}
          address={item.address} 
          latitude={item.latitude} 
          longitude={item.longitude} 
          bedrooms={item.bedrooms} 
          washrooms={item.washrooms}
          />);
        })
      }
      </>);
  }
  
  export default HomePage;