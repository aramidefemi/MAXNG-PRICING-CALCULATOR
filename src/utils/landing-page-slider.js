   import React, { Component } from "react";
   import {AppSectionButton,AppSectionForm,AppSectionImg,AppSectionH4,AppSectionParagraph} from "../components/section/section";
   import digitalboards from '../assets/assets/Landingpage/digitalboards.png'; 
   import mAds from '../assets/assets/Landingpage/MADs.png'; 
   import pAds from '../assets/assets/Landingpage/Programmaticads.png'; 

   var content = [
   {
      left: [
          <AppSectionH4 text='Digital Boards' />,
          <AppSectionParagraph text='Sleek low profile that can be wall or floor mounted
                            includes batteries and power electronics all in one
                            small enclosure. With our PRO-ad tool, you can reach
                            your chosen audiene of specific demography across
                            multiple devices at your preferred location' />,
          <AppSectionButton link='/welcome' text='learn more' />
      ],
      right: [
        <AppSectionImg image={digitalboards} />
      ]
    }    
    ,{
      right: [
          <AppSectionH4 text='Programatic Ads' />,
          <AppSectionParagraph text='Sleek low profile that can be wall or floor mounted
                            includes batteries and power electronics all in one
                            small enclosure. With our PRO-ad tool, you can reach
                            your chosen audiene of specific demography across
                            multiple devices at your preferred location' />,
          <AppSectionButton link='/welcome' text='learn more' />
      ],
      left: [
        <AppSectionImg image={pAds} />
      ]
    }    
     , {
      left: [
          <AppSectionH4 text='Mobile Ads' />,
          <AppSectionParagraph text='Sleek low profile that can be wall or floor mounted
                            includes batteries and power electronics all in one
                            small enclosure. With our PRO-ad tool, you can reach
                            your chosen audiene of specific demography across
                            multiple devices at your preferred location' />,
          <AppSectionButton link='/welcome' text='learn more' />
      ],
      right: [
        <AppSectionImg image={mAds} />
      ]
    }
  ]

  export default content;