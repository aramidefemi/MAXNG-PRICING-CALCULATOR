import React, { Component } from "react";

import AppSearchbar from "../organisms/searchbar";
import AppProduct from "../molecules/product"
import AppNavbar  from "../organisms/navbar";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

class AppSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
         <AppNavbar />
        <div className="slice">
          <div className="container mt-5 pt-5">
               <AppSearchbar />
          </div>
        </div>

        
          <div className="container">
            <div className="row" >
                  <div className="col-md-4">
                    {/*<AppSearchFilters />*/}
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-4">
                       <AppProduct  image={img1} />
                      </div>   
                      <div className="col-md-4">
                       <AppProduct  image={img2} />
                      </div>   
                      <div className="col-md-4">
                        <AppProduct  image={img1} />
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default  AppSearchPage;
