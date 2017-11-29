const routes  = [
	{
		path:"/",
		component:Home
	},
	{
		path:"/Info",
		component:Info
	},
	{
		path:"/Doc",
		component:Doc,
		children:[{
            path: "", 
            components: {
	            left: left,
	            right: right
        	}
        },
       {
			path:"/Doc/:id",
		   	name:"right",
           components: {
               left: left,
               right: list,
           }
		}
        ]
	},
    {
        path:"/Address",
        component:Address,
        children:[
            {
                path:"",
                components:{
                    lefta:lefta,
                    righta:righta
                }
            }
        ]
    },
    {
        path:"/Login",
        component:Login
    }
	
	// {
	// 	path:"*",
	// 	redirect:"/"
	// }
];
var router = new VueRouter({
	linkActiveClass:"active",
	routes
});