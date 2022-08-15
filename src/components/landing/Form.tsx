import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import * as Api from "../../api/api";
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

const updateTodos = async (dataToSubmit: UpdataValues) => {
  const { title, content, id } = dataToSubmit;
  const data = { title, content };
  return Api.put<Response, TodoValues>(`/todos/${id}`, data);
};

function Form({ onClose, selectedTodo }: FormProps) {
  const createMutation = useMutation(
    (data: TodoValues) => Api.post<Response, TodoValues>("/todos", data),
    {
      onSuccess: (data) => {
        onClose();
        alert("todo를 추가했습니다.");
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  const updateMutation = useMutation(updateTodos, {
    onSuccess: (data) => {
      onClose();
      alert("todo를 수정했습니다.");
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
