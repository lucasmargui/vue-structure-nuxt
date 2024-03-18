<H1 align="center">Estrutura Nuxt</H1>
<p align="center">🚀 Estrutura Nuxt para referências futuras</p>



<div align="center">
  <img src="" style="width:50%">
</div>
<br>

## Criação de projeto Nuxt

```
npx nuxi@latest init vue-estrutura-nuxt
```

## Rotas de navegação


No framework Nuxt.js, ao criar um diretório denominado "pages", ele automaticamente gera um sistema de rotas sem a necessidade de especificação de rotas no código fonte. A página inicial renderizada ao acessar o endereço http://localhost:3000/ será determinada pelo arquivo com o nome "index". Além disso, ao criar um diretório chamado "products", o framework adiciona automaticamente um caminho de rota correspondente como uma sub-rota, acessível através de http://localhost:3000/products. A primeira página renderizada dentro do diretório "products" será aquela cujo arquivo possuir o nome "index".

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/2c44115a-c969-4c18-ba36-70a3b06a0571" style="width:100%">
</div>
<br>

### Parâmetros nas rotas

O [id] dentro do nome do arquivo é uma parte opcional que pode ser usada para representar um componente dinâmico. Isso significa que o valor [id] pode ser substituído por qualquer identificador específico em tempo de execução.

Por exemplo, se você tiver um arquivo chamado products.vue em um diretório pages, ele será mapeado para a rota /products. No entanto, se você tiver um arquivo chamado [id].vue no mesmo diretório, ele será mapeado para uma rota dinâmica, como /products/1 ou /products/2, dependendo do valor do id passado na URL.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/e97ef049-7f3e-4ee7-99ac-3494b3bd65e1" style="width:100%">
</div>






### Destruturação do parâmetro da rota

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/a9f1df3c-b565-4f30-b668-1140e685f5cd" style="width:60%">
</div>

Para obter o id passado como parâmetro, empregamos a destruturação { id }. É crucial destacar que o nome da variável pela qual desejamos extrair o valor via destruturação deve coincidir com o nome estabelecido no componente [nomedavariavel].vue, ou seja, para [id].vue utilizaremos a destruturação { id }, enquanto para [code].vue utilizaremos a destruturação { code }.


## Nuxtlink


O componente NuxtLink do Nuxt.js automatiza a importação e criação de links em uma aplicação Vue.js. Isso elimina a necessidade de importar manualmente os componentes necessários para a criação de links, já que o Nuxt.js cuida disso internamente. Ao utilizar <NuxtLink>, como exemplificado abaixo:

```
<NuxtLink to="/">Home</NuxtLink>
<NuxtLink to="/about">About</NuxtLink>
<NuxtLink to="/products">Products</NuxtLink>

```

O componente NuxtLink renderiza os links necessários sem a necessidade de renderizar a página inteira novamente. Isso proporciona uma experiência de navegação mais rápida e eficiente para o usuário, pois apenas o componente necessário é renderizado, mantendo o estado da aplicação quando navegando entre as diferentes rotas.


## Layouts

No diretório raiz do projeto, deve-se criar um subdiretório denominado "layouts" e dentro dele criar um arquivo chamado "default.vue". Este componente será designado como o componente base, o qual será automaticamente referenciado pelo framework Nuxt. O Nuxt irá buscar automaticamente pelo componente "default.vue" dentro do diretório "layouts" e irá encapsular todo o conteúdo das páginas renderizadas dentro do slot da div.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/ebdce045-b9cd-4a89-9947-ee9fc666645b" style="width:100%">
</div>

### layouts customizáveis

Para aplicar um layout personalizado, é necessário criar um arquivo na pasta de layouts com o mesmo nome do componente ao qual deseja aplicar o layout personalizado.

- Se desejar aplicar o layout padrão para todas as páginas/caminhos, crie um arquivo chamado "default.vue" na pasta de layouts.
- Se desejar aplicar o layout para uma página/caminho específico, crie um arquivo com o nome correspondente ao componente dessa página. Por exemplo, para aplicar o layout ao componente "products.vue", crie um arquivo com o nome "products.vue" na pasta de layouts.
Para informar ao componente "products/index.vue" que queremos usar esse layout personalizado, podemos fazê-lo através da função "definePageMeta".

```
definePageMeta ({
        layout: 'products'
    })
```

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/bac285e4-b8c8-47a6-b45d-f5ff52499194" style="width:100%">
</div>


## Adicionando TailWind Css

Tailwind CSS é um framework de desenvolvimento front-end para construir interfaces de usuário em páginas da web. Ele fornece uma abordagem diferente de outros frameworks CSS, como Bootstrap ou Foundation. Em vez de oferecer componentes prontos para uso, o Tailwind CSS fornece classes de utilidade que podem ser aplicadas diretamente ao HTML para estilizar os elementos.

```
npm install --save-dev @nuxtjs/tailwindcss

```



<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/ba7bfa7e-2f88-4742-8aba-a29c99d7da33" style="width:60%">
</div>


## Fetching data

O código utiliza a função useFetch para realizar uma requisição assíncrona para o endpoint especificado. Essa função retorna um objeto que possui uma propriedade chamada products, a qual contém uma coleção de dados de produtos. A desestruturação { data: products } é utilizada para extrair a propriedade data do objeto retornado pela função useFetch, sendo que data é o nome da chave do objeto a ser extraída, e products é o nome da variável que receberá o valor correspondente a essa chave.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/ac87508a-1116-4077-85c1-1df80951cb82" style="width:100%">
</div>


O parâmetro key é fornecido como uma opção para a função useFetch, sendo utilizado na chamada useFetch(uri, { key: id }). Esse método é implementado para permitir que uma nova requisição seja acionada, caso uma requisição anterior já tenha sido feita na página. Isso garante que o framework reconheça a intenção de buscar novos dados, evitando a reutilização de uma requisição anterior.


## Componentes reutilizáveis

Criação de um diretório de componentes para o reconhecimento automático pelo NUXT, facilitando a localização e utilização dos componentes necessários. Durante a passagem de propriedades via pros utilizando componentes dentro de outros componentes, é necessário identificar e realizar a desestruturação das propriedades recebidas.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/53dde8a9-001d-4142-8285-272bb33f25b8" style="width:100%">
</div>


- Passando as propriedades via props

```
    <div v-for="p in products"> 
            <ProductCard :product="p" />
    </div>

```

- Desestruturação das propriedades recebidas.

```
 const { product } = defineProps(['product'])

```

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/17806030-2ce0-4813-892d-4e527325cf04" style="width:100%">
</div>


## Customização de Error Page

No diretório raiz, crie um arquivo chamado error.vue. O framework Nuxt irá automaticamente localizar este arquivo e o utilizará como view para exibir erros. Quando chamado, Nuxt passará o objeto de erro como uma propriedade. Dentro do arquivo error.vue, é necessário identificar este objeto e utilizar suas propriedades conforme necessário.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/f31ff49b-bf41-462a-b85a-1c15848edc54" style="width:100%">
</div>


















