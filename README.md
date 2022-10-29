# Boas-vindas ao repositório do exerciicio de HOFs!
Este projeto foi desenvolvido por Aysllan Ferreira, enquanto estudante na Trybe para servir como material de apoio para as pessoas estudantes se prepararem para o projeto Zoo Functions.

# Orientações
	
<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git@github.com:aysllanferreira/aulao-turma-27-hofs.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd aulao-turma-27-hofs`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Não é necessário criar sua branch. 

	* Todo projeto deve ser realizado no seu PC, não necessitando assim fazer o git push para o remoto.
	
</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Para simular um ambiente real de projeto, nós usaremos o [ESLint](https://eslint.org/) para fazer a análise do código.

Para identificar os erros localmente, use no seu terminal o comando:

```bash
npm run lint
```
Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
	
</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />

Para os testes serem realizados com exito, certifique-se que a versão do seu node seja de fato a versão 16.

```bash
node -v
```

Caso você esteja utilizando outra versão, você pode usar este comando para alterar sua versão para 16.

```bash
nvm use 16
```

Todos os requisitos serão testados pelo Jest. Para rodar todos os testes, basta rodar no terminal o comando.

```bash
npm test
```
Caso queira testar apenas uma função rode o comando abaixo:

```bash
npm test tests/nome-do-arquivo
```


Por exemplo:

```bash
npm test tests/ex01.spec.js
```

</details>

<br>

### Boa sorte!!!
<br>

# Requisitos

## 1. Implemente a função `findCharacterById`.

<details>
  <summary>
  Implemente a função <code>findCharacterById</code> para buscar os guerreiros por meio de um <code>ID</code> e retorne o nome do guerreiro.
  </summary> <br />

- Encontre o personagem com ID passado por parametro e retorne um array com o nome dele neste formato

```bash
['O nome do personagem é Goku']
```

- Faça com que a função possa receber vários parametros.

- Se o parametro não for passado, retorne um array vazio.

**O que será testado:**

- A função `findCharacterById`, caso não receba nenhum parâmetro, deve retornar um array vazio;

- A função `findCharacterById`, caso receba como parâmetro um único `ID`, deve retornar o nome do guerreiro com o formato especificado.

- A função `findCharacterById`, caso receba mais de um `ID`, deve retornar o nome do guerreiro com o formato especificado referentes aos `IDs`.

</details><br>

## 2. Implemente a função `findWarrior`.
<details>
<summary>Implemente a função <code>findWarrior</code> encontrando o guerreiro que for passado por parametro. </summary><br>

- Encontre um guerreiro passado por parametro.
- Esse guerreiro deve ser encontrado por ID ou Nome.
- Se nao houver nenhum guerreiro com esse nome ou ID, retorne:
```bash
'Nenhum guerreiro encontrado'
```
- Retorne somente o nome do guerreiro.

**O que será testado:**
- A função `findWarrior`, deve ser capaz de encontrar um guerreiro especifico passando por parametro seu ID ou seu Nome.

- A função `findWarrior`, caso não receba parametros ou não encontre o guerreiro, deve retornar 'Nenhum guerreiro encontrado'.

</details><br>

## 3. Implemente a função `findYoungestWarrior`.
<details>
<summary>Implemente a função <code>findYoungestWarrior</code> encontrando o guerreiro mais jovem do objeto data e retorne apenas seu nome. </summary><br>

- Encontre o guerreiro mais jovem e retorne apenas seu nome.

**O que será testado:**

- A função `findYoungestWarrior`, deve retornar o nome do guerreiro mais jovem.

</details><br>

## 4. Implemente a função `findByPlanet`.
<details>
<summary>Implemente a função <code>findByPlanet</code> deve retornar os guerreiros que mora no planeta passado por parametro e retornar um array de objeto contendo as chaves nome e planeta. </summary><br>

- O parametro sera o planeta de nascimento do guerreiro.
Se nao houver nenhum guerreiro com esse planeta, retorne:
```bash
'Nenhum guerreiro encontrado'
```
- Retorne um objeto com o nome do guerreiro e o planeta dele.
O retorno deve ser um array de objeto no formato abaixo:
```bash
[{nome: 'Goku', planeta: 'Planeta Vegeta'}, {nome: 'Vegeta', planeta: 'Planeta Vegeta'}]
```

**O que será testado:**

- A função `findByPlanet`, caso não receba parametros deve retornar 'Nenhum guerreiro encontrado'.
- A função `findByPlanet`, caso receba um guerreiro invalido deve retornar 'Nenhum guerreiro encontrado'.
- A função `findByPlanet`, deve retornar um array de objetos que contenha as chaves nome e planeta.


</details><br>

## 5. Implemente a função `findByRaceAndAge`.
<details>
<summary>Implemente a função <code>findByRaceAndAge</code> encontrando todos os guerreiros que forem passados por parametro e retornando se TODOS possuem a idade maior do que a especificada por parametro.</summary><br>

- O primeiro parametro é uma raca de guerreiros.
- O segundo parametro é uma idade.

- Se nao for passado parametros, retorne um objeto vazio.
- Se o guerreiro nao for encontrado, retorne:
```bash
'Guerreiro não encontrado!'
```
- Se a idade for um numero negativo ou string, retorne:
```bash
'Idade invalida!'
```

- Encontre todos os guerreiros da raça passada por parametro.
- Verifique se TODOS os guerreiros tem a idade maior do que a idade passada.
- O valor retornado deve ser booleano.

**O que será testado:**

- A função `findByRaceAndAge`, caso não receba nenhum parametro deve retornar um objeto vazio.

- A função `findByRaceAndAge`, caso não encontre a raça passada por parametro, deve retornar 'Guerreiro não encontrado!'.

- A função `findByRaceAndAge`, caso a idade for um numero negativo ou string, retorne Idade invalida!'

- A função `findByRaceAndAge`, deve encontrar todos os guerreiros da raça passada por parametro e verificar se TODOS eles tem a idade maior ou igual ao parametro idade. O retorno deve ser um booleano.

</details>