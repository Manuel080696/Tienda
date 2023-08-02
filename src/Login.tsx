import { useState } from "react";
import { GetLogin } from "./services/services.mts";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const notify = () => toast.success("Send data OK");
  const errorBar = (errorLogin: string) => toast.error(errorLogin);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await GetLogin({ username, password });
      console.log(data);
    } catch (error: any) {
      setErrorLogin(error.message);
      errorBar(errorLogin);
    } finally {
      setUsername("");
      setPassword("");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Log In</h2>
        <section className="form__container">
          <section className="form__group">
            <input
              type="text"
              id="username"
              value={username}
              className="form__input"
              placeholder=" "
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form__label">Username:</label>
            <span className="form__line"></span>
          </section>
          <section className="form__group">
            <input
              type="password"
              id="password"
              value={password}
              className="form__input"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form__label">Password:</label>
            <span className="form__line"></span>
          </section>
          <input
            type="submit"
            value="Send"
            className="form__submit"
            onClick={notify}
          />
          <p className="form__paragraph">
            You don't have an account?
            <Link to="/register" className="form__link">
              Sign up
            </Link>
          </p>
        </section>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </form>
    </>
  );
};

export default Login;
