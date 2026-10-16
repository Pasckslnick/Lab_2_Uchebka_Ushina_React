import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./Context/UserContext";
import "./css/Auth.css";

export default function register() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  return (
    <div className="register-container">
      <h1>Регистрация</h1>
      <p>Пожалуйста, заполните форму ниже, чтобы создать учетную запись.</p>
      <form className="register-form">
        <label htmlFor="username">Имя пользователя:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Электронная почта:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirm-password">Подтвердите пароль:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <button
          type="submit"
          onClick={() => {
            if (
              !document.getElementById("username").value ||
              !document.getElementById("email").value ||
              !document.getElementById("password").value ||
              !document.getElementById("confirm-password").value
            ) {
              alert("Пожалуйста, заполните все поля.");
              return;
            } else if (
              document.getElementById("password").value !==
              document.getElementById("confirm-password").value
            ) {
              alert("Пароли не совпадают. Пожалуйста, попробуйте еще раз.");
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

        <p1>Уже есть учетная запись?</p1>
        <button type="button" onClick={() => navigate("/login")}>
          Войти
        </button>
      </form>
    </div>
  );
}
