import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, QueryClient } from "react-query";
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
  AuthBtn,
  Card,
  CardTitle,
  Line,
  CardContent,
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

interface TodosResponse {
  data: ContentType[];
}

interface TodoResponse {
  data: ContentType;
}

const getTodos = async () => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos`, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  const result: TodosResponse = await res.json();
  return result;
};

const getTodoById = async (id: string) => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  const result: TodoResponse = await res.json();
  return result;
};

const deleteTodos = async (id: string) => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  const result = await res.json();
  return result;
};

function LandingPage() {
  const queryClient = new QueryClient();
  const navigate = useNavigate();
  const params = useParams();

  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState<ContentType[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ContentType | null>(null);
  const [selectedTodoId, setSelectedTodoId] = useState(params.id || "");

  useQuery("getTodos", getTodos, {
    enabled: !!localStorage.getItem("token"),
    onSuccess: (result) => {
      setTodos(result.data);
    },
  });

  const { data } = useQuery(
    ["getTodo", selectedTodoId],
    () => getTodoById(selectedTodoId),
    {
      enabled: !!selectedTodoId,
    },
  );

  const deleteMutation = useMutation(deleteTodos, {
    onSuccess: (data) => {
      alert("Todo를 정상적으로 삭제했습니다.");
      navigate("/");
      queryClient.invalidateQueries("getTodos");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const readHandler = (id: string) => {
    setSelectedTodoId(id);
    navigate(`/${id}`);
  };

  const modifyHandler = (item: ContentType) => {
    setOpen(true);
    setSelectedTodo(item);
  };

  const deleteHandler = (id: string) => {
    deleteMutation.mutate(id);
  };

  const modalCloseHandler = () => {
    setOpen(false);
    setSelectedTodo(null);
  };

  const AuthBtnClickHandler = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      alert("로그아웃 되었습니다.");
    }
    navigate("/auth");
  };

  useEffect(() => {
    setSelectedTodoId(params.id || "");
  }, [params]);

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
                  <TodoChip key={item?.id}>
                    <TodoTitle onClick={() => readHandler(item.id)}>
                      {item?.title}
                    </TodoTitle>
                    <ModifyBtn onClick={() => modifyHandler(item)}>
                      수정
                    </ModifyBtn>
                    <DeleteBtn onClick={() => deleteHandler(item.id)}>
                      삭제
                    </DeleteBtn>
                  </TodoChip>
                ))}
            </TodoChipContainer>
          </ListContainer>
          <ListContainer>
            <AuthBtn onClick={AuthBtnClickHandler}>
              {localStorage.getItem("token") ? "로그아웃" : "로그인"}
            </AuthBtn>
            {data?.data && (
              <Card>
                <CardTitle>{data.data?.title}</CardTitle>
                <Line />
                <CardContent>{data.data?.content}</CardContent>
              </Card>
            )}
          </ListContainer>
        </ContentContainer>
      </Container>
      {open && (
        <Modal open={open} onClose={modalCloseHandler}>
          <Form onClose={modalCloseHandler} selectedTodo={selectedTodo} />
        </Modal>
      )}
    </>
  );
}

export default LandingPage;
