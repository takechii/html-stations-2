function displayList() {
    // `div#fruits` の要素を取得
    const fruitsDiv = document.getElementById('fruits');
  
    // 新しい `ul` 要素を作成
    const ul = document.createElement('ul');
  
    // 元の `p` 要素をすべて取得し、それぞれ `li` 要素に変換して `ul` に追加
    const fruitItems = fruitsDiv.getElementsByTagName('p');
    for (let i = 0; i < fruitItems.length; i++) {
      const li = document.createElement('li');
      li.textContent = fruitItems[i].textContent;
      ul.appendChild(li);
    }
  
    // `div#fruits` の内容を新しい `ul` で置き換える
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
  }
  