import React from "react";
import TranslationItem from "./TranslationItem";

const TranslationDisplay = ({ translations }) => {
  const renderHandSigns = translations.split("").map((_letter, index) => {
    return <TranslationItem key={index + "-" + _letter} letter={_letter} />;
  });


  return(
    <>
        {renderHandSigns}
    </>
  )
};

export default TranslationDisplay;
