const formulario = document.querySelector("#form-pesquisa"); 
const campoCurso = document.querySelector("#curso"); 
const resultado = document.querySelector("#resultado"); 
formulario.addEventListener("submit", function (evento) { 
evento.preventDefault(); 
const curso = campoCurso.value.trim(); 
if (curso === "") { 
resultado.textContent = "Digite o nome de um curso."; 
campoCurso.focus(); 
return; 
} 
resultado.textContent = `Pesquisa realizada: ${curso}`; 
});
