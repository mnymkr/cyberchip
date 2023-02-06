

function add_player() {
    player_name_row = document.getElementById("player_name_row");
    player_chips_row = document.getElementById("player_chips_row");
    
    var x = player_name_row.insertCell(-1);
    x.innerHTML = document.getElementById("new_player_name_input").value;
    var y = player_chips_row.insertCell(-1);
    y.innerHTML = document.getElementById("game_chips").value;

    document.getElementById("new_player_name_input").value = ''
}