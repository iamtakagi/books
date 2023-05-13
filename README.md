# books
Managing purchased technical books.

## このリポジトリについて
- [@iamtakagi](https://github.com/iamtakagi) が購入した技術書を管理する目的で CSV データにまとめています。
- おすすめの技術書があれば Issue 等で教えて下さい。

## 生データ

### CSV
- https://raw.githubusercontent.com/iamtakagi/books/main/data.csv

```javascript
fetch('https://raw.githubusercontent.com/iamtakagi/books/main/data.csv')
  .then((res) => res.text())
  .then((data) => console.log(data));
```

### JSON
- https://iamtakagi.github.io/books/data.json

```javascript
fetch('https://iamtakagi.github.io/books/data.json')
  .then((res) => res.json())
  .then((data) => console.log(data));
```
