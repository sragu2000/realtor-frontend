import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage.js'
import SingleListing from '../Pages/SingleListing.js'

const Ourroutes = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="singleListing/:mlsNumber" element={<SingleListing/>}/>
        </Routes>
      </BrowserRouter>
      );

      //Need to study the "routing parameters"
}

export default Ourroutes;