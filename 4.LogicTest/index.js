function checkAnagram (string1, string2) {
  const string1Length = string1.length;
  const string2Length = string2.length;

  if (string1Length !== string2Length) {
    return false;
  }

  const sortString1 = [...string1].sort().join("");
  const sortString2 = [...string2].sort().join("");

  if ( sortString1 !== sortString2 ) {
    return false;
  } else {
    return true;
  }
}

function groupingAnagram(strings) {
  const result = [];
  for ( let x = 0; x < strings.length; x++ ) {
    const string1 = strings[x];
    const output = [string1];

    if (result.flat().includes(string1)) continue;
    
    for ( let y = 0; y < strings.length; y++ ) {
      if (y === x) continue;

      const string2 = strings[y];
      const isAnagram = checkAnagram(string1, string2);
      if (isAnagram) output.push(string2);
    }

    result.push(output);
  }
  
  return result
}

// show result
const strings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
console.log('result : ', groupingAnagram(strings))