import { useParams } from "react-router-dom";

function SingleListing() {
  const { mlsNumber } = useParams();
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
      
    </div>
    );
  }
  
  export default SingleListing;
  
  //<h1>{mlsNumber}</h1>

  //card
    //list
    //row
    //label
