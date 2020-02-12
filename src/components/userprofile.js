import { useRef, useContext } from "react";
import { firestore, storage } from "../config_firebase";
import { UserContext } from "../components/providers/userprovider";
import Authentication from "../components/authentication";
import Link from "next/link";

const UserDash = () => {
  const user = useContext(UserContext);
  const refDisplayName = useRef(null);
  const refPhotoFile = useRef(null);
  const handleSumit = e => {
    e.preventDefault();
    console.log("click me");
    console.log(user);
    const displayName = refDisplayName.current.value;
    const refUser = firestore.doc(`users/${user.uid}`);
    if (displayName) {
      refUser.update({ displayName });
      refDisplayName.current.value = "";
    }
    if (refPhotoFile) {
      const file = refPhotoFile.current.files[0];
      console.log(file.name, file.size, file.type);
      storage
        .ref("user-profiles")
        .child(`${user.uid}`)
        .child(`${file.name}`)
        .put(file)
        .then(resp => resp.ref.getDownloadURL())
        .then(photoURL => refUser.update({ photoURL }));
    }
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
          <input
            type="file"
            placeholder="user profile photo"
            ref={refPhotoFile}
          />
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
