$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('enter')
$('.images>img:nth-child(3)').addClass('enter')
// 把初始化的代码优化一下
// 代码重复需要优化
let n=1
setInterval(()=>{ 
    //$里要用模板字符串，1旁边，反引号`` 
    $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n +=1
},3000)

function x(n){
    if (n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }//////n的值是1 2 3
    return n
}


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//下面代码可以不看
// setTimeout(()=>{
//     $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
// },3000)
// setTimeout(()=>{
//     $('.images>img:nth-child(2)').removeClass('current').addClass('leave')
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images>img:nth-child(3)').removeClass('enter').addClass('current')
// },6000)
// setTimeout(()=>{
//     $('.images>img:nth-child(3)').removeClass('current').addClass('leave')
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images>img:nth-child(1)').removeClass('enter').addClass('current')
// },9000)
// setTimeout(()=>{
//     $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
// },15000)
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
