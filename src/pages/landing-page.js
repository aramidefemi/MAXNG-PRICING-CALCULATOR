import React, { Component } from "react";
import { connect } from "react-redux";
import wave from "../assets/wave.svg";
import people_travel from "../assets/explore-1.svg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import { Icon } from "semantic-ui-react";
// import Autosuggest from 'react-autosuggest';
import Autocomplete from "react-google-autocomplete";

class AppLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="header">
          <nav class="navbar navbar-expand-lg navbar--bold  navbar-transparent navbar-inverse ">
            <div class="container navbar-container">
              <a class="navbar-brand" href="index.html">
                <img
                  src="assets/images/logo/logo-1-a.png"
                  class="d-none text d-lg-inline-block"
                  alt="HH"
                />
                <img
                  src="assets/images/logo/logo-1-a.png"
                  class="d-lg-none text"
                  alt="HH"
                />
              </a>

              <div class="d-inline-block">
                <button
                  class="navbar-toggler hamburger hamburger-js hamburger--spring"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar_main"
                  aria-controls="navbarsExampleDefault"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner" />
                  </span>
                </button>
              </div>

              <div
                class="collapse navbar-collapse align-items-center justify-content-end"
                id="navbar_main"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Become a partner
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      About Us
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="navbar-nav ml-lg-auto">
                  <li class="nav-item">
                    <a
                      href="documentation/getting-started/introduction.html"
                      class="nav-link"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <section
          class="slice slice--offset-top main-header"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div class="container">
            <div class="row">
              <div class="col-5">
                <img src={people_travel} className="illustration" />
              </div>
              <div class="col-7">
                <h2 class="heading display-4 strong-400">
                  Plan ahead fantastic travel experiences
                </h2>
                <div className="row action-place">
                  <div className="col-md-10">
                    <div className="row form-place">
                      <div className="search col-md-8 b-r">
                        <label> Search </label>
                        <Icon name="search" size="small" className="form" />

                        <Autocomplete
                          placeholder="Find Beautiful Experinces"
                          onPlaceSelected={place => {
                            console.log(place);
                            alert(place.formatted_address);
                          }}
                        />
                        <Icon name="dropdown" size="small" />
                      </div>

                      <div className="filter col-md-4">
                        <label> Filter </label>
                        <Icon name="filter" size="small" className="form" />
                        <input placeholder="By Period" />
                        <Icon name="dropdown" size="small" />
                      </div>
                    </div>
                  </div>
                  <div className="search col-md-2">
                    <button className="btn btn-block">Search</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row destinations">
              <div className="col-md-4" />
              <div className="col-md-8">
                <p className="text-sm strong-600"> Popular Destinations </p>

                <div className="row">
                  <div className="col-md-3">
                    <div
                      className="destination-card-xs"
                      style={{ backgroundImage: `url(${img1})` }}
                    >
                      <p>Mount Patti, Lokoja, NG</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="destination-card-xs"
                      style={{ backgroundImage: `url(${img2})` }}
                    >
                      <p>Mount Patti, Lokoja, NG</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="destination-card-xs"
                      style={{ backgroundImage: `url(${img1})` }}
                    >
                      <p>Mount Patti, Lokoja, NG</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="destination-card-xs"
                      style={{ backgroundImage: `url(${img2})` }}
                    >
                      <p>Mount Patti, Lokoja, NG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AppLandingPage;
