function preventhttp(){
    if(location.protocol == "http:") 
         location.replace(`https://${location.hostname}${location.pathname}`);
}
function rickroll(){
    for(let i = 1; i <= 10; i++)
        window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`);
    setTimeout(() => {  
        location.replace(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`); 
    }, 7000);
         
}
