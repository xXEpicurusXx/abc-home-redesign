import React from 'react'
import "./Campus.css";
import gallery_1 from '../../assets/0000544995.jpg'
import gallery_2 from '../../assets/0000547206.jpg'
import gallery_3 from '../../assets/0000548595.jpg'
import gallery_4 from '../../assets/0000547183.jpg'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from "react-scroll";




const Campus = () => {

  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>

        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>

        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>

        <Link to="testimonials"
          smooth={true}
          offset={-180}
          duration={500}
          className='btn dark-btn'
          >
            探検する<img src={white_arrow} alt="" /></Link>      
    </div>
  )
}

export default Campus
