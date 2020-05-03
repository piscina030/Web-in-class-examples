var selall = "<input type=checkbox id=sall onclick=selectAll()>全选";
var selme = "<input type=checkbox name=sme onclick=selectMe()>选中";
var action = "操作";
var oldvalue;
var allstr = "<a href=# onclick=delrow(this)>删除</a>|<a href=# onclick=editrow(this)>编辑</a>";
//由二维数组创建表格table
var title = new Array(selall, "序号", "学号", "姓名", "性别", "年龄", "专业", action);//表格单元格标题
var student = new Array();//表格的内容部分
student[0] = new Array(selme, "1", "20192005500", "张三", "男", "20", "软件工程", allstr);
student[1] = new Array(selme, "2", "20192005501", "李红", "女", "20", "软件工程", allstr);
student[2] = new Array(selme, "3", "20192005502", "李四", "男", "25", "软件工程", allstr);

document.write("<table id=mytable border=1 align='center' rules=all>");//输出表格开始
document.write("<caption>学生信息表</caption>");//表格标题
document.write("<tr>")//单元格标题开始
for (var i = 0; i < title.length; i++) {
    document.write("<th>" + title[i] + "</th>");
}
document.write("</tr>")//单元格标题结束
for (var r = 0; r < student.length; r++) {
    document.write("<tr>");
    for (var c = 0; c < student[r].length; c++) {
        document.write("<td>" + student[r][c] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");// 输出表格结束

function selectAll() {
    var selall = document.getElementById("sall");
    var selme = document.getElementsByName("sme");
    var flag;
    // 三个等于号===是判断左右的值和类型相同，两个等于号==是判断值相同
    if (selall.checked == true)
        for (var i = 0; i < selme.length; i++) {
            selme[i].checked = true;
        }
    else
        for (var i = 0; i < selme.length; i++) {
            selme[i].checked = false;
        }
}

function selectMe() {
    var selall = document.getElementById("sall");
    var selme = document.getElementsByName("sme");
    var flag;
    for (var j = 0; j < selme.length; j++) {
        if (!selme[j].checked) {
            flag = false;
            break;
        }
        else
            flag = true;
    }
    selall.checked = flag;
}
function delrow(that) {
    var curRow = that.parentNode.parentNode.rowIndex;
    var OjbTable = document.getElementById("mytable");
    if (confirm("你确定要删除该行数据吗?"))
        OjbTable.deleteRow(curRow);
}

function editrow(that) {
    var tdstr = "<a href=# onclick=save(this)>保存</a>|";
    tdstr = tdstr + "<a href=# onclick=cancel(this)>取消</a>";
    var OjbTable = document.getElementById("mytable");
    var curRowIndex = that.parentNode.parentNode.rowIndex;//获取当前行的序号
    var OjbTr = OjbTable.rows[curRowIndex];
    var myTd8 = OjbTr.cells.item(7);
    myTd8.innerHTML = tdstr;
    var td5 = OjbTr.cells.item(5);
    oldvalue = td5.innerHTML;
    var mystr = "<input type=text id=myage value=" + oldvalue + ">";
    td5.innerHTML = mystr;
}

function cancel(that) {
    var OjbTable = document.getElementById("mytable");
    var curRowIndex = that.parentNode.parentNode.rowIndex;
    var OjbTr = OjbTable.rows[curRowIndex];
    OjbTr.cells.item(7).innerHTML = allstr;
    OjbTr.cells.item(5).innerHTML = oldvalue;
}

function save(that) {
    var OjbTable = document.getElementById("mytable");
    var curRowIndex = that.parentNode.parentNode.rowIndex;
    var OjbTr = OjbTable.rows[curRowIndex];
    var newAge = document.getElementById("myage").value;
    OjbTr.cells.item(7).innerHTML = allstr;
    OjbTr.cells.item(5).innerHTML = newAge;
}