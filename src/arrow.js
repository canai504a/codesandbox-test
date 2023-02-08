/**
 * アロー関数
 */

//  従来の関数
// とりあえず使えれば良いので引数の文字列をそのまま返すプログラム
function func1(str) {
  return str;
}
const func2 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
// 処理の中で＝＞が出てきたら関数使ってると分かるようになってる
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

// アロー関数では引数とアロー（矢印）と中括弧で書く
// 処理の中身が１行ならreturnと中括弧を省略できる

const func4 = (str) => str;
console.log(func4("func4です"));

// 文字列ではなく数値型でも見ていく
const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 21));
// 省略は数値型も同様
const func6 = (num1, num2) => num1 + num2;
console.log(func6(10, 11));
