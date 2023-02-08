var players = [];
var is_in_game = false;

function add_player() {
    player_name_row = document.getElementById("player_name_row"); // get new player name
    player_chips_row = document.getElementById("player_chips_row"); // get game's chip number
    
    // add to the frontend
    var x = player_name_row.insertCell(-1);
    var name = document.getElementById("new_player_name_input").value;
    x.innerHTML = name;
    var y = player_chips_row.insertCell(-1);
    var game_chips = document.getElementById("game_chips").value;
    y.innerHTML = game_chips;
    document.getElementById("new_player_name_input").value = ''; // reset the name text input

    // add to the backend
    let new_player = {"name":name, "chips":parseInt(game_chips)};
    players.push(new_player);
}

function remove_player() {
    player_name_row = document.getElementById("player_name_row"); // get new player name
    player_chips_row = document.getElementById("player_chips_row"); // get game's chip number

    // make sure it does not delete the row labels
    if (player_name_row.cells.length < 2) {
        return;
    }
    // remove from the frontend
    player_name_row.deleteCell(-1);
    player_chips_row.deleteCell(-1);
    
    // remove from the backend
    players.pop();
}

function start_game() {
    const new_player_name_form = document.getElementById("new_player_name_form");
    const game_body = document.getElementById("game_body");

    new_player_name_form.style.display = "none"; // hide the add player form
    game_body.style.display = "block"; // show the game body
    is_in_game = true;
}