console.log('mostrar o documento', document);
console.log(document.querySelector(".botao-trailer"));
// ------------------------------------------------------------//
const botaoTrailer =  document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click",()=>{
    console.log("clicou no botão veja o trailer");
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
modal.classList.remove("aberto");
video.setAttribute("src", "");
});
