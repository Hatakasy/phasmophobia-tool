function fecharDescricao() {
  document.getElementsByClassName("sidebar")[0].style.right = "-6000px";
  document.getElementById("background-descricao").style.display = "none";
}

function mostrarDescricao(e) {
  document.getElementById("background-descricao").style.display = "block";
  if (e == "spirit") {
    document.getElementById("fant-nome").innerHTML = "Spirit";
    document.getElementById("fant-descricao").innerHTML =
      "O mais comum dos fantasmas, mas ainda assim poderoso e perigoso. Normalmente encontrado em um de seus locais de caçada depois de uma morte não explicada.";
    document.getElementById("fant-fraquezas").innerHTML =
      "Queime Incensos para fazê-los pararem de atacar por um longo período.";
    document.getElementById("fant-fortes").innerHTML = " - - - -";
    document.getElementById("fant-evidencias").innerHTML =
      "Spirit Box <br> Impressões digitais <br>Escrita Fantasma";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
}
