import React, { Component } from "react";

import AppSearchbar from "../organisms/searchbar";
import AppNavbar  from "../organisms/navbar";
import AppProductRow from "../organisms/product-row";
import AppProduct from "../molecules/product";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

class AppProductDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
         <AppNavbar />
          <div className="slice">
            <div className="container mt-5">
                  <div className="row">
                    <div className='col-md-5'>
                      <AppProduct link="#" image={img2} height='400px' />
                    </div>  
                     <div className='col-md-7'>
                    </div>
                  </div>
            </div>
          </div>          
          <div className="slice">
            <div className="container">
              <p className="text-sm strong-600"> Popular Destinations </p>
                <AppProductRow columns="4" 
                   items={
                    [
                      {link:'/search',image:img2},
                      {link:'/search',image:img1},
                      {link:'/search',image:img2}, 
                      {link:'/search',image:img1}
                    ]
                   } 
                />
            </div>
          </div>
        
      </div>
    );
  }
}

export default  AppProductDisplayPage;
