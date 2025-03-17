import { useEffect, useRef } from "react";
import Header from "./components/Header";
import { productsData } from "./utils/DUMMY_DATA";
import "./AirpodsSlider.css";

const AirpodsSlider = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const backButtonRef = useRef(null);

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    const seeMoreButtons = document.querySelectorAll(".seeMore");
    const backButton = backButtonRef.current;

    const showSlider = (type) => {
      if (!carousel || !listHTML) return;

      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      let items = listHTML.children;
      if (type === "next") {
        listHTML.appendChild(items[0]); // Move first item to the end
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]); // Move last item to the beginning
        carousel.classList.add("prev");
      }

      setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    nextButton.addEventListener("click", () => showSlider("next"));
    prevButton.addEventListener("click", () => showSlider("prev"));

    seeMoreButtons.forEach((button) => {
      button.addEventListener("click", () => {
        carousel.classList.remove("next", "prev");
        carousel.classList.add("showDetail");
      });
    });

    backButton.addEventListener("click", () => {
      carousel.classList.remove("showDetail");
    });

    // Cleanup function to remove event listeners
    return () => {
      nextButton.removeEventListener("click", () => showSlider("next"));
      prevButton.removeEventListener("click", () => showSlider("prev"));
      backButton.removeEventListener("click", () => {
        carousel.classList.remove("showDetail");
      });

      seeMoreButtons.forEach((button) => {
        button.removeEventListener("click", () => {
          carousel.classList.remove("next", "prev");
          carousel.classList.add("showDetail");
        });
      });
    };
  }, []);

  return (
    <div className="contaimer">
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {productsData.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt={item.introduceTopic} />
              <div className="introduce">
                <div className="title">{item.introduceTitle}</div>
                <div className="topic">{item.introduceTopic}</div>
                <div className="des">{item.introduceDescription}</div>
                <button className="seeMore">SEE MORE &#8599;</button>
              </div>
              <div className="detail">
                <div className="title">{item.detailTitle}</div>
                <div className="des">{item.detailDescription}</div>
                <div className="specifications">
                  {item.specifications.map((spec, index) => (
                    <div key={index}>
                      <p>{spec.title}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="checkout">
                  <button>ADD TO CART</button>
                  <button>CHECKOUT</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" ref={prevButtonRef}>
            &#x2190;
          </button>
          <button id="next" ref={nextButtonRef}>
            &#x2192;
          </button>
          <button id="back" ref={backButtonRef}>
            See All &#8599;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirpodsSlider;

// Video => https://www.youtube.com/watch?v=hfGz5AgHT-E&list=LL&index=10
