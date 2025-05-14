const url = "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";

async function start() {
  const response = await fetch(url);
  const html = await response.json();

  console.log(JSON.stringify(html, null, 2));
}

start();
