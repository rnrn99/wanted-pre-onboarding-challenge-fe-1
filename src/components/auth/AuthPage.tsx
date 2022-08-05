import { useState } from "react";
import {
  Container,
  AuthContainer,
  Card,
  CardTitle,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitBtn,
  LinkBtn,
} from "./AuthForm.style";

function AuthPage() {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  return (
    <Container>
      <AuthContainer>
        <Card>
          <CardTitle>{isRegisterPage ? "회원가입" : "로그인"}</CardTitle>
          <Form>
            <InputContainer>
              <Label>EMAIL</Label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="이메일을 입력하세요"
              />
            </InputContainer>
            <InputContainer>
              <Label>PASSWORD</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </InputContainer>
            <SubmitBtn type="submit">
              {isRegisterPage ? "회원가입" : "로그인"}
            </SubmitBtn>
          </Form>
          <LinkBtn
            type="button"
            onClick={() => setIsRegisterPage((cur) => !cur)}
          >
            회원가입 하러가기
          </LinkBtn>
        </Card>
      </AuthContainer>
    </Container>
  );
}

export default AuthPage;
