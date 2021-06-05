const express = require('express')
const models = require('./model.js')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const config = require('./config')
const app = express()
app.use(express.json())
app.post('/register',async(req,res)=>{
    let body = req.body
    let passwordHash = crypto.createHash('sha256').update(body.password).digest('base64')
    try {
        let user = await models.user.create({
            "name": body.name,
            "username": body.username,
            "password": passwordHash,
        })
        return res.send({
            "status": "ok"
        })
    } catch (error) {
        return res.send({
            "status": "failed"
        })
    }
})
app.post('/login',async(req,res)=>{
    let body = req.body;
    let passwordHash = crypto.createHash('sha256').update(body.password).digest('base64')

    let user = await models.user.findOne({
        where: { username: body.username, password: passwordHash }
    });

    if (user) {
        let payload = {
            id: user.id,
            role: user.role
        };

        let token = jwt.sign(payload, config.secret_key);
        return res.send({
            "status": "ok",
            "username": user.username,
            token
        });
    }
    return res.send({
        "status": "failed"
    })
})
app.listen(3000)