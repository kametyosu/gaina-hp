(() => {
  const button = document.querySelector('.copy-email');
  const status = document.querySelector('.copy-status');
  if (!button || !status) return;
  button.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('i.co_ta@icloud.com');
      status.textContent = 'メールアドレスをコピーしました。';
    } catch {
      status.textContent = 'コピーできませんでした。上のアドレスを選択してコピーしてください。';
    }
  });
})();
