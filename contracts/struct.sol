pragma solidity ^0.4.25;

contract Project
{
    struct player{

    string ticketno;
    string name;

    }

    mapping (address => player)players;

    address[]public playeraccnts;
function set( address _address, string  memory x,string memory y) public{
  var player = players[_address];
  player.ticketno = x;
  player.name=y;
  playeraccnts.push(_address)-1;
}


function get(address _address) public view returns(string memory,string memory){
return(players[_address].ticketno,players[_address].name);
}
}
