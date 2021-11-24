import React from 'react'
import Person from './person'

function ListName() {
    const names=['ram','venky','sun']
    const persons=[
        {
            name:"ajay",
            age:20,
            skill:"java"
       },
       {
        name:"ram",
        age:23,
        skill:"next"

       },
      {
        name:"vijay",
        age:22,
        skill:"react"
    

      }
       

    ]
    const personList=persons.map(person =><Person key={person.name} person={person} />
    
    )
        
    return (
       
        <div>
            {names.map((name,index) =><h1 key={index}>{name}</h1>)}
            {personList}
            
        </div>
    )
}

export default ListName
