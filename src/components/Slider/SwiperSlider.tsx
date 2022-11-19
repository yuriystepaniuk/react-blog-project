import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

type Props = {}

const SwiperSlider = (props: Props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            <SwiperSlide>
                <img src="images/autor.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="images/autor2.png" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSlider
