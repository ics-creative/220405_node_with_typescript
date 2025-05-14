// 気象庁の指定地域の天気予報の概要を取得するURL
const url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";

/**
 * 天気予報データを取得し、整形してコンソールに出力します。
 */
async function start() {
  // URLからデータを非同期で取得
  const response = await fetch(url);
  // 取得したレスポンスをJSON形式に変換
  const data = await response.json();

  // 取得したJSONデータを整形してコンソールに出力
  console.log(JSON.stringify(data, null, 2));
}

start();
