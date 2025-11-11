// Here express runs the server.
const express = require("express");
// Helps us to connect frontend and backend ports or servers.
const cors = require("cors");
// Here we are importing the JWT token.
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// Creating a secretKey as we know jwt takes three main parameters claims,secretkey,payload
const secretKey = "gfbudfy483834bjhfbde383";

app.get("/login", (req, resp) => {
    // Generates the token with some dummy claims.
    const claims = {
        userId: 4567,
        email: "naresh@gmail.com",
        role: "EMPLOYEE"
    };
    const token = jwt.sign(claims, secretKey, {
        // 12:00 => Token created
        // 12:05 => token valid
        // 12:10 => token expiration time
        notBefore: '5s',
        expiresIn: '10s',
    });

    resp.status(200).json({ token });
});

app.get("/profile", (req, resp) => {
    const token = req.headers["authorization"];
    console.log("token", token);
    // Here we are using the try and error to know the error we are getting
    try {
        const claims = jwt.verify(token, secretKey);
        resp.status(200).json({ claims });
    }
    catch(error) {
        if(error instanceof jwt.TokenExpiredError) {
            return resp.status(401).json({ error, message: "Token Expired" })   
        }
        else if(error instanceof jwt.NotBeforeError) {
            return resp.status(401).json({ error, message: "Token is still not valid" });
        }
        resp.status(401).json({ error, message: "Invalid token" });
    }
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
})