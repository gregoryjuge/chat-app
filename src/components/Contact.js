import React from 'react';
import './Contact.css';



const name = 'Claire Mccoy';
const avatar = "https://randomuser.me/api/portraits/women/82.jpg"
const statusOnline = true;

const gestionOnline = () => {
    return (
        <div className = "status" >
           <div className = {statusOnline ? "status-online" : "status-offline"}></div>
           {statusOnline ? "Online" : "Offline"}
        </div>   
    );
}

function element () {
   return (

    <div className = "contact">
       <img className="avatar" src= {avatar} alt= "avatar"/>
       <div><h4>{name}</h4>
       {gestionOnline()}</div>

    </div>
        

  );
}

export default element;