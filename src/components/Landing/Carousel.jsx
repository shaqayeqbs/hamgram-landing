import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./Carousel.module.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Carousel = ({ data, profileImage }) => {
  return (
    <div className={classes.contaienr}>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className={classes.container}
      >
        <SwiperSlide>
          <div className={classes.section}>
            <div className={classes.gradientWrapper}>
              <img
                src="/images/people.png"
                alt="profile photo"
                className={classes.maincircle}
              />
            </div>
            <h4 dir="ltr">@username</h4>
            <p>
              در این قسمت نوشته ای دلخواه از طرف صاحب کسب و کار که برای ما ارسال
              کرده است قرار می گیرد.
            </p>
            <div className={classes.flexContainer}>
              <div>نرخ رشد هفتگی</div>
              <span>
                ٪۱۲
                <AiOutlineUp />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.section}>
            <div className={classes.gradientWrapper}>
              <img
                src="/images/people.png"
                alt="profile photo"
                className={classes.maincircle}
              />
            </div>
            <h4 dir="ltr">@dovomi</h4>
            <p>
              در این قسمت نوشته ای دلخواه از طرف صاحب کسب و کار که برای ما ارسال
              کرده است قرار می گیرد.
            </p>
            <div className={classes.flexContainer}>
              <div>نرخ رشد هفتگی</div>
              <span>
                ٪۱۲
                <AiOutlineUp />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.section}>
            <div className={classes.gradientWrapper}>
              <img
                src="/images/people.png"
                alt="profile photo"
                className={classes.maincircle}
              />
            </div>
            <h4 dir="ltr">@sevomi</h4>
            <p>
              در این قسمت نوشته ای دلخواه از طرف صاحب کسب و کار که برای ما ارسال
              کرده است قرار می گیرد.
            </p>
            <div className={classes.flexContainer}>
              <div>نرخ رشد هفتگی</div>
              <span>
                ٪۱۲
                <AiOutlineUp />
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
