function changeBackgroundColor() {
  const checkbox = document.getElementById('check');
  const text = document.getElementById('text');

  if (checkbox.checked) {
    text.style.backgroundColor = 'red';
  } else {
    text.style.backgroundColor = 'transparent';
  }
}

// チェックボックスの状態が変わったときに `changeBackgroundColor` 関数を呼び出す
document.getElementById('check').addEventListener('change', changeBackgroundColor);
