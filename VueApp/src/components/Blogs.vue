<template>
  <div class="columns">
  	 <h1 class="title">BLOGS LIST</h1>
  	<div class="column is-half is-offset-one-fifth">
    <div class="card" v-for="blog in blogs">
  		<div class="card-content">
    	<p class="title">
      		{{blog.title}}
    	</p>
    	<p class="subtitle">
     		{{blog.content}}
    		</p>
  		</div>
	</div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	blogs : []
    }
  },
  created: function(){
  	/**
	*link to your firebase
  	**/
  	this.$http.get('@link').then(function(data){
  		return data.json();

  	}).then(function(data){
  		this.blogs = data;
  	})
  }
}
</script>

<style>

</style>
