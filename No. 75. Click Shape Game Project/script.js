let circle = document.querySelector('#circle')
let btn = document.querySelector('#btn');
    let gameArea = document.querySelector('#gameArea');
    let text = document.querySelector('#text');
    let index = 0;



//When you click on the 'start', the button will disapeared and the game will start
        btn.addEventListener('click', ()=>{
            text.style.display = 'none';
            btn.style.position = 'fixed';
            btn.style.display = 'none';
            circle.style.display = 'block';
           
        });

//any time (when you click on the circle) the height, width, color will changed.
    circle.addEventListener('click', ()=>{
        let innerWidth = window.innerWidth;
            if (innerWidth >= 1000){
                innerWidth = innerWidth-400;
                };
    
        let innerHeight = window.innerHeight;
            if (innerWidth >= 800){
                innerHeight = innerHeight-400;
                };
    
        let randomWidth = Math.floor(Math.random() * innerWidth);
        let randomHeight =  Math.floor(Math.random() * innerHeight);
        let circleWidthHeight = Math.floor(Math.random() * 400);


    //change circle propertys
        circle.style.background= `rgb(
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)}
             )`; 
            
        circle.style.marginTop = `${randomHeight}px`;
        circle.style.marginLeft = `${randomWidth}px`;
        circle.style.width = `${circleWidthHeight}px`;
        circle.style.height = `${circleWidthHeight}px`;

        index += 1; //any time add 1 to the score
      
             if (index===15){//if you get 15, you win
                alert('good');
                circle.style.display = 'none';
                let textScore = document.createElement("p");
                textScore.innerHTML = 'you win!<br />your score is 15';
                document.body.appendChild(textScore);
                textScore.style.fontSize = '60px';
                textScore.style.color = 'yellow';
    
                };;






 

    
   
}) 
 