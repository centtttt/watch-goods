document.getElementById('formContactUs').addEventListener('submit', (event) => {

    event.preventDefault()

    const name = document.getElementById('username').value
    const email = document.getElementById('useremail').value
    var checkCountry = document.getElementById("countryName");
    var selectedCountry = checkCountry.value
    const agree = document.getElementById('agree').checked
    const checkMessage = document.getElementById('message').value
    
    
    if(name.length < 5){
        alert('Your Input Must Contains More Than 5 Characters !')
        return
    }
    
    if(!email.endsWith('@gmail.com')){
        alert('Your Email Must Ends With @gmail.com')
        return
    }
    
    if(selectedCountry == "pleaseSelect"){
        alert('Please Select Your Country Region !')
        return
    }

    if(checkMessage.length < 30){
        alert('Please Give More Detailed Message With A Total Number Of Characters At Least 30 !')
        return
    }

    if(!agree){
        alert('You Must Agree With The Terms And Conditions !')
        return
    }

    alert('Your Message Has Been Forwarded. Please Wait Until You Received Our Responses !')
    window.location.href = '/index.html'
})
