import React from "react";
function Recipeindex({alphaIndex})
{

    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num=0;
    return(
            <>
             {
                alpha.map(item=>{
                    return(
                        <div className="numbox" key={num++} onClick={()=>alphaIndex(item)}>
                               <h3>{item}</h3> 
                        </div>
                    )
                })
             }
            
            
            </>    )
}

export default Recipeindex;