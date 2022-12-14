import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import * as Api from "../../api/api";
import {
  Container,
  Card,
  CardTitle,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitBtn,
  LinkBtn,
} from "./AuthForm.style";

interface AuthValues {
  email: string;
  password: string;
}

interface Response {
  message: string;
  token: string;
}

const initialValues: AuthValues = { email: "", password: "" };

function AuthPage() {
  const navigate = useNavigate();

  const [isRegisterPage, setIsRegisterPage] = useState(false);

  const registerMutation = useMutation(
    (data: AuthValues) => Api.post<Response, AuthValues>("/users/create", data),
    {
      onSuccess: (data) => {
        alert(data.message);
        setIsRegisterPage(false);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  const loginMutation = useMutation(
    (data: AuthValues) => Api.post<Response, AuthValues>("/users/login", data),
    {
      onSuccess: (data) => {
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigate("/");
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("이메일을 다시 확인해 주세요.")
        .required("이메일을 입력해 주세요."),
      password: Yup.string()
        .min(8, "비밀번호는 8자 이상입니다.")
        .required("비밀번호를 입력해 주세요."),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (isRegisterPage) {
        registerMutation.mutate(values);
      } else {
        loginMutation.mutate(values);
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Container>
      <Card>
        <CardTitle>{isRegisterPage ? "회원가입" : "로그인"}</CardTitle>
        <Form onSubmit={formik.handleSubmit}>
          <InputContainer>
            <Label>EMAIL</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="이메일을 입력하세요"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </InputContainer>
          <InputContainer>
            <Label>PASSWORD</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </InputContainer>
          <SubmitBtn type="submit" disabled={!(formik.isValid && formik.dirty)}>
            {isRegisterPage ? "회원가입" : "로그인"}
          </SubmitBtn>
        </Form>
        <LinkBtn type="button" onClick={() => setIsRegisterPage((cur) => !cur)}>
          {isRegisterPage ? "로그인 하러가기" : "회원가입 하러가기"}
        </LinkBtn>
      </Card>
    </Container>
  );
}

export default AuthPage;
