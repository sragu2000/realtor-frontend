import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleListing() {
  const { mlsNumber } = useParams();
  const [jsonData, setJsonData]=useState({});
  useEffect(()=>{
    fetch("URL/"+mlsNumber,{method:'GET',mode: 'cors',cache: 'no-cache'})
    .then(response => {
        if (response.status === 200) {return response.json();}
        else {console.log('Backend Error..!');console.log(response.text());}
    })
    .then(data => {
        setJsonData(data);
    })
    .catch(() => {console.log("Network connection error");});
  },[])
  //useState with varibles
    //address
    //price
    //bedrooms
    //washrooms

  //fetch call
  //sending this mls number as URL query parameter
  
  //sample response
    //{
    //   "id":1,
    //   "mlsnumber":"W5715268",
    //   "price":"$739,000 ",
    //   "address":"#G8 -284 MILL RD, Toronto, Ontario ",
    //   "latitude":"43.6375647",
    //   "longitude":"-79.5824898",
    //   "bedrooms":"2 + 1",
    //   "washrooms":"2"
    // }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header" align="center">{jsonData.mlsnumber}</div>
        <div className="card-body">
          <div className="row mt-4">
            <div className="col-md-3">Address</div>
            <div className="col-md-9">{jsonData.address}</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">Bedrooms</div>
            <div className="col-md-9">{jsonData.bedrooms}</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">Washrooms</div>
            <div className="col-md-9">{jsonData.washrooms}</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">Price</div>
            <div className="col-md-9">{jsonData.price}</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default SingleListing;
  
  //<h1>{mlsNumber}</h1>

  //card
    //list
    //row
    //label
