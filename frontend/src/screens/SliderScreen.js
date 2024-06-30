import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default function SliderScreen() {
  return (
    <div>
      <Container className="mt-3 mb-3">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/SlideCard/s-1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <Button href="#" variant="outline-primary" size="lg">
                Đặt hàng
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/SlideCard/s-2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <Button variant="outline-primary" size="lg">
                Đặt hàng
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/SlideCard/s-3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Button variant="outline-primary" size="lg">
                Đặt hàng
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/SlideCard/s-4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Button variant="outline-primary" size="lg">
                Đặt hàng
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/SlideCard/s-5.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Button variant="outline-primary" size="lg">
                Đặt hàng
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/SlideCard/s-6.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Button variant="outline-primary" size="lg">
                Đặt hàng
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
