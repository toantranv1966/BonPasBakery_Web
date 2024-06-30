import React from 'react';
// import 'tw-elements';
import Button from 'react-bootstrap/Button';

export default function Carousel() {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={1}
          aria-label="Slide 1"
        />
        <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to={2}
          aria-label="Slide 1"
        />
      </div>
      {/* Inner */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {/* Single item */}
        <div className="carousel-item active relative float-left w-full">
          <img
            src="./images/SlideCard/s-2.png"
            className="block w-full"
            alt="Motorbike Smoke"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <Button
              className="mb-3"
              href="#"
              variant="outline-primary"
              size="lg"
            >
              Đặt hàng
            </Button>
            <h1 class="text-5xl font-bold text-muted mb-3">
              FULLFILL YOUR HAPPINESS
            </h1>
          </div>
        </div>
        {/* Single item */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="./images/SlideCard/s-4.jpg"
            className="block w-full"
            alt="Mountaintop"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <Button
              className="mb-3"
              href="#"
              variant="outline-primary"
              size="lg"
            >
              Đặt hàng
            </Button>
            <h1 class="text-5xl font-bold text-muted mb-3">
              FULLFILL YOUR HAPPINESS
            </h1>
          </div>
        </div>
        {/* Single item */}
        <div className="carousel-item relative float-left w-full">
          <img
            src="./images/SlideCard/s-6.jpg"
            className="block w-full"
            alt="Woman Reading a Book"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <Button
              className="mb-3"
              href="#"
              variant="outline-primary"
              size="lg"
            >
              Đặt hàng
            </Button>
            <h1 class="text-5xl font-bold text-muted  mb-3">
              FULLFILL YOUR HAPPINESS
            </h1>
          </div>
        </div>
      </div>
      {/* Inner */}
      {/* Controls */}
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
