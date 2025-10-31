document.getElementById("formPesquisa").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const respostas = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      nascimento: document.getElementById("nascimento").value,
      p1: document.querySelector('input[name="p1"]:checked').value,
      p2: document.querySelector('input[name="p2"]:checked').value,
      p3: document.querySelector('input[name="p3"]:checked').value,
      p4: document.querySelector('input[name="p4"]:checked').value,
      p5: document.querySelector('input[name="p5"]:checked').value,
      p6: document.querySelector('input[name="p6"]:checked').value
    };
  
    fetch("salvar_respostas.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(respostas)
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "ok") {
        alert("Respostas enviadas com sucesso!");
        window.location.href = "grafico.html";
      } else {
        alert("Erro: " + data.mensagem);
      }
    })
    .catch(() => alert("Erro ao conectar com o servidor."));
  });
  