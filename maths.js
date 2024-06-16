function addition(){
    document.getElementById("arth");
    let n=parseInt(prompt("enter the first number"))
    let m=parseInt(prompt("enter the second number"))
    let res=m+n;
    console.log(res)
    document.write(res)
}
function substraction(){
    document.getElementById("arth1");
    let n=parseInt(prompt("enter the first number"))
    let m=parseInt(prompt("enter the second number"))
    let res=m-n;
    console.log(res)
    document.write(res)

}
function multiplication(){
    document.getElementById("arth2");
    let n=parseInt(prompt("enter the first number"))
    let m=parseInt(prompt("enter the second number"))
    let res=m*n;
    console.log(res)
    document.write(res)

}
function factorial(){
    document.getElementById("#arth3");
    let n=parseInt(prompt("enter the number"))
    let mul=1;
    for(let i=1;i<=n;i++){
        mul=mul*i;

    }
    console.log(mul)
    document.write(mul)

}