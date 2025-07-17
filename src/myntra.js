import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import arr from "./components/utils/dummy"








function App(){
    let [A,setA]=useState(arr);


    function Sort(){
     A.sort((a,b)=>a.Price-b.Price)
     setA([...A]);
     console.log(A);
    }

    function PriceAbove599(){
       const B = arr.filter((value)=>value.Price>499)
        setA(B);
    }
   
   return (
    <>
     {/* //header */}
     <div><Header/></div>
     <div>
        <button className="sort" onClick={Sort}>Sort By Price</button>
        <button className="sort" onClick={PriceAbove599}>Price Above 499</button>
       
     </div>
     <div>
     
     </div>
    {/* //body */}
    <div className="middle" style={{display:"flex", gap:"10px",flexWrap:"wrap"}}>
        {/* <Card cloth="T-Shirt" Offer="40-80%off "/>
        <Card cloth="Jeans" Offer="30-40%off "/>
        <Card cloth="Pant" Offer="50-60%off "/>
        <Card cloth="Kurta" Offer="50-80%off "/>
        <Card cloth="Pajama" Offer="50-80%off "/>
        <Card cloth="Shoes" Offer="40-50%off "/>
        <Card cloth="Formal" Offer="50-60%off "/>
        <Card cloth="Trowser" Offer="60-80%off "/> */}
        {
            A.map((value,index)=>
           <Card key={ index} 
            cloth={value.cloth} 
            offer={value.Offer}
            Price={value.Price}/>)
            
        }
     
        
    </div>
    
<div> 
    <Footer/>
</div>
</>
)

}
const Root=ReactDOM.createRoot(document.getElementById("root"));
Root.render (<App/>);
