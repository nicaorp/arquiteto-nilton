

    const braulio = {id: 1, name: "Braulio", imgsBaixa: [
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
        projects = [braulio]


        function loadProjects() {

        for (let i = 0; i < projects.length; i++) {

            
            const imgsBaixa = projects[i].imgsBaixa

            var container = document.querySelector(".projects-list");

            for (let j = 0; j < imgsBaixa.length; j++ ) {
                
                
                var projectCard = document.createElement("div");
                let overlay = document.createElement("div");
                let img = document.createElement("img");
                let imgPath = imgsBaixa[j].src;
                
                overlay.classList.add("overlay");
                projectCard.classList.add("project-card");
                img.classList.add("img-project");


                container.appendChild(projectCard);
                projectCard.appendChild(overlay);
                projectCard.appendChild(img);


                img.setAttribute("src", imgPath);

            }

        }
    }








