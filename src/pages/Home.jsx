import Header from "../components/Header";
import lovegif from "../assets/love-languages.gif"


export default function Home() {
    return (
        <>
            <Header />
            <h2>this is the home page</h2>
            <img src={lovegif} alt="help me" />
        </>
    )
}