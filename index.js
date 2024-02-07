const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Buffer = require("buffer/").Buffer;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/images", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=200`,
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET
                    ).toString("base64")}`,
                },
            }
        );

        const data = await response.json();

        res.json(data);
    } catch (err) {
        console.error("unknown error... initiate self destruct", err);
    }
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}!`));
