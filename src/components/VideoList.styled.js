import styled from "styled-components";

import { Swiper } from "swiper/react";

export const VideoList = styled(Swiper)`
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  position: relative;

  .swiper-pagination {
    position: relative;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
