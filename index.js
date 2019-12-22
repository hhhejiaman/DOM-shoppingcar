window.onload = function() {
    var carProducts = [{
            "id": 1,
            "name": "英雄牌 钢笔",
            "count": 1,
            "price": 69,
            "checked": false
        },
        {
            "id": 2,
            "name": "晨光牌 铅字笔",
            "count": 2,
            "price": 5.5,
            "checked": true
        },
        {
            "id": 3,
            "name": "晨光牌 铅笔",
            "count": 1,
            "price": 2,
            "checked": false
        },
        {
            "id": 4,
            "name": "狗熊牌 橡皮擦",
            "count": 1,
            "price": 1,
            "checked": false
        },
        {
            "id": 5,
            "name": "瑞士牌 双肩书包",
            "count": 1,
            "price": 199,
            "checked": true
        },
        {
            "id": 6,
            "name": "晨光牌 作业本",
            "count": 5,
            "price": 2.5,
            "checked": false
        }
    ]
    var tbody = document.getElementById("tbody");
    var html = "";
    addInfos(carProducts);

    function addInfos(goods) {
        for (i = 0; i < goods.length; i++) {
            var name = goods[i].name;
            var price = goods[i].price;
            var count = goods[i].count;
            var totalPrice = price * count;
            var checked = goods[i].checked ? 'checked' : '';
            html += "<tr>";
            html += `<td><input type = 'checkbox' class='goods-checkbox' ${checked}></td>`;
            html += `<td>${name}</td>`;
            html += `<td>${price}</td>`;
            html += `<td><button class='reduce-btn'>-</button><span class='goods-count'>${count}</span><button class='add-btn'>+</button></td>`;
            html += `<td><span class='goods-price'>${totalPrice}</span></td>`;
            html += "</tr>";

        }

        tbody.innerHTML = html;
        for (i = 0; i < goods.length; i++) {
            caculator(goods[i]);
        }
    }



    function caculator(event) {

        var addBtn = document.getElementsByClassName("add-btn")[i];
        var reduceBtn = document.getElementsByClassName("reduce-btn")[i];
        var goodsCount = document.getElementsByClassName("goods-count")[i];
        var goodsPrice = document.getElementsByClassName("goods-price")[i];
        var goodsCheckBox = document.getElementsByClassName("goods-checkbox")[i];

        var resultCount = document.getElementById("result-count");
        var resultPrice = document.getElementById("result-price");

        var totalCheckBtn = document.getElementById("total-check");
        addBtn.addEventListener("click", function() {
            add();
            total();
            checkTr();
        });

        reduceBtn.addEventListener("click", function() {
            reduce();
            total();
            checkTr();
        });

        function add() {
            event.count++;
            goodsCount.innerHTML = event.count;
        }

        function reduce() {
            if (event.count > 1) {
                event.count--;
                goodsCount.innerHTML = event.count;
            } else {
                reduceBtn.parentNode.parentNode.parentNode.removeChild(reduceBtn.parentNode.parentNode);
            }
        }

        function total() {
            goodsPrice.innerHTML = event.count * event.price;
        }

        goodsCheckBox.addEventListener("click", function() {
            checkTr();
        })

        var trNow = document.getElementsByTagName("tr");

        function checkTr() {
            let priceEnd = 0;
            let numberEnd = 0;



            for (i = 0; i < trNow.length - 2; i++) {
                var checkBoxNow = document.getElementsByClassName("goods-checkbox")[i];
                var countNow = document.getElementsByClassName("goods-count")[i];
                var priceNow = document.getElementsByClassName("goods-price")[i];
                if (checkBoxNow.checked) {
                    console.log(checkBoxNow)
                    numberEnd += Number(countNow.innerHTML);
                    priceEnd += Number(priceNow.innerHTML);
                }
                resultCount.innerHTML = numberEnd;
                resultPrice.innerHTML = priceEnd;
            }
        }

        totalCheckBtn.addEventListener("click", function() {
            checkResult();
            checkTr();
        });


        function checkResult() {
            for (i = 0; i < trNow.length - 2; i++) {
                var checkBoxNow = document.getElementsByClassName("goods-checkbox")[i];
                checkBoxNow.checked = totalCheckBtn.checked;
            }
        }
    }




}