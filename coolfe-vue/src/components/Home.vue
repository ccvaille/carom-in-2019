<template>
    <div>
        <h1>Home</h1>
        <ul>
            <li :key="post.id" v-for="post in postState">
                <router-link :to="'post/' + post.id">{{ post.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        postState () {
        return this.$store.state.post.all;
        }
    }
}
</script>
