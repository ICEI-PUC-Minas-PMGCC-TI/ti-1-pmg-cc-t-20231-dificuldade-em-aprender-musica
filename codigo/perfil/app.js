let userProfile = {
    usuario: "Lucca Richter",
    sobre: "Escreva algo sobre você"
  };
  
  // Recuperar perfil do localStorage, se existir
  if (localStorage.getItem("userProfile")) {
    userProfile = JSON.parse(localStorage.getItem("userProfile"));
  } else {
    // Caso contrário, salvar o perfil inicial no localStorage
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }
  
  const usuario = document.querySelector("#usuario");
  usuario.innerHTML = userProfile.usuario;
  
  let btn_editar = document.querySelector("#btn_editar");
  let btn_salvar = document.querySelector("#btn_salvar");
  let nomeUsuario = document.querySelector("#nomeUsuario");
  let sobreMim = document.querySelector("#sobreMim");
  let containerEdit = document.querySelector("#edit");
  let containerShow = document.querySelector("#show");
  let foto = document.querySelector("#fotoPerfil");
  
  containerEdit.style.display = "none";
  
  btn_editar.addEventListener("click", () => {
    containerEdit.style.display = "block";
    containerShow.style.display = "none";
    nomeUsuario.value = userProfile.usuario; // Preencher a caixa de texto com o nome de usuário atual
    sobreMim.value = userProfile.sobre; // Preencher a caixa de texto com a descrição atual
  });
  
  btn_salvar.addEventListener("click", () => {
    containerShow.style.display = "block";
    containerEdit.style.display = "none";
  
    userProfile.usuario = nomeUsuario.value;
    userProfile.sobre = sobreMim.value;
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  
    usuario.innerHTML = userProfile.usuario;
    about.innerHTML = userProfile.sobre;
  });
  
  const about = document.querySelector("#about");
  about.innerHTML = userProfile.sobre;
  