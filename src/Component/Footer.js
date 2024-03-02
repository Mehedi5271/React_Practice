import React from 'react';

const Footer = () => {
   const status = false;
   switch(status){
    case true:
        return <button>logout</button>
        case false:
        return <button>login</button>
        default:
            return null;

   }

};

export default Footer;