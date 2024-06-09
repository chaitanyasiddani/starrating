import React,{useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import "./style.css";

const StarRating=({noOfStars})=>{
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
    const clickHandler=(getCurrentIndex)=>{
        setRating(getCurrentIndex)
    }
    const mouseMoveHandler=(getCurrentIndex)=>{
        setHover(getCurrentIndex)
    }
    const mouseLeaveHandler=(getCurrentIndex)=>{
        setHover(getCurrentIndex)
    }
    return(
        <>
        <div>
        {
                [...Array(noOfStars)].map((_,index)=>{
                    index=index+1
                    return <StarIcon 
                    key={index}
                    className={index<=(hover||rating)?'active':'inactive'}
                    onClick={()=>clickHandler(index)}
                    onMouseMove={()=>mouseMoveHandler(index)}
                    onMouseLeave={()=>mouseLeaveHandler(index)}
                    size={40}
                    />
                    })
        }
        </div>
         
        </>
    )
}

export default StarRating;