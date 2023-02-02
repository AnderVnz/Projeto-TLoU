console.log(document);
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão de veja o trailer");
    alternarModal()
    video.setAttribute("src", linkDoVideo); 
});  

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");

});
