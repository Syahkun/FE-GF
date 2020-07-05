import React from "react";
import Carousel from "react-multi-carousel";
// import { Container } from "react-bootstrap";
// import { img } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = (props) => {
  const changeRouterTerdekat = async () => {
    if (props.getHandleLIstTerdekat) {
      props.getHandleLIstTerdekat();
    } else {
      await props.history.replace("/Jarak-terdekat");
    }
  };
  const changeRouter = async (program, promo) => {
    if (props.getListByProgram) {
      props.getListByProgram(program, promo);
    } else {
      await props.history.replace("/program" + program || "/promo" + promo);
    }
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 4500,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 3,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      <div
        className="div-caroures"
        value="Jarak terdekat"
        onClick={() => changeRouterTerdekat()}
      >
        <img
          src={require("../images/terdekat.jpg")}
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur ">Terdekat</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value="parade diskon"
        onClick={() => changeRouter("parade diskon", "")}
      >
        <img
          src={require("../images/placeholder-restaurant-2by1.jpg")}
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">Parade Diskon!</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value={true}
        onClick={() => changeRouter("", true)}
      >
        <img
          src={require("../images/promosi.jpeg")}
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">Promosi</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value="pasti untung"
        onClick={() => changeRouter("pasti untung", "")}
      >
        <img
          src={require("../images/pasti-untung.jpeg")}
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">Pasti Untung</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value="berjuta menunya"
        onClick={() => changeRouter("berjuta menunya", "")}
      >
        <img
          src={require("../images/berjuta-menunya.jpeg")}
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">Berjuta Menunya</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value="grabmart"
        onClick={() => changeRouter("grabmart", "")}
      >
        <img
          src={require("../images/placeholder-restaurant-2by1.jpg")}
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">GrabMart</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value="grabchicken all in one"
        onClick={() => changeRouter("grabmart", "")}
      >
        <img
          src="https://dtlscuh0h90jk.cloudfront.net/seller/photos/8647_382.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">GrabChicken All in One</p>
        <p className="shadow"></p>
      </div>
      <div
        className="div-caroures"
        value="menu siap masak"
        onClick={() => changeRouter("menu siap masak", "")}
      >
        <img
          src="https://dtlscuh0h90jk.cloudfront.net/seller/photos/8647_382.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="text-fitur">Menu Siap Masak</p>
        <p className="shadow"></p>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
