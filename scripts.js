const starting_chip_section = document.getElementById("starting_chip_section");
const player_name_row = document.getElementById("player_name_row"); // get new player name
const player_chips_row = document.getElementById("player_chips_row"); // get game's chip number
const game_body_section = document.getElementById("game_body_section");
const new_player_name_input = document.getElementById("new_player_name_input");
const new_player_name_form = document.getElementById("new_player_name_form");
const game_body = document.getElementById("game_body");
const starting_chip_textarea = document.getElementById("starting_chip_textarea");
const game_control_button = document.getElementById("game_control_button");

var game_chips
var player_name = []; // {name:name, chip:chip}
var player_chip = [];
var is_in_game = false;
var still_playing = [];
var current_player = 0; // index of current player
var betting_amount = [];
var action;
var game_stage = 0; // 0: end/start of round; 1: first 3 cards have been flipped; 2: 4th card has been flipped; 3: 5th card has been flipped

function confirm_starting_chip() {
    var key = window.event.keyCode;
    game_chips = starting_chip_textarea.value; // set the game's chip

    if ((key == 13) && (game_chips != "")) {
        starting_chip_section.style.display = "none"; // hide the initial screen
        game_chips = parseInt(game_chips);
        game_body_section.style.display = "block"; // show the game body 
        new_player_name_input.focus();
        new_player_name_form.style.display = "block";
    }
}
function confirm_starting_chip_button() {
    game_chips = starting_chip_textarea.value; // set the game's chip

    if (game_chips != "") {
        starting_chip_section.style.display = "none"; // hide the initial screen
        game_chips = parseInt(game_chips); // set the game's chip
        game_body_section.style.display = "block"; // show the game body 
        new_player_name_input.focus();
        new_player_name_form.style.display = "block";
    }
}
function add_player() {
    var key = window.event.keyCode;
    var name = new_player_name_input.value;
    if ((key === 13) && (name != "")) {
        // add to the frontend
        var x = player_name_row.insertCell(-1);
        x.innerHTML = name;
        var y = player_chips_row.insertCell(-1);

        y.innerHTML = game_chips;
        new_player_name_input.value = ''; // reset the name text input

        // add to the backend
        // let new_player = { "name": name, "chip": parseInt(game_chips) };
        // players.push(new_player);
        player_name.push(name);
        player_chip.push(game_chips);
        new_player_name_input.focus();
    }
}
function add_player_button() {
    var name = new_player_name_input.value;
    if (name != "") {
        // add to the frontend
        var x = player_name_row.insertCell(-1);
        x.innerHTML = name;
        var y = player_chips_row.insertCell(-1);

        y.innerHTML = game_chips;
        new_player_name_input.value = ''; // reset the name text input

        // add to the backend
        // let new_player = { "name": name, "chip": parseInt(game_chips) };
        // players.push(new_player);
        player_name.push(name);
        player_chip.push(game_chips);
        new_player_name_input.focus();
    }
    
}
function remove_player() {
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

function ask(message) {
    if (confirm(message)) {
        return true;
    } else {
        return false;
    }
}

function action(id) {
    if (id == "raise_button") {
        action = "raise";
    } else if (id == "check_button") {
        action = "check";
    } else if (id == "bet_button") {
        action = "bet";
    } else if (id == "fold_button") {
        action = "fold";
    } else if (id == 'call') {
        action = 'call';
    }
}

function next_stage() {
    // check if the round is over
    // if no
        // increment game_round by 1
        // reset current_player to 0
        // call next_player()
}

function next_player() {
    // if game_round == 0
        // show bet button
    // else
        // hide bet button
    // increment current_player by 1
    // check if current player is still in the game
    // if no
        // increment current_player by 1
        // return
    // if yes
        // check if all players have done their action for the stage
        // if no
            // show control for the next player
        // if yes
            // reset current_player to 0
            // call next_stage()
}

function check() {
    // don't allow checking in the if game_stage == 0
    // check if players before this player had also checked, i.e. not raising any amount
    // return
} 

function bet() {
    // check if current player is still in the game
    // if yes
        // show bet amount 
}

function fold()

function call()

function raise()

function start_game() {
    if (player_name.length > 0) {
        new_player_name_form.style.display = "none"; // hide the add player form
        // game_control_button.style.display = "block"; // show the game control button
        is_in_game = true;
    }
}

function quit_game() {
    if (ask("Sure to quit current game?")) {
        // hide the game control buttons
        game_control_button.style.display = "none";
        // hide the game table
        game_body_section.style.display = "none";
        // show the player chip page
        starting_chip_section.style.display = "block";
        // update game status
        is_in_game = false;
    }
}

function restart_game() {

}