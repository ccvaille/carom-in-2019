<template>
  <div class="comment-box">
    <div class="comment-form">
        <input v-model="message" placeholder="请填写评论" />
        <button @click="submitComment">提交</button>
    </div>
    <div v-for="item in reversedComments" :key="item.id">
        {{item.body}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentBox',
  computed: {
    postId() {
        return this.$route.params.id;
    },
    comments() {
        return this.$store.getters.getComments(this.postId);
    },
    reversedComments() {
        // 添加 slice 是因为不修改原数据
        return this.comments.slice().reverse();
    }
  },
  data: () => ({
    message: '',
  }),
  methods: {
    submitComment () {
        let comment = {
            // id: (this.comments.length + 1).toString(),
            body: this.message,
            post: this.postId
        }
        // this.comments.push(comment)
        // 这是直接调用 mutations
        // this.$store.commit('addComment', comment);
        // 通常组件中直接触发的不是 mutation ，而是 action
        this.$store.dispatch({ type: 'add', comment});
        this.message = '';
    }
  }
}
</script>
<style scoped>
.comment-box {
    background-color: #fff;
    width: 400px;
    min-height: 30vh;
    margin: 20px auto;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
}
.comment-box {
    padding: 20px;
}
.comment-form {
    display: flex;
    margin-bottom: 20px;
}
.comment-form input {
    flex-grow: 1;
}
.comment-form button {
    margin-left: 5px;
}
</style>


