
// 代码重复需要优化
let n=1
init()//初始化
setInterval(()=>{ 
    //$里要用模板字符串，1旁边，反引号`` 
    makeLeave(getImage(n))
     .one('transitionend',(e)=>{ makeEnter($(e.currentTarget))
     })
    makeCurrent( getImage(n+1))
    n +=1
},3000)







///////////////////////
//下面可以不看，是封装后的代码
/////////////////////////
function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function x(n){
    if (n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }//////n的值是1 2 3
    return n
}

//初始化
function init(){
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
    }
    function makeCurrent($node){
        $node.removeClass('enter leave').addClass('current')
        return $node
    }
    function makeLeave($node){
        $node.removeClass('enter current').addClass('leave')
        return $node
    }
    function makeEnter($node){
        $node.removeClass('current leave').addClass('enter ')
        return $node
    }
