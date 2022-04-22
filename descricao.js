function fecharDescricao() {
  document.getElementsByClassName("sidebar")[0].style.right = "-6000px";
  document.getElementById("background-descricao").style.display = "none";
}

function mostrarDescricao(e) {
  document.getElementById("background-descricao").style.display = "block";
  if (e == "spirit") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Spirit";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "O mais comum dos fantasmas, mas ainda assim poderoso e perigoso. <br> Normalmente encontrado em um de seus locais de caçada depois de uma morte não explicada.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML = "Nenhum.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Queime Incensos para impedi-lo de atacar por um longo período.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Spirit Box <br> Impressões digitais <br>Escrita Fantasma";

    document.getElementById("fant-evidencias2").innerHTML =
      "Incenso fará com que pare de atacar por 3 minutos.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "wraith") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Wraith";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um dos fantasmas mais perigosos que pode encontrar. <br> O único fantasma conhecido que possui habilidade de voar e às vezes viajar através das paredes.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Quase nunca toca o solo, o que significa que não pode ser rastreado por passos.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Têm uma reação tóxica a sal.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Spirit Box <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Não deixará pegadas UV quando pisar no sal. <br> Pode ficar mais ativo após pisar no sal.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "phantom") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Phantom";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Capaz de possuir os vivos, mais comumente convocado por um tabuleiro Ouija. <br>Também induz medo nas pessoas ao seu redor.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Olhar para um Phantom diminuirá consideravelmente a sua sanidade.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Tirar uma foto dele fará com que ele desapareça temporariamente.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Impressões Digitais <br> Spirit Box <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Tirar uma foto fará com que desapareça (exceto durante a caça).";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "poltergeist") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Poltergeist";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      'Um dos mais famosos, também conhecido como "Fantasma Barulhento", pode manipular objetos ao seu redor para amedrontar suas vítimas.';
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Pode lançar vários objetos de uma vez.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Quase ineficaz em uma sala vazia.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Impressões Digitais <br> Spirit Box <br>Escrita Fantasma";

    document.getElementById("fant-evidencias2").innerHTML =
      "Cada objeto arremessado faz o jogador perder 2% de sanidade.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "banshee") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Banshee";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      'O "canto da sereia", conhecido por atrair suas vítimas através de música. <br>Costuma isolar sua presa antes de dar um golpe mortal.';
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Irá engraquecer seu alvo antes de atacar.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Pode ser ouvido através de um microfone parabólico.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Impressões Digitais <br> Orbe Fantasma <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Pode-se ouvir um som diferente no microfone parabólico. <br> Preferência por eventos com canções.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "jinn") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Jinn";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um fantasma territorial que atacará quando ameaçado. <br>Conhecido por ser capaz de andar a uma velocidade significativa.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Ficará mais rápido se a vítima estivar longe.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Desligar a fonte de energia do local impedirá o Jinn de usar sua habilidade.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Impressões Digitais <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "Não desligará o gerador (exceto se muitas luzes forem acesas).<br> Pode diminuir a sanidade de todos em um alcance de 3 metros em 25%.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "mare") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Mare";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um Mare é a fonte de todos os pesadelos, tornando-se mais poderoso no escuro.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Tem uma chance maior de atacar no escuro.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Ligar as luzes ao redor do Mare reduzirá sua chance de ataque.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Spirit Box<br> Orbe Fantasma <br>Escrita Fantasma";

    document.getElementById("fant-evidencias2").innerHTML =
      "Nunca ligará as luzes. <br> Preferência por eventos com luz(Luz vermelha e estourar).";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "revenant") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Revenant";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Lento mas violento, atacará indiscriminadamente. <br> Há rumores de que viaja a uma velocidade significativamente alta durante a caça.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Viaja a uma velocidade bem mais rápida ao caçar uma vítima.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Se move muito lentamente caso não tenha sua presa em vista.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Orbe Fantasma <br> Escrita Fantasma <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML = "Nenhuma.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "shade") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Shade";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Conhecido por ser um fastasma tímido. <br>Há evidências de que o Shade interromperá todas as atividades paranormais se houver várias pessoas por perto.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Ser tímido significa que o fantasma será mais difícil de encontrar.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Não iniciará uma caça se houver várias pessoas por perto.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Escrita Fantasma <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "Pouca chance de eventos e caças se mais de um jogador estiver no mesmo quarto ou próximo.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "demon") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Demon";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "O fantasma mais agressivo já encontrado. <br>Atacará sem motivo, aparentemente ele gosta da emoção da caça.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Iniciará caçadas com mais frequência do que outros fantasmas.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Tem medo do crucifixo e será menos agressivo perto de um.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Impressão Digital <br> Escrita Fantasma <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "Perderá menos sanidade quando utilizando um Ouija. <br> Pequena chance de iniciar uma caçada independente da sanidade.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "yurei") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Yurei";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um fantasma que voltou ao mundo físico, geralmente com propósito de vingança ou ódio.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Possui grande efeito na sanidade das pessoas.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Acender incensos na sala onde o Yurei está fará com que ele não fique andando pelo local por muito tempo.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Orbe Fantasma <br> Temperatura Baixa <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Usar o incenso fará com que fique no quarto por 1.5 minutos. <br> Pode fechar portas aleatóriamente sem realizar eventos fantasmas.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "oni") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Oni";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Adora assustar sua vítima o máximo possível antes de atacar. <br>Geralmente são vistos em sua forma física, guardando seu local de morte.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Movem objetos a grandes velocidades e são mais ativos quando as pessoas estão por perto.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Será mais fácil de encontrar e identificar por ser mais ativo.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Temperatura Baixa <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Chance de arremessar objetos com mais força, os fazendo ir mais longe. <br> Será mais ativo se houver mais pessoas próximas.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "yokai") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Yokai";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um fantasma comum, atraído por vozes humanas. <br> Geralmente encontrado em casas de família assombradas.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Falar próximo do Yokai irá irritá-lo e aumentará sua chance de ataque.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Durante a caça, o Yokai só pode ouvir vozes próximas dele.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Spirit Box <br> Orbe Fantasma <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Em uma caçada, só pode ser ouvido a uma distância menor que 2 metros.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "hantu") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Hantu";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um fantasma raro, que aparece nos climas mais gelados. <br> O frio parece torná-lo mais agressivo e poderosos.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Se move mais rapidamente em temperaturas mais baixas.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Se move mais lentamente em áreas mais quentes.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Impressão Digital <br> Orbe Fantasma <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "Nunca ligará o gerador. <br> É possível ver a fumaça saindo de sua boca em baixas temperaturas durante o ataque.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "goryo") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Goryo";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Quando passa pelo projetor D.O.T.S, só é possível vê-lo através de uma câmera de vídeo.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Normalmente só se mostra na câmera se não houver ninguém por perto.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Raramente são vistos longe do seu local de morte.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Impressão Digital <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Certeza de D.O.T.S no modo pesadelo. <br> Menos chance de ficar vagando pelo local.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "myling") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Myling";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Muito ativo e vocal. <br> Há rumores de que ficam quietos quando caçam suas presas.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Mais silencioso enquanto está realizando uma caçada.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Emite sons paranormais com mais frequência.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Impressão Digital <br>Escrita Fantasma";

    document.getElementById("fant-evidencias2").innerHTML =
      "Durante a caçada os passos só podem ser ouvidos a menos de 10 metros. <br> Faz sons no microfone parabólico.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "onryo") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Onryo";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      'Frequentemente chamado de "Espírito Raivoso". <br>Rouba almas dos corpos moribundos de suas vítimas em busca de vingança. <br>Tem medo de qualquer forma de fogo e fará de tudo para ficar longe dele.';
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Extinguir uma chama pode fazer com que o Onryo ataque.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Quando ameaçado, terá menos probabilidade de atacar.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Spirit Box <br> Orbe Fantasma <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "Pode iniciar uma caçada quando alguma chama for extinguida. <br> Velas acesas funcionam como crucifixos e apagarão caso bloqueiem um ataque.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "twins") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "The Twins";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Esses fantasmas imitam as ações um do outro. <br> Alternam seus ataques para confundir suas presas.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Qualquer um dos gêmeos pode se irritar e iniciar uma caçada a sua presa.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Frequentemente interagirão com o ambiente ao mesmo tempo.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Spirit Box <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "1° Gêmeo fica no quarto do fantasma, cria temperatura baixa e responde Spirit Box. <br> 2° Gêmeo vaga pelos quartos interagindo com ambiente e não interagirá com sensor de proximidade e Spirit Box.<br>Crucifixo só irá checar o 1° Gêmeo, independente de qual vá iniciar uma caçada.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "raiju") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Raiju";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Um demônio que se alimenta de eletricidade. <br>Embora geralmente calmo, pode ficar agitado quando tomado pelo poder.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Utiliza a energia de dispositivos elétricos próximos, ficando mais rápido durante a caça.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Interrompe constantemente equipamentos eletrônicos, se tornando mais fácil de rastrear durante seu ataque.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Orbe Fantasma <br>D.O.T.S";

    document.getElementById("fant-evidencias2").innerHTML =
      "Habilidade só funciona com equipamentos dos jogadores (exceto Câmera de cabeça e sensores de movimento/som) e não com objetos do mapa como TVs ou luzes.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "obake") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "Obake";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Terrível metamorfo capaz de assumir muitas formas. <br>Assume formas humanóides para atrair suas presas.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Raramente deixa rastros ao interagir com o ambiente.";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Ás vezes muda de forma, deixando para trás evidências únicas.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "EMF 5 <br> Impressão Digital <br>Orbe Fantasma";

    document.getElementById("fant-evidencias2").innerHTML =
      "75% de chance de deixar uma impressão digital. <br>Pequena chance de deixar uma impressão de 6 dedos. <br> Impressões podem desaparecer mais rápido que outros fantasmas.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
  if (e == "mimic") {
    // NOME
    document.getElementById("fant-nome").innerHTML = "The Mimic";
    // DESCRIÇÃO
    document.getElementById("fant-descricao").innerHTML =
      "Evasivo, misterioso e imitador, reflete traços e comportamentos de outras pessoas, incluindo outros tipos de fantasmas.";
    // FORÇA
    document.getElementById("fant-fortes").innerHTML =
      "Não se sabe do que esse fantasma é capaz. Tome cuidado!";
    // FRAQUEZA
    document.getElementById("fant-fraquezas").innerHTML =
      "Vários relatórios notaram avistamentos de orbe fantasma perto do mímico.";
    // EVIDENCIA
    document.getElementById("fant-evidencias").innerHTML =
      "Spirit Box <br> Impressão Digital <br>Temperatura Baixa";

    document.getElementById("fant-evidencias2").innerHTML =
      "Imita ações de outros fantasmas. <br>Copia quase todas as habilidades e comportamentos do fantasma imitado.";

    document.getElementsByClassName("sidebar")[0].style.right = "0";
  }
}
