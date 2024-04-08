import {useState} from 'react';
function ProductCard(props){
   
    return(
        <div className={"product_card"}>
           <h4 className={"product_name"}>{props.id.title}</h4>
           <img src={props.id.image} className={"card_item_img"}/>
           <div className={"price_buy"}>
            <h3 className={"price"}>Price:{props.id.price}Rs</h3> <button className={"Buy"}>Buy</button>
           </div>
        </div>
    )
}
export default ProductCard;