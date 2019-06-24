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
