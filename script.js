
let count=0;
document.getElementById("clickBtninc").addEventListener("click",function(){
    count++;
    document.getElementById("count").innerText = count;
});

document.getElementById("clickBtndec").addEventListener("click",function(){

count--;
document.getElementById("count").innerText = count;

})

document.getElementById("clickreset").addEventListener('click',function(){

    count=0;
    document.getElementById('count').innerText =count;

})
let iswhite=true;
document.getElementById("clickbtndark").addEventListener("click",function(){

    if(iswhite){

        document.body.style.backgroundColor = "black"
    } else {
     document.body.style.backgroundColor = "white"

    }
  iswhite =! iswhite;


});
