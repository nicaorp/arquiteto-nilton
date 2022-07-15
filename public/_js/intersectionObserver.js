const quemSomos = document.querySelectorAll(".about-box");
const footerBox = document.querySelectorAll(".footers");

const options = {
    threshold: 0.3
 
}

const aboutFaderObserver = new IntersectionObserver((entries, faderObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            entry.target.classList.remove("fade-about");
        }
        else {
            
            entry.target.classList.add("fade-about");
           
        }
    });
},options);



quemSomos.forEach(item => {
    aboutFaderObserver.observe(item);
});

footerBox.forEach(f => {
    aboutFaderObserver.observe(f);
});

