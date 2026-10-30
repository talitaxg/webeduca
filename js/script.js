const MENSAGEM_CAMPO_VAZIO = "Seja bem-vindo! Digite o curso que deseja.";

const cursos = [
  {
    nome: "HTML e CSS",
    descricao: "Aprenda a estruturar e estilizar páginas web.",
    nivel: "Iniciante",
    carga: "20 horas"
  },
  {
    nome: "JavaScript",
    descricao: "Conheça os fundamentos da programação web.",
    nivel: "Iniciante",
    carga: "30 horas"
  },
  {
    nome: "Lógica de Programação",
    descricao: "Desenvolva o raciocínio lógico e algoritmos.",
    nivel: "Iniciante",
    carga: "24 horas"
  },
  {
    nome: "Desenvolvimento Web",
    descricao: "Integre tecnologias para criar aplicações.",
    nivel: "Intermediário",
    carga: "40 horas"
  }
];

const formulario = document.querySelector("#form-pesquisa");
const campoCurso = document.querySelector("#curso");
const resultado = document.querySelector("#resultado");
const listaCursos = document.querySelector("#lista-cursos");

function filtrarCursos(termo) {
  const busca = termo.trim().toLocaleLowerCase("pt-BR");
  return cursos.filter((curso) =>
    curso.nome.toLocaleLowerCase("pt-BR").includes(busca)
  );
}

function exibirCursos(lista) {
  listaCursos.replaceChildren();

  lista.forEach((curso) => {
    const cartao = document.createElement("article");
    const titulo = document.createElement("h3");
    const descricao = document.createElement("p");
    const detalhes = document.createElement("p");

    cartao.className = "curso";
    detalhes.className = "detalhes";
    titulo.textContent = curso.nome;
    descricao.textContent = curso.descricao;
    detalhes.textContent = `Nível: ${curso.nivel} | Carga horária: ${curso.carga}`;

    cartao.append(titulo, descricao, detalhes);
    listaCursos.append(cartao);
  });
}

function atualizarResultado(lista) {
  resultado.textContent = lista.length === 0
    ? "Nenhum curso encontrado."
    : `${lista.length} curso(s) encontrado(s).`;
}

campoCurso.addEventListener("input", () => {
  const encontrados = filtrarCursos(campoCurso.value);
  exibirCursos(encontrados);
  atualizarResultado(encontrados);
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (campoCurso.value.trim() === "") {
    exibirCursos(cursos);
    resultado.textContent = MENSAGEM_CAMPO_VAZIO;
    campoCurso.focus();
    return;
  }

  const encontrados = filtrarCursos(campoCurso.value);
  exibirCursos(encontrados);
  atualizarResultado(encontrados);
});

exibirCursos(cursos);
atualizarResultado(cursos);
