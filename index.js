import express from 'express';
import dotenv from 'dotenv';
import { router } from './src/router.js';
import expressReactViews from 'express-react-views';
export const app = express();

const dotenvConfigStatus = dotenv.config();
if (dotenvConfigStatus.error) {
  console.log(dotenvConfigStatus.error);
  throw dotenvConfigStatus.error;
}


app.set('views', '/home/gena/code/js/yandex_autoru_test_task/src/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use('/', router);

app.listen(process.env.PORT);
console.log(`Express started on port ${process.env.PORT}`);