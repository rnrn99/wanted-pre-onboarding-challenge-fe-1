import styled, { keyframes } from "styled-components";

const ModalOpacity = keyframes`
0% {
    opacity: 0;
  },
100% {
    opacity: 1;
  }
`;

export const Background = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  zindex: 2;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 30vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  zindex: 3;
  animation: ${ModalOpacity} 0.3s ease-out;
`;
