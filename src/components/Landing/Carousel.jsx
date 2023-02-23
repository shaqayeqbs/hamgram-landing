import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./Carousel.module.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
// import UserImg from "../../../public/images/sarmo.jpg";

const Carousel = ({ data, profileImage }) => {
  const users = [
    {
      id: "1",
      username: "ghazal_scarfs",
      image: "ghazaljpg.jpg",

      comment:
        "من همیشه از تک تک آموزش و مشاوره های همگرام بهره بردم و تو مسیر کسب و کارم استفاده کردم. برای تک تک اعضای تیم همگرام آرزوی موفقیت دارم.",
    },
    {
      id: "2",
      username: "havva.scarff",
      image: "havva.jpg",
      comment:
        "همگرام از نظر اینکه کسب و کار اینترنتی رو از بیس توضیح میده برای من خیلی روشنگرانه بود و باعث شد خیلی حرفه ای تر روند کارم رو پیش ببرم",
    },
    {
      id: "3",
      username: "sarmo_scarf",
      image: "sarmo.jpg",
      comment:
        "همگرام جایی که جلوی تصمیمات اشتباهی که ممکنه هر کسب و کاری رو زمین بزنه میگیره، به جرات میتونم بگم خیلی تو کارشون متخصص هستن و فقط کافیه اصول کسب و کاری که بهت میگن رو اجرا کنی.",
    },
    {
      id: "4",
      username: "eyvoon_ceramic",
      image: "eyvoon.jpg",
      comment:
        "همگرام جوانب مختلف کسب و کار رو به خوبی میشناسه و با زبان ساده بیان میکنه، با همگرام پایه های بیزینسم رو ساختم و دیدی بدست آوردم که تو سخت ترین چالش ها بهترین تصمیم رو بگیرم.",
    },
  ];
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
        {users.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classes.section}>
              <div className={classes.gradientWrapper}>
                <img
                  src={`/images/${item.image}`}
                  alt="profile photo"
                  className={classes.maincircle}
                />
              </div>
              <h4 dir="ltr">{item.username}</h4>
              <p>{item.comment}</p>
              {/* <div className={classes.flexContainer}>
                <div>نرخ رشد هفتگی</div>
                <span>
                  ٪۱۲
                  <AiOutlineUp />
                </span>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
