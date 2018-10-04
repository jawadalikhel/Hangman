let holdWord = [];
let answerArray = [];
let holdLetter = [];

const wordArray = () =>{
    ///// CLICK THE BUTTON TO GET A RANDOM WORD
    //// FROM ARRAY
    //// holdWord creats empty array to hold the random word
    

    const words = ['cat','dog','tiger','drink','cannon','eight','plane'];



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
             // $('.guessWord').append('<p class="'+ holdWord[i] + ' "> '+"_"+' </p>');
             answerArray[i] = ('_');
             // OR
             // answerArray.push('_');
             //// ??????????????????
             $('.guessWord').append('<p class = "'+ holdWord[i] + ' "> '+ answerArray[i] + '</p>');
        }
    });
    ////////DISPLAY THE RANDOM WORD
    // const displayWord = (random) =>{
    //     $('p').text(random);
    // }
}
wordArray();

const keyboard = () =>{

    $('.letterBtn').on('click', function(){

        ////// ????????????????
        var buttonPressed = $(this).html();
        // console.log(buttonPressed);
        compareInput(buttonPressed);

    });
}
keyboard();


var tries = 7;
var winner = []

const compareInput = (buttonPressed, event) =>{
    // console.log(newArray);
    // console.log(buttonPressed);
    // console.log(holdWord);
    for(let i = 0; i < holdWord.length; i++){
           // console.log(buttonPressed);
           //  console.log(holdWord[i]);
           //  console.log(answerArray[i]);
           //  console.log(answerArray); 


       if(buttonPressed === holdWord[i]){
            // answerArray[i] = holdWord[i];

            ////// ???????????????
           var holdPressBtn = $('.' + buttonPressed).text(buttonPressed);
           console.log(holdPressBtn);
            // alert('right answer');
            winner[i]++;
            

            // console.log('letter is in word');
        }
  
    }



    //// if answerArray does not include the buttonPress
    //// then decremeant the tries 
    if(!answerArray.includes(holdPressBtn)) {
        tries--;
    }
    ///// if the tries reached zero then print You dead
    if(tries === 0){
        console.log('ran out of tries');
        $('body').append('<div class = noMoreTries></div>');
        $('.noMoreTries').text('You Dead!!!!!!');
    }


}
































////////////////////////////////////////////////////////////////////////////////////////

// $(document).ready(function(){

//     ////  words array holds all the words
//     const words = ['cat','dog','tiger','drink','cannon','eight','plane'];
//     ////get a random word from the array and assign it to random
//     const random = words[Math.floor((Math.random() * words.length ))];
//     //// split the random word and assign it to holdWord
//     holdWord = random.split('');
//     console.log(holdWord);

//     //// Keyboard buttons click function
//     var wrongGuesses = 0;
//     $('.letterBtn').on('click', () =>{
//         $(this).addClass('used');
//         ///// ??????????????????
//         $(this).prop('disabled','true');
//          var matchFound = false;


//          //// check if clicked letter is in secret word
//          var userGuess = $(this).text();
//          for(var i = 0; i < random.length; i++){
//             if(userGuess === random[i]){

//             $('#container').find(":nth-child(" + (i + 1) )
//             ////// ???????????????
//             $('.' + buttonPressed).text(buttonPressed);

//         }
//          }

//     });


// });



























