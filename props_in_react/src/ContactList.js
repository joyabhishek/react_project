import React, { Component } from 'react';
import ContactItem from "./ContactItem"

function ContactList() {
    return (
        <div>
            <ContactItem 
                imageUrl="http://placekitten.com/300/200"
                name="Abhishek"
                Phone="127365874905"
                Email="abc@com" 
            />
            <ContactItem 
                imageUrl="http://placekitten.com/300/200"
                name="Abhek"
                Phone="127874905"
                Email="abftbc1@com"            
            />
            <ContactItem 
                imageUrl="http://placekitten.com/300/200"
                name="Aishek"
                Phone="127365875"
                Email="abc2@com"            
            />
            <ContactItem 
                imageUrl="http://placekitten.com/300/200"
                name="Ak"
                Phone="12874905"
                Email="abc3@com"            
            />
        </div>
        
    )
}

export default ContactList