<template>
    <div class="Muban">
        <div class="moudle">
            <div class="M_sour">
                <i class="icon iconfont icon-search"></i>
                <input type="text" placeholder="搜索数据源">
                <div class="area">
                    <button class="ar_ico">
                        <i class="iconfont icon-jiahao"></i>
                        <span>新建数据源</span>
                    </button>
                    <button class="ar_icon">
                        <i class="iconfont icon-shezhi"></i>
                        <span>分组管理</span>
                    </button>
                </div>
            </div>
            
        </div>
        <div class="body">
            <div class="body-table">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th v-for="val of ind">{{val}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v,index) of mu">
                                <td>
                                    <div class="shi">
                                        <span>{{v.sp}}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="beizhu">
                                        {{v.content}}
                                    </span>
                                </td>
                                <td class="beizhu">
                                    {{v.nex}}
                                </td>
                               
                                <td class="con extend">
                                    <a href="javascript:">
                                        <i class="wtf iconfont icon-shezhi"></i>配置</a>
                                    <a href="javascript:"><i class="iconfont icon-bianji"></i></a>
                                    <template>
                                        <el-button type="text" @click="open2(v.id)"><i class="iconfont icon-huishouzhan"></i></el-button>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ind:["数据源名称","备注","分组","操作"],
            mu:[
                {
                    id:1,
                    sp:'需求分类',
                    content:'表示需求分类，如产品、技术与安全',
                    nex:'软件'
                },
                {
                    id:2,
                    sp:'需求来源',
                    content:'表示需求来源与渠道',
                    nex:'软件'
                },
                {
                    id:3,
                    sp:'严重程度',
                    content:'表示缺陷的严重程度',
                    nex:'软件'
                },
                {
                    id:4,
                    sp:'缺陷类型',
                    content:'表示缺陷属于哪种类型',
                    nex:'软件'
                }
            ]
        }
    },
    methods:{
        open2:function(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    // 删除某一个
                    for (var i=0;i<this.mu.length;i++){
                        if (this.mu[i].id == id) {
                            this.mu.splice(i, 1);
                            break;
                        }
                    }
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    }
}
</script>

<style style="scss" scoped>
    .el-button--text{
        color:#888;
    }
    .Muban{
        margin: 15px;
        width: calc(100% - 30px);
        height:calc(100% - 120px);
        background: #fff;
        position: relative;
    }
    .moudle{
        padding: 20px 20px 0;
    }
    .M_sour{
        position: relative;
    }
     .M_sour i{
        color: #aaa;
    }
    .M_sour .icon{  
        position: absolute;
        top: 6px;
        left: 13px;
        font-size:24px;
    }
    .M_sour input{
        border-radius: 5px;
        border:none;
        border:1px solid #eee;
        padding: 9px 84px 10px 34px;
        outline: 0;
    }
    .area{
        float: right;
        position: relative;
    }
    .area .ar_ico{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        margin-right:10px;
    }
    .area .ar_icon{
        color: #888;
        background-color: transparent;
        background-image: none;
        border:1px solid #ddd;
    }
    .area .ar_ico i{
        position: absolute;
        top:11px;
        left:14px;
        color: #fff;
    }
    .area .ar_icon i{
        position: absolute;
        top:11px;
        left:165px;
        font-weight: 600;
    }
    .area button{
        border-radius: 23px;
        outline:0;
        border:none;
        padding: 9px 33px;
        transition: all .8s;
    }
    .area button:nth-child(1):hover{
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .area button:nth-child(2):hover{
        color:#22d7bb;
        border:1px solid #22d7bb;
    }
    .body{
        width: 100%;
        height: 100%;
    }
    .body .body-table{
        padding:20px;
    }
    /* .body .body-table div{
    } */
    table{
        width: 100%;
        color: #333;
        border: 1px solid #eee;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table thead tr{
        background:#f3f3f3; 
    }
    table th{
        color: #666;
    }
    table th{
        padding: 12px 15px;
        font-weight: 400;
        border: 1px solid #eee;
        font-size: 14px;
    }
    table td{
        font-size: 14px;
        padding: 5px 15px;
    }
    .beizhu{
        color: #888;
    }
    .con{
        text-align: center;
    }
    .extend a{
        color: #aaa;
        font-size: 12px;
        margin-right: 20px;
    }
    .extend a:nth-child(1){
        color: #22d7bb;
    }
    .extend .wtf{
        padding-right: 4px;
        vertical-align: middle;
    }
</style>
