import Posts from "../components/posts";
import Authentication from "../components/authentication";
import UserProvider from "../components/providers/userprovider";


const App = () => {
  return (
    <UserProvider>
        <Authentication />
        <Posts />
    </UserProvider>
  );
};
export default App;
