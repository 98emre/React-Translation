
import { useEffect } from "react";
import TranslationItem from "./TranslationItem";

const TranslationDisplay = ({ translations }) => {
  
  useEffect(() => {
    console.log("--- Start Translate ---");
  }, [translations]);

  const renderHandSigns = translations.split('').map((_letter, index) => {
    const key = `${index}-${_letter}-${Math.random()}`;
    if(_letter === " ")
      _letter = 1;
    return <TranslationItem key={key} letter={_letter} animIndex={index} />;
  });

  

  return(
    <>
        {renderHandSigns}
    </>
  )
  
};

export default TranslationDisplay;
