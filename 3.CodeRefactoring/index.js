function findFirstStringInBracket(str){
  if(str.length > 0){
    let indexFirstBracketFound = str.indexOf("(");
    if(indexFirstBracketFound >= 0){
      let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
      if(wordsAfterFirstBracket){
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        if(indexClosingBracketFound >= 0){
          return wordsAfterFirstBracket.substring(0,indexClosingBracketFound);
        } else {
          return '';
        }
      } else {
        return '';
      }
    } else {
      return '';
    }
  } else {
    return '';
  }
}

function refactoreFindFirstStringInBracket(str) {
  const isNotEmpty = str.length > 0 ? true : false;
  const isBracketsExist = str.includes('(') && str.includes(')');
  
  if (isNotEmpty && isBracketsExist) {
    const indexFirstBracketFound = str.indexOf("(");
    const wordsAfterFirstBracket = str.substring(indexFirstBracketFound + 1);
    const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

    if (indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0) {
      return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
    } else {
      return '';
    }
  } else {
    return '';
  }
}


// show result
const string = 'Every journey begins with a (single) step. We just have to have patience';
console.log('Before Refactor: ', findFirstStringInBracket(string));
console.log('After Refactor: ', refactoreFindFirstStringInBracket(string));