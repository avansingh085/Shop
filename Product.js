import ProductCard from "./ProductCard.js";
import { useEffect,useState } from "react";
function Product(props){
    const [obj,setObj]=useState([]);
    fetch(`https://fakeapidata.com/products?page=1&limit=400`)
            .then(res=>res.json())
            .then(json=>setObj(json));
   
    return(
        <div className={"product_item"}>
        { 
        obj.map((data,id)=>{
            return <ProductCard id={data}/>
        })
        }
       
        </div>
    )
}
export default Product;