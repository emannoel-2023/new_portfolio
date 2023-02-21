const imagemClima = document.querySelector("#imagem-clima");
const textProject1 = document.querySelector("#textProject1");

const imagemNasa = document.querySelector("#imagem-nasa");
const textProject2 = document.querySelector("#textProject2");

const imagemPokedex = document.querySelector("#image-pokedex");
const textProject3 = document.querySelector("#textProject3");

const imagemCalc = document.querySelector("#image-calculadora");
const textProject4 = document.querySelector("#textProject4");

const imagemMario = document.querySelector("#image-mario");
const textProject5 = document.querySelector("#textProject5");

const gitHub = document.querySelector(".github");
const instagram = document.querySelector(".instagram");
const whatsapp = document.querySelector(".whatsapp");

imagemClima.addEventListener("mouseenter", () => {
  textProject1.style.display = "block";
});
imagemClima.addEventListener("click", () => {
  window.open(
    "https://github.com/davi33-emanoel/monitor-climatico-js",
    "_blank"
  );
});
imagemClima.addEventListener("mouseout", () => {
  textProject1.style.display = "none";
});

imagemNasa.addEventListener("mouseenter", () => {
  textProject2.style.display = "block";
});
imagemNasa.addEventListener("click", () => {
  window.open("https://github.com/davi33-emanoel/Nasa_2.0", "_blank");
});
imagemNasa.addEventListener("mouseout", () => {
  textProject2.style.display = "none";
});

imagemPokedex.addEventListener("mouseenter", () => {
  textProject3.style.display = "block";
});
imagemPokedex.addEventListener("click", () => {
  window.open("https://github.com/davi33-emanoel/Nasa_2.0", "_blank");
});
imagemPokedex.addEventListener("mouseout", () => {
  textProject3.style.display = "none";
});

imagemCalc.addEventListener("mouseenter", () => {
  textProject4.style.display = "block";
});
imagemCalc.addEventListener("click", () => {
  window.open(
    "https://github.com/davi33-emanoel/Calculadora-de-Emprestimos_JavaScript",
    "_blank"
  );
});
imagemCalc.addEventListener("mouseout", () => {
  textProject4.style.display = "none";
});

imagemMario.addEventListener("mouseenter", () => {
  textProject5.style.display = "block";
});
imagemMario.addEventListener("click", () => {
  window.open("https://github.com/davi33-emanoel/Mario_js", "_blank");
});
imagemMario.addEventListener("mouseout", () => {
  textProject5.style.display = "none";
});

gitHub.addEventListener("click", () => {
  window.open("https://github.com/davi33-emanoel", "_blank");
});

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/daviemannoel/", "_blank");
});
whatsapp.addEventListener("click", () => {
  window.open("https://wa.me/5541996925878", "_blank");
});
