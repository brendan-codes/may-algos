/*GoodMorning from Becky and Joshua and Petra.


  https://leetcode.com/problems/backspace-string-compare/

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

str1="ab#c"
str2="ad#c"
function hashtagz(str1,str2){
    newArr1=''
    newArr2=''
    for (var i=0;i<str1.length;i++){
        if(str1[i]=="#" && str1[i-2]!=="#"){
            newArr1.push(str1[i-2])
            console.log(newArr1)
        }
    }
    for (var i=0;i<str1.length;i++){
        if(str2[i]=="#" && str2[i-2]!=="#"){
            newArr2.push(str2[i-2])
            console.log(newArr2)
        }
    }
    if (newArr1===newArr2){
        return true
    }
    else{
        return false
    }

}

console.log(hashtagz(str1, str2))


/*
    Given two strings,
    return true if the first string can be built from the letters in the 2nd string
    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */