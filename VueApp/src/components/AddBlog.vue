<template>
	<div>
	<div>
		<h1>Add New Blog</h1>
	</div>
  <div class="columns">
  	<div class="column is-one-third is-offset-one-fifth">
  		<form>
  		<div class="field">
  			<label class="label">Title</label>
  			<div class="control">
    			<input class="input" type="text" placeholder="Title ....." v-model="blog.title">
  			</div>
		</div>
		<div class="field">
  			<div class="control">
    			<textarea class="textarea is-primary" type="text" placeholder="Blo Content ...." v-model="blog.content"></textarea>
  			</div>
		</div>
		<div class="control">
  			<button class="button is-primary" @click="addBlog">Save</button>
		</div>
  		</form>

  	</div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	blog:{
    		title:'',
    		content:''
    	}
    }
  },
  methods:{
  	addBlog:function(){
  		/**
  		*link to your firebase database
  		**/
  		this.$http.post('@link',this.blog)
  		.then(function(data){
  			window.location.reload();
  		})
  	}
  }
}
</script>

<style>
</style>
