var x;
x = prompt("Nhập bán kính hình tròn: ");
var y = 2 * x;
var z = 2 * x * Math.PI;
var t = x * x * Math.PI;
document.write("Đường kính hình tròn là:" + y);
document.write("<br/>");
document.write("Chu vi hình tròn là:" + z.toFixed(3));
document.write("<br/>");
document.write("Diện tích hình tròn là:" + t.toFixed(3));