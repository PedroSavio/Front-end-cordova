var nome = document.getElementById('username').value
var password = document.getElementById('userpassword').value
var organizacao = document.getElementById('userorg').value
    
function pegandodata() {
    const datar = fetch('http://127.0.0.1:8000/api/login', {method: "POST", 
    headers: {
        "Content-Type": "application/json",
            
    },
    body: JSON.stringify({
        name:nome,
        pass:password,})})
    .then(response => response.json())
    .then((data)=> {if(!data.error){alert('Logou')}else{
        alert('Usuario não encontrado')
    }})

    }
window.onload = () => {
    let myButton = document.getElementById("botao")
    myButton.addEventListener('click', pegandodata)
}
let myInputName = document.getElementById('username')
let myInputPass = document.getElementById('userpassword')
myInputName.addEventListener('change', () => {nome = myInputName.value} )
myInputPass.addEventListener('change',  () => {password = myInputPass.value})