### webStorage有两种类型
* sessionStorage
* localStorage

### 共同点
>有相同的api

* length **用来获取storage内的键值对数量**
* key **获取storage的键名例如key(0)**
* getItem **根据key获取storage内的对应value**
* setItem **为storage内添加键值对**
* removeItem **根据键名，删除键值对**
* clear **清空storage对象**

>有相同的event事件(为了保证多个页面操作storage时,数据可以同步)

``` javascript
window.addEventListener('storage',function(e){
    e.key //修改的键名
    e.oldValue //修改之前的value
    e.newValue //修改之后的value
    e.url //触发改动的页面url
    e.StorageArea //发生改变的Storage
})
```

### 不同点
>localStorage在本地永久性存储数据，除非显式将其删除或清空
>sessionStorage存储的数据只在会话期间有效，关闭浏览器则自动删除
