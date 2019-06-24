/* 
  
Is Palindrome Algorithm 
  
The function will take a string as an argument,return true if the string is a palindrome and false if the string is not a palindrome. 
Palindrome: a phrase that is spelled the same way both backward and forward. 
  
*/ 
  
function isPalindrome (text) { 
        text = text.toLowerCase(); 
        var textArr = text.split(''); 
        var validCaracters = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
                
        // Create a new array with only letters, no special characters. 
        var lettersArr = []; 
        textArr.forEach(char => { 
                if (validCaracters.indexOf(char) > -1){ 
                        lettersArr.push(char); 
                } 
        }); 
        if (lettersArr.join('') === lettersArr.reverse('').join('')) { 
                return true; 
        } 
        else return false; 
} 
  
console.log (isPalindrome ('race car'));