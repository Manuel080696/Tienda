import { useState } from "react";
import { GetRegister } from "./services/services.mts";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Register.css";
const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const notifyOk = () => toast.success("User register OK");
  const errorBar = (errorRegister: string) => toast.error(errorRegister);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await GetRegister();
      console.log(data);
    } catch (error: any) {
      setErrorRegister(error.message);
      errorBar(errorRegister);
    } finally {
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Register</h2>
        <section className="form__container">
          <section className="form__group">
            <input
              type="text"
              id="name"
              value={name}
              className="form__input"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form__label">Firstname:</label>
            <span className="form__line"></span>
          </section>
          <section className="form__group">
            <input
              type="text"
              id="lastname"
              value={lastname}
              className="form__input"
              placeholder=" "
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="form__label">Lastname:</label>
            <span className="form__line"></span>
          </section>
          <section className="form__group">
            <input
              type="email"
              id="email"
              value={email}
              className="form__input"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form__label">email:</label>
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
            onClick={notifyOk}
          />
          <p className="form__paragraph">
            Are you already a user?
            <Link to="/login" className="form__link">
              Login
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

export default Register;
