import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sampleMap from "../Images/map.png";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';
import MapV2 from "../Components/MapV2";
import Spinner from 'react-bootstrap/Spinner';
function SingleListing() {
  const navigate = useNavigate();
  // localStorage.setItem("likes","");
  const { mlsNumber } = useParams();
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/singleListing?mlsNumber=" + mlsNumber, { method: 'GET', mode: 'cors', cache: 'no-cache' })
      .then(response => {
        if (response.status === 200) { return response.json(); }
        else { console.log('Backend Error..!'); console.log(response.text()); }
      })
      .then(data => {
        setJsonData(data);
      })
      .catch(() => { console.log("Network connection error"); });
  }, []);
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container mt-2">
        <div className="card border border-dark">
          <div className="card-header bg-dark text-white" align="center">
            <div className="row align-items-center">
              <div className="col-md-8 fw-bolder">
                {"MLS Number : " + jsonData.mlsnumber}
              </div>
              <div className="col-md-4 mt-2">
                <Link to="/home"><div className="btn btn-primary form-control">Home</div></Link>
              </div>
            </div>

          </div>
          <div className="card-body">
            <div className="row ">
              <div className="col-md-7">
                <center>
                  <div>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active ">
                          <img src="https://image.ibb.co/k0wVTm/profile_pic.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://image.ibb.co/jOzeUG/luke_1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://image.ibb.co/cBZPww/bane_1.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </center>

              </div>
              <div className="col-md-5">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th scope="row">Address</th>
                        <td><a href={"https://www.google.com/maps/search/?api=1&query=" + jsonData.latitude + "%2C" + jsonData.longitude}>{jsonData.address}</a></td>
                      </tr>
                      <tr>
                        <th scope="row">Bedrooms</th>
                        <td>{jsonData.bedrooms}</td>
                      </tr>
                      <tr>
                        <th scope="row">Washrooms</th>
                        <td>{jsonData.washrooms}</td>
                      </tr>
                      <tr>
                        <th scope="row">Price</th>
                        <td>{jsonData.price}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ "overflow": "auto", "height": "40vh" }}>
                    {
                      (jsonData.latitude) ? <MapV2
                        latitude={jsonData.latitude}
                        longitude={jsonData.longitude}
                        text={jsonData.address}
                      ></MapV2>
                        :
                        <center><Spinner animation="grow" /></center>
                    }
                  </div>
                  <div className="btn btn-warning form-control mt-2" >Request</div>
                  {/* <button onClick={
                    ()=>{
                      var text=localStorage.getItem("likes");
                      localStorage.setItem("likes",text+","+jsonData.mlsnumber);
                      console.log(jsonData.mlsnumber)}
                    } className="btn btn-danger form-control mt-2" >Add to Favourites</button> */
                  }

                  <a className="btn btn-success form-control mt-2" href={"https://wa.me/?text=" + window.location.href}>Share</a>
                  <Link to={"/inquiry/" + jsonData.mlsnumber}>
                    <button className="btn btn-primary form-control mt-2" >Enquiry</button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleListing;
