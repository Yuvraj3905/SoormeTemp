import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class Slideshow extends React.Component {
  // styles for slideshow and images
  // Here I have created an object named styles which contains img object and containing styles
  styles = {
    img: {
      width: "100%",
      height: "65vh",
      margin: "auto",
    },
  };
  render() {
    const handleOnDragStart = (e) => e.preventDefault();
    return (
      <div>
        <AliceCarousel
          mouseTrackingEnabled
          infinite="true"
          autoPlay
          autoHeight
          fadeOutAnimation
        >
          <img
            style={this.styles.img}
            alt="carousel"
            src="https://images.unsplash.com/photo-1510017098667-27dfc7150acb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
          <img
            style={this.styles.img}
            alt="carousel"
            src="https://cdn.cnn.com/cnnnext/dam/assets/210203182335-best-perfume-for-women-lead.jpg"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
          <img
            style={this.styles.img}
            alt="carousel"
            src="https://planetfashion.imgix.net/img/app/shopmedia/production/1/10-56-4186.jpg?w=992&auto=format"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
          <img
            style={this.styles.img}
            alt="carousel"
            src="https://images.freeclues.com/assets/images/coupons/FreeClues_9615382c895de85d954157255b181fd4.jpg"
            onDragStart={handleOnDragStart}
            className="yours-custom-class"
          />
          <img
            style={this.styles.img}
            alt="carousel"
            src="https://www.globaldesi.in/media/homepage_content/m/-/m-global-desi-summer-sale-online-new.png"
          />
        </AliceCarousel>
      </div>
    );
  }
}

export default Slideshow;
