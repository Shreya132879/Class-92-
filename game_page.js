player_1 = localStorage.getItem("Player_1");
player_2 = localStorage.getItem("Player_2");

 player1_score = 0;
 player2_score = 0;

document.getElementById("pl_1_name").innerHTML = player_1 + ":";
document.getElementById("pl_2_name").innerHTML = player_2 + ":";

document.getElementById("pl_1_score").innerHTML = player1_score;
document.getElementById("pl_2_score").innerHTML = player2_score;

document.getElementById("Ques_turn").innerHTML = "Ques_turn = " + player_1;
document.getElementById("Ans_turn").innerHTML = "Ans_turn = " + player_2;

function send(){

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    second_letter = Math.floor(word.length/2);
    charAt2 = word.charAt(second_letter);
    console.log(charAt2);

    third_letter = word.length - 1 ;
    charAt3 = word.charAt(third_letter);  
    console.log(charAt3); 

   remove_chatAt1 = word.replace(charAt1,"_");
   remove_chatAt2 = remove_chatAt1.replace(charAt2,"_");
   remove_chatAt3 = remove_chatAt2.replace(charAt3,"_");

   console.log(remove_chatAt3);

   Question_word ='<h4 id="word_display"> Q.'+remove_chatAt3+'</h4>';
    input_box = '<br> Answer: <input id="Ans_input">'; 

    check_button='<br> <br> <button id="btn_check" onclick="check()"> Check </button>'
    row = Question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("word").value = "";
    
}

Question_turn = "pl_1";
Answer_turn = "pl_2";


function check(){

Ans = document.getElementById("Ans_input").value; 
Ans_lowercase = Ans.toLowerCase(); 
if(Ans_lowercase == word){

 if(Answer_turn == "pl_1"){
    player1_score = player1_score + 1 ; 
    document.getElementById("pl_1_score").innerHTML = player1_score;

 }   
 else {
     player2_score = player2_score + 1;
     document.getElementById("pl_2_score").innerHTML = player2_score;
 }

}
if(Question_turn == "pl_1"){

    Question_turn = "pl_2";
    document.getElementById("Ques_turn").innerHTML = "Ques_turn = " + player_2;

}
else {
    Question_turn = "pl_1";
    document.getElementById("Ques_turn").innerHTML = "Ques_turn = " + player_1;


}
if(Answer_turn == "pl_1"){

    Answer_turn = "pl_2";
    document.getElementById("Ans_turn").innerHTML = "Ans_turn = " + player_2;


}
else {
    Answer_turn = "pl_1";
    document.getElementById("Ans_turn").innerHTML = "Ans_turn = " + player_1;
}
document.getElementById("output").value = "";
}