import { useState } from "react";
import {
  Container,
  ContentContainer,
  ListContainer,
  Title,
  AddBtn,
} from "./LandingPage.style";
import Modal from "../modal/Modal";
import Form from "./Form";

function LandingPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <ContentContainer>
          <ListContainer>
            <Title>🌱 Todos 🌱</Title>
            <AddBtn onClick={() => setOpen(true)}>+ Todo 추가하기</AddBtn>
          </ListContainer>
          <ListContainer></ListContainer>
        </ContentContainer>
      </Container>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <Form />
        </Modal>
      )}
    </>
  );
}

export default LandingPage;
