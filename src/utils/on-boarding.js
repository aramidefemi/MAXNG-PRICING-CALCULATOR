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
  AppSectionRadio
} from "../components/section/section";
import digitalboards from "../assets/assets/Landingpage/digitalboards.png";
import store from "../store/store";

var nextStep = {
  type: "INCREASE_STEP", 
  claim: {
    state: 'onBoardingState'
  }
};

console.log(store);

const sectioned = () => (
  <div className="row">
    <div className="col-md-6">
      <AppSectionInput
        type="date"
        actionType={"UPDATE_FORM"}
        label="Start Date"
        name="start_date"
        
      />
    </div>
    <div className="col-md-6">
      <AppSectionInput
        type="date"
        actionType={"UPDATE_FORM"}
        label="End Date"
        name="end_date"
        
      />
    </div>
  </div>
);

var content = [
  {
    left: [
      <AppSectionH4Input
        text="Hi"
        actionType={"UPDATE_FORM"}
        placeholder={"type your name OR company name here"}
      />,
      <AppSectionParagraph text="Welcome to Zabuni. Thinking of reaching your audience using Out of Home platforms? Start your next outdoor campaign with Zabuni. We provide campaigns on digital board adverts, Taxi TV, mobile adversts and programaatic adverts to specific audiences. Just tell us your budget, the period of the campaign and  we will provide the best solution for you. " />,
      <AppSectionActionButton
        actionType={nextStep}
        name='username'
        css="btn-lx"
        text="Let’s start!"
      />
    ],
    right: [<AppSectionImg image={digitalboards} width={"50%"} />]
  },
  {
    left: [
      <AppSectionUsername />,
      <AppSectionH4 text={"What is your budget?"} />,
      <AppSectionParagraph text="Tell Us the planned out budget for your campaign. The aim is to kow what you can afford and help you in planning out the best and most affrdable campaing." />,
      <AppSectionInput
        type="text"
        actionType={"UPDATE_FORM"}
        label="Gross Budget"
        placeholder="₦700,000.00"
        name="budget"
      />,
      <AppSectionActionButton actionType={nextStep}  name="budget" css="btn-lx" text="Next" />
    ],
    right: [<AppSectionImg image={digitalboards} width={"50%"} />]
  },
  {
    left: [
      <AppSectionUsername />,
      <AppSectionH4 text={"What is the date?"} />,
      <AppSectionParagraph text="Tell Us the planned date for your campaign. The aim is to kow what youc an afford and help you in planning out the best and most affrdable campaing." />,
      sectioned(),
      <AppSectionActionButton actionType={nextStep}  name="start_date" css="btn-lx" text="Next" />
    ],
    right: [<AppSectionCalendar actionType={"UPDATE_FORM"} name="start_date" />]
  },
  {
    left: [
      <AppSectionUsername />,
      <AppSectionH4 text={"Choose your OOH Channels?"} />,
      <AppSectionParagraph text="Tell Us the planned date for your campaign. The aim is to kow what youc an afford and help you in planning out the best and most affrdable campaing." />,
      <AppSectionActionButton actionType={nextStep} name="channels" css="btn-lx" text="Next" />
    ],
    right: [
      <div className="react-calendar-2">
        <AppSectionRadio
          name="channels"
          actionType={"UPDATE_FORM"}
          options={[
            {
              checked: false,
              value: "Digital boards",
              label: "Digital boards"
            },
            {
              checked: false,
              value: "Programmatic Adverts",
              label: "Programmatic Adverts"
            }
          ]}
        />
      </div>
    ]
  },
  {
    left: [
      <AppSectionUsername />,
      <AppSectionH4 text={"Tell Us a bit about the campaign"} />,
      <AppSectionParagraph text="What is the campaign all about and who do you target to reach with your campaign." />,
      <AppSectionActionButton actionType={nextStep} name="title_of_campaign" css="btn-lx" text="Next" />
    ],
    right: [
      <div className="react-calendar">
      <div className="centered">
        <AppSectionInput
          type="text"
          actionType={"UPDATE_FORM"}
          placeholder="Title of campaign"
          name="title_of_campaign"
        />
        <AppSectionTextarea
          actionType={"UPDATE_FORM"}
          placeholder="Keep it Brief"
          name="desc_of_campaign"
        />
      </div>
      </div>
    ]
  },
  {
    left: [
      <AppSectionUsername />,
      <AppSectionH4 text={"Let us contact you"} />,
      <AppSectionParagraph text="Tell Us the planned date for your campaign. The aim is to kow what youc an afford and help you in planning out the best and most affrdable campaing." />,
      sectioned(),
      <AppSectionActionButton
        actionType={
          {
            type: 'OPEN_MODAL',
            payload: 'done',
            claim: {
              state: 'onBoardingState'
            }
          }
        }
        css="btn-lx"
        text="Submit"
        name="contact_person_number"
      />
    ],
    right: [
      <div className="react-calendar p-5">
        <div className="centered">
          <AppSectionInput
            type="number"
            actionType={"UPDATE_FORM"}
            label="Contact Person Phone Number"
            placeholder="type here.."
            name="contact_person_number"
          />
          <AppSectionInput
            type="email"
            actionType={"UPDATE_FORM"}
            label="Contact Person Email"
            placeholder="type here…"
            name="contact_person_email"
          />
          <AppSectionInput
            type="text"
            actionType={"UPDATE_FORM"}
            label="Campaign budget"
            placeholder="auto fill"
            name="budget"
            

          />
          <AppSectionInput
            type="text"
            actionType={"UPDATE_FORM"}
            label="Campaign Duration"
            placeholder="auto fill"
            name="duration"
            
          />
        </div>
      </div>
    ]
  }
];

export default content;
