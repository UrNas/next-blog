import { useRef, useContext } from "react";
import {firestore} from '../config_firebase'
import {UserContext} from '../components/providers/userprovider'
import Authentication from '../components/authentication'
import Link from 'next/link'

const UserDash = () => {
  const user = useContext(UserContext);
  const refDisplayName = useRef();
  const handleSumit = e => {
    e.preventDefault();
    console.log("click me");
    console.log(user)
    const displayName = refDisplayName.current.value;
    firestore.doc(`users/${user.uid}`).update({ displayName });
  };
  return (
    <div>
      <div className="home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <Authentication />
      <div className="user-dash">
        <hr />
        <form onSubmit={handleSumit}>
          <input type="text" placeholder="display name" ref={refDisplayName} />
          <input type="file" placeholder="user profile photo" />
          <input type="submit" value="update" />
        </form>
      </div>
      <style jsx>
        {`
          .user-dash {
            width: 50%;
            margin: auto;
          }
          input {
            width: 100%;
            font-size: 1.2em;
            margin: 10px auto;
          }
          a {
            text-decoration: none;
            font-size: 1.7em;
            color: white;
          }
          .home {
            width: 7%;
            transform: skew(-15deg);
            background: black;
            margin-left: 15%;
            text-align: center;
          }
          .home:hover,
          a:hover {
            background: white;
            color: black;
          }
        `}
      </style>
    </div>
  );
};
export default UserDash;