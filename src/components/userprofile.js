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
      if (file) {
          storage
            .ref("user-profiles")
            .child(`${user.uid}`)
            .child(`${file.name}`)
            .put(file)
            .then(resp => resp.ref.getDownloadURL())
            .then(photoURL => refUser.update({ photoURL }));
        }
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
            name='file'
            id='file'
            className='inputfile'
            ref={refPhotoFile}
          />
          <label htmlFor="file">📂 Choose a Photo...</label>
          <button type="submit" >🙍🏽‍♂️ Update User Profile</button>
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
          input[type=text] {
            padding: 5px;
          }
          input[type=text]:focus {
            outline: none;
            border: 1px solid black
          }
          input[type=file] {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
          }
          .inputfile + label {
            font-size: 1.25em;
            font-weight: 700;
            color: white;
            background-color: black;
            display: inline-block;
        }
        
        .inputfile:focus + label,
        .inputfile + label:hover {
            background-color: #CE5D23;
        }
        label {
          padding: 10px;
        }
        button {
          display: block;
          width: 100%;
          margin: 15px auto;
          font-size: 1.7em;
          color: white;
          background: black;
          cursor: pointer;
        }
        button:focus {
          outline: none;
        }
        `}
      </style>
    </div>
  );
};
export default UserDash;
