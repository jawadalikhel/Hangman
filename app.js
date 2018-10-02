


// console.log(displayWord(random));
/////////////////////////////////////////////


// const creatAlphabetBtns = () => {
//     let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L',
//                 'M','N','O','P','Q','R','S','T','U','V','W','X',
//                 'Y','Z'];

//     $('body').append('<div class = letterDiv>');

//     for(let i = 0; i < alphabet.length; i++){
//         // let $btn = $('body').append('<button/>');
//         // let $x = alphabet[i];
//         $('.letterDiv').append('<button class = letterBtns>');


//         // let alphabetButton = document.createElement('button');
//         // alphabetButton.innerHTML = alphabet[i];
//         // alphabetButton.className = 'letterBtn';
//         // alphabetButton.id = 'check';
//         // // console.log(alphabetButton);

//         // $('#letterButtons').append(alphabetButton)
//     }



//     $('.letterBtn').on('click', () =>{
//         let x = $('#check').val();
//         console.log(x);
//     })
// }

// creatAlphabetBtns();

// const dog = () =>{
//         $('.alphabetButton').on('click', () => {
//             let geuss = (this.innerHTML);
//             console.log(geuss);
//         });
// }
// dog();


let holdWord = [];
let answerArray = [];
let holdLetter = [];

const wordArray = () =>{
    ///// CLICK THE BUTTON TO GET A RANDOM WORD
    //// FROM ARRAY
    //// holdWord creats empty array to hold the random word
    

    const words = ['cat','dog','tiger','drink','cannon','eight','plane'];



    const random = words[Math.floor((Math.random() * words.length ))];
    //// pushing the random word to holdWord and then split it
    holdWord = random.split('');
    // compareInput(holdWord);
    // console.log(holdWord);
        //console.log(random);
    $('.button').on('click', () =>{
        displayWord(random);
       
        // $('p').text(newArray);
        //console.log(newArray);
        console.log(holdWord);
        for(let i = 0; i < holdWord.length; i++){
             // $('.guessWord').append('<p class="'+ holdWord[i] + ' "> '+"_"+' </p>');
             answerArray[i] = '_';
             //// ??????????????????
             $('.guessWord').append('<p class = "'+ holdWord[i] + ' "> '+ answerArray[i] + '</p>');
        }
    });
    ////////DISPLAY THE RANDOM WORD
    const displayWord = (random) =>{
        $('p').text(random);
    }
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


const compareInput = (buttonPressed) =>{
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
            $('.' + buttonPressed).text(buttonPressed);



            // console.log('letter is in word');
        }else {
            console.log('try again');
        }
    }

}




























