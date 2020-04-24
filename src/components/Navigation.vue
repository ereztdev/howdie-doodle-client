<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <!--                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                    <router-link class="nav-link" active-class="active" to="/">Home</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" active-class="active" to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .navbar {
        -webkit-box-shadow: 0 10px 34px -11px #000;
        -moz-box-shadow: 0 10px 34px -11px #000;
        box-shadow: 0 10px 34px -11px #000;

        /* the rest of your styling */
    }
</style>
