import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
    <div className="login">
      <h4>WeStagram</h4>
      <div className="inputWrap">
        <input
          className="user"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="password" type="password" placeholder="비밀번호" />
      </div>
      <button className="loginBtn" onClick={goToMain} type="button">
        로그인
      </button>
      <div className="forgetpassword">
        <span>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
