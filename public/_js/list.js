class Projetos {
    constructor(id, nome, imagens) {
        this.id = id;
        this.nome = nome;
        this.imagens = imagens
    }
};


card = [
    {id: 1, nome: "Kleber", imagem: "/public/_imgs/PORTFOLIO/kleber/kleber1OK.jpg"},
    {id: 2, nome: "Mileny", imagem: "/public/_imgs/PORTFOLIO/mileny/mileny1OK.jpg"},
    {id: 3, nome: "Predio", imagem: "/public/_imgs/PORTFOLIO/predio/predio1OK.jpg"},
    {id: 4, nome: "Rancho", imagem: "/public/_imgs/PORTFOLIO/rancho/rancho1OK.jpg"},
    {id: 5, nome: "Vander", imagem: "/public/_imgs/PORTFOLIO/vander/vander1OK.jpg"},
    {id: 6, nome: "Braulio", imagem: "/public/_imgs/PORTFOLIO/braulio/braulio1OK.jpg"},
]

let projectsCards = null;
let path = null;

function carregaHome() {

    // imgCard = document.querySelector(".img-project");
    // imgCard.setAttribute('src',"/public/_imgs/img/flavia2OK.jpg" );
    for (let i = 0; i < card.length; i++) {
        var container = document.querySelector(".projects-list");
        var projectCard = document.createElement("div");
        let overlay = document.createElement("div");
        let info = document.createElement("div");
        let h3Info = document.createElement("h3");
        let img = document.createElement("img");
        let projectLink = document.createElement("a");
        let imgPatch = card[i].imagem;
        let h3Text = card[i].nome;

        
        overlay.classList.add("overlay");
        info.classList.add("info");
        projectCard.classList.add("project-card");
        projectLink.setAttribute("href", `projectsImgs.html` + `?projeto=` + i)
        img.classList.add("img-project");
        
        
        container.appendChild(projectCard);
        info.appendChild(h3Info);
        projectCard.appendChild(projectLink)
        projectLink.appendChild(overlay);
        projectLink.appendChild(info);
        projectLink.appendChild(img);
        

        
        img.setAttribute("src", imgPatch);
        info.innerHTML = h3Text;
    }
    projectsCards = document.querySelectorAll(".projects-list .project-card");
    projectsCards.forEach((p, index) => {
        p.addEventListener('click', () => {
             path = "projeto" + index
                return console.log(path)
        });
    });
    
    

};



   


const kleber = {id: "0", name: "Kleber", imgsBaixa: [
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber1OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber2OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber3OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber4OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber5OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber6OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber7OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/kleber/kleber8OK.jpg"}],
    imgsAlta: [
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber1.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber2.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber3.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber4.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber5.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber6.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber7.jpg"},
        {src: "/public/_imgs/PORTFOLIO/kleber/kleber8.jpg"}]
    }

const mileny = {id: "1", name: "Mileny", imgsBaixa: [
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny1OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny2OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny3OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny4OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny5OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny6OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny7OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny8OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/mileny/mileny9OK.jpg"}],
    imgsAlta: [
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny1.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny2.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny3.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny4.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny5.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny6.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny7.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny8.jpg"},
        {src: "/public/_imgs/PORTFOLIO/mileny/mileny9.jpg"}]
    }

const predio = {id: "2", name: "Prédio", imgsBaixa: [
    { src: "/public/_imgs/PORTFOLIO/predio/predio1OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/predio/predio2OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/predio/predio3OK.jpg"}],
    imgsAlta: [
        {src: "/public/_imgs/PORTFOLIO/predio/predio1.jpg"},
        {src: "/public/_imgs/PORTFOLIO/predio/predio2.jpg"},
        {src: "/public/_imgs/PORTFOLIO/predio/predio3.jpg"}]
    }

const rancho = {id: "3", name: "Rancho", imgsBaixa: [
    { src: "/public/_imgs/PORTFOLIO/rancho/rancho1OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/rancho/rancho2OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/rancho/rancho3OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/rancho/rancho4OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/rancho/rancho5OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/rancho/rancho6OK.jpg"}],
    imgsAlta: [
        {src: "/public/_imgs/PORTFOLIO/rancho/rancho1.jpg"},
        {src: "/public/_imgs/PORTFOLIO/rancho/rancho2.jpg"},
        {src: "/public/_imgs/PORTFOLIO/rancho/rancho3.jpg"},
        {src: "/public/_imgs/PORTFOLIO/rancho/rancho4.jpg"},
        {src: "/public/_imgs/PORTFOLIO/rancho/rancho5.jpg"},
        {src: "/public/_imgs/PORTFOLIO/rancho/rancho6.jpg"}]
    }

const vander = {id: "4", name: "Vander", imgsBaixa: [
    { src: "/public/_imgs/PORTFOLIO/vander/vander1OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/vander/vander2OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/vander/vander3OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/vander/vander4OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/vander/vander5OK.jpg"}],
    imgsAlta: [
        {src: "/public/_imgs/PORTFOLIO/vander/vander1.jpg"},
        {src: "/public/_imgs/PORTFOLIO/vander/vander2.jpg"},
        {src: "/public/_imgs/PORTFOLIO/vander/vander3.jpg"},
        {src: "/public/_imgs/PORTFOLIO/vander/vander4.jpg"},
        {src: "/public/_imgs/PORTFOLIO/vander/vander5.jpg"}]
    }

const braulio = {id: "5", name: "Braulio", imgsBaixa: [
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio1OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio2OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio3OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio4OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio5OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio6OK.jpg"},
    { src: "/public/_imgs/PORTFOLIO/braulio/braulio7OK.jpg"}],
    imgsAlta: [
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio1.jpg"},
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio2.jpg"},
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio3.jpg"},
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio4.jpg"},
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio5.jpg"},
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio6.jpg"},
        {src: "/public/_imgs/PORTFOLIO/braulio/braulio7.jpg"}]
    }

    projects = [kleber, mileny, predio, rancho, vander, braulio]

    const urlParams = new URLSearchParams(window.location.search)
    let projectNumber = urlParams.get("projeto");
    console.log(projectNumber)



    function loadProjects() {
        

    for (let i = 0; i < projects.length; i++) {

        let idNumber = projects[i].id

        if (idNumber == projectNumber) {

        const imgsBaixa = projects[i].imgsBaixa
        const imgsAlta = projects[i].imgsAlta

        var container = document.querySelector(".projects-list");
        var nomeProjeto = document.querySelector(".nome-projeto");

        for (let j = 0; j < imgsBaixa.length; j++ ) {
            
            
            var projectCard = document.createElement("div");
            let overlay = document.createElement("div");
            let img = document.createElement("img");
            let linkImgAlta = document.createElement("a");
            let imgPath = imgsBaixa[j].src;
            
            linkImgAlta.setAttribute("href", imgsAlta[j].src);
            linkImgAlta.setAttribute("data-lightbox", "mygallery");
            overlay.classList.add("overlay");
            projectCard.classList.add("project-card");
            img.classList.add("img-project");


            container.appendChild(linkImgAlta);
            linkImgAlta.appendChild(projectCard);
            
            projectCard.appendChild(overlay);
            projectCard.appendChild(img);

            nomeProjeto.innerHTML = projects[i].name
            img.setAttribute("src", imgPath);
            }
        }

    }
}








