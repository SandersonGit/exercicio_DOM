const form = document.getElementById("form");

console.log(form);

alert("Digite um número de 1 a 10 nos campos abaixo")




form.addEventListener('submit', function(e){
  e.preventDefault()

  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  
  
  
  
  if (num2.value > num1.value){
    alert(`O número do segundo campo é maior que o número no primeiro campo, parabens! Gotcha...`)

    const mensagemSucesso = `Parabéns!`
      const sucesso = document.getElementById("final")
      sucesso.innerHTML= mensagemSucesso
    
  } else {
    alert(`Existe um enigma aqui... Será que conseguimos descobrir? Atulize a pagina e tente novamente`)

    const mensagemErro = `Tente outra vez!`
    const error = document.getElementById("final")
    error.innerHTML= mensagemErro
    

    
}})



