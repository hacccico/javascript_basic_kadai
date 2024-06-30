const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
  setTimeout(() => {
    const changeBtn = document.getElementById('text');
    changeBtn.textContent='ボタンをクリックしました';
  },2000);
  
});

