let buttons = document.querySelectorAll('button');

let output = document.querySelector('.ouput');


let score1 = 0
 let score2 = 0

// for(let t of button){
//     t.addEventListener('click', ()=>
//     {displayScore(t.innerText)})
// }

// function displayScore(text){
//     console.log(text)
// } 

// for(let t of buttons){
//     t.addEventListener('click', displayScore)
// }

// function displayScore(event){
//     user_choice = event.target.innerText
    
//     let array = ["Head", "Tail"]
//     let random = Math.floor(Math.random() * array.length)
//     toss_result = array[random]
//     toss_result == user_choice ? output.innerText = "You won" : output.innerText = "You lose"
// }


for(let t of buttons){
    t.addEventListener('click', displayScore)
}

function displayScore(event){
    user_choice = event.target.innerText
    
    let array = ["Head", "Tail"]
    let random = Math.floor(Math.random() * array.length)
    toss_result = array[random]
    toss_result == user_choice ? score1++ : score2++
    output.innerText = `your score : ${score1} 
    computer scrore : ${score2}`

}