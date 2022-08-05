import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a8c0ea;
  display: grid;
  place-items: center;
`;

export const ContentContainer = styled.div`
  width: 60%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 2rem auto;
  row-gap: 1rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  align-self: center;
  justify-self: center;
`;

export const AddBtn = styled.button`
  align-self: center;
  justify-self: end;
  cursor: pointer;
  border-radius: 20px;
  background-color: #2a306a;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;