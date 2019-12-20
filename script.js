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
    var container = document.getElementById("container");
    var h1 = document.createElement("h1");
    h1.innerHTML = "文具店购物车";
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    container.appendChild(h1);
    container.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    //表头部分
    var html = "";
    html += "<tr>";
    html += "<th>" + "选择" + "</th>";
    html += "<th>" + "商品名称" + "</th>";
    html += "<th>" + "商品单价（￥）" + "</th>";
    html += "<th>" + "商品数量" + "</th>";
    html += "<th>" + "总价（￥）" + "</th>";
    html += "</tr>";
    thead.innerHTML = html;

    //表格末尾
    var trTotal = document.createElement("tr");
    var tdCheckAll = document.createElement("td");
    var totalCheck = document.createElement("input");
    totalCheck.setAttribute("id", "totalCheck");
    totalCheck.setAttribute("type", "checkbox");
    totalCheck.checked = false;
    tbody.appendChild(trTotal);
    trTotal.appendChild(tdCheckAll);
    tdCheckAll.appendChild(totalCheck);

    var resultBox = document.createElement("td");
    resultBox.setAttribute("colspan", "4");
    var resultStr = "";
    resultStr += "共计";
    resultBox.innerHTML = resultStr;
    var resultCount = document.createElement("span");
    resultCount.setAttribute("id", "resultCount");
    resultCount.innerHTML = "3";
    resultBox.appendChild(resultCount);
    var resultStrLast = document.createTextNode("件商品，");
    var resultPrice = document.createElement("span");
    resultPrice.setAttribute("id", "resultPrice");
    resultPrice.innerHTML = "210" + "￥";

    resultBox.appendChild(resultStrLast);
    trTotal.appendChild(resultBox);
    resultBox.appendChild(resultPrice);

    //tbody部分
    for (var i = 0; i < carProducts.length; i++) {
        caculator(carProducts[i]);
    }

    function caculator(event) {
        var shoptr = document.createElement("tr");
        tbody.insertBefore(shoptr, trTotal);
        //复选框
        var tdCheck = document.createElement("td");
        var checkBox = document.createElement("input");
        checkBox.setAttribute("class", "checkbox");
        checkBox.setAttribute("type", "checkbox");
        checkBox.checked = event.checked;
        tdCheck.appendChild(checkBox);
        shoptr.appendChild(tdCheck);
        //商品名
        var tdName = document.createElement("td");
        var tradeName = document.createElement("span");
        tradeName.innerHTML = event.name;
        tdName.appendChild(tradeName);
        shoptr.appendChild(tdName);
        //单价
        var tdPrice = document.createElement("td");
        var unitPrice = document.createElement("span");
        unitPrice.innerHTML = event.price;
        tdPrice.appendChild(unitPrice);
        shoptr.appendChild(tdPrice);
        //数量
        var tdCount = document.createElement("td");
        var reduceBtn = document.createElement("button");
        reduceBtn.innerHTML = "-";
        var count = document.createElement("span");
        count.setAttribute("class", "count");
        count.setAttribute("id", event.id);
        count.innerHTML = Number(event.count);
        var addBtn = document.createElement("button");
        addBtn.innerHTML = "+";
        tdCount.appendChild(reduceBtn);
        tdCount.appendChild(count);
        tdCount.appendChild(addBtn);
        shoptr.appendChild(tdCount);
        //总价
        var tdTotal = document.createElement("td");
        var totalPrice = document.createElement("span");
        totalPrice.setAttribute("class", "sum");
        totalPrice.innerHTML = Number(event.price) * Number(event.count);
        tdTotal.appendChild(totalPrice);
        shoptr.appendChild(tdTotal);

        addBtn.addEventListener("click", function() {
            add();
            total();
            checkTr();
        });

        reduceBtn.addEventListener("click", function() {
            reduce();
            total();
            checkTr();
        })
        checkBox.onclick = function() {
            checkTr();
        }

        var totalCheckBox = document.getElementById("totalCheck");

        totalCheckBox.addEventListener("click", function() {
            checkResult();
            checkTr();
        });

        function add() {
            event.count++;
            count.innerHTML = event.count;
        }

        function reduce() {
            if (event.count > 0) {
                event.count--;
                count.innerHTML = event.count;
            } else {
                tbody.removeChild(tr);
            }

        }

        function total() {
            totalPrice.innerHTML = Number(event.price) * Number(event.count);
        }

        function checkTr() {
            let priceEnd = 0;
            let numberEnd = 0;
            let trNow = document.getElementsByTagName("tr");

            let resultCountNow = document.getElementById("resultCount");
            let resultPriceNow = document.getElementById("resultPrice");
            for (i = 0; i < trNow.length - 2; i++) {
                let sumNow = document.getElementsByClassName("sum")[i];
                let countNow = document.getElementsByClassName("count")[i];
                let chooseNow = document.getElementsByClassName("checkbox")[i];
                console.log(chooseNow);
                if (chooseNow.checked) {
                    numberEnd += Number(countNow.innerHTML);
                    priceEnd += Number(sumNow.innerHTML);
                    resultCountNow.innerHTML = numberEnd;
                    resultPriceNow.innerHTML = priceEnd + "￥";
                }
            }
        }

        function checkResult() {
            let trNow = document.getElementsByTagName("tr");
            for (i = 0; i < trNow.length - 2; i++) {
                let chooseNow = document.getElementsByClassName("checkbox")[i];
                chooseNow.checked = totalCheckBox.checked;
            }
        }
    }



}