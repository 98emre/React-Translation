

import React from 'react'


const TranslationItem = ({letter}) => {

  return (
    <>
      {  console.log("Här: " + letter)}
      <img src={"individial_signs/"+letter +".png"} alt= "No Translate" width={50}/>
    </>
  )
}
 
export default TranslationItem 