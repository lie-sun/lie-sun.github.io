new Vue({
	el:"#root",
	router
})
var save={
    install(vue,params){
        vue.prototype.save=function(attr,val){
            sessionStorage[attr]=JSON.stringify(val);
        },
        vue.prototype.del=function(attr){
            sessionStorage.removeItem(attr);
        },
        vue.prototype.get=function(attr,attr1){
            if(attr1){
                return sessionStorage[attr]?JSON.parse(sessionStorage[attr])[attr1]:"";
            }else{
                return sessionStorage[attr];
            }
        }
    }
}
Vue.use(save);