<style scoped>  
  .main-sidebar {
    position: fixed;
    top: 0px;
    left:0px;
    width: 150px;
    background-color:#20A0FF;
    z-index: 8000;
    overflow-y: auto;
    bottom: 0;
    color:#ffffff !important;
  }

  .sidebar-scroll {
    min-height: -moz-calc(100% - 120px);
    min-height: -webkit-calc(100% - 120px);
    min-height: calc(100% - 120px);
  }

  .main-sidebar-l .main-sidebar {
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-sidebar-l.sidebar-mini .main-sidebar {
    overflow-x: hidden;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar {
    -webkit-transform: translateX(-170px) translateY(0) translateZ(0);
    -ms-transform: translateX(-170px) translateY(0);
    transform: translateX(-170px) translateY(0) translateZ(0)
  }

  .main-sidebar-l .main-sidebar .sidebar-content {
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-content {
    width: 230px;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-content {
    -webkit-transform: translateX(170px) translateY(0) translateZ(0);
    -ms-transform: translateX(170px) translateY(0);
    transform: translateX(170px) translateY(0) translateZ(0)
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover,
  .main-sidebar-l.sidebar-mini .main-sidebar:hover .sidebar-content {
    -webkit-transform: translateX(0) translateY(0) translateZ(0);
    -ms-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0) translateZ(0)
  }

  .main-sidebar-l .main-sidebar .sidebar-mini-hide {
    -webkit-transition: opacity .28s ease-out;
    transition: opacity .28s ease-out
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-mini-hide {
    opacity: 0;
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .sidebar-mini-hidden {
    display: none
  }

  .main-sidebar-l.sidebar-mini .main-sidebar .nav-main > li.open > ul {
    display: none
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover .sidebar-mini-hide {
    opacity: 1
  }

  .main-sidebar-l.sidebar-mini .main-sidebar:hover .nav-main > li.open > ul {
    display: block
  }

  .side-content {
    margin: 0 auto;
    padding: 0px 20px 14px;
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }

  .nav-main {
    margin: 0 -20px;
    padding: 0;
    list-style: none;
    padding-top:20px;
  }

  .nav-main a.router-link-active, .nav-main a.router-link-active:hover {
    color: #fff !important;
    background-color: #387AB7;
  }

  .nav-main a {
    display: block;
    padding: 10px 20px;
    color: #666666;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .nav-main .nav-main-heading {
    padding: 10px 20px 10px;
    font-size: 14px;
    font-weight: 300;
    color: #ffffff !important;
    position: relative;
    overflow: hidden;
    opacity: 0.8;
  }

  .nav-main a.nav-submenu {
    position: relative;
    display: block;
    padding: 9px 0 9px 20px;
    width: 210px;
    height: 21px;
    line-height: 21px;
  }

  .sidebar-mini-hide {
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 160px;
  }

  .sidebar-mini-hide.active_icon {
    width: 110px !important;
  }

  .sidebar-mini-hide.endtime_icon {
    width: 95px !important;
  }

  .nav-main a:hover {
    background-color: rgba(217, 222, 228, 0.5);
    color: #387AB7;
  }

  .nav-main li:not(.nav-main-heading) {
    position: relative;
  }

  .nav-main a > i {
    float: left;
    margin-right: 5px;
    font-size: 18px;
  }

  /* 菜单底部 */
  .nav-feed-back {
    overflow: hidden;
    position: relative;
    height: 120px;
    padding: 16px;
    margin: auto;
    box-sizing: border-box;
  }

  .feed-back {
    position: absolute;
    /*padding-top: 10px;*/
    bottom: 16px;
  }

  .feed-back li {
    font-size: 13px;
    padding: 5px 0;
    color: #333333;
  }

  .feed-back a {
    color: #489cff;
  }
  .sidebar-title:hover{
  	background-color: #1d8ce0;
  	cursor:pointer;
  }
  .main-container {
    position: absolute;
    top: 5px;
    left: 150px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform;
    border:1px solid #d9d9d9 !important;
    background-color: #ffffff !important;
    overflow-y: auto;
  }

</style>  
<template>
	<div> 
    <!---------------------------------------------------------------->
    <nav class="main-sidebar">
    <div class="sidebar-scroll">
      <div class="sidebar-content">
        <div class="side-content">
          <ul class="nav-main">
              <li class="nav-main-heading sidebar-title" @click="partShow_a">
                <span class="sidebar-mini-hide" v-text="title_1"></span>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    <!---------------------------------------------------------------->
    
    <!---------------------------------------------------------------->
    <main class="main-container" v-show="part_a">
    	<c-taskcollection></c-taskcollection>
    </main>
    
    <!---------------------------------------------------------------->
  </div>
</template>


<script>
  import CTaskcollection from 'modules/page5/components/Task_collection'

  export default {
  	components:{
  		CTaskcollection
  	},
    data() {
      return {
      	title_1:"企业贷款申请",
      	part_a:true,
      	part_b:false,
      	part_c:false,
      }
    },
  	mounted(){
  		
  		this.$nextTick(function() {  
  		
  		})
  	},
    methods: {

    //*********************************************************************************************************
        partShow_a:function(){
          this.part_a=true;
          this.part_b=false;
          this.part_c=false;
        },
        
        partShow_b:function(){
          this.part_a=false;
          this.part_b=true;
          this.part_c=false;
        },
        
        partShow_c:function(){
          this.part_a=false;
          this.part_b=false;
          this.part_c=true;
        }

    //*********************************************************************************************************
      
    }
  }
</script>