function preventhttp(){
    window.location.href = "https://youtu.be/zTfIr2_XVrc";
    if(location.protocol == "http:") 
         location.replace(`https://${location.hostname}${location.pathname}`);
}
function rickroll(){
    setTimeout(() => {  
        setTimeout(() =>{
            location.replace(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`);
        }, 15000);
        setTimeout(() =>{
            window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`);
        }, 15000);
        
    }, 1000);
         
}
