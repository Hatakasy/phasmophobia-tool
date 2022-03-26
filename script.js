emf = ["emf", 0];
impressao = ["impressao", 0];
orb = ["orb", 0];
escrita = ["escrita", 0];
temp = ["temp", 0];
dots = ["dots", 0];
spirit = ["spirit", 0];

function mudarEvidencia(e) {
  elemento = document.getElementById(e);
  if (e == "emf") {
    emf[1] += 1;
    if (emf[1] == 1) {
      elemento.innerText = "☒ EMF 5";
    }
    if (emf[1] == 2) {
      elemento.innerText = "☐ EMF 5";
      elemento.style.textDecoration = "line-through";
    }
    if (emf[1] == 3) {
      elemento.style.textDecoration = "none";
      emf[1] = 0;
    }
  }
  if (e == "impressao") {
    impressao[1] += 1;
    if (impressao[1] == 1) {
      elemento.innerText = "☒ Impressão Digital";
    }
    if (impressao[1] == 2) {
      elemento.innerText = "☐ Impressão Digital";
      elemento.style.textDecoration = "line-through";
    }
    if (impressao[1] == 3) {
      elemento.style.textDecoration = "none";
      impressao[1] = 0;
    }
  }
  if (e == "orb") {
    orb[1] += 1;
    if (orb[1] == 1) {
      elemento.innerText = "☒ Orbe Fantasma";
    }
    if (orb[1] == 2) {
      elemento.innerText = "☐ Orbe Fantasma";
      elemento.style.textDecoration = "line-through";
    }
    if (orb[1] == 3) {
      elemento.style.textDecoration = "none";
      orb[1] = 0;
    }
  }
  if (e == "escrita") {
    escrita[1] += 1;
    if (escrita[1] == 1) {
      elemento.innerText = "☒ Escrita Fantasma";
    }
    if (escrita[1] == 2) {
      elemento.innerText = "☐ Escrita Fantasma";
      elemento.style.textDecoration = "line-through";
    }
    if (escrita[1] == 3) {
      elemento.style.textDecoration = "none";
      escrita[1] = 0;
    }
  }
  if (e == "temp") {
    temp[1] += 1;
    if (temp[1] == 1) {
      elemento.innerText = "☒ Temperatura Baixa";
    }
    if (temp[1] == 2) {
      elemento.innerText = "☐ Temperatura Baixa";
      elemento.style.textDecoration = "line-through";
    }
    if (temp[1] == 3) {
      elemento.style.textDecoration = "none";
      temp[1] = 0;
    }
  }
  if (e == "dots") {
    dots[1] += 1;
    if (dots[1] == 1) {
      elemento.innerText = "☒ D.O.T.S";
    }
    if (dots[1] == 2) {
      elemento.innerText = "☐ D.O.T.S";
      elemento.style.textDecoration = "line-through";
    }
    if (dots[1] == 3) {
      elemento.style.textDecoration = "none";
      dots[1] = 0;
    }
  }
  if (e == "spirit") {
    spirit[1] += 1;
    if (spirit[1] == 1) {
      elemento.innerText = "☒ Spirit Box";
    }
    if (spirit[1] == 2) {
      elemento.innerText = "☐ Spirit Box";
      elemento.style.textDecoration = "line-through";
    }
    if (spirit[1] == 3) {
      elemento.style.textDecoration = "none";
      spirit[1] = 0;
    }
  }
  alterarFantasmas(e);
}

function alterarFantasmas(e) {
  evidencias = [emf, impressao, orb, escrita, temp, dots, spirit];
  evidencias_marcadas = [];
  evidencias_riscadas = [];

  evidencias.forEach((e) => {
    if (e[1] == 1) {
      evidencias_marcadas.push(e[0]);
    }
    if (e[1] == 2) {
      evidencias_riscadas.push(e[0]);
    }
  });

  items = document.getElementsByClassName("item");

  if (evidencias_marcadas.length == 1) {
    evi = evidencias_marcadas[0];
    for (let i of items) {
      if (i.classList.contains(evi)) {
        i.style.color = "black";
        i.style.textDecoration = "none";
      } else {
        i.style.color = "rgb(190, 167, 122)";
        i.style.textDecoration = "line-through";
      }
    }
  } else if (evidencias_marcadas.length == 2) {
    evi = evidencias_marcadas[0];
    evi2 = evidencias_marcadas[1];
    for (let i of items) {
      if (i.classList.contains(evi) && i.classList.contains(evi2)) {
        i.style.color = "black";
        i.style.textDecoration = "none";
      } else {
        i.style.color = "rgb(190, 167, 122)";
        i.style.textDecoration = "line-through";
      }
    }
  } else if (evidencias_marcadas.length == 3) {
    evi = evidencias_marcadas[0];
    evi2 = evidencias_marcadas[1];
    evi3 = evidencias_marcadas[2];
    for (let i of items) {
      if (
        i.classList.contains(evi) &&
        i.classList.contains(evi2) &&
        i.classList.contains(evi3)
      ) {
        i.style.color = "black";
        i.style.textDecoration = "none";
      } else {
        i.style.color = "rgb(190, 167, 122)";
        i.style.textDecoration = "line-through";
      }
    }
  } else {
    for (let i of items) {
      i.style.color = "black";
      i.style.textDecoration = "none";
    }
  }

  if (evidencias_riscadas.length >= 1) {
    evidencias_riscadas.forEach((e) => {
      for (let i of items) {
        if (i.classList.contains(e)) {
          i.style.color = "rgb(190, 167, 122)";
          i.style.textDecoration = "line-through";
        }
      }
    });
  } else {
    if (evidencias_riscadas.length == 0) {
      evidencias_riscadas.forEach((e) => {
        for (let i of items) {
          if (i.classList.contains(e)) {
            i.style.textDecoration = "none";
          }
        }
      });
    }
  }
}
