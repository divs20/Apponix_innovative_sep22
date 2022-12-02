function myAdd(){
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)+parseInt(val2) )

}
function mySub(){
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value

    console.log(parseInt(val1)-parseInt(val2) )
}
function myMultiply()
{
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value
    console.log(parseInt(val1)*parseInt(val2))
}
function myDivision()
{
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value
    console.log(parseInt(val1)/parseInt(val2))
}
function myModulus()
{
    var val1=(document.getElementById('num1')as HTMLInputElement).value
    var val2=(document.getElementById('num2')as HTMLInputElement).value
    console.log(parseInt(val1) % parseInt(val2))
}