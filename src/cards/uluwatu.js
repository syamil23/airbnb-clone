import React from 'react';
import './home.css';
import hotel2 from '../../src/hotels/sidemen.JPG';
import hotel3 from '../../src/hotels/uluwatu.JPG';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Navigation, Pagination,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function uluwatu () {
  return (
    <div className='card-box'>
    <Swiper
    modules={[Navigation, Pagination,]}
    loop={false}
    spaceBetween={10}
    slidesPerView={1}
    mousewheel={true}
    pagination
    style={{height:256.97, width:270.5, color: "#fff"}}

    >
    <SwiperSlide>
    <img src={hotel2} className='card-img'/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={hotel3} className="card-img" />
    </SwiperSlide>
    </Swiper>
    <div className='card-info-flex'>
    <h3 className='card-title'>Uluwatu</h3>
    <div className='card-rating'>
    <StarRateRoundedIcon /> 
    <p>4.5</p>
    </div>
    </div>

    <p style={{marginTop: 0 , color: 'gray'  }} >Gorgeous Cabin for Surfer</p>
    <p style={{marginTop: 0 , color: 'gray'  }}>23-26 Jan</p>
    <p className='cost' style={{marginTop: 0}}>RM1,450 night</p>
    
    </div>

  );
}

export default uluwatu;