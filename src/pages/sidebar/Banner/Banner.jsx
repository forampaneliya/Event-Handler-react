import "./Banner.css"
import Card from "./Card";
import Header from "./Header";
import Serch from "./Serch";

function Banner()
{
    return(
        <>
        <div className="Banner-main">
            <Header/>
            <Serch/>
            <Card/>



        </div>
        </>
    )
}

export default Banner;