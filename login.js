let login=()=>{
    let loginemail=document.querySelector("#email").value

    let loginpass=document.querySelector("#password").value
    
    let localemail=localStorage.getItem("email")
    
    let localpass=localStorage.getItem("pass")                                                                            
    
    if(loginemail==localemail && loginpass==localpass ) {
    
    location.href="index.html"
    }
    else{
    alert("Invalid email and password")
    }

    return false
}
