import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination,Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouseItem from './CarouseItem';
SwiperCore.use([Autoplay]);
export default function CarouselHome() {
  return (
    <div className='container mx-auto mb:px-5 md:px-24 lg:px-24'>
      {/* comment test git */}
        <Swiper
        modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      module ={[Autoplay, Pagination, Navigation]}
      
      >
        
      <SwiperSlide><CarouseItem imgSrc="https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/06/1655621770_117_Hinh-Anh-Nhung-Chau-Cay-Canh-Dep-Nhat-Qua-Dat.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
      <SwiperSlide><CarouseItem imgSrc="https://bonsaimirai.com/sites/default/files/styles/full/public/news/hero_2.jpg?itok=YTXAkowP" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
      <SwiperSlide><CarouseItem imgSrc="https://cdn.tgdd.vn/Files/2021/12/27/1407130/cay-bonsai-la-gi-y-nghia-phong-thuy-cua-tung-dang-cay-bonsai-202112271203354699.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
    </Swiper>
    </div>
  )
}
