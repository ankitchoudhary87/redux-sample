import React from 'react'
function Header(props) {
    console.warn("Header Value", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img alt="cart" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header