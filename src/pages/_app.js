import App from 'next/app'
import UserProvider from "../components/providers/userprovider";

const MyApp = ({Component, pageProps}) => {
    return (
        <UserProvider>
            <Component {...pageProps}/>
        </UserProvider>
    )
}
export default MyApp;