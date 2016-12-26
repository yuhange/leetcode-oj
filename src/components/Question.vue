<template>
  <div class="question">
    <h1>{{question.ques_title}}</h1>
    <div v-html="question.ques_content"></div>
  </div>
</template>

<script>
import {url} from '../constant.js'
export default {
  name: 'question',
  data () {
    return {
      question: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      this.$http.get(url+'leetcode-question/'+this.$route.params.id).then(response=>{
        this.question = response.body.data
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
