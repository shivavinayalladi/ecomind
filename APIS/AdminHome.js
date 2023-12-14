const exp = require("express");

const userApp = exp.Router();

require("dotenv").config()
const bodyParser = require('body-parser');

const cors = require('cors');
userApp.use(bodyParser.json({ limit: '50mb' }));
userApp.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
userApp.use(bodyParser.json());
userApp.use(cors());


//import express-async-handler
const expressAsyncHandler = require('express-async-handler')


const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { CloseFullscreen } = require("@mui/icons-material");


//body parser

userApp.use(exp.json())

userApp.post('/login-user', expressAsyncHandler(async (request, response) => {

    //get user collection
    const userCollectionObj = request.app.get("users")
     console.log(request.body,"pppppp")
    //get user from client
    const userCredentialsObj = request.body;
  
    //verify username of userCredentialsObj
    let userOfDB = await userCollectionObj.findOne({ username: userCredentialsObj.username })
    console.log(userOfDB)
    //if username is invalid
    if (userOfDB === null) {
      response.status(200).send({ message: "Invalid username" })
    }
    //if username is valid
    else {
      //compare passwords
      
      //if passwords not matched
      if (userCredentialsObj.password!=userOfDB.password) {
        response.status(200).send({ message: "Invalid password" })
      }
      //passwords are matched
      else {
        //create JWT token
        
        //send token in response
  
        response.status(200).send({ message: "success", user: userOfDB })
      }
  
    }
  
  }))
  userApp.post("/register-user", expressAsyncHandler(async (request, response) => {
  console.log(request.body,"lopo")
    //get user collection
    const userCollectionObj = await request.app.get("users")
    console.log(userCollectionObj,"klk")
    console.log("first")
  
      await userCollectionObj.insertOne(request.body)
      //send response
      response.status(201).send({ message: "User created" })
    
  }))
  userApp.get("/get-quiz",expressAsyncHandler(async(request,response)=>{
    console.log("popop")
    const QuizObj= await request.app.get("Social")
    console.log(QuizObj,"so")
    const QuizObj1=await request.app.get("sdev")
    console.log(QuizObj1,"su")
    let Audi=await QuizObj.find().toArray();
    let Audi1=await QuizObj1.find().toArray();
    console.log(Audi,"ko")
    console.log(Audi1,"kop")
    response.status(200).send({payload1:Audi,payload2:Audi1})
  }))
  module.exports = userApp;