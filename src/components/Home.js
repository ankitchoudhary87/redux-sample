import React from "react";
const Home = (props) => {
    console.log("clicked props", props);
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img alt="iphone" src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'Iphone 11'})}>Add to Cart</button>

                    <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()}>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;