import {url} from './config.ts';

async function start() {
  const response = await fetch(url);
  const html = await response.json();

  console.log(JSON.stringify(html, null, 2));
}

start();
