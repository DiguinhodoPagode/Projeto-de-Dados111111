if (localStorage.getItem("adminLogado") !== "true") {
    alert("Acesso negado. Faça login como administrador.");
    window.location.href = "admin.html";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabelaResultados tbody");
  
    fetch("buscar_respostas.php")
      .then(res => res.json())
      .then(dados => {
        if (!dados || dados.length === 0) {
          tabela.innerHTML = `<tr><td colspan="10" style="text-align:center;">Nenhuma resposta registrada.</td></tr>`;
        } else {
          dados.forEach(r => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
              <td>${r.nome}</td>
              <td>${r.email}</td>
              <td>${r.nascimento}</td>
              <td>${r.p1}</td>
              <td>${r.p2}</td>
              <td>${r.p3}</td>
              <td>${r.p4}</td>
              <td>${r.p5}</td>
              <td>${r.p6}</td>
              <td>${r.data_envio}</td>
            `;
            tabela.appendChild(linha);
          });
        }
      })
      .catch(() => {
        tabela.innerHTML = `<tr><td colspan="10" style="text-align:center;">Erro ao carregar dados do servidor.</td></tr>`;
      });
  
    document.getElementById("limpar").addEventListener("click", () => {
      const senha = prompt("Confirme a senha do administrador:");
      if (senha === "admin123") {
        if (confirm("Tem certeza que deseja apagar todos os dados?")) {
          fetch("apagar_respostas.php", { method: "POST" })
            .then(() => {
              alert("Todos os dados foram apagados.");
              location.reload();
            });
        }
      } else if (senha !== null) {
        alert("Senha incorreta.");
      }
    });
  
    document.getElementById("logout").addEventListener("click", () => {
      const msg = document.getElementById("mensagemLogout");
      msg.textContent = "Logout realizado com sucesso.";
      msg.style.display = "block";
      setTimeout(() => {
        localStorage.removeItem("adminLogado");
        window.location.href = "admin.html";
      }, 1800);
    });
  });
  