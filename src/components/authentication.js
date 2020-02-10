import CurrentUser from "./currentuser";
import SignOut from "./signout";
import SignInAndSignUp from "./signandsignupform";
import { useContext } from "react";
import { UserContext } from "./providers/userprovider";

const Authentication = () => {
  const user = useContext(UserContext)
  const currentUser = (
      <React.Fragment>
        <div className='main'>
            <CurrentUser />
            <SignOut />
        </div>
        <style jsx>
            {
                `
                .main {
                    width: 50%;
                    margin: auto;
                    border: 1px solid green;
                    padding: 10px;
                }
                `
            }
        </style>
      </React.Fragment>
  );
  const signUpAndSignIn = (
    <React.Fragment>
      <SignInAndSignUp />
    </React.Fragment>
  );
  return (
    <React.Fragment>{user ? currentUser : signUpAndSignIn}</React.Fragment>
  );
};
export default Authentication;
