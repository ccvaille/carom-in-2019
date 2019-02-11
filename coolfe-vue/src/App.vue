<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    created: function() {
        this.$store.dispatch({ type: 'loadComment'});
        this.$store.dispatch({ type: 'loadPosts' })
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}
</style>


