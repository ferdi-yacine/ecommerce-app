import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;

  @media screen and (max-width: 480px) {
    width: 80%;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Check = styled.span`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
`;

function Register() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleUnput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkPasswords = () => {
    if (password !== confirmPassword) {
      setError(() => true);
    } else {
      setError(() => false);
    }
  };

  console.log(inputs, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkPasswords();
    if (!error) {
      try {
        await publicRequest.post("/auth/register", { ...inputs, password });
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input
            placeholder="username"
            name="username"
            onChange={handleUnput}
          />
          <Input placeholder="email" name="email" onChange={handleUnput} />
          <Input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            value={confirmPassword}
            placeholder="confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              checkPasswords();
            }}
          />
          {password !== confirmPassword && (
            <Check>Passwords do not match!</Check>
          )}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
