const app = document.querySelector<HTMLDivElement>('#app');

app!.innerHTML = `
<h1>🚀 Vite Performance Starter</h1>
<p>最小限のJSで起動を高速化。</p>
<button id="load">重いモジュールを後読み込み</button>
`;

document.querySelector('#load')!.addEventListener('click', async () => {
  const { heavyCalc } = await import('./utils/heavy');

  console.time('heavy');

  const result = heavyCalc();

  console.timeEnd('heavy');

  alert(`結果: ${result}`);
});
