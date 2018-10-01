


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



const wordArray = () =>{
    ///// CLICK THE BUTTON TO GET A RANDOM WORD
    //// FROM ARRAY

    const words = ['cat','dog','tiger','drink','cannon','eight','plane'];

    const random = words[Math.floor((Math.random() * words.length ))];
    let newArray = random.split("");
        //console.log(random);
    $('.button').on('click', () =>{
        displayWord(random);
       
        $('p').text(newArray);
        //console.log(newArray);

        for(let i = 0; i < newArray.length; i++){
             $('.guessWord').append('<p class="'+ newArray[i] + ' "> '+"_"+' </p>');
            
        }

        // console.log(newArray);

    });
    ////////DISPLAY THE RANDOM WORD
    const displayWord = (random) =>{
        $('p').text(random);
    }

}
wordArray();


// const keyboard = () =>{
//     $('.letterBtn').on('click', () =>{
//         let $input = $('input').val();
//         console.log($input);
//     })
// }
// keyboard();





























