import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled("div")(
  () => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  & div{
    text-align: center;
    & button{
      margin-top: 10px;
    }
  }
`);

const CustomTypography = styled(Typography)(
  () => `
  font-weight: bold;
`);

const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <LoginContainer>
      <div>
        <CustomTypography>This is an public route. Click on Login to continue...</CustomTypography>
        <Button onClick={() => {
          localStorage.setItem('token', 'Your api json web token')
          navigate('/')
        }} variant="contained" disableElevation>
          Login
        </Button>
      </div>
    </LoginContainer>
  );
};

export default Login;
