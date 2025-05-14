// 外部ファイルを読み込む
import {TARGET_URL} from './config.ts';

/**
 * 天気予報データを取得し、整形してコンソールに出力します。
 * @param url 取得するURL
 */
async function start(url:string) {
  // URLからデータを非同期で取得
  const response = await fetch(url);
  // 取得したレスポンスをJSON形式に変換
  const data = await response.json();

  // 取得したJSONデータを整形してコンソールに出力
  console.log(JSON.stringify(data, null, 2));
}

start(TARGET_URL);
