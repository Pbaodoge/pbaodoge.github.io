function preventhttp(){
    if(location.protocol == "http:") 
         location.replace(`https://${window.location.href}`);
}
