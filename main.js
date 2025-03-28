import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(express.json());

app.route('/')
    .get((reg, res) => {
        res.send("ai là người đẹp trai nhất?Sanh là người đẹp trai nhất")

    }
    )
const Port = process.env.PORT || 3000
app.listen(Port, (reg, res) => {
    
    console.log(`Server run at http://localhost:${Port}`)

})
