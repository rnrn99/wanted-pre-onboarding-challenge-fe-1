import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a8c0ea;
`;

export const AuthContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const Card = styled.div`
  width: 30%;
  height: 50%;
  display: grid;
  grid-template-rows: 1fr 4fr 0.5fr;
  row-gap: 1rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const CardTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  align-self: center;
  justify-self: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 0.5rem;
`;

export const InputContainer = styled.div`
  width: 70%;
  justify-self: center;
  display: grid;
  grid-template-rows: 1rem auto;

  align-items: center;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  height: 3.5rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 50px;
`;

export const SubmitBtn = styled.button`
  background-color: #2a306a;
  color: #fff;
  width: 70%;
  height: 3.5rem;
  align-self: center;
  justify-self: center;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #5c6586);
  }
`;

export const LinkBtn = styled.button`
  color: #2a306a;
  text-decoration: underline;
  cursor: pointer;
`;
