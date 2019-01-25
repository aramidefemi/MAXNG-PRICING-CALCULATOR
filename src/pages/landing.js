import React, { Component } from "react";
import { connect } from "react-redux";

import AppSearchbar from "../organisms/searchbar"; 
import AppNavbar  from "../organisms/navbar";
import AppProductRow from "../organisms/product-row";

import wave from "../assets/wave.svg";
import people_travel from "../assets/explore-1.svg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg"; 


class AppLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

      <AppNavbar />

        <section
          class="slice slice--offset-top main-header"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-5 pl-0">
                <img src={people_travel} className="illustration" />
              </div>
              <div class="col-7">
                <h2 class="heading display-4 strong-400">
                  Plan ahead fantastic travel experiences
                </h2>
                <div className="action-place">
                <AppSearchbar />
 </div>
            </div>
            </div>

            <div className="row destinations">
              <div className="col-md-4" />
              <div className="col-md-8">
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
        </section>
      </div>
    );
  }
}

export default AppLandingPage;
