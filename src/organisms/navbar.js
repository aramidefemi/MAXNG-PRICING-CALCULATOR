import React, { Component } from "react";
import AppNavbarItems from "../molecules/nav-items";

class AppNavbar extends Component {

	  render() {
    return (
    	        <div class="header">
          <nav class="navbar navbar-expand-lg navbar--bold  navbar-transparent navbar-inverse ">
            <div class="container navbar-container">
              <a class="navbar-brand" href="index.html">
              HH
         {/*       <img
                  src="assets/images/logo/logo-1-a.png"
                  class="d-none text d-lg-inline-block"
                  alt="HH"
                />*/}
               
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
           <AppNavbarItems items={[
           		{link : '#', title:  'Become A Partner'},
           		{link : '#', title:  'About Us'},
           		{link : '#', title:  'contact Us'},
           		{link : '#', title:  'Holiday Experinces'},
    	 ]} />
           <AppNavbarItems innerCss="ml-lg-auto" items={[]} />
                
              </div>
            </div>
          </nav>
        </div>)
	}
}

export default AppNavbar;