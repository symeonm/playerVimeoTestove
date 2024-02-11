import ReactPlayer from "react-player";
import videos from "../video.json";
import { VideoList } from "./VideoList.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArroLeft, ArroRight } from "../App.styled";

export const VimeoList = () => {
  // const swiper = useSwiper();
  return (
    <VideoList
      modules={[Navigation, Pagination]}
      slidesPerView={4}
      navigation={{ nextEl: ".nextBtn", prevEl: ".prevBtn", clickable: true }}
      pagination={{ clickable: true }}
    >
      {videos.map((video, idx) => (
        <SwiperSlide key={idx}>
          <ReactPlayer
            url={video}
            controls
            width="300px"
            heigth="300px"
          ></ReactPlayer>
        </SwiperSlide>
      ))}

      <div
        style={{
          position: "relative",
          width: "470px",
          bottom: "30px",
          left: "420px",
        }}
      >
        <ArroLeft className="prevBtn" />

        <ArroRight className="nextBtn" />
      </div>
    </VideoList>
  );
};
