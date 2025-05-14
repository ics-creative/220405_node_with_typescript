import {TARGET_URL} from './config.ts';

async function start(url:string) {
  const response = await fetch(url);
  const html = await response.json();

  console.log(JSON.stringify(html, null, 2));
}

start(TARGET_URL);
