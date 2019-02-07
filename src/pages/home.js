import React, { Component } from "react";
import { connect } from "react-redux";

import AppSearchbar from "../components/organisms/searchbar";  

import wave from "../assets/wave.svg";

 


class AppHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

      {/* <AppNavbar /> */}

        <section
          class="slice slice--offset-top main-header"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div class="container">
            <div class="row">
            
              <div class="col-12">
                <h2 class="heading display-4 strong-400">
                The Fastest Way  <br /> to Deliver in Your City
                </h2>
                <h3 class=" strong-400">
                Integrate the MAX API into your <br /> existing systems  and let us do the rest. Get started today 
                </h3>
                <div className="action-place">
                 <AppSearchbar />
 </div>
            </div>
            </div>
{/* 
            <div className="row destinations">
              <div className="col-md-4" />
              <div className="col-md-8">
                <p className="text-sm strong-600"> Popular Destinations </p>
                    {/* <AppProductRow columns="4" 
                       items={
                        [
                          {link:'/search',image:img2},
                          {link:'/search',image:img1},
                          {link:'/search',image:img2},
                          {link:'/search',image:img1}
                        ]
                       } 
                    /> *
              </div>
            </div>
          */}
          </div> 
        </section>
      </div>
    );
  }
}

export default AppHomePage;
