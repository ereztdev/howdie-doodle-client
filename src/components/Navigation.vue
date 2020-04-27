<template>
    <!--<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <mdb-btn size="sm" color="primary">
                    <router-link class="nav-link" active-class="active" to="/">Home</router-link>
                    </mdb-btn>
                </li>
                <li class="nav-item active">
                    <mdb-btn size="sm" color="primary">
                    <router-link class="nav-link" active-class="active" to="/about">About</router-link>
                    </mdb-btn>
                </li>
            </ul>
        </div>
    </nav>-->
    <mdb-navbar class="z-depth-2" position="top" dark color="primary" scrolling>
        <mdb-navbar-brand href="#" id="myBrand">Howdie DooDle</mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav>
                <mdb-nav-item waves-fixed>
                    <router-link class="nav-link" active-class="active" to="/">Home</router-link>
                </mdb-nav-item>
                <mdb-nav-item waves-fixed>
                    <router-link class="nav-link" active-class="active" to="/about">About</router-link>
                </mdb-nav-item>
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand } from 'mdbvue';

    export default {
        name: "Navigation",
        components:{
            mdbNavbar,
            mdbNavItem,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbNavbarBrand
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'SFFedoraRegular';
        src: url('/fonts/sf_fedora-webfont.woff') format('woff'),
        url('/fonts/SF_Fedora.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    #myBrand{
        font-family: SFFedoraRegular, sans-serif;
        font-size: 30px;
    }
    .nav-link{
        visibility: hidden;
    }
</style>
