// SPDX-License-Identifier: UNLICENSED
//MyNFT address: 0xcd42023818E9705C30c7389dD7e0fE1bf7493D1f

pragma solidity ^0.8.20;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract MyNFT is ERC721URIStorage {
    uint256 private _tokenIds;

    constructor() ERC721("MyNFT","RS") {}


    function mintNFT(address recipient, string memory tokenURI) public returns (uint256)
    {
        uint256 tokenId = _tokenIds++;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }
}
