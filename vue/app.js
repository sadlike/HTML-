/**
 * Created by wwp on 2018/9/19.
 */
// 实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name :"王文鹏",
        job:"开发工程师",
        age:30,
        website:"http://www.baidu.com",
        websiteTag:"<a href='http://www.taobao.com'>淘宝</a>>",
        x:0,
        y:0,
    },
    methods:{
        greet:function (time) {
            return 'Good '+time  + " " +this.name +"！";
        },

        add:function (inc) {
            this.age+=inc;
        },
        subtract:function (inc) {
            this.age-=inc;
        },
        updateXY:function(event){
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }

});
/*
* el:element 需要获取的元素，一定是html中的根容器元素
* data:用于数据的存储
* methods:用于存储各种方法
* data-binding:给属性绑定对应的值
* */