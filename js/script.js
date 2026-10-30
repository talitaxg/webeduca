const formulario = document.querySelector("#form-pesquisa"); 
const campoCurso = document.querySelector("#curso"); 
const resultado = document.querySelector("#resultado"); 
formulario.addEventListener("submit", function (evento) { 
evento.preventDefault(); 
const curso = campoCurso.value.trim(); 
if (curso === "") { 
resultado.textContent = "Seja bem-vindo, digite aqui o curso que você deseja."; 
campoCurso.focus(); 
return; 
} 
resultado.textContent = `Pesquisa concluida: ${curso}`; 
});
