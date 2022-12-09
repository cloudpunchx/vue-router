<template>
    <!-- You are not bound to using a DIV just because it auto populates in v-base -->
    <!-- But you still only have 1 child of template as normal -->
    <nav>
        <!-- the content "home" is the same as an A tag, you can use it with img/anything -->
        <!-- a-tags are still allowed, but they will only be used for external links -->
        <!-- internal links need to be used as follows -->
        <router-link to="/">Home</router-link>
        <router-link to="/contact-us">Contact</router-link>
        <router-link to="/reservations">Reservations</router-link>
        <!-- ex of how you use a tag externally only -->
        <a href="https://google.ca" target="blank">Google</a>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
/* You can't actually style a 'Router Link' because it isn't valid HTML */
/* But Router Link is actually a class */

/* router links get converted to 'A' tags so you could style 'A' tags (because links can only be A tags*/
/* you can examine it in debugger under Elements */
/* .router-link-active{
    margin-right: 10px;
} */

/* A seemed to work better for me, it looks nicer */
a{
    margin-right: 10px;
}
</style>