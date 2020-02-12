import Posts from "../components/posts";
import Authentication from "../components/authentication";



const App = () => {
  return (
    <React.Fragment>
        <Authentication />
        <Posts />
    </React.Fragment>
  );
};
export default App;
