export function initial_fill_board(){
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
        
}

let oi = 9;