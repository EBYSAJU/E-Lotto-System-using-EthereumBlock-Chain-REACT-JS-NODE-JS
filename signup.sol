pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;
contract signupdetail{
struct signup{

    string name;
    string password;

    }

    mapping (address => signup)playerstr;

    address[]public playeraccnts;

signup[] public requests;


function enter(string  memory x,string memory y)public {


    signup memory newplayer = signup({
           name: x,
           password: y

        });

        requests.push(newplayer);

}



function details() public constant returns (string[], string[]) {

    uint length = requests.length;

    string[] memory name = new string[](length);
    string[] memory password = new string[](length);


    for (uint i = 0; i < requests.length; i++) {
        signup memory currentplayer;
        currentplayer = requests[i];

        name[i] = currentplayer.name;
        password[i] = currentplayer.password;

      }
      return(name,password);
  }
  function login(string memory name,string memory password) public view returns(bool){

      uint length = requests.length;

    string[] memory name1 = new string[](length);
    string[] memory password1 = new string[](length);


    for (uint i = 0; i < requests.length; i++) {
        signup memory currentplayer;
        currentplayer = requests[i];

        name1[i] = currentplayer.name;
        password1[i] = currentplayer.password;
        if((keccak256(abi.encodePacked(name))==keccak256(abi.encodePacked(name1[i])))&&(keccak256(abi.encodePacked(password))==keccak256(abi.encodePacked(password1[i]))))
        {
            return true;
            break;
        }
        else
        {
            return false;
            break;
        }
        }


      }

  }
