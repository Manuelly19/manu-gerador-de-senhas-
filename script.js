const senha=document.getElementById("senha");
const gerar=document.getElementById("gerar");
const copiar=document.getElementById("copiar");
const limpar=document.getElementById("limpar");

const tamanho=document.getElementById("tamanho");
const valorTamanho=document.getElementById("valorTamanho");

const maiusculas=document.getElementById("maiusculas");
const minusculas=document.getElementById("minusculas");
const numeros=document.getElementById("numeros");
const simbolos=document.getElementById("simbolos");
const parecidos=document.getElementById("parecidos");

const nivel=document.getElementById("nivel");
const textoForca=document.getElementById("textoForca");

tamanho.oninput=()=>{

valorTamanho.innerHTML=tamanho.value;

}

gerar.onclick=gerarSenha;

copiar.onclick=()=>{

if(!senha.value)return;

navigator.clipboard.writeText(senha.value);

copiar.innerHTML="✅ Copiado";

setTimeout(()=>{

copiar.innerHTML="📋 Copiar";

},1500);

}

limpar.onclick=()=>{

senha.value="";

nivel.style.width="0";

textoForca.innerHTML="-";

}

function gerarSenha(){

let chars="";

if(maiusculas.checked)

chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(minusculas.checked)

chars+="abcdefghijklmnopqrstuvwxyz";

if(numeros.checked)

chars+="0123456789";

if(simbolos.checked)

chars+="!@#$%&*()-_=+[]{}<>?/";

if(chars==""){

alert("Selecione pelo menos uma opção.");

return;

}

if(parecidos.checked){

chars=chars.replace(/[O0Il1]/g,"");

}

let pass="";

for(let i=0;i<tamanho.value;i++){

pass+=chars.charAt(Math.floor(Math.random()*chars.length));

}

senha.value=pass;

forca(pass);

}

function forca(pass){

let score=0;

if(pass.length>=8)score++;

if(pass.length>=12)score++;

if(/[A-Z]/.test(pass))score++;

if(/[0-9]/.test(pass))score++;

if(/[!@#$%&*()\[\]{}<>?\/+=_-]/.test(pass))score++;

switch(score){

case 1:
nivel.style.width="20%";
nivel.style.background="red";
textoForca.innerHTML="Muito Fraca";
break;

case 2:
nivel.style.width="40%";
nivel.style.background="orange";
textoForca.innerHTML="Fraca";
break;

case 3:
nivel.style.width="60%";
nivel.style.background="#f1c40f";
textoForca.innerHTML="Boa";
break;

case 4:
nivel.style.width="80%";
nivel.style.background="#2ecc71";
textoForca.innerHTML="Forte";
break;

case 5:
nivel.style.width="100%";
nivel.style.background="#00b894";
textoForca.innerHTML="Muito Forte";
break;

default:
nivel.style.width="10%";
nivel.style.background="red";
textoForca.innerHTML="Muito Fraca";

}

}

gerarSenha();
