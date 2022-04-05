import * as http from "http";
import { port } from "./config"; // 自前で作成したモジュールを読み込む

// httpサーバーを設定する
const server = http.createServer(
  (request, response) => {
    // サーバーにリクエストがあった時に実行される関数
    response.end(`Hello! Node.js with TypeScript. Port is ${port}.`);
  }
);
// サーバーを起動してリクエストを待ち受け状態にする
server.listen(port);
// ログを出力する
console.log(`http://localhost:${port} へアクセスください`);
