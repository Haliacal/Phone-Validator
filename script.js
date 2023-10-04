document.getElementById("validate").addEventListener("click", validate);
let ResponseElement = document.getElementById("response");

async function validate(){

    const countryCode = document.getElementById("Country").value
    let number = document.getElementById("Number").value;
    const data = getApiKey();

    const url = 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp?number='+number+'&country='+countryCode;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'API_KEY_HERE',
            'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com'
        }
    };

    try{
        
        const response = await fetch(url, options);
        const results = await response.json();
        if(results["isValidNumber"]){
            ResponseElement.innerHTML = '✓ Phone number valid';
            ResponseElement.style.color = "green";
        }

        else{
            
            ResponseElement.innerHTML = '✕ Phone number invalid';
            ResponseElement.style.color = "red";
            
        }
        
    } catch (error) {
        document.getElementById("Response").innerHTML = "Invalid input";
        console.error(error);

    }

}