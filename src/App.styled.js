import styled from "styled-components";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const AppStyle = styled.div`
  width: 1300px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const ArroLeft = styled(FaRegArrowAltCircleLeft)`
  overflow: visible;
  fill: black;
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const ArroRight = styled(FaRegArrowAltCircleRight)`
  overflow: visible;
  fill: black;
  background-color: white;
  margin-left: 400px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  left: 400px;
`;
