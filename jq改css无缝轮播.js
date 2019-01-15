setTimeout(function(){
    $(`.images>img:nth-child(1)`).css({
        transform:'translateX(-100%)'
    })
    $(`.images>img:nth-child(2)`).css({
        transform:'translateX(-100%)'
    })
    // 动画结束之后运行的代码
    $(`.images>img:nth-child(1)`).one(
        'transitioned',function(e){$(e.currentTarget).addClass('right').css({transform:'none'})}
    )
},3000)
setTimeout(function(){
      //$里要用模板字符串，1旁边，反引号``
    $(`.images>img:nth-child(2)`).css({
        transform:'translateX(-200%)'
    })
    $(`.images>img:nth-child(3)`).css({
        transform:'translateX(-100%)'
    })
     // 动画结束之后运行的代码 用.one是最近一次发生了变化，只执行一次。然后就不监听了
     $(`.images>img:nth-child(2)`).one(
        'transitioned',function(e){$(e.currentTarget).addClass('right').css({transform:'none'})}
    )
},6000)
setTimeout(function(){
   
    $(`.images>img:nth-child(3)`).css({
        transform:'translateX(-200%)'
    })
    $(`.images>img:nth-child(1)`).css({
        transform:'translateX(0)'
    })
     // 动画结束之后运行的代码
     $(`.images>img:nth-child(3)`).one(
        'transitioned',function(e){$(e.currentTarget).addClass('right').css({transform:'none'})}
    )
},9000)
//这样无限写下去就可以形成无缝录播。但是图片数量太多的时候就有点麻烦，代码就会很多。代码多久容易出错！
setTimeout(function(){
    $(`.images>img:nth-child(1)`).css({
        transform:'translateX(-100%)'
    })
    $(`.images>img:nth-child(2)`).css({
        transform:'translateX(-100%)'
    })
    // 动画结束之后运行的代码
    $(`.images>img:nth-child(1)`).one(
        'transitioned',function(e){$(e.currentTarget).addClass('right').css({transform:'none'})}
    )
},12000)