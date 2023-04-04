import React from "react";

export default function Item(props){
    return(
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-32 h-24 mb-4" src={props.image} alt={props.name} /> 
              <h4 className="h4 mb-2">{props.name}</h4>
              <p className="text-lg text-gray-400 text-center">{props.description}</p>
        </div>
    );
}