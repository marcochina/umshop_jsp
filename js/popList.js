/**
 * Created by youy on 2016/8/31.
 */
var popList=function(){
    this.dom=function(){
       var dom=document.createElement('div');
       var  domCSS='max-width:640px;margin:0 auto';
        dom.setAttribute('style',domCSS);
        return dom;
    }
    this.board=function(){
        var board=document.createElement('div');
        var boardCSS='position:absolute';
    }
    this.ul=function(){
        var ul=document.createElement('ul');
        var ulCSS='width:100%;'
        return ul;
    }
    this.header=function(){
        var header=document.createElement('div');
        var headerCSS='height:2.6rem;width:100%';
        header.setAttribute('style',headerCSS);
    }
    this.li=function(){
        var li=document.createElement('li');
        return li;
    }
    this.init=function(data){
        var self=this;

    }
}