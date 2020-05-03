//window.close():关闭浏览器窗口
function closeWin() {
    if (confirm("确定要关闭窗口吗?"))
        window.close();
}
//window.open():打开浏览器窗口
function openWin() {
    // window.open("index.html", "新打开窗口", "width=400px, height=300px");
    var newWin = window.open("", "新建窗口", "width=400px, height=300px");
    newWin.document.write("hello world!");
    newWin.document.write("<input type=button value=确定>")
}