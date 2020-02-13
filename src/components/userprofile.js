import { useRef, useContext } from "react";
import { firestore, storage } from "../config_firebase";
import { UserContext } from "../components/providers/userprovider";
import Authentication from "../components/authentication";


const UserDash = () => {
  const user = useContext(UserContext);
  const refDisplayName = useRef(null);
  const refPhotoFile = useRef(null);
  const handleSumit = e => {
    e.preventDefault();
    const displayName = refDisplayName.current.value;
    const refUser = firestore.doc(`users/${user.uid}`);
    if (displayName) {
      refUser.update({ displayName });
      refDisplayName.current.value = "";
    }
    if (refPhotoFile) {
      const file = refPhotoFile.current.files[0];
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
        `}
      </style>
    </div>
  );
};
export default UserDash;
