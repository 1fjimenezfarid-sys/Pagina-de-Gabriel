function openTab (event, tabId)
{
   const targetContent = document.getElementById(tabId);
   const currentButton = event.currentTarget;
   const isAlreadyActive = targetContent ? targetContent.classList.contains('active'): false ;
   const contents = document.querySelectorAll('.pepe');
     contents.forEach(content => content.classList.remove('active'));
     
     const buttons= document.querySelectorAll('.mi-boton');
     buttons.forEach(button => button.classList.remove('active'));
     if (!isAlreadyActive && targetContent){
      targetContent.classList.add('active');
      currentButton.classList.add('active');
     }


     
     

}
var cambio = false;
    setInterval(changeTitle,2500)
function changeTitle (){
if(cambio){
    document.title= "Que transa w";
    cambio = false;
}else{
    document.title="Prestame feria w 👻👻";
    cambio = true;
}
}
window.addEventListener("blur",function(){
    document.title = "Regresa pronto 😔😔"
})
window.addEventListener("focus",function(){
    document.title = "Hola 🌹"
})