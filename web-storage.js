$(function(){

    var keyArr = ['first-name', 'last-name'];

    function initByLocalStorage(){
        $('[name=first-name]:eq(0)').val(localStorage.getItem('first-name'));
        $('[name=last-name]:eq(0)').val(localStorage.getItem('last-name'));
    }

    function initBySessionStorage(){
        $('[name=first-name]:eq(1)').val(sessionStorage.getItem('first-name'));
        $('[name=last-name]:eq(1)').val(sessionStorage.getItem('last-name'));
    }

    function init(){
        initByLocalStorage();
        initBySessionStorage()
    }

    init();

    function formByLocalStorage(){
        localStorage.setItem('first-name', $('[name=first-name]:eq(0)').val());
        localStorage.setItem('last-name', $('[name=last-name]:eq(0)').val());
    }

    function formBySessionStorage(){
        sessionStorage.setItem('first-name', $('[name=first-name]:eq(1)').val());
        sessionStorage.setItem('last-name', $('[name=last-name]:eq(1)').val());
    }

    $('form').submit(function(){
        if($(this).hasClass('local-storage')){
            formByLocalStorage();
        } else {
            formBySessionStorage();
        }
    });

    function setValueByLocalStorage(event){
        $('[name='+ event.key +']:eq(0)').val(event.newValue);
    }

    function setValueBySessionStorage(event){
        $('[name='+ event.key +']:eq(1)').val(event.newValue);
    }

    $(window).bind('storage', function (e) {
        //打开相同的两页面,其中一个页面刷新,由于更新时间变了,导致出现以时间作为key的情况。
        //这里通过keyArr过滤掉无用的key
        if($.inArray(e.originalEvent.key, keyArr) === -1){
            return false;
        }
        if(e.originalEvent.storageArea === localStorage) {
            setValueByLocalStorage(e.originalEvent);
        } else {
            setValueBySessionStorage(e.originalEvent);
        }
    });

    //原生js可采用下面方式
    //window.addEventListener('storage',function(e){
    //    e.storageArea
    //})

});