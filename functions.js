function preventhttp(){
    if(location.protocol == "http:") 
         location.replace(`https://${window.location.href}`);
}
function rickroll(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
    setTimeout(() => {  
        location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'); 
    }, 6000);
         
}
