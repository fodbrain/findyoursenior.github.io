function submitting(){
    console.log(document.getElementById("pass").value)
    if(document.getElementById("pass").value === "goodatcipherT"){
        console.log('https://www.instagram.com/coldfod/')
        alert('good job!')
    }
    else{
        alert('incorrect')
        document.getElementById("pass").value =""
    }
}