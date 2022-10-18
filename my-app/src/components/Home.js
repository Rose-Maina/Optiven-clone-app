import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="slides"
          src="https://www.wellingtonequestrianrealty.com/wp-content/uploads/2020/11/Wellington-Farm-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="slides"
          src="https://media1.riverfronttimes.com/riverfronttimes/imager/u/zoom/37102960/horse-power-01.jpg?cb=1648286430"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="slides"
          src="https://i.pinimg.com/564x/f6/9f/c2/f69fc2e3b4cd319524809fe6ee55e6e1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="slides"
          src="https://s3.us-east-2.amazonaws.com/havenlifestyles/2215638-1.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="slides"
          src="https://horsepropertiesinternational.com/filedata/pgallery/14978twilight___front.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;