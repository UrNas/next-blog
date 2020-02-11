import UserProfile from '../components/userprofile'
import UserProvider from '../components/providers/userprovider'

export default () => {
    return (
            <UserProvider>
                <UserProfile />
            </UserProvider>
    )
}