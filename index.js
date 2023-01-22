
let count=0;
let btnInc=document.getElementById('incremant-btn');
let btnSave=document.getElementById('save-btn')
let saveEl=document.getElementById('save-el');
let countEl=document.getElementById('count-el')

btnInc.addEventListener('click',function(){ 
count+=1;
document.getElementById('count-el').innerHTML=count;
});


btnSave.addEventListener('click',function(){

console.log(count);

});

btnSave.addEventListener('click',function(){
let enter=count+'-';

saveEl.innerHTML+=enter;
countEl.innerHTML=0;
count=0;
})