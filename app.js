let holdWord = [];
var underscore = [];
let holdLetter = [];
var rightWord = [];

const wordArray = () =>{
    ///// CLICK THE BUTTON TO GET A RANDOM WORD
    //// FROM ARRAY
    //// holdWord creats empty array to hold the random word
    const words = ['cat','dog','tiger','drink','cannon','eight','plane'];

    //// to generate a random word from array words
    const random = words[Math.floor(Math.random() * words.length )];
    //// pushing the random word to holdWord and then split it
    holdWord = random.split('');
    // compareInput(holdWord);
    // console.log(holdWord);
        //console.log(random);
    $('.button').on('click', () =>{
        // displayWord(random);
       
        // $('p').text(newArray);
        //console.log(newArray);
        // console.log(holdWord);
        for(let i = 0; i < holdWord.length; i++){
             underscore[i] = ('_');
             // OR
             // answerArray.push('_');
             
             ////
             $('.guessWord').append('<p class = "'+ holdWord[i] + ' "> '+ underscore[i] + '</p>');
        }
        console.log(holdWord);
        console.log(underscore);
    });
}
wordArray();

const keyboard = () =>{
    //// making the alpabeth buttons clicable
    $('.letterBtn').on('click', function(){

        ////// when user press button it stores it in buttonPress
        var buttonPressed = $(this).html();
        // console.log(buttonPressed);
        compareInput(buttonPressed);

    });
}
keyboard();



var tries = 8;
const compareInput = (buttonPressed) =>{

    
    //// use for loop to go throw the right word
    //// check if the button press equals to the element
    //// of the right word
    for(let i = 0; i < holdWord.length; i++){
           // console.log(buttonPressed);
           //  console.log(holdWord[i]);
           //  console.log(answerArray[i]);
           //  console.log(answerArray); 
       if(buttonPressed === holdWord[i]){
            // answerArray[i] = holdWord[i];
            ////// ???????????????
           var holdPressBtn = $('.' + buttonPressed).text(buttonPressed);
           //// holdWord has the random word
           // console.log(holdWord);

           //// hold the char of the word
           // console.log(holdWord[i]);

           //// hold the char of the word
           // console.log(buttonPressed);
           // console.log(holdPressBtn[i])
           rightWord.push(holdWord[i]);
           if(rightWord.length === holdWord.length){
                $('body').append('<div class = compare></div>');
                $('.compare').text('You Win!!!')
            }
        }
  
    }


    //// if answerArray does not include the buttonPress
    //// then decremeant the tries 
    if(!underscore.includes(holdPressBtn)) {
        tries--;
    }
    ///// if the tries reached zero then print You dead
    if(tries === 0){
        // console.log('ran out of tries');
        $('body').append('<div class = noMoreTries></div>');
        // $('.noMoreTries').text('You Dead!!!!!!');

        $('.noMoreTries').append('<img src="1-01.png" width="900" height="700" alt="Test Image" color = "red" />');
    }

}


























