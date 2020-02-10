import { useAuth } from "../../hooks"

const UserContext = React.createContext()



const UserProvider = props => {
    const user = useAuth()
    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
}
export {
    UserContext
}
export default UserProvider