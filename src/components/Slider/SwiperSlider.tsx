import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

export default () => {
    return (
        <Swiper
        
            spaceBetween={10}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="images/autor.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/autor2.png" alt="" /></SwiperSlide>
        </Swiper>
    )
}

