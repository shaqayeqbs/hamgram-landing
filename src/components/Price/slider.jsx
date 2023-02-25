import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// import required modules
import { Navigation } from "swiper";

export default function Slider({ price }) {
  const [swiper, setSwiper] = useState(null);

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };
  return (
    <div>
      <Swiper onSwiper={setSwiper} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="myData container">
            <div className="center"> رایگان (۷ روزه)</div>
            <div className="">
              {" "}
              <div className="myData flex">
                <strong>نمایش دیتای پروفایل </strong>
                <div className="">۳۰ روز</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>نمایش دیتای رقبا</strong>
                <div className="">۳۰ روز</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>امکان افزودن رقیب به پروفایل</strong>
                <div className="">۳ رقیب</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>تحلیل پست</strong>
                <div className="bignumber">✔️</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>محاسبه اینگیجمنت</strong>
                <div className="bignumber">✔️</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong className="width">
                  مشاهده تاریخچه دنبال کنندگان و دنبال شوندگان جدید
                </strong>
                <div className="bignumber">✔️</div>
              </div>
              <button
                className="btn btn-primary button btn-mob"
                type="submit"
                value="Get Started"
                role="button"
              >
                <a href="http://dashboard.hamgramco.ir/dashboard/receiving-app?myData=peyment">
                  رایگان شروع کنید
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myData container">
            <div className="center"> بیزینس</div>
            <div className="">
              {" "}
              <div className="myData flex">
                <strong>نمایش دیتای پروفایل </strong>
                <div className="">۳۰ روز</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>نمایش دیتای رقبا</strong>
                <div className="">۳۰ روز</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>امکان افزودن رقیب به پروفایل</strong>
                <div className="">۳ رقیب</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>تحلیل پست</strong>
                <div className="bignumber">✔️</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>محاسبه اینگیجمنت</strong>
                <div className="bignumber">✔️</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong className="width">
                  مشاهده تاریخچه دنبال کنندگان و دنبال شوندگان جدید
                </strong>
                <div className="bignumber">✔️</div>
              </div>
              <button
                className="btn btn-primary button btn-mob"
                type="submit"
                value="Get Started"
                role="button"
              >
                <a href="http://dashboard.hamgramco.ir/dashboard?myData=peyment">
                  {digitsEnToFa(price.toLocaleString())}
                  <span className="margin"> تومان</span>
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myData container">
            <div className="center"> پرایم</div>
            <div className="">
              {" "}
              <div className="myData flex">
                <strong>نمایش دیتای پروفایل </strong>
                <div className="">۹۰ روز</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>نمایش دیتای رقبا</strong>
                <div className="">۹۰ روز</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>امکان افزودن رقیب به پروفایل</strong>
                <div className="">۷ رقیب </div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>تحلیل پست</strong>
                <div className="bignumber">✔️</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong>محاسبه اینگیجمنت</strong>
                <div className="bignumber">✔️</div>
              </div>
              <div className="myData flex">
                {" "}
                <strong className="width">
                  مشاهده تاریخچه دنبال کنندگان و دنبال شوندگان جدید
                </strong>
                <div className="bignumber">✔️</div>
              </div>
              <button
                className="btn btn-primary button btn-mob"
                type="submit"
                value="Get Started"
                role="button"
              >
                به زودی
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <button
          onClick={nextSlide}
          className="arrowRight r6"
          style={{ right: "16%" }}
        >
          <div>
            <MdKeyboardArrowRight />
          </div>
        </button>
        <button
          onClick={prevSlide}
          className="arrowLeft l6"
          style={{ left: "16%" }}
        >
          <div>
            <MdKeyboardArrowLeft />
          </div>
        </button>
      </div>
    </div>
  );
}
