import React from "react";
import Slideshow from "./Slideshow";
import ExtraCard from "./ExtraCard";
import "./MainPage.css";
import { ExtraSlideshow } from "./ExtraSlideshow";

const MainPage = () => {

  // CONTENT TO SHOW IN CARDS PLACED AT BOOTTOM OF THE HOME PAGE
  const content1 = {
    logo: "D",
    image:
      "https://images.unsplash.com/photo-1536087785043-34ac3b6dfdff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=335&q=80",
    title: "Duke Fashion",
    heading: "Duke Fashion Week",
    description: "Buy Duke products at Flat 20% discount in this Festival Season",
  };
  const content2 = {
    logo: "O",
    image:
      "https://images.unsplash.com/photo-1527019116805-6830bec33ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Summer Octave",
    heading: "Octave Stock Clearing sale",
    description: "Buy 2 and getFlat 30% off on Octave products. Buy 3 Octave pants at 30% off",
  };
  const content3 = {
    logo: "R",
    image:
      "https://www.ukmodels.co.uk/wp-content/uploads/2017/12/modelling-for-male.jpg",
    title: "Raymond",
    heading: "Raymond Fashion",
    description: "Buy Raymond Jeans at 899/- , Shirts at 599/- and exclusive offers on all products during summer sale ",
  };
  return (
    <div>
      {/* SLIDESHOW COMPONENT */}
      <Slideshow />
      {/* MAIN PAGE COMPONENTS */}
      <ExtraSlideshow />
      <div className="cardDiv" style={{ marginTop: "30px" }}>
        <div>
          <ExtraCard
            image={content1.image}
            title={content1.title}
            description={content1.description}
            logo={content1.logo}
            heading={content1.heading}
          />
        </div>
        <div>
          <ExtraCard
            image={content2.image}
            title={content2.title}
            description={content2.description}
            logo={content2.logo}
            heading={content2.heading}
          />
        </div>
        <div>
          <ExtraCard
            image={content3.image}
            title={content3.title}
            description={content3.description}
            logo={content3.logo}
            heading={content3.heading}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
