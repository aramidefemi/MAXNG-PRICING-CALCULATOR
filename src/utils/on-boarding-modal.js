import React from "react";
import {
  AppSectionButton,
  AppSectionInput,
  AppSectionUsername,
  AppSectionForm,
  AppSectionImg,
  AppSectionActionButton,
  AppSectionH4,
  AppSectionH4Input,
  AppSectionParagraph,
  AppSectionTextarea,
  AppSectionCalendar,
  AppSectionP,
  AppSectionRadio
} from "../components/section/section";

var content = {
  done: () => (
    <div className="mt-4">
      <AppSectionUsername />
      <AppSectionH4 text={"You are half way done!!"} />
      <AppSectionP
        text={"To complete the process, kindly choose one of the options below"}
      />
      <div className='row'>
      <div className='box-center'>
      <AppSectionRadio
        name="how_to_proceed"
        actionType={"UPDATE_FORM"}
        options={[
          {
            checked: true,
            value: "create_account",
            label: "I want to continue filling more information myself"
          },
          {
            checked: false,
            value: "talk_to",
            label: "I need to communicate with a professional"
          }
        ]}
      />
      </div> 
      </div> 
      <AppSectionActionButton
        actionType={{
          type: "OPEN_MODAL",
          payload: "account",
          claim: {
            state: 'onBoardingState'
          }
        }}
        css="btn-lx mt-0"
        text="Open Account"
        name="how_to_proceed"
      />
    </div>
  ),
  account: () => (
    <div className="mt-4">
      <AppSectionUsername />
      <AppSectionH4 text={"A profile has been created for you!"} />
      <AppSectionP
        text={"Kindly key in your passwords to complete your account creation"}
      />
        <div className='row'>
      <div className='col-md-6 box-center'>
      <AppSectionInput
        type="text"
        style="boxxed"
        actionType={"UPDATE_FORM"}
        placeholder="Type Password"
        name="password"
        css="my-0"
      />
       
      <AppSectionInput
        type="text"
        style="boxxed"
        actionType={"UPDATE_FORM"}
        placeholder="Confirm Password"
        name="confirm_password"
        css="my-0"
      />
            <AppSectionRadio
        name="agree_terms"
        actionType={"UPDATE_FORM"}
        options={[
          {
            checked: true,
            value: "acccept",
            label: "I agree to terms & conditions of Zabuni"
          }
        ]}
      />
      </div>
      </div>
      <AppSectionActionButton
        actionType={{
          type: "OPEN_MODAL",
          payload: "account",
          claim: {
            state: 'onBoardingState'
          }
        }}
        mainCss='mt-4'
        css="btn-lx mt-0"
        text="Open Account"
        name="how_to_proceed"
      />
    </div>
  )
};

export default content;
