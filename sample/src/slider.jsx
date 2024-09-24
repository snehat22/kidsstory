import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.webp'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg1}/>
        <Carousel.Caption>
          <h3>KeralaMagic
            
          </h3>
          <p>Kerala, a land of enchantment and a haven for the soul</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Pictureframe imageUrl={bg3}/>
        <Carousel.Caption>
          <h3>Kerala</h3>
          <p>God's Own Country</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Item interval={500}>

        </Carousel.Item>
        <Pictureframe imageUrl={bg2}/>
        <Carousel.Caption>
          <h3>River</h3>
          <p>Let Kerala's beauty become the backdrop of your fondest memories.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;