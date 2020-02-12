import UserProvider from "../components/providers/userprovider";
import UserDash from "../components/userprofile";


const User = () => {
  return (
    <UserProvider>
      <UserDash />
    </UserProvider>
  );
};
export default User;
