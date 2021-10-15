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

console.log(`Test 1. string1: ${'spiderman'} and string2: ${'manspider'} isAnagram: `, checkAnagram('spiderman','manspider'))
console.log(`Test 2. string1: ${'superman'} and string2: ${'batman'}  isAnagram:`, checkAnagram('superman','batman'))