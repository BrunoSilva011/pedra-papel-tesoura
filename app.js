let userPont = 0;
let compPont = 0;
const userPont_span = document.getElementById("pontos-user")
const compPont_span = document.getElementById("pontos-comp")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".resultado > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getCompEscolha() {
    const escolhas = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() *3)
    return escolhas[randomNumber]
}

function convertToWord(letter) {
    if(letter === "r") return "Pedra";
    if(letter === "p") return "Papel";
    return "Tesoura"
}

function win(userEscolha, compEscolha) {
    userPont++;
    userPont_span.innerHTML = userPont;
    compPont_span.innerHTML = compPont;
    const smallUserWord = " Usuário ".fontsize(3).sup();
    const smallCompWord = " Comp ".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userEscolha)}${smallUserWord}  derrota  ${convertToWord(compEscolha)}${smallCompWord}. Você ganhou!`
    document.getElementById(userEscolha).classList.add('green-glow') ;
    setTimeout(function() {document.getElementById(userEscolha).classList.remove('green-glow')}, 400)
}

function lose(userEscolha, compEscolha) {
    compPont++;
    userPont_span.innerHTML = userPont;
    compPont_span.innerHTML = compPont;
    const smallUserWord = " Usuário ".fontsize(3).sup();
    const smallCompWord = " Comp ".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userEscolha)}${smallUserWord}  perde para  ${convertToWord(compEscolha)}${smallCompWord}. Você perdeu!`
    document.getElementById(userEscolha).classList.add('red-glow') ;
    setTimeout(function() {document.getElementById(userEscolha).classList.remove('red-glow')}, 400)
}
function draw (userEscolha, compEscolha) {
    const smallUserWord = " Usuário ".fontsize(3).sup();
    const smallCompWord = " Comp ".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userEscolha)}${smallUserWord}  empata com  ${convertToWord(compEscolha)}${smallCompWord}. Empatou!`
    document.getElementById(userEscolha).classList.add('gray-glow') ;
    setTimeout(function() {document.getElementById(userEscolha).classList.remove('gray-glow')}, 400)
}

function game(userEscolha) {
    const compEscolha = getCompEscolha();
    const name = "Bruno";

    switch (userEscolha + compEscolha) {
        case "rs":
        case "pr":
        case "sp":
            win(userEscolha, compEscolha);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userEscolha, compEscolha);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userEscolha, compEscolha)
            break;
                
    }
}

function main() { 
    rock_div.addEventListener("click", function () {
        game("r")
    })

    paper_div.addEventListener("click", function () {
        game("p")
    })

    scissors_div.addEventListener("click", function() {
        game("s")
    })
}

main();