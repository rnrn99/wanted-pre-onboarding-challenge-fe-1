import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, QueryClient } from "react-query";
import {
  FormContainer,
  Title,
  Description,
  Input,
  TextArea,
  SubmitBtn,
} from "./Form.style";
import { ContentType } from "./LandingPage";

interface FormProps {
  selectedTodo: ContentType | null;
  onClose: () => void;
}

interface Response {
  data: ContentType;
}

interface TodoValues {
  title: string;
  content: string;
}

interface UpdataValues extends TodoValues {
  id: string;
}

const initialValues: TodoValues = { title: "", content: "" };

const createTodos = async (data: TodoValues) => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const result: Response = await res.json();
  return result;
};

const updateTodos = async (dataToSubmit: UpdataValues) => {
  const { title, content, id } = dataToSubmit;
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ title, content }),
  });
  const result: Response = await res.json();
  return result;
};

function Form({ onClose, selectedTodo }: FormProps) {
  const queryClient = new QueryClient();

  const createMutation = useMutation(createTodos, {
    onSuccess: (data) => {
      onClose();
      alert("todo를 추가했습니다.");
      queryClient.invalidateQueries("getTodos");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const updateMutation = useMutation(updateTodos, {
    onSuccess: (data) => {
      onClose();
      alert("todo를 수정했습니다.");
      queryClient.invalidateQueries("getTodos");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required("제목을 입력해 주세요."),
      content: Yup.string().required("내용을 입력해 주세요"),
    }),
    onSubmit: async (values) => {
      if (!!selectedTodo) {
        const dataToSubmit = Object.assign(values, { id: selectedTodo.id });
        updateMutation.mutate(dataToSubmit);
      } else {
        createMutation.mutate(values);
      }
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Todo</Title>
      <Description>제목과 내용을 적어주세요</Description>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder={!!selectedTodo ? selectedTodo.title : "Title"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      <TextArea
        id="content"
        name="content"
        placeholder={!!selectedTodo ? selectedTodo.content : "content"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
      />
      <SubmitBtn type="submit" disabled={!(formik.isValid && formik.dirty)}>
        제출하기
      </SubmitBtn>
    </FormContainer>
  );
}

export default Form;
