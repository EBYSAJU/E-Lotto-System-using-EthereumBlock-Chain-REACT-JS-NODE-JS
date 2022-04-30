pragma solidity ^0.4.25;

contract lotteryticket{
    struct player{

    string ticketno;
    string name;

    }



player[] public requests;
address public  manager;
address [] public  players;
address public lastwinner;
address public secondwinner;
address public thirdwinner;
address [] public winners;

uint indexg;
uint indexg1;
uint indexg2;
 constructor() public {
    manager=msg.sender;

}
function enter(string  memory x,string memory y)public payable{
    require(msg.value == 1 ether);
    players.push(msg.sender);
    player memory newplayer = player({
           ticketno: x,
           name: y

        });

        requests.push(newplayer);

}

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }
    function pickwinner() public restricted {
    uint index= random() % players.length;
    indexg=index;



    players[index].transfer(address(this).balance/2);
    lastwinner=players[index];
    winners.push(lastwinner);



    }
    function pickwinner1() public restricted {
    uint index= random() % players.length;
    indexg1=index;

    players[index].transfer(address(this).balance/2);
    secondwinner=players[index];
    winners.push(secondwinner);



    }
    function pickwinner2() public restricted {
    uint index= random() % players.length;
    indexg2 =index;

    players[index].transfer(address(this).balance/2);
    thirdwinner=players[index];
    winners.push(thirdwinner);



    }
    modifier restricted{
        require(msg.sender==manager);
        _;
    }
function getplayers() public view returns(address [] memory){
    return players;


}
function winner() public view returns(address ){
    return lastwinner;

}
function winner1() public view returns(address ){
    return secondwinner;

}
function winner2() public view returns(address ){
    return thirdwinner;

}

    function remove() public restricted returns(address[]){
       if(indexg>=players.length) return;
        for (uint i = indexg; i<players.length-1; i++){
            players[i] = players[i+1];
        }
        delete players[players.length-1];
        players.length--;
       return players;

    }

    function remove1() public restricted returns(address[]){
       if(indexg1>=players.length) return;
        for (uint i = indexg1; i<players.length-1; i++){
            players[i] = players[i+1];
        }
        delete players[players.length-1];
        players.length--;
       return players;

    }

    function winnername() public view returns(string memory){
        return requests[indexg].name;

    }

    function winnername1() public view returns(string memory){
        return requests[indexg1].name;

    }

    function winnername2() public view returns(string memory){
        return requests[indexg2].name;

    }

    function winnernumber() public view returns(string memory){
        return requests[indexg].ticketno;
    }
    function winnernumber1() public view returns(string memory){
        return requests[indexg1].ticketno;
    }
    function winnernumber2() public view returns(string memory){
        return requests[indexg2].ticketno;
    }
    function length() public view returns(uint){
        requests.length;
    }
    function clear()public restricted{

        players = new address[](0);


    }
    function transfer() public restricted{
        manager.transfer(address(this).balance);
    }
function plength() public view returns(uint){
    return players.length;
}
function getwinners() public view returns(address[] memory){
    return winners;

}

}
