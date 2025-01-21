import Header from "../components/Header";
import { Link } from 'react-router-dom'
import Card from "../components/fofcard"


export default function Lost() {
    return (
        <>
            <Card />
            
            <h2><Link to={"/Home"}>I don't think you want to be here, click here to go somewhere else</Link></h2>
        </>
    )
}