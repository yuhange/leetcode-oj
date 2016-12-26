<template>
  <div class="hello">
    <h1>leetcode</h1>
    <ul v-for="question in questions">
      <li>{{question.ques_title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      questions: [],
      url: 'http://localhost:3000/leetcode'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      this.$http.get(this.url).then(response=>{
        this.questions = response.body.data
        console.log(response.body.data[0])
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
