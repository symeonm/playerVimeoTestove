import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const VideoList = styled(Swiper)`
  list-style: none;
  margin: 0;
  padding: 0;

  position: relative;

  .swiper-pagination {
    position: relative;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-wrapper {
    gap: 10px;
  }
`;
