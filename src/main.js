let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string  = `
/*开发工程中遇到的BUG,
  接下俩要加入css样式
  首先准备一个div*/
#div1{
    border:1px solid red ;
    height:200px;
    width:200px
}
/* 接下来把div变成八卦图
首先把div变为一个圆圈 
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 30px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
一黑一白 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个球 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}  
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
`
// string = string.replace(/\n/g,'<br>') //知识点: 正则换行+replace
let n =0
let string2 = ''
html.innerHTML=string.substring(0,n);

let step = () =>{
    setTimeout(()=>{
        n = n+1
        // string2+=(string[n] == '\n'?'<br>':string[n])
        if(string[n] == '\n'){
            string2 +='<br>'
        }else if (string[n] == ' ' ){
            string2+="&nbsp"
        }
        else{
            string2+=string[n]
        }
        html.innerHTML=string2
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,9999)
        html.scrollTo(0,99999)
        if(n < string.length -1){   
            step();
        }
    
    },5)
} 
//相比setInterval, setTimeout可以更自由的控制什么时候开始，什么时候停止
step()

// style.innerHTML=`
// body{
//     color:red;
// }
// `
// setInterval(() => {
//     n = n+1
//     demo.innerHTML=n;
// }, 1000);