import { signOutUser } from "../firestoreapi/functios";
const SignOut = () => {
  return (
    <React.Fragment>
      <div className="sign-out">
        <button onClick={signOutUser}>Sign Out</button>
      </div>
      <style jsx>
        {`
                    button {
                        display: block;
                        background: #d9722e;
                        width: 100%;
                        cursor: pointer;
                        margin-bottom: 10px;
                        padding: 10px;
                        font-size: 1em;
                      }
                      button:focus {
                        outline: none;
                    }
                    button:hover {
                        background: #f0a03e;
                    `}
      </style>
    </React.Fragment>
  );
};
export default SignOut;
