var dogage =document.getElementById("title");
let output =document.getElementById('output');
document.getElementById('btn').addEventListener('click',() =>{
    console.log(dogage.value)
    output.innerHTML=((dogage.value ) * 7)
})
let reload =() => {
    location.reload();
}