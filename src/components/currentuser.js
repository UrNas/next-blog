import { useContext } from "react";
import { UserContext } from "./providers/userprovider";
import { formatDate } from '../firestoreapi/functios'

const CurrentUser = () => {
    const user = useContext(UserContext)
    return (
        <React.Fragment>
            <div className='user-card'>
                <div className='user-img'>
                    <img src={user ? user.photoURL: ''} />
                </div>
                <div className='user-info'>
                    <h1 className='user-name'>{user ? user.displayName: ''}</h1>
                    <span className='email'> {user ? user.email: ''}</span>
                    <span className='date'> {user ? formatDate(user.createdAt): ''}</span>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .user-card {
                    }
                    .user-img {
                        dispaly: block;
                        width: 20%;
                        float: left;
                        clear: both;
                        // padding-right: 10px;
                    }
                    .user-info {
                        display: block;
                        width: 77%;
                        float: right;
                        padding-bottom: 20px;w
                    }
                    .user-name {
                        display: block;
                        border-left: 5px solid green;
                        padding-left: 5px;
                    }
                    .email, .date {
                        display: block;
                    }
                    .email:before {
                        color: red;
                        content: 'Email: '
                    }
                    .date:before {
                        color: red;
                        content: 'Joined: '
                    }
                    img {
                        width: 100%;
                    }
                    `
                }
            </style>
        </React.Fragment>
    )
}
export default CurrentUser;