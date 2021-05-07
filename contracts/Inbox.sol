// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; // pragma solidity ^0.4.17;

// contract code will go here
contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // replaced by using constructor instead
    // function inbox(string memory initialMessage) public {
    //     message = initialMessage;
    // }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}