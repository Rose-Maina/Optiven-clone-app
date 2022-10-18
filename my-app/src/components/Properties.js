import React from 'react'

function Properties() {
  const properties = () => {
    fetch(`db.json`
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  return (
    <div>Properties</div>
  )
}

export default Properties