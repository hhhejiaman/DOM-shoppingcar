window.onload = function() {
    var tabledot = document.getElementById("container");
    this.console.log(tabledot);
    var trdot = tabledot.getElementsByTagName("tr");
    this.console.log(trdot);
    var result = 0;
    for (i = 1; i < trdot.length - 1; i++) {
        caculator(trdot[i]);
        //checktotal();
    }
    var clickcacu = document.getElementsByName("checkcacu");
    console.log(clickcacu);

    function clickcacu() {
        alert("1");
    }

    function caculator(trdot) {
        var removeBtn = trdot.getElementsByTagName("input")[1];
        var addBtn = trdot.getElementsByTagName("input")[2];
        var numSpan = trdot.getElementsByTagName("span")[1];
        var num = numSpan.innerHTML;
        var amountSpan = trdot.getElementsByTagName("span")[0];
        var amount = amountSpan.innerHTML;
        var totalSpan = trdot.getElementsByTagName("span")[2];
        var total = totalSpan.innerHTML;
        var checkSingleDot = trdot.getElementsByTagName("input")[0];
        var checkSingle = checkSingleDot.checked;
        var resultBox = document.getElementById("resultbox");
        var resultSpan = resultBox.getElementsByTagName("span")[1];
        var result = Number(resultSpan.innerHTML);
        console.log(result);
        console.log(checkSingle);
        addBtn.onclick = function() {
            num++;
            numSpan.innerHTML = num;
            totalSpan.innerHTML = num * amount;
            if (checkSingle) {
                var trNow = this.parentNode.parentNode;
                console.log(trNow);
                var addTotal = Number(trNow.getElementsByTagName("span")[2].innerHTML);
                console.log(addTotal);
                result = addTotal;
                resultSpan.innerHTML = result;
            } else {
                resultSpan.innerHTML = 0;
            }

        }
        removeBtn.onclick = function() {
            if (num > 0) {
                num--;
                numSpan.innerHTML = num;
                totalSpan.innerHTML = num * amount;
            } else {
                var tr = this.parentNode.parentNode;
                tr.parentNode.removeChild(tr);
            }
        }

    }
}