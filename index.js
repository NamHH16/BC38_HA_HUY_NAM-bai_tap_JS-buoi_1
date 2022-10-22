/*****
 * BAI 1
 * INPUT: lương 1 ngày, số ngày làm
 * 
 * PROCESS:(pseudo code)
 *         1. lấy input(hardcode) lương 1 ngày = 100000, 
 *                              số ngày =30
 *          2. công thức: lương 1 ngày * số ngày làm
 *          3. in kết quả
 * 
 * OUTPUT:lương
*/

var workingDays = 20;
var salaryPerDay = 100000;
var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương là:", totalSalary);


/**BAI 2
 * INPUT:nhập vào 5 số thực
 * 
 * 
 * 
 * PROCESS:
 *      1. lấy input 5 số thực: 2 ; 3 ; 4; 5 ; 6
 *      2. công thức: (2+3+4+5+6)/5
 *      3. in kết quả
 * 
 * 
 * OUTPUT:giá trị trung bình
 */

var a = 2;
var b = 3;
var c = 4;
var d = 5;
var e = 6;
var average=(a+b+c+d+e)/5;
console.log("Giá trị trung bình:", average);

/**BAI 3
 * INPUT:giá USD = 23500, nhập vào số USD
 * 
 * 
 * PROCESS:
 *  1. lấy input: 1USD = 23500; số USD = 17
 *  2. công thức: VND= USD * 23500;
 *  3. in kq
 *  
 * 
 * OUTPUT: Giá VND
*/

var exchangeRate = 23500;
var USD = 17;
var VND = exchangeRate * USD;
console.log("Số tiền VND là:", VND);


/**BAI 4
 * INPUT:chiều dài và chiều rộng hình chữ nhật
 * 
 * 
 * PROCESS:
 *  1.lấy input: chiều dài = 7
 *      chiều rộng = 5
 *  2. công thức: C = (dài + rộng)*2
 *                 S = dài * rộng 
 *  3. in kết quả
 * 
 * OUTPUT:tính diện tích và chu vi
 */

var w = 5;
var l = 7;
var C = (w + l) * 2;
var S = w * l;
console.log("Chu vi là:", C);
console.log("Diện tích là:", S)


/***BAI 5
 * INPUT:cho 2 chữ số
 * 
 * 
 * PROCESS:
 *  1. lấy input: n = 59
 *  2. công thức: 
 *     num1 = n % 10;
 *     num2 = math.floor(n / 10);
 *  3. in kết quả
 * 
 * 
 * 
 * OUTPUT:tổng ký số
*/

var n = 59;
var num1 = n % 10;
var num2 = Math.floor(n / 10);
var sum = num1 + num2;
console.log("Tổng 2 ký số là:", sum);