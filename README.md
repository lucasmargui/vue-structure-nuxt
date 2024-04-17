
<H1 align="center">Nuxt Structure</H1>
<p align="center">🚀 Nuxt framework for future references</p>


## Create Nuxt project

```
npx nuxi@latest init vue-structure-nuxt
```



### Meta data and useHead


This code is a configuration for a Nuxt.js application to use Tailwind CSS as a module, sets the page title and description, and adds a link to import the "Material Icons" font.


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/165d1241-3285-40d8-9af2-9662693523cf" style="width:100%">
</div>



- export default defineNuxtConfig({ ... }): This is a common pattern in Nuxt.js projects. It exports the application configuration using the defineNuxtConfig function, which is provided by the Nuxt.js framework itself.

- modules: ['@nuxtjs/tailwindcss']: Here a module is being defined for Nuxt.js. In this case, it is the tailwindcss module, which is a popular tool for styling web applications.

- app: This is a section where you can configure specific settings for the Nuxt.js application.

- head: This is a section where you can define meta information for the head of the HTML document.

- title: 'Nuxt example': Sets the page title to "Nuxt example".

- meta: Meta information for the page is defined here. In the code provided, there is a meta description defined as "Everything about nuxt 3".

- link: Here the links to external stylesheets are defined. In the provided code, a link is being added to import the "Material Icons" font from Google Fonts.

### Adding TailWind Css

Tailwind CSS is a front-end development framework for building user interfaces on web pages. It provides a different approach than other CSS frameworks like Bootstrap or Foundation. Instead of offering ready-to-use components, Tailwind CSS provides utility classes that can be applied directly to HTML to style elements.

```
npm install --save-dev @nuxtjs/tailwindcss

```

## Navigation routes


In the Nuxt.js framework, when creating a directory called "pages", it automatically generates a route system without the need to specify routes in the source code. The home page rendered when accessing http://localhost:3000/ will be determined by the file named "index". Additionally, when creating a directory called "products", the framework automatically adds a corresponding route path as a subroute, accessible through http://localhost:3000/products. The first page rendered within the "products" directory will be the one whose file has the name "index".

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/2c44115a-c969-4c18-ba36-70a3b06a0571" style="width:100%">
</div>
<br>

### Parameters in routes

The [id] within the file name is an optional part that can be used to represent a dynamic component. This means that the [id] value can be replaced with any specific identifier at run time.

For example, if you have a file called products.vue in a pages directory, it will be mapped to the /products route. However, if you have a file called [id].vue in the same directory, it will be mapped to a dynamic route, such as /products/1 or /products/2, depending on the id value passed in the URL.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/e97ef049-7f3e-4ee7-99ac-3494b3bd65e1" style="width:100%">
</div>


### Route parameter destructuring

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/a9f1df3c-b565-4f30-b668-1140e685f5cd" style="width:60%">
</div>

To obtain the id passed as a parameter, we employ the { id } destructuring. It is crucial to highlight that the name of the variable from which we wish to extract the value via destructuring must coincide with the name established in the [variablename].vue component, that is, for [id].vue we will use the { id } destructuring, while for [code ].vue we will use the { code } destructuring.



## Nuxtlink


The NuxtLink component of Nuxt.js automates the import and creation of links in a Vue.js application. This eliminates the need to manually import the components required for link creation, as Nuxt.js takes care of this internally. When using <NuxtLink>, as shown below:

```
<NuxtLink to="/">Home</NuxtLink>
<NuxtLink to="/about">About</NuxtLink>
<NuxtLink to="/products">Products</NuxtLink>

```

The NuxtLink component renders the necessary links without having to re-render the entire page. This provides a faster and more efficient navigation experience for the user, as only the necessary component is rendered, maintaining the application state when navigating between different routes.


## Layouts

In the project's root directory, you must create a subdirectory called "layouts" and within it create a file called "default.vue". This component will be designated as the base component, which will be automatically referenced by the Nuxt framework. Nuxt will automatically search for the "default.vue" component within the "layouts" directory and will encapsulate all the content of the rendered pages within the div slot.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/ebdce045-b9cd-4a89-9947-ee9fc666645b" style="width:100%">
</div>

### customizable layouts

To apply a custom layout, you must create a file in the layouts folder with the same name as the component to which you want to apply the custom layout.

- If you want to apply the default layout to all pages/paths, create a file called "default.vue" in the layouts folder.
- If you want to apply the layout to a specific page/path, create a file with the name corresponding to the component on that page. For example, to apply the layout to the "products.vue" component, create a file named "products.vue" in the layouts folder.
To tell the "products/index.vue" component that we want to use this custom layout, we can do so through the "definePageMeta" function.

```
definePageMeta ({
 layout: 'products'
 })
```

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/bac285e4-b8c8-47a6-b45d-f5ff52499194" style="width:100%">
</div>


### Result

<div align="center">
 <h3>Default</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/11d015e9-c808-4356-b9b9-072decaea675" style="width:100%">
 <h3>Products</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/031c1e5a-626c-4d69-aadc-e6d71c5b23b0" style="width:100%">
</div>

## Fetching data

The code uses the useFetch function to make an asynchronous request to the specified endpoint. This function returns an object that has a property called products, which contains a collection of product data. The { data: products } destructuring is used to extract the data property from the object returned by the useFetch function, where data is the name of the object key to be extracted, and products is the name of the variable that will receive the value corresponding to this key .

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/ac87508a-1116-4077-85c1-1df80951cb82" style="width:100%">
</div>


The key parameter is provided as an option to the useFetch function, being used in the useFetch(uri, { key: id }) call. This method is implemented to allow a new request to be triggered if a previous request has already been made on the page. This ensures that the framework recognizes the intention to fetch new data, avoiding the reuse of a previous request.


### Result

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/9f92a625-eee0-4c28-a804-fa3c675599bc" style="width:100%">
</div>




## Reusable components

Creation of a component directory for automatic recognition by NUXT, making it easier to find and use the necessary components. When passing properties via pros using components within other components, it is necessary to identify and destruct the received properties.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/53dde8a9-001d-4142-8285-272bb33f25b8" style="width:100%">
</div>


- Passing properties via props

```
 <div v-for="p in products">
 <ProductCard :product="p" />
 </div>

```

- Destructuring of received properties.

```
 const { product } = defineProps(['product'])

```

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/17806030-2ce0-4813-892d-4e527325cf04" style="width:100%">
</div>


## Error Page Customization

In the root directory, create a file called error.vue. The Nuxt framework will automatically locate this file and use it as a view to display errors. When called, Nuxt will pass the error object as a property. Within the error.vue file, you need to identify this object and use its properties as necessary.

When rendering the error.vue component, Nuxt will pass the error object as props.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/f31ff49b-bf41-462a-b85a-1c15848edc54" style="width:100%">
</div>

## Custom metadata

### Changing via script


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/2a95bac7-1868-43f9-9a86-f0e952a6fcb0" style="width:60%">
</div>


### Changing via components

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/4867df1a-8e14-422b-b290-1aeaf931f99e" style="width:60%">
</div>



## ServerRoute

To create a server Route it is necessary to create the server directory in the project root directory

The routing logic will be similar to pages, however when accessing the path the server will return a json defined in ninja.js

<div align="center">
 <h3> Directory </h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/d9ff0e2d-3f5f-4333-85db-e4817683e83b" style="width:60%">
</div>




### Get Method

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/ef7fc195-5062-4379-a703-934d2334d41c" style="width:100%">
</div>

### Post Method

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/2ae50758-35e3-459c-886c-49d799f940a5" style="width:100%">
</div>


## Dynamic routes

When creating a dynamic route, it is common to access an API endpoint from the frontend, using a specific component, as in the case of the "about" component, which accesses the "/api/ninja" endpoint. In this context, "api" represents the directory where API endpoints are created, while "ninja" is the specific file that defines the endpoint.

Additionally, it is possible to create subdirectories within the "api" directory, and this will be reflected in the route path, for example, when creating a subdirectory called "currency" within "api" and a file within that subdirectory, the resulting endpoint will be "/api/currency/filename".


### Dynamic route creation

To implement dynamic subroutes, we can follow the logic used for files with dynamic patterns, such as "[id].vue" in products. In this case, we will use a similar pattern, using "[code]" to reference each currency pair, for example.

Additionally, to ensure security and avoid exposing API keys directly in the source code, it is recommended to use environment variables. To do this, we can create a file called ".env" and add our API key as an environment variable, allowing secure access without direct exposure in the source code.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/fdb354bd-1a6b-44da-bfd7-6f2625fb967c" style="width:80%">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/86161382-9f77-44d8-aaac-f4bd8f721b73" style="width:80%">
</div>





### Environment variable creation

To safely include the apiKey without exposing it in the code, we can set an environment variable and store it in an .env file.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/943303bc-1260-4a15-a11c-97abc87bb281" style="width:60%">
</div>


### Integrating the environment variable into the framework

We incorporate the environment variable in the nuxt.config.ts file, specifically within the runtimeConfig parameter.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/fba81b1a-7e4d-4afb-a5d4-5bcb4131f4a0" style="width:60%">
</div>


### Fetching the value of the environment variable

We use useRuntimeConfig() to access the runtimeConfig properties and through destructuring we extract the currencyKey value registered in runtimeConfig.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/121d9665-0d73-45d0-bad5-36b074b4ba1f" style="width:60%">
</div>

### Performing the request on the dynamic route


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/84388b05-5373-4159-b696-14bf29aba96b" style="width:60%">
</div>

### Result

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt/assets/157809964/6cdc04a0-5d67-4ce3-8fbe-860dbe440910" style="width:100%">
</div>













