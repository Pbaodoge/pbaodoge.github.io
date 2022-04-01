function preventhttp(){
    if(location.protocol == "http:") 
         location.replace(`https://${window.location.href}`);
}
function rickroll(){
    for(let i = 0; i <= 4; i++) 
         window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
  
