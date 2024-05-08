let items = [ ["https://th.bing.com/th/id/OIP.GcVozC2mx4xxjhymSSc1LAHaE7?rs=1&pid=ImgDetMain","Akchiche Mohamed Aymen" , "WEB DEVELOPER for 2years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPER for 8years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPER for 3years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPER for 5years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPER for 6years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","DESKTOP DEVELOPER for 1year"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPERfor 2years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPER for 4 years"],
  ["https://th.bing.com/th/id/OIP.fDRWmjfSGQzm4IiZaBC9dAHaFd?w=1000&h=738&rs=1&pid=ImgDetMain","TONI KROOS","MOBILE DEVELOPER for 3 years"]
]
for(let i = 0 ; i < items.length ; i++){
    document.write(`<div class="all">`);
        document.write(`<div class="image">`);
            document.write(`<img src=${items[i][0]} onload="1">`)
        document.write(`</div>`);
        document.write(`<div class="descr">`);

            document.write(`<h1>${items[i][1]}</h1>`)
            document.write(`<h5>${items[i][2]}</h5>`)
            document.write(`<a href="#">View Profile</a>`);
        document.write(`</div>`);   
    document.write(`</div>`);
}
//-----------------------------------------------------------------------------------------------
let func = _ => 13;
let sum= (a,b)=>a+b;
console.log(func());
console.log(sum(12,3));
let sumArray = (...arr)=>{
    let result = 0 ;
    for(let k  = 0 ; k < arr.length ; k++)
        result+=arr[k];
    return result;
}
console.log(sumArray(10,20,30));
