import * as Ex from 'express';
import express from 'express';
import cors from 'cors';
const app: express.Application = express();
const audioExt: Set<String> = new Set([
    "mp3",
    "wav",
    "ogg",
    "m4a",
    "flac",
    "aac",
    "alac",
    "aiff"
]);
const port: number = 3001;

app.use(cors());
app.use((req: express.Request, res: express.Response) => {
    const reqSplit: String[] = req.url.split('.');
    const reqExt: String = reqSplit[reqSplit.length - 1];

    if (!audioExt.has(reqExt)) {
        res.sendStatus(403);
    } else {
        res.json({ what: "hi!" });
    }
});

app.use(express.static("E:/Music/Main/"));
app.listen(port, () => console.log(`Server listening on port ${port}`));