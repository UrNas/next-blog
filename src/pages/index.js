import Posts from "../components/posts";
import SignInAndSignUp from "../components/signandsignupform";


const App = () => {
  return (
    <React.Fragment>
      <SignInAndSignUp />
      <Posts />
    </React.Fragment>
  );
};
export default App;
