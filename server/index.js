import express from 'express';
import cors from 'cors';
import myFunction from "./apiCall.js"

const app = express();

app.use(cors());

// var myFunctionTest = require("./apiCall.js");

myFunctionTest();
