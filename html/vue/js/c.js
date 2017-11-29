/**
 * 默认页面
 */
var Home = Vue.component("Home",{
	template:`
		<div class="d">
			<First></First>
			<router-view></router-view>
		</div>
	`
})

//导航栏
Vue.component("custom-nav",{
	template:`
		<div class='nav'>
			<router-link v-for="(items,key) in navList" :to="items.url" :key="key" exact active-class="red">{{items.title}}</router-link>
			<router-link v-if="!islogin" to="/Login">login</router-link>
			<span v-if="islogin" @mouseenter="show()">{{name}}
				<span v-show="isshow" class="logiout" @click="loginout()">
					exit
				</span>
			</span>
		</div>
	`,
	data(){
		return {
			navList:[
				{title:"首页",url:"/"},
				{title:"公司简介",url:"/Info"},
				{title:"公司地址",url:"/Address"},
				{title:"文档说明",url:"/Doc"}
			],
			islogin:false,
			isshow:false,
			name:""
		}
	},
	methods:{
		loginout(){
			this.del("login");
			this.islogin=false;
			router.push("/");
		},
		show(){
			this.isshow=!this.isshow;
		}
	},
	watch:{
		$route(){
			if(sessionStorage["login"]){
                this.name=JSON.parse(sessionStorage["login"])["name"]||"";
                this.islogin=true;
			}


		}
	}
})

//首页内容
var First = Vue.component("First",{
	template:`
	<div>
		首页内容
	</div>
	`
})
/**
 * 公司简介
 */
var Info = Vue.component("Info",{
	template:`
	<div class="d">
		<router-link v-for="(items,key) in menulist" :to="items.id" id="items.id" :key="key">
		<p>{{items.title}}</p>
		</router-link>
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
	`,
	data(){
		return {
			menulist:[
				{title:"vue指令",url:"",id:"1"},
				{title:"生命周期钩子函数",url:"",id:"2"},
				{title:"vue组件",url:"",id:"3"},
			]
		}
	}
})

/*
* 	公司地址
* */
var Address = Vue.component("Address",{
	template:`
		<div class="d">
			<router-view name="lefta"></router-view>
			<router-view name="righta"></router-view>
		</div>
	`
})

//左侧
var lefta = Vue.component("lefta",{
    template:`
		<div class="lefta">
		<router-link v-for="(items,key) in menuList"  :to="items.id"  :key="key" active-class="aaa">
			<p>{{items.title}}</p>
		</router-link>
		</div>
	`,
    data(){
        return {
            menuList:[
                {title:"vue指令",id:"#one"},
                {title:"生命周期钩子函数",id:"#tow"},
                {title:"vue组件",id:"#three"},
            ]
        }
    },
	watch:{
    	$route:(e)=>{
    		var id = e.hash.slice(1);
			// $(e.hash)[0].offsetTop;
			$(".righta").animate({
                scrollTop:$(e.hash)[0].offsetTop-1
			},800)
		}
	}
})

//右侧
var righta = Vue.component("righta",{
    template:`
		<div class="righta" style="height: 200px;overflow-y: scroll;width: 266px;">
			<div>
				<br>
				<strong id="one">first</strong><br>
				first <br>
				first <br>
				first <br>
				first <br>
				first <br>
				first <br>
				first <br>
				first <br>
				<br>
				<br>
				<br>
				<br>
				<strong id="tow">tow</strong><br>
				second <br>
				second <br>
				second <br>
				second <br>
				second <br>
				second <br>
				second <br>
				<br>
				<br>
				<br>
				<strong id="three"> three</strong><br>
				thrid <br>
				thrid <br>
				thrid <br>
				thrid <br>
				thrid <br>
				<br>
				<br>
				<br>
			</div>
		</div>
	`,
})

/**
 * 说明文档
 */
var Doc = Vue.component("Doc",{
	template:`
		<div class="d">
			<router-view name="left"></router-view>
			<router-view name="right"></router-view>
		</div>
	`,
	beforeRouteEnter(to,from,next){
		next(function(vm){
			if(!vm.get("login","name")){
				router.push("/Login");
			}
		})
	}
})

//左侧
var left = Vue.component("left",{
	template:`
		<div class="left">
		<router-link v-for="(items,key) in menulist"  :to="items.id" id="items.id" :key="key" active-class="aaa">
			<p>{{items.title}}</p>
		</router-link>
		</div>
	`,
	data(){
		return {
			menulist:[
				{title:"vue指令",url:"/Doc/1",id:"/Doc/1"},
				{title:"生命周期钩子函数",url:"",id:"/Doc/2"},
				{title:"vue组件",url:"",id:"/Doc/3"},
			]
		}
	}
})

//右侧
var right = Vue.component("right",{
	template:`
		<div class="right">1234566768fkjhjjk
		</div>
	`,
})

var list = Vue.component("list",{
	template:`
		<div class="list">
			{{id}}
		</div>
	`,
	data:function(){
		return {
			id:this.$route.params.id,
		}
	},
	watch:{
		$route:function(){
			this.id = this.$route.params.id

		}
	}
})

var Login = Vue.component("Login",{
	template:`	
		<div class="login">
			<div class="container">
				<div class="login-main">
					<p><i @click="back()">返回</i></p>
					<p><input type="text" name="name" id="name" placeholder="账号"></p>
					<p><input type="password" name="password" id="password" placeholder="密码"></p>
					<p><input type="button" value="登陆" @click="submit()"></p>
				</div>
			</div>
		</div>
	`,
	methods:{
		back(){
			router.push("/");
		},
		submit(){
			var obj = {"name":$("#name").val()};
			this.save("login",obj);
			router.push("/Doc");
		}
	}
})


