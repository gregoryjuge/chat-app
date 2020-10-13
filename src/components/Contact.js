import React from 'react';
import './Contact.css';



const name = 'Claire Mccoy';
const avatar = "https://randomuser.me/api/portraits/women/82.jpg"
const statusOnline = true;

const gestionOnline = () => {
    return (
      <div className = "Contact">
      <img className="avatar" src= {avatar} alt= "avatar"/>
      

        <div className = "status" >
        <div><h4>{name}</h4></div>
           <div className = {statusOnline ? "status-online" : "status-offline"}></div>
           {statusOnline ? "Online" : "Offline"}
           
        </div>   
   </div> );
}

export default gestionOnline;