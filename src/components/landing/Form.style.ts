import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-template-rows: 1fr 0.5fr 1fr 2fr 1fr;
  row-gap: 1rem;
  justify-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem 0;
`;

export const Description = styled.p`
  color: #717171;
  font-size: 0.9rem;
  align-self: center;
`;

export const Input = styled.input`
  padding: 0 1rem;
  width: 80%;
  font-size: 1.5rem;
`;

export const TextArea = styled.textarea`
  width: 87%;
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  border-radius: 20px;
  background-color: #2a306a;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.5rem 4rem;
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #5c6586);
  }
`;
