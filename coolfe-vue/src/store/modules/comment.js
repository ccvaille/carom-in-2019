import axios from 'axios';

const state = {
    all: []
}

const mutations = {
    addComment(state, comment) {
        state.all.push(comment);
    },
    loadComments(state, comments) {
        state.all = comments;
    }
}

const actions = {
    // 添加评论
    add ({ commit }, { comment }) {
        const { body, post } = comment;
        const url = 'http://localhost:3008/comments';
        axios.post(url, { body, post }).then(res => {
        const comment = res.data
        commit('addComment', comment)
        })
    },
    // 读取接口数据
    loadComment({ commit }) {
        const url = 'http://localhost:3008/comments';
        axios.get(url).then(res => {
        let comments = res.data;
        commit('loadComments', comments);
        })
    }
}

const getters = {
    getComments: (state) => (id) => {
        return state.all.filter( t => t.post === id)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
