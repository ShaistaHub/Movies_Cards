import React from "react";

function Card(props){

return(
<>

<div  className="cardiv">
   {props.id}
    <img className="img" src={props.Image} />
   <h2>{props.Title}</h2>
   <h3>{props.Year}</h3>
   <p>{props.Rating}</p>
   <p>{props.Genre}</p>
   <h2>{props.Director}</h2>
   </div>
</>
)

}
export default Card;