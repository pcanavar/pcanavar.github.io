(function () {
  var messages = [
    "Te amo",
    "Acredito em você",
    "Você consegue",
    "Tenho muito orgulho de você",
    "Você é incrível",
    "Vai dar tudo certo",
    "Confie em você",
    "Você está quase lá",
    "Cada página conta",
    "Você é mais forte do que pensa",
    "Respira fundo, você sabe disso",
    "O esforço vale a pena",
    "Foca, eu estou com você",
    "Você nasceu pra isso",
    "Um passo de cada vez",
    "Sua dedicação é linda",
    "Você vai arrasar nessa prova",
    "Nunca duvide de você",
    "Estou tão orgulhoso de você",
    "Você é a minha inspiração",
    "Mais um pouco e você consegue",
    "Acredite no seu potencial",
    "Que ninguém te diga que você não consegue",
    "Você é capaz de tudo",
    "Brilha, que é o que você sabe fazer",
    "Eu vejo o quanto você se esforça",
    "Continua, você está indo muito bem",
    "Você é a melhor",
    "Hoje é mais um dia de vitória",
    "Você vai ser uma médica incrível",
    "O cansaço passa, o orgulho fica",
    "Você merece tudo de bom",
    "Estou aqui pra você, sempre",
    "Sua força me inspira",
    "Não desista, falta pouco",
    "Você ilumina tudo ao seu redor",
    "Cada esforço te aproxima do sonho",
    "Você é imparável",
    "Descansa quando precisar, mas não desista",
    "Tenho sorte de ter você",
    "Você é o meu orgulho",
    "Você vai conseguir, eu sei que vai",
    "Confie no processo",
    "Você é luz",
    "O futuro é seu",
    "Você faz parecer fácil",
    "Sua coragem é admirável",
    "Mais perto do que ontem",
    "Você é especial",
    "Sempre torcendo por você"
  ];

  var el = document.getElementById("love-msg");
  if (!el) return;

  // Shuffle once so the order varies between visits, but every message shows.
  for (var i = messages.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = messages[i];
    messages[i] = messages[j];
    messages[j] = tmp;
  }

  var idx = 0;
  function render() {
    el.innerHTML = messages[idx] + " ❤️";
    idx = (idx + 1) % messages.length;
  }

  function rotate() {
    el.style.opacity = "0";
    setTimeout(function () {
      render();
      el.style.opacity = "1";
    }, 500);
  }

  render();
  setInterval(rotate, 5000);
})();
