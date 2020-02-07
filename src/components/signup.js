import {
  signInWithGoogle,
  createNewUserWithEmailAndPass
} from "../firestoreapi/functios";
import { useRef } from "react";

const SignUp = () => {
  const refEmail = useRef(null);
  const refPass = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const email = refEmail.current.value;
    const pass = refPass.current.value;
    createNewUserWithEmailAndPass(email, pass).catch(err =>
      console.log(err)
    );
  };
  const handleGoogleSignIn = e => {
    e.preventDefault()
    signInWithGoogle()
  }
  return (
    <React.Fragment>
      <form className="sign-up" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" ref={refEmail} required/>
        <input type="password" placeholder="password" ref={refPass}  required/>
        <input type="submit" value="Sign Up" />
      </form>
      <span>🆚</span>
      <form className='sign-up' onSubmit={handleGoogleSignIn}>
        <input type='submit' value='Sign Up With Google' />
      </form>
      <style jsx>
        {`
          .sign-up {
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
          span {
            display: block;
            width: 100%;
            text-align: center;
            margin: 20px auto;
            font-size: 2em;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default SignUp;
