import React, { useEffect, useState } from "react";
function CensoredText({ badWords, children }) {
  const [originalWord, setOriginalWord] = useState('');
  const [uncensoerd,setUncesored]=useState('')

  const handleWordClick = (word,index) => {
    console.log(originalWord);
    console.log(word,badWords,badWords.includes(word))
    setOriginalWord(word);
    setUncesored(index);
    console.log(uncensoerd===index)
  };

  return (
    <span>
      {children.split(' ').map((word, index) => {
        const isCensored = badWords.includes(word);
        return (
          <React.Fragment key={index}>
            <span onClick={() => handleWordClick(word,index)}>
              {isCensored  && uncensoerd!==index ? '*'.repeat(word.length) : word}
            </span>
            {index < children.split(' ').length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </span>
  );
}
export function App() {
  const badWords = ['someBadWord', 'test'];
  const someText = 'Very long text who containts someBadWord and testWord';

  return <CensoredText badWords={badWords}>{someText}</CensoredText>;
}