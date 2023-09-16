let child = document.querySelector('.child')



window.addEventListener('keyup',(e)=>{
  console.log(e.keyCode);  

if(e.keyCode == 40){
    console.log(child.style.transform = 'translateY(349px)');
    console.log(child.style.transition = '1.5s');

} else if(e.keyCode == 38){
    console.log(child.style.transform = 'translateY(-349px)');
    console.log(child.style.transition = '1.5s');

}if(e.keyCode == 39){
    console.log(child.style.transform = 'translateX(349px)');
    console.log(child.style.transition = '1.5s');
}else if(e.keyCode == 37){
    console.log(child.style.transform = 'translateX(-349px)');
    console.log(child.style.transition = '1.5s');

}
})