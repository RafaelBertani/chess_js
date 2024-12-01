let game = document.getElementById("game");
let border1 = document.getElementById("border1");
let border2 = document.getElementById("border2");
let border3 = document.getElementById("border3");
let border4 = document.getElementById("border4");

let size = window.innerWidth*0.4;

game.style.height=""+size+10+"px";
game.style.width=""+size+10+"px";

//set borders
border1.style.height=""+size+"px";
border1.style.width=""+(size*0.05)+"px";
border2.style.height=""+(size*0.05)+"px";
border2.style.width=""+size+"px";
border3.style.height=""+size+"px";
border3.style.width=""+(size*0.05)+"px";
border3.style.top="0%";
border3.style.right="0%";
border4.style.height=""+(size*0.05)+"px";
border4.style.width=""+size+"px";
border4.style.bottom="0%";
border4.style.right="0%";

let letters = ["A","B","C","D","E","F","G","H"];
let numbers = ["1","2","3","4","5","6","7","8"];
letters.map((el,key)=>{

    let temp_element = document.createElement("div");
    temp_element.innerHTML=el;
    temp_element.style.height=""+(size*0.05)+"px";
    temp_element.style.width=""+(size*0.9)/8+"px";
    temp_element.style.left=""+((size*0.05) + key*((size*0.9)/8)) +"px";
    temp_element.style.padding=""+((size*0.05)/7)+"px 0";
    temp_element.setAttribute("id","char");
    border4.appendChild(temp_element);
});
numbers.reverse().map((el,key)=>{
    let temp_element = document.createElement("div");
    temp_element.innerHTML=el;
    temp_element.style.height=""+(size*0.9)/8+"px";
    temp_element.style.width=""+(size*0.05)+"px";
    temp_element.style.top=""+((size*0.05) + key*((size*0.9)/8)) +"px";
    temp_element.style.padding=""+((size*0.9)/22)+"px 0";
    temp_element.setAttribute("id","char");
    border3.appendChild(temp_element);
});
letters.map((el,key)=>{

    let temp_element = document.createElement("div");
    temp_element.innerHTML=el;
    temp_element.style.height=""+(size*0.05)+"px";
    temp_element.style.width=""+(size*0.9)/8+"px";
    temp_element.style.left=""+((size*0.05) + key*((size*0.9)/8)) +"px";
    temp_element.style.padding=""+((size*0.05)/7)+"px 0";
    temp_element.setAttribute("id","char");
    border2.appendChild(temp_element);
});
numbers.map((el,key)=>{
    let temp_element = document.createElement("div");
    temp_element.innerHTML=el;
    temp_element.style.height=""+(size*0.9)/8+"px";
    temp_element.style.width=""+(size*0.05)+"px";
    temp_element.style.top=""+((size*0.05) + key*((size*0.9)/8)) +"px";
    temp_element.style.padding=""+((size*0.9)/22)+"px 0";
    temp_element.setAttribute("id","char");
    border1.appendChild(temp_element);
});


let main = document.getElementById("main");
main.style.left=""+(size*0.05)+"px";
main.style.top=""+(size*0.05)+"px";
main.style.width=""+0.90*size+"px";
main.style.height=""+0.90*size+"px";

let content_size = 0.90*size;

// let chat = document.getElementById("chat");

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    //ev.target.id

    ev.target.appendChild(document.getElementById(data));
    
}

let temp;
for(let i=7;i>=0;i--){
    for(let j=0;j<8;j++){
        temp = document.createElement("div");
        temp.setAttribute("class","teste");
        temp.style.width=""+content_size/8+"px";
        temp.style.height=""+content_size/8+"px";
        temp.setAttribute("id",""+(i+1)+letters[j]);
        temp.setAttribute("ondrop","drop(event)");
        temp.setAttribute("ondragover","allowDrop(event)");
        if( ((7-i)*(j+1))%2==0 && (j*((7-i)+1))%2==0 ){ //brancas if( (i*(j+1))%2==0 && (j*(i+1))%2==0 ){
            temp.style.backgroundColor="#444444";
        }
        if( ((7-i)*(j+1))%2==1 || (j*((7-i)+1))%2==1 ){ //pretas if( (i*(j+1))%2==1 || (j*(i+1))%2==1 ){
            temp.style.backgroundColor="#ffffff";
        }
        main.appendChild(temp);        
    }
}


let white_rook_1 = document.getElementById("1A");
let image_white_rook_1 = document.createElement("img");
image_white_rook_1.setAttribute("class","image");
image_white_rook_1.setAttribute("id","white_rook_1");
image_white_rook_1.setAttribute("src","../pieces/white-rook.png");
image_white_rook_1.setAttribute("draggable","true");
image_white_rook_1.setAttribute("ondragstart","drag(event)");
white_rook_1.appendChild(image_white_rook_1);

let white_knight_1 = document.getElementById("1B");
let image_white_knight_1 = document.createElement("img");
image_white_knight_1.setAttribute("class","image");
image_white_knight_1.setAttribute("id","white_knight_1");
image_white_knight_1.setAttribute("src","../pieces/white-knight.png");
image_white_knight_1.setAttribute("draggable","true");
image_white_knight_1.setAttribute("ondragstart","drag(event)");
white_knight_1.appendChild(image_white_knight_1);

let white_bishop_1 = document.getElementById("1C");
let image_white_bishop_1 = document.createElement("img");
image_white_bishop_1.setAttribute("class","image");
image_white_bishop_1.setAttribute("id","white_bishop_1");
image_white_bishop_1.setAttribute("src","../pieces/white-bishop.png");
image_white_bishop_1.setAttribute("draggable","true");
image_white_bishop_1.setAttribute("ondragstart","drag(event)");
white_bishop_1.appendChild(image_white_bishop_1);

let white_king = document.getElementById("1D");
let image_white_king = document.createElement("img");
image_white_king.setAttribute("class","image");
image_white_king.setAttribute("id","white_king");
image_white_king.setAttribute("src","../pieces/white-king.png");
image_white_king.setAttribute("draggable","true");
image_white_king.setAttribute("ondragstart","drag(event)");
white_king.appendChild(image_white_king);

let white_queen = document.getElementById("1E");
let image_white_queen = document.createElement("img");
image_white_queen.setAttribute("class","image");
image_white_queen.setAttribute("id","white_queen");
image_white_queen.setAttribute("src","../pieces/white-queen.png");
image_white_queen.setAttribute("draggable","true");
image_white_queen.setAttribute("ondragstart","drag(event)");
white_queen.appendChild(image_white_queen);

let white_bishop_2 = document.getElementById("1F");
let image_white_bishop_2 = document.createElement("img");
image_white_bishop_2.setAttribute("class","image");
image_white_bishop_2.setAttribute("id","white_bishop_2");
image_white_bishop_2.setAttribute("src","../pieces/white-bishop.png");
image_white_bishop_2.setAttribute("draggable","true");
image_white_bishop_2.setAttribute("ondragstart","drag(event)");
white_bishop_2.appendChild(image_white_bishop_2);

let white_knight_2 = document.getElementById("1G");
let image_white_knight_2 = document.createElement("img");
image_white_knight_2.setAttribute("class","image");
image_white_knight_2.setAttribute("id","white_knight_2");
image_white_knight_2.setAttribute("src","../pieces/white-knight.png");
image_white_knight_2.setAttribute("draggable","true");
image_white_knight_2.setAttribute("ondragstart","drag(event)");
white_knight_2.appendChild(image_white_knight_2);

let white_rook_2 = document.getElementById("1H");
let image_white_rook_2 = document.createElement("img");
image_white_rook_2.setAttribute("class","image");
image_white_rook_2.setAttribute("id","white_rook_2");
image_white_rook_2.setAttribute("src","../pieces/white-rook.png");
image_white_rook_2.setAttribute("draggable","true");
image_white_rook_2.setAttribute("ondragstart","drag(event)");
white_rook_2.appendChild(image_white_rook_2);

let white_pawn_1 = document.getElementById("2A");
let image_white_pawn_1 = document.createElement("img");
image_white_pawn_1.setAttribute("class","image");
image_white_pawn_1.setAttribute("id","white_pawn_1");
image_white_pawn_1.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_1.setAttribute("draggable","true");
image_white_pawn_1.setAttribute("ondragstart","drag(event)");
white_pawn_1.appendChild(image_white_pawn_1);

let white_pawn_2 = document.getElementById("2B");
let image_white_pawn_2 = document.createElement("img");
image_white_pawn_2.setAttribute("class","image");
image_white_pawn_2.setAttribute("id","white_pawn_2");
image_white_pawn_2.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_2.setAttribute("draggable","true");
image_white_pawn_2.setAttribute("ondragstart","drag(event)");
white_pawn_2.appendChild(image_white_pawn_2);

let white_pawn_3 = document.getElementById("2C");
let image_white_pawn_3 = document.createElement("img");
image_white_pawn_3.setAttribute("class","image");
image_white_pawn_3.setAttribute("id","white_pawn_3");
image_white_pawn_3.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_3.setAttribute("draggable","true");
image_white_pawn_3.setAttribute("ondragstart","drag(event)");
white_pawn_3.appendChild(image_white_pawn_3);

let white_pawn_4 = document.getElementById("2D");
let image_white_pawn_4 = document.createElement("img");
image_white_pawn_4.setAttribute("class","image");
image_white_pawn_4.setAttribute("id","white_pawn_4");
image_white_pawn_4.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_4.setAttribute("draggable","true");
image_white_pawn_4.setAttribute("ondragstart","drag(event)");
white_pawn_4.appendChild(image_white_pawn_4);

let white_pawn_5 = document.getElementById("2E");
let image_white_pawn_5 = document.createElement("img");
image_white_pawn_5.setAttribute("class","image");
image_white_pawn_5.setAttribute("id","white_pawn_5");
image_white_pawn_5.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_5.setAttribute("draggable","true");
image_white_pawn_5.setAttribute("ondragstart","drag(event)");
white_pawn_5.appendChild(image_white_pawn_5);

let white_pawn_6 = document.getElementById("2F");
let image_white_pawn_6 = document.createElement("img");
image_white_pawn_6.setAttribute("class","image");
image_white_pawn_6.setAttribute("id","white_pawn_6");
image_white_pawn_6.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_6.setAttribute("draggable","true");
image_white_pawn_6.setAttribute("ondragstart","drag(event)");
white_pawn_6.appendChild(image_white_pawn_6);

let white_pawn_7 = document.getElementById("2G");
let image_white_pawn_7 = document.createElement("img");
image_white_pawn_7.setAttribute("class","image");
image_white_pawn_7.setAttribute("id","white_pawn_7");
image_white_pawn_7.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_7.setAttribute("draggable","true");
image_white_pawn_7.setAttribute("ondragstart","drag(event)");
white_pawn_7.appendChild(image_white_pawn_7);

let white_pawn_8 = document.getElementById("2H");
let image_white_pawn_8 = document.createElement("img");
image_white_pawn_8.setAttribute("class","image");
image_white_pawn_8.setAttribute("id","white_pawn_8");
image_white_pawn_8.setAttribute("src","../pieces/white-pawn.png");
image_white_pawn_8.setAttribute("draggable","true");
image_white_pawn_8.setAttribute("ondragstart","drag(event)");
white_pawn_8.appendChild(image_white_pawn_8);


let black_rook_1 = document.getElementById("8A");
let image_black_rook_1 = document.createElement("img");
image_black_rook_1.setAttribute("class","image");
image_black_rook_1.setAttribute("id","black_rook_1");
image_black_rook_1.setAttribute("src","../pieces/black-rook.png");
image_black_rook_1.setAttribute("draggable","true");
image_black_rook_1.setAttribute("ondragstart","drag(event)");
black_rook_1.appendChild(image_black_rook_1);

let black_knight_1 = document.getElementById("8B");
let image_black_knight_1 = document.createElement("img");
image_black_knight_1.setAttribute("class","image");
image_black_knight_1.setAttribute("id","black_knight_1");
image_black_knight_1.setAttribute("src","../pieces/black-knight.png");
image_black_knight_1.setAttribute("draggable","true");
image_black_knight_1.setAttribute("ondragstart","drag(event)");
black_knight_1.appendChild(image_black_knight_1);
    
let black_bishop_1 = document.getElementById("8C");
let image_black_bishop_1 = document.createElement("img");
image_black_bishop_1.setAttribute("class","image");
image_black_bishop_1.setAttribute("id","black_bishop_1");
image_black_bishop_1.setAttribute("src","../pieces/black-bishop.png");
image_black_bishop_1.setAttribute("draggable","true");
image_black_bishop_1.setAttribute("ondragstart","drag(event)");
black_bishop_1.appendChild(image_black_bishop_1);
    
let black_king = document.getElementById("8D");
let image_black_king = document.createElement("img");
image_black_king.setAttribute("class","image");
image_black_king.setAttribute("id","black_king");
image_black_king.setAttribute("src","../pieces/black-king.png");
image_black_king.setAttribute("draggable","true");
image_black_king.setAttribute("ondragstart","drag(event)");
black_king.appendChild(image_black_king);

let black_queen = document.getElementById("8E");
let image_black_queen = document.createElement("img");
image_black_queen.setAttribute("class","image");
image_black_queen.setAttribute("id","black_queen");
image_black_queen.setAttribute("src","../pieces/black-queen.png");
image_black_queen.setAttribute("draggable","true");
image_black_queen.setAttribute("ondragstart","drag(event)");
black_queen.appendChild(image_black_queen);

let black_bishop_2 = document.getElementById("8F");
let image_black_bishop_2 = document.createElement("img");
image_black_bishop_2.setAttribute("class","image");
image_black_bishop_2.setAttribute("id","black_bishop_2");
image_black_bishop_2.setAttribute("src","../pieces/black-bishop.png");
image_black_bishop_2.setAttribute("draggable","true");
image_black_bishop_2.setAttribute("ondragstart","drag(event)");
black_bishop_2.appendChild(image_black_bishop_2);

let black_knight_2 = document.getElementById("8G");
let image_black_knight_2 = document.createElement("img");
image_black_knight_2.setAttribute("class","image");
image_black_knight_2.setAttribute("id","black_knight_2");
image_black_knight_2.setAttribute("src","../pieces/black-knight.png");
image_black_knight_2.setAttribute("draggable","true");
image_black_knight_2.setAttribute("ondragstart","drag(event)");
black_knight_2.appendChild(image_black_knight_2);

let black_rook_2 = document.getElementById("8H");
let image_black_rook_2 = document.createElement("img");
image_black_rook_2.setAttribute("class","image");
image_black_rook_2.setAttribute("id","black_rook_2");
image_black_rook_2.setAttribute("src","../pieces/black-rook.png");
image_black_rook_2.setAttribute("draggable","true");
image_black_rook_2.setAttribute("ondragstart","drag(event)");
black_rook_2.appendChild(image_black_rook_2);

let black_pawn_1 = document.getElementById("7A");
let image_black_pawn_1 = document.createElement("img");
image_black_pawn_1.setAttribute("class","image");
image_black_pawn_1.setAttribute("id","black_pawn_1");
image_black_pawn_1.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_1.setAttribute("draggable","true");
image_black_pawn_1.setAttribute("ondragstart","drag(event)");
black_pawn_1.appendChild(image_black_pawn_1);

let black_pawn_2 = document.getElementById("7B");
let image_black_pawn_2 = document.createElement("img");
image_black_pawn_2.setAttribute("class","image");
image_black_pawn_2.setAttribute("id","black_pawn_2");
image_black_pawn_2.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_2.setAttribute("draggable","true");
image_black_pawn_2.setAttribute("ondragstart","drag(event)");
black_pawn_2.appendChild(image_black_pawn_2);

let black_pawn_3 = document.getElementById("7C");
let image_black_pawn_3 = document.createElement("img");
image_black_pawn_3.setAttribute("class","image");
image_black_pawn_3.setAttribute("id","black_pawn_3");
image_black_pawn_3.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_3.setAttribute("draggable","true");
image_black_pawn_3.setAttribute("ondragstart","drag(event)");
black_pawn_3.appendChild(image_black_pawn_3);

let black_pawn_4 = document.getElementById("7D");
let image_black_pawn_4 = document.createElement("img");
image_black_pawn_4.setAttribute("class","image");
image_black_pawn_4.setAttribute("id","black_pawn_4");
image_black_pawn_4.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_4.setAttribute("draggable","true");
image_black_pawn_4.setAttribute("ondragstart","drag(event)");
black_pawn_4.appendChild(image_black_pawn_4);

let black_pawn_5 = document.getElementById("7E");
let image_black_pawn_5 = document.createElement("img");
image_black_pawn_5.setAttribute("class","image");
image_black_pawn_5.setAttribute("id","black_pawn_5");
image_black_pawn_5.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_5.setAttribute("draggable","true");
image_black_pawn_5.setAttribute("ondragstart","drag(event)");
black_pawn_5.appendChild(image_black_pawn_5);

let black_pawn_6 = document.getElementById("7F");
let image_black_pawn_6 = document.createElement("img");
image_black_pawn_6.setAttribute("class","image");
image_black_pawn_6.setAttribute("id","black_pawn_6");
image_black_pawn_6.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_6.setAttribute("draggable","true");
image_black_pawn_6.setAttribute("ondragstart","drag(event)");
black_pawn_6.appendChild(image_black_pawn_6);

let black_pawn_7 = document.getElementById("7G");
let image_black_pawn_7 = document.createElement("img");
image_black_pawn_7.setAttribute("class","image");
image_black_pawn_7.setAttribute("id","black_pawn_7");
image_black_pawn_7.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_7.setAttribute("draggable","true");
image_black_pawn_7.setAttribute("ondragstart","drag(event)");
black_pawn_7.appendChild(image_black_pawn_7);

let black_pawn_8 = document.getElementById("7H");
let image_black_pawn_8 = document.createElement("img");
image_black_pawn_8.setAttribute("class","image");
image_black_pawn_8.setAttribute("id","black_pawn_8");
image_black_pawn_8.setAttribute("src","../pieces/black-pawn.png");
image_black_pawn_8.setAttribute("draggable","true");
image_black_pawn_8.setAttribute("ondragstart","drag(event)");
black_pawn_8.appendChild(image_black_pawn_8);
