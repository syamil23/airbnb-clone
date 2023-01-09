import React from 'react';
import './home.css';
import hotel from '../../src/hotels/tabanan1.JPG';
import hotel1 from '../../src/hotels/tabanan2.JPG';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Navigation, Pagination,} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Tabanan () {
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
    <img src={hotel1} className='card-img'/>
    </SwiperSlide>
    <SwiperSlide>
    <img src={hotel} className="card-img" />
    </SwiperSlide>
    
    </Swiper>
    <div className='card-info-flex'>
    <h3 className='card-title'>Tabanan</h3>
    <div className='card-rating'>
    <StarRateRoundedIcon /> 
    <p>4.9</p>
    </div>
    </div>

    <p style={{marginTop: 0 , color: 'gray'  }}>Container House</p>
    <p style={{marginTop: 0 , color: 'gray'  }}>23-26 Jan</p>
    <p className='cost' style={{marginTop: 0}}>RM1505 night</p>
    
    </div>

  );
}

export default Tabanan;