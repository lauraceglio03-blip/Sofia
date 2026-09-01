for(let i=0;i<150;i++){

    let estrela=document.createElement("div");

    estrela.classList.add("estrela");

    estrela.style.left=Math.random()*100+"vw";

    estrela.style.top=Math.random()*100+"vh";

    estrela.style.animationDelay=Math.random()*3+"s";

    document.body.appendChild(estrela);

}
{function entrar() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("introducao").style.display = "flex";

    const frase = document.getElementById("frase");

    setTimeout(() => {

        frase.style.opacity = "0";

        setTimeout(() => {

            frase.innerHTML = "E esta noite, elas decidiram brilhar outra vez.";

            frase.style.opacity = "1";

        }, 1000);

    }, 2500);

    setTimeout(() => {

        document.getElementById("introducao").style.display = "none";

        document.getElementById("pagina2").style.display = "block";

    }, 6000);

}

document.getElementById("inicio").style.display="none";

document.getElementById("pagina2").style.display="block";

}
