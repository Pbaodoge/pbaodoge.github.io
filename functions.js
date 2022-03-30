function preventhttp(){
    if(location.protocol == "http:") 
         location.replace(`${window.location.href}`);
}
