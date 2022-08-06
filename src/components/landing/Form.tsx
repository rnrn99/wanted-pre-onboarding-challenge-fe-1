import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
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
  onClose: () => void;
}

interface Response {
  data: ContentType;
}

interface TodoValues {
  title: string;
  content: string;
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

function Form({ onClose }: FormProps) {
  const createMutation = useMutation(createTodos, {
    onSuccess: (data) => {
      console.log(data);
      onClose();
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
      createMutation.mutate(values);
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
        placeholder="Title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      <TextArea
        id="content"
        name="content"
        placeholder="content"
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
