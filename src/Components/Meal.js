import React from "react";
import Mealitem from "./Mealitem";
import Recipeindex from "./Recipeindex";
import { useState,useEffect } from "react";

function Meal()
{
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>Craving !! then just search click cook eat Repeat..</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Search here" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ?<Mealitem data={item} /> :"Not Found"
                
                }
            </div>
            <div className="indexcontainer">
                 <Recipeindex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
            
        </div>
    </>
    )
}

export default Meal;