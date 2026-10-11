(() => {
  const demo = document.querySelector('.power-demo');
  const button = document.querySelector('#power-toggle');
  const status = document.querySelector('#power-status');
  const label = document.querySelector('#power-state-text');
  if (!demo || !button || !status || !label) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  button.addEventListener('click', () => {
    clearTimeout(timer);
    if (demo.dataset.state !== 'off') {
      demo.dataset.state = 'off';
      button.setAttribute('aria-pressed', 'false');
      button.innerHTML = '電気をつないでみる <span aria-hidden="true">↗</span>';
      label.textContent = '電気がつながる前';
      status.textContent = 'ボタンを押して、現場に明かりを届けよう。';
      return;
    }
    demo.dataset.state = 'connecting';
    button.setAttribute('aria-pressed', 'true');
    button.innerHTML = '電気を消す <span aria-hidden="true">↺</span>';
    label.textContent = '電気をつないでいます';
    status.textContent = '配線を通じて、工場へ電気が届きます。';
    const complete = () => {
      demo.dataset.state = 'on';
      label.textContent = '電気がつながりました';
      status.textContent = '明かりが灯り、現場で働く人の仕事を支えます。';
    };
    if (reduced.matches) complete();
    else timer = setTimeout(complete, 1600);
  });
})();
