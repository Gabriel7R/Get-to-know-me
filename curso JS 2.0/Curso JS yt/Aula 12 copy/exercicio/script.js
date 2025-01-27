function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Nesse exato momento são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    ("Tenha um ótimo dia");
    img.src = "dia.jpg";
    document.body.style.background = "#cf8b48";
  } else if (hora >= 12 && hora < 18) {
    ("Tenha uma ótima tarde");
    img.src = "tarde.jpg";
    document.body.style.background = "#5f6aad";
  } else {
    ("tenha uma ótima noite");
    img.src = "noite.jpg";
    document.body.style.background = "#192152";
  }
}
