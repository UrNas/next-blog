import App from 'next/app'
import UserProvider from "../components/providers/userprovider";
import Link from 'next/link'

const Home = () => {
    return (
        <React.Fragment>
            <div className='home'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
            <style jsx>
                {
                    `
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
                    `
                }
            </style>
        </React.Fragment>
    )
}
const MyApp = ({Component, pageProps}) => {
    return (
        <UserProvider>
            <Home />
            <Component {...pageProps}/>
        </UserProvider>
    )
}
export default MyApp;