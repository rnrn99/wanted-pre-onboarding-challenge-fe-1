import { useState } from "react";
import { useQuery } from "react-query";
import {
  Container,
  ContentContainer,
  ListContainer,
  Title,
  AddBtn,
  TodoChipContainer,
  TodoChip,
  TodoTitle,
  ModifyBtn,
  DeleteBtn,
} from "./LandingPage.style";
import Modal from "../modal/Modal";
import Form from "./Form";

export interface ContentType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface Response {
  data: ContentType[];
}

const getTodos = async () => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos`, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  const result: Response = await res.json();
  return result;
};

function LandingPage() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState<ContentType[]>([]);

  useQuery("getTodos", getTodos, {
    enabled: !!localStorage.getItem("token"),
    onSuccess: (result) => {
      setTodos(result.data);
    },
  });

  return (
    <>
      <Container>
        <ContentContainer>
          <ListContainer>
            <Title>🌱 Todos 🌱</Title>
            <AddBtn onClick={() => setOpen(true)}>+ Todo 추가하기</AddBtn>
            <TodoChipContainer>
              {!!todos &&
                todos.map((item) => (
                  <TodoChip key={item.id}>
                    <TodoTitle>{item.title}</TodoTitle>
                    <ModifyBtn>수정</ModifyBtn>
                    <DeleteBtn>삭제</DeleteBtn>
                  </TodoChip>
                ))}
            </TodoChipContainer>
          </ListContainer>
          <ListContainer></ListContainer>
        </ContentContainer>
      </Container>
      {open && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <Form onClose={() => setOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default LandingPage;
