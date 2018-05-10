<style>
    @import 'index/style/theme.css';

    .nav__class {
        color: #fff;
    }

    .nav__class a {
        color: #fff;
        padding: 0 10px;
    }
</style>

<template>
    <div class="container">
        <p>公共模块</p>
        <nav class="nav__class">
            <a href="#/home">home</a>
            <a href="#/error">error</a>
            <a href="#/news">news</a>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>
