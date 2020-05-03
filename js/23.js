// alery():消息提示框，没有返回值
function shw() {
    alert("hello world!");//弹出一个消息提示，没有返回值
}
// confirm():确认对话框，一般用在某种操作之前，让用户确认
function del() {
    var flag = confirm("您确定要删除吗?");
    if (flag)
        alert("你选择了确定");
    else
        alert("你选择了取消");
}
// prompt():输入对话框，注意返回值有三种可能性
function inpt() {
    var pmt = prompt("请输入一个数字");
    //返回有三种，返回用户输入的串，返回null表示什么都没有，返回空表示返回的是空串
    alert(pmt);
}