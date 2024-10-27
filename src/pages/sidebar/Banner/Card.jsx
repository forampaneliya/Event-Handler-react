import "./Card.css"

function Card() {

    let data = [
        {
            img:"./src/pages/sidebar/Banner/img/burger.jpg",
            heading: "Burger",
            para: "Made from good quality ingredients. Fresh and healthy. 100 per cent vegetarian.",
            price: "200"
        },
        {
            img:"./src/pages/sidebar/Banner/img/juice.webp",

            heading: "Juice",
            para: "Made from good quality ingredients. Fresh and healthy. 100 per cent vegetarian.",
            price: "300"
        },
        {
            img:"./src/pages/sidebar/Banner/img/coffie.avif",

            heading: "Coffee",
            para: "Made from good quality ingredients. Fresh and healthy. 100 per cent vegetarian.",
            price: "250"
        },
        {
            img:"./src/pages/sidebar/Banner/img/ice-cream.jpg",

            heading: "Ice-cream",
            para: "Made from good quality ingredients. Fresh and healthy. 100 per cent vegetarian.",
            price: "400"
        },
        {
            img:"./src/pages/sidebar/Banner/img/pizza.jpg",

            heading: "Pizza",
            para: "Made from good quality ingredients. Fresh and healthy. 100 per cent vegetarian.",
            price: "350"
        },
        {
            img:"./src/pages/sidebar/Banner/img/noodels.jpg",

            heading: "Noodles",
            para: "Made from good quality ingredients. Fresh and healthy. 100 per cent vegetarian.",
            price: "550"
        }
    ]
    return (
        <>
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                data.map((val,index) => {
                    return (
                        <>
                            <div className="card-main">
                                <img src={val.img} alt="" className="cardimg" />
                                <h1 className="card-heading">
                                {val.heading}
                                </h1>
                                <h2 className="price">₹{val.price}</h2>
                                <p className="card-content">{val.para}</p>

                            </div>


                        </>
                    )
                })
            }
            </div>

        </>
    )
}
export default Card;