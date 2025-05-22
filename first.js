const input=document.querySelector("#password");
const output=document.querySelector("#output");

input.addEventListener("input",()=>{
    const inputvalue=input.value;
    console.log(inputvalue);
    if(inputvalue.length < 8){
        output.innerText="password is too enough";
        output.style.color="red";
    }
    else{
        // output.innerText="password is long enough";
        // output.style.color="green";
        console.log("is lowercase", inputvalue.search(/[a-z]/));
        if(inputvalue.search(/[a-z]/)== -1){
            output.innerText="password is missing a lowercase letter";
            output.style.color="red";
        }
        else if(inputvalue.search(/[A-Z]/)== -1){
            output.innerText="password is missing a Uppercase letter";
            output.style.color="red";
        }
        else if(inputvalue.search(/[0-9]/)== -1){
            output.innerText="password is missing a Numeric letter";
            output.style.color="red";
        }
        else if(inputvalue.search(/[!\@\#\$\%\^\&\*\(\)\{\}\[\]\:\;\"\'\<\>\,\.\?\/|\`\~]/)== -1){
            output.innerText="password is missing a Special Character";
            output.style.color="red";
        }
        else{
             output.innerText="password is strong";
            output.style.color="green";
        }
    }
})
