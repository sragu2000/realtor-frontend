import React, { useState } from "react";
import { Link } from "react-router-dom";
import propertyImage from "../Images/home.jpg"
// command to install fontawesome
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// and use 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faBed,faBath, faDollarSign } from '@fortawesome/free-solid-svg-icons'

function ListingGrid(props) { //props is an object as a parameter
    return (
        <div className="col">
            
            <div className="card">
                <div className="card-header bg-dark text-white text-center">{"MLS Number : " + props.mlsnumber}</div>
                <img src={propertyImage} className="card-img-top" alt="property-image"></img>
                <div className="card-body ">

                    {/* Design 1 */}
                    <div className="row border-bottom">
                        <div className="col-md-2"><FontAwesomeIcon icon={faMapLocationDot} /></div>
                        <div className="col-md-10">
                            <a href={"https://www.google.com/maps/search/?api=1&query=" + props.latitude + "%2C" + props.longitude} target="_blank">{props.address}</a>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-md-2"><FontAwesomeIcon icon={faBed}/></div>
                        <div className="col-md-10">{props.bedrooms+" Bed Rooms"}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-md-2"><FontAwesomeIcon icon={faBath}/></div>
                        <div className="col-md-10">{props.washrooms+" Wash Rooms"}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={faDollarSign}/>
                        </div>
                        <div className="col-md-10">{props.price}</div>
                    </div>

                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="btn btn-outline-primary form-control">
                                <i className="fa-solid fa-comments"></i>&nbsp;
                                Enquiry
                            </a>
                        </div>
                        <div className="col">
                            <Link  to={}>
                                <div className="btn btn-outline-success form-control" >
                                    <i className="fa-solid fa-magnifying-glass-location"></i>&nbsp;
                                    Show
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListingGrid; //necessary to be implemented
