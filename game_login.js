function login(){

    Player_1_v = document.getElementById("input_1").value;
    Player_2_v = document.getElementById("input_2").value;

    localStorage.setItem("Player_1", Player_1_v );
    localStorage.setItem("Player_2", Player_2_v );

    window.location = "game_page.html";

}