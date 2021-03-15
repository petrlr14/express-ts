import express from 'express';
import Routes from '@routes/index';

const app: express.Application = express();


app.use(Routes);

app.listen(3000, () => {
    console.log("listening at 3000");
})