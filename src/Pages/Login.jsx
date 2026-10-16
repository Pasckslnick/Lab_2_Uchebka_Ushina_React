import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./Context/UserContext";
import "./css/Auth.css";


export default function Login() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>Добро пожаловать!</h1>
      <p>Пожалуйста, войдите в систему, чтобы продолжить.</p>
      <form className="login-form">
        <label htmlFor="username">Имя пользователя:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Электронная почта:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" name="password" required />

        <button
          type="submit"
          onClick={() => {
            if (
              !document.getElementById("username").value ||
              !document.getElementById("email").value ||
              !document.getElementById("password").value
            ) {
              alert("Пожалуйста, заполните все поля.");
              return;
            } else {
              setUser({
                isAuthenticated: true,
                userData: {
                  username: document.getElementById("username").value,
                  email: document.getElementById("email").value,
                },
              });
              navigate("/home");
            }
          }}
        >
          Войти
        </button>

        <p1>Ещё нет учетной записи?</p1>
        <button type="button" onClick={() => navigate("/register")}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
