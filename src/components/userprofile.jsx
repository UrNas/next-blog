import Authentication from "./authentication";
import Link from 'next/link'
import { useContext, useRef } from "react";
import { UserContext } from "./providers/userprovider";
import Loading from './loading'
import { firestore } from "../config_firebase";

const UserProfile = () => {
    const user = useContext(UserContext)
    const refUser = useRef()
    if (!user) return <Loading />
    const handleSubmit = e => {
        e.preventDefault()
        console.log('click me');
        const refDoc = firestore.doc(`users/${user.uid}`)
        refDoc.update({displayName: refUser.current.value})
    }
    return (
        <React.Fragment>
            <Link href='/'>
             <a>
                 <h1>
                     Home
                 </h1>
             </a>
            </Link>
            <Authentication />
            <hr />
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="displaynme" placeholder="display name" ref={refUser}/>
                    <input type="file" name="image" placeholder="user phoro prfile"/>
                    <input type="submit" value="update" />
                </form>
            </div>
            <style jsx>
                {
                    `
                    h1 {
                        width: 7%;
                        font-size: 2em;
                        margin-left: 15%;
                        background: #1E2128;
                        transform: skew(-15deg);
                        color: #E7E7E7;
                        text-align: center;
                    }
                    h1:hover {
                        background: white;
                        color: #1E2128;
                    }
                    a {
                        text-decoration: none;
                        color: black;
                    }
                    hr {
                        
                        width: 50%;
                        margin: 15px auto;           
                        padding: 1px;
                        background: linear-gradient(90deg, black, white, black);
                        border-radius: 50%;
                    }
                    form {
                        width: 50%;
                        margin: auto;
                    }
                    input {
                        width: 100%;
                        margin-bottom: 10px;
                    }

                    `
                }
            </style>
        </React.Fragment>
    )
}

export default UserProfile