<template>
  <div class="hello">
    <h1>leetcode</h1>
    <ul v-for="question in questions">
      <li>{{question.ques_id}}. <router-link :to="{name:'question', params:{id:question.ques_id}}">{{question.ques_title}}</router-link> {{question.passrate}} {{question.difficulty}}</li>
    </ul>
  </div>
</template>

<script>
import {url} from '../constant.js'
export default {
  name: 'hello',
  data () {
    return {
      questions: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      this.$http.get(url).then(response=>{
        this.questions = response.body.data
        // console.log(response.body.data[0])
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
