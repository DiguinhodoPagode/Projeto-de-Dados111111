document.getElementById("formPesquisa").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const nascimento = document.getElementById("nascimento").value;

  const respostas = {
    nome,
    email,
    nascimento,
    p1: document.querySelector('input[name="p1"]:checked').value,
    p2: document.querySelector('input[name="p2"]:checked').value,
    p3: document.querySelector('input[name="p3"]:checked').value,
    p4: document.querySelector('input[name="p4"]:checked').value,
    p5: document.querySelector('input[name="p5"]:checked').value,
    p6: document.querySelector('input[name="p6"]:checked').value,
    data: new Date().toLocaleString('pt-BR')
  };

  let lista = JSON.parse(localStorage.getItem("respostas")) || [];
  lista.push(respostas);
  localStorage.setItem("respostas", JSON.stringify(lista));

  window.location.href = "grafico.html";
});
