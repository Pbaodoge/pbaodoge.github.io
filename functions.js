function preventhttp(){
    if(location.protocol == "http:") 
         location.replace(`https://${location.hostname}${location.pathname}`);
}
function rickroll(){
    setTimeout(() => {  
        setTimeout(() =>{
            location.replace(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`);
        }, 3000);
        setTimeout(() =>{
            window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`);
        }, 3000);
        
    }, 1000);
         
}
