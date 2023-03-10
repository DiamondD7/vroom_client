import React from "react";

import "../../styles/contentstyles.css";
import MainServices from "../Services/MainServices";
import AboutUsContent from "./AboutUsContent";
import AdvertiseContent from "./AdvertiseContent";
import AllFeedbacks from "./AllFeedbacks";
import ExperienceContent from "./ExperienceContent";
import FinanceContent from "./FinanceContent";
import RewardsContent from "./RewardsContent";
import ShopContent from "./ShopContent";
const MainContent = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <AdvertiseContent />;
      break;
    case "/shop":
      component = <ShopContent />;
      break;
    case "/rewards":
      component = <RewardsContent />;
      break;
    case "/experience":
      component = <ExperienceContent />;
      break;
    case "/aboutus":
      component = <AboutUsContent />;
      break;
    case "/finance":
      component = <FinanceContent />;
      break;
    case "/services":
      component = <MainServices />;
      break;
    case "/allfeedbacks":
      component = <AllFeedbacks />;
      break;
    default:
      console.log("Error in switch statement");
      break;
  }
  return (
    <div>
      <div className="content-container">{component}</div>
    </div>
  );
};

export default MainContent;
