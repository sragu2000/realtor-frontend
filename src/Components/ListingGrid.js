import React, { useState } from "react";
import { Link } from "react-router-dom";
function ListingGrid(props) { //props is an object as a parameter
    return (
        <div className="card border-dark" style={{margin:'1%'}}>
            <div className="card-header" align="center">{props.mlsnumber}</div>
            <div className="card-body">
                <ul style={{'listStyle':'none'}}>
                    <li>Address: {props.address}</li>
                    <li>Price: {props.price}</li>
                    <li>Bedrooms: {props.bedrooms}</li>
                    <li>Washrooms: {props.washrooms}</li>
                </ul>
            </div>
            <div className="card-footer" align="center">
                <Link to={"singleListing/"+props.mlsnumber}>View Property</Link>
            </div>
        </div>
    );
}
export default ListingGrid; //necessary to be implemented

//props.studentName object's field
//props.studentEmail object's field
/*
{
props.id
props.latitude
props.longitude
}

*/