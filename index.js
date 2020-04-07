const express = require('express');
const cors = require('cors');
const app = express();
const audioExt = new Set([
    "mp3",
    "wav",
    "ogg",
    "m4a",
    "flac",
    "aac",
    "alac",
    "aiff"
]);
const port = 3001;

app.use(cors());
app.use((req, res, next) => {
    const reqSplit = req.url.split(".");
    const reqExt   = reqSplit[reqSplit.length - 1];
    console.log(reqExt);

    if (!audioExt.has(reqExt)) {
        res.sendStatus(403);
    } else {
        res.json({ what: "hi!" });
    }
})
app.use(express.static("E:/Music/Main/"));

app.listen(port, () => console.log(`App listening on port ${port}.`));