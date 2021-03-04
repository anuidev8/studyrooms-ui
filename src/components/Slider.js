
import Slider from 'react-slick'
import '../styles/slider.css'


const SimpleSlider = ({children}) =>{

      const settings = {
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive:[
          {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        ]
     
      }  
        return(
        <div className="slider-wrapper">
        <Slider {...settings}>

              {children}

        </Slider>
      </div>

        )

}

export default SimpleSlider