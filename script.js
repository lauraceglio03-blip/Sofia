for(let i=0;i<150;i++){

    let estrela=document.createElement("div");

    estrela.classList.add("estrela");

    estrela.style.left=Math.random()*100+"vw";

    estrela.style.top=Math.random()*100+"vh";

    estrela.style.animationDelay=Math.random()*3+"s";

    document.body.appendChild(estrela);

}
