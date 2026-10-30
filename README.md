# WebEduca — Portal de Aprendizagem

Aplicação web estática que apresenta um catálogo simples de cursos introdutórios de tecnologia, com pesquisa por nome. Projeto integrador da disciplina de Programação Web I (Engenharia de Software, UEPA).

**Site publicado:** https://talitaxg.github.io/webeduca/

## Objetivo

Aplicar os conhecimentos da disciplina em um produto funcional, da organização dos arquivos até a publicação na internet: integração de HTML, CSS e JavaScript, boas práticas, validação de padrões W3C, otimização de desempenho e hospedagem estática.

## Tecnologias utilizadas

- HTML5 (marcação semântica)
- CSS3 (variáveis CSS, Grid e media queries)
- JavaScript (manipulação do DOM)
- Git e GitHub
- GitHub Pages (hospedagem)

## Como executar localmente

1. Baixe o repositório (**Code > Download ZIP**) e extraia a pasta.
2. Abra o arquivo `index.html` em um navegador.

Não é necessário instalar nada nem usar servidor.

## Estrutura dos arquivos

```
webeduca/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura da página |
| `css/style.css` | Estilos e layout responsivo |
| `js/script.js` | Lista de cursos, pesquisa e mensagens |

## Funcionalidades

- Apresentação do portal (RF01)
- Lista de cursos em cartões (RF02)
- Pesquisa de cursos por nome, sem diferenciar maiúsculas de minúsculas (RF03)
- Mensagem "Nenhum curso encontrado." quando a busca não retorna resultados (RF04)
- Informações básicas de cada curso: descrição, nível e carga horária (RF05)
- Menu de navegação entre as seções Cursos e Sobre (RF06)
- Mensagem de orientação ao enviar o formulário com o campo vazio
- Layout responsivo: cartões em duas colunas e, em telas estreitas, em uma coluna
- Contador de cursos encontrados, anunciado por leitores de tela (`aria-live`)

## Boas práticas aplicadas

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`) e campo de formulário com `label`
- Textos inseridos com `textContent`, e não `innerHTML`
- CSS organizado com variáveis (`--cor-primaria` e `--cor-destaque`)
- Script carregado com `defer`
- Foco visível em links, campo e botão para navegação por teclado

## Validação

| Ferramenta | Resultado |
|---|---|
| Nu Html Checker (validator.w3.org/nu) | Nenhum erro e nenhum aviso |
| Validador CSS do W3C (jigsaw.w3.org/css-validator) | Nenhum erro encontrado (CSS nível 3 + SVG) |

Correção feita durante o desenvolvimento: o `script.js` havia sido criado dentro da pasta `css` (`css/js/script.js`) e foi movido para `js/script.js`, que é o caminho usado pelo `index.html`.

## Desempenho

Auditoria feita com o PageSpeed Insights, na aba Celular, antes e depois das melhorias.

| Categoria | Antes | Depois |
|---|---|---|
| Desempenho | 100 | 100 |
| Acessibilidade | 100 | 100 |
| Práticas recomendadas | 100 | 100 |
| SEO | 90 | 100 |

Métricas após as melhorias: LCP 0,8 s, CLS 0, TBT 0 ms.

Melhorias realizadas:

1. Inclusão de `<meta name="description">`, apontada pela auditoria como pendente no SEO.
2. Inclusão de `<link rel="icon" href="data:,">`, evitando a requisição de favicon que resulta em erro 404.
3. Uso de variáveis CSS para as cores, reduzindo repetição e facilitando a manutenção.

O projeto não utiliza imagens, portanto não houve otimização de imagens.

## Testes funcionais

| Teste | Procedimento | Resultado esperado | Resultado obtido |
|---|---|---|---|
| T01 | Abrir a página inicial | O portal é exibido corretamente | [preencher] |
| T02 | Pesquisar "html" | O curso HTML e CSS aparece | [preencher] |
| T03 | Pesquisar "JAVASCRIPT" | O curso correspondente aparece | [preencher] |
| T04 | Pesquisar um termo inexistente | Mensagem de nenhum resultado | [preencher] |
| T05 | Limpar o campo de pesquisa | Todos os cursos voltam a aparecer | [preencher] |
| T06 | Abrir em tela estreita | Os cartões se adaptam à largura | [preencher] |
| T07 | Navegar pelo teclado | Links, campo e botão recebem foco | [preencher] |
| T08 | Abrir o endereço em outro dispositivo | A aplicação carrega por completo | [preencher] |

## Autoria

- [Talita Gabriely Mendes de Lima]

Disciplina: Programação Web I — Engenharia de Software — UEPA
Professora: Jacqueline Teixeira
