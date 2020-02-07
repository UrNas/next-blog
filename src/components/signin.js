import { signInWithEmailAndPassword } from "../firestoreapi/functios";
import { useRef } from "react";

const SignIn = () => {
  const refEmail = useRef(null)
  const refPass = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    const email = refEmail.current.value
    const pass = refPass.current.value
    signInWithEmailAndPassword(email, pass)
  }
  return (
    <div>
      <form className="sign-in" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required ref={refEmail}/>
        <input type="password" placeholder="password" required ref={refPass}/>
        <input type='submit' value='Sign In' />
      </form>
      <style jsx>
        {`
          .sign-in {
            width: 50%;
            margin: auto;
          }
          input {
            display: block;
            width: 98%;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            border-bottom: 1px solid #829fd9;
            margin-bottom: 5px;
            font-size: 1.2em;
            padding: 5px;
          }
          input[type='submit'] {
            display: block;
            width: 100%;
            border: none;
            background: #d9722e;
            padding: 10px;
            font-size: 1.1em;
            cursor: pointer;
          }
          input:focus {
            outline: none;
          }
          input[type='submit']:focus {
            outline: none;
          }
          input[type='submit']:hover {
            background: #f0a03e;
          }
        `}
      </style>
    </div>
  );
};
export default SignIn;
