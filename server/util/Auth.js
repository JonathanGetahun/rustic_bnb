const User = require('../model/user')
const jwt = require('jsonwebtoken');
const { response } = require('express');
require('dotenv').config()

//The object decoded from the token contains the email and id fields, which tell the server who made the request.
//If there is no token, decdoedToken.id is undefined
const getDecodedToken = (req) => {
    const authorization = req.get('authorization');
    if (authroization && authorization.toLowerCase().startsWith('bearer ')){
        return jwt.verify(authroization.substring(7), process.env.SECRET)
    }
    return null;
};

//401 is returned if unauthorized, when checkAuthroization is used in separate modules
const checkAuthorization = (req, userID) => {
    const decodedToken = getDecodedToken(req);
    if(!userID || !decodedToken || !decodedToken.id || decodedToken.id.toString() !== userID.toString()) {
        return response.status(401).json({
            error: 'token missing or invalid: Not Authorized'
        })
    }
}

module.exports = { getDecodedToken, checkAuthorization }