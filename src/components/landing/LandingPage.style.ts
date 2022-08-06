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
  max-height: 80vh;
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

export const TodoChipContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TodoChip = styled.div`
  width: 90%;
  height: 3rem;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  align-items: center;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 0 auto 1rem auto;
`;

export const TodoTitle = styled.h1`
  padding: 0 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ModifyBtn = styled.button`
  color: #3e67ff;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  color: #ff3e3e;
  cursor: pointer;
`;

export const Card = styled.div`
  grid-row-start: 3;
  justify-self: center;
  width: 90%;
  height: 80%;
  display: grid;
  grid-template-rows: 5rem 0.5rem auto;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1rem;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid #2a306a;
  height: 1px;
  width: 90%;
`;

export const CardContent = styled.p`
  padding: 1rem;
  align-self: start;
`;
