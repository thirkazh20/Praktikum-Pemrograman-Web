document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})

function computerChoice(element){
    // Pilihan User
    let pilihanUser = element.target.innerText;

    // Menangkap elemet result menggunakan querySelector
    let pilihanKomputer = document.querySelector("#result");

    // Membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // Pilihan random untuk komputer 
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user sama dengan pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(() => alert("Draw"), 100);
    }
    
    // Jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WIN")
    }

    // Jika pilihan komputer yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper") {
        alert("COMPUTER WIN")
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        alert("COMPUTER WIN")
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("COMPUTER")
    }
}
