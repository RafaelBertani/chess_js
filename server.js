const express = require('express');
const app=express();

app.get('/',(req,res)=>{res.sendFile('./index/index.html',{root: __dirname });});
app.get('/indexcss',(req,res)=>{res.sendFile('./index/index.css',{root: __dirname });});
app.get('/indexjs',(req,res)=>{res.sendFile('./index/index.js',{root: __dirname });});
app.get('/functionsjs',(req,res)=>{res.sendFile('./functions/functions.js',{root: __dirname });});
app.get('/pieces/white-pawn.png',(req,res)=>{res.sendFile('./pieces/white-pawn.png',{root: __dirname });});
app.get('/pieces/white-rook.png',(req,res)=>{res.sendFile('./pieces/white-rook.png',{root: __dirname });});
app.get('/pieces/white-knight.png',(req,res)=>{res.sendFile('./pieces/white-knight.png',{root: __dirname });});
app.get('/pieces/white-bishop.png',(req,res)=>{res.sendFile('./pieces/white-bishop.png',{root: __dirname });});
app.get('/pieces/white-queen.png',(req,res)=>{res.sendFile('./pieces/white-queen.png',{root: __dirname });});
app.get('/pieces/white-king.png',(req,res)=>{res.sendFile('./pieces/white-king.png',{root: __dirname });});
app.get('/pieces/black-pawn.png',(req,res)=>{res.sendFile('./pieces/black-pawn.png',{root: __dirname });});
app.get('/pieces/black-rook.png',(req,res)=>{res.sendFile('./pieces/black-rook.png',{root: __dirname });});
app.get('/pieces/black-knight.png',(req,res)=>{res.sendFile('./pieces/black-knight.png',{root: __dirname });});
app.get('/pieces/black-bishop.png',(req,res)=>{res.sendFile('./pieces/black-bishop.png',{root: __dirname });});
app.get('/pieces/black-queen.png',(req,res)=>{res.sendFile('./pieces/black-queen.png',{root: __dirname });});
app.get('/pieces/black-king.png',(req,res)=>{res.sendFile('./pieces/black-king.png',{root: __dirname });});

app.listen(3000,()=>{console.log("Server running on PORT 3000.");});
