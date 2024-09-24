import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

function checkWeekDay(req, res, next){
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "work hard";

    if (day == 0 || getDay == 6){
        type = "the weekend";
        adv = "have fun";
    }

    next();
}

app.use(checkWeekDay);

app.get("/", (req, res) =>{
    res.render("index.ejs" , {
        day: whichDay,
        advice: givenAdvice,
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});