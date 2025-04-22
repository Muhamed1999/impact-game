

        // كود البحث عن المنتجات بالعربية
        function searchProducts() {
            // الحصول على قيمة مربع البحث
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            // جميع البطاقات
            const continer_games = document.querySelectorAll('.game');

            // عرض وإخفاء البطاقات بناءً على نتائج البحث
            continer_games.forEach(game => {
                const productName = game.querySelector('.game-title').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    game.style.display = "block"; // إظهار البطاقة إذا كان المنتج يتطابق مع البحث
                } else {
                    game.style.display = "none"; // إخفاء البطاقة إذا لم يتطابق مع البحث
                }
            });
        }



        function searchProducts() {
            const input = document.getElementById("searchInput").value.toLowerCase();
            const games = document.querySelectorAll(".game");
          
            games.forEach((game) => {
              const title = game.querySelector(".game-title").textContent.toLowerCase();
              if (title.includes(input)) {
                game.style.display = "flex";
              } else {
                game.style.display = "none";
              }
            });
          }
          







function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const counterElement = document.getElementById('fakeNumber');

// كل 3 ثواني غير الرقم بشكل وهمي بين 1500 و 3000
setInterval(() => {
    const randomNum = randomIntFromRange(372,586);
    counterElement.innerText = randomNum.toLocaleString();
}, 3000);
