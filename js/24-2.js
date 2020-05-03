//由二维数组创建表格table
var title = new Array("序号", "学号", "姓名", "性别", "年龄", "专业");//表格单元格标题
var student = new Array();//表格的内容部分
student[0] = new Array("1", "20192005500", "张三", "男", "20", "软件工程");
student[1] = new Array("2", "20192005501", "李红", "女", "20", "软件工程");
student[2] = new Array("3", "20192005502", "李四", "男", "25", "软件工程");

document.write("<table border=1 align='center' rules=all>");//输出表格开始
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