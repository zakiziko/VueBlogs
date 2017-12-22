/**
*here you can have all your routes then you gonna import them into your app.vue 
**/
import Blogs from './Blogs.vue'
import AddBlog from './AddBlog.vue'
export default[
	{path:'/', component:Blogs},
	{path:'/add', component:AddBlog}
]
