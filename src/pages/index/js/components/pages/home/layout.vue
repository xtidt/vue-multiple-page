<template>
    <section class="page__home">
        <h1>vue-multiple-page-demo 多页</h1>
        <ul class="nav">
            <li>
                <a href="#/home/index">/home/index</a>
            </li>
            <li>
                <a href="#/home/detail">/home/detail</a>
            </li>
        </ul>
        <router-view></router-view>
    </section>
</template>

<style type="text/css">
.nav a {
    color: #fff;
}
</style>

<script>
    export default {

    }
</script>
