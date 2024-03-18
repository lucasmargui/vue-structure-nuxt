<template>

<div>
    {{ data }}

</div>

</template>

<script setup>



    // // fetch the products
    // const { data } = await useFetch('/api/ninja?name=mario', {
    //  method : 'post',
    //  body: {age: 30}
    // })

    const { data } = await useFetch('/api/currency/GBP')
    


</script>

<style scoped>

</style>