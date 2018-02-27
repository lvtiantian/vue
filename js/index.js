var app=new Vue({
    el:'#box',
    data:{
        myData:[
            /* {name:"XXX",age:12},
             {name:"XXX",age:11},*/
        ],
        username:'',
        age:'',
        nowIndex:-100,
        all:'所有'
    },
    methods:{
        add:function(){
            if(this.username==''||this.age==''){

            }else{
                this.myData.push({
                    name:this.username,
                    age:this.age
                });
                this.username='';
                this.age='';
            }

        },
        deleteMsg:function(index){
            if(index==-1){
                this.myData=[];
            }else{
                this.myData.splice(index,1)
            }

        }
    }
})
