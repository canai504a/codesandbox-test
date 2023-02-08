/**
 * const,let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// 出力方法はDOMでも構わないが今回はJSファイル上で完結させたいから
// コンソールどっとログという「プログラムが機能しているか」を簡単に確認する方法
// つまりはデバッグ作業としてconsole.logを使う

// varでの変数宣言は、変数としてのルールが緩いため、変数の上書きや再宣言が可能
// 意図せず値を書き換えることによるエラーを未然に防ぐ 目的にconst
// ループ構文の中でのみはletを使ったりと、最近はvarよりconst,letを使う方が主流

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// prolemsエラーっぽいものが出ているがJS上でのエラーではなく、
// 構文解析ツールに基づいて、「このコードちょっとおかしいけど」という事を知らせてくれている

let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言が不可能
// let val2 = "let変数を再宣言";
// javascriptではエラーなので処理を実行しない
// 間違った再宣言を未然に防いでくれている
// ループの中で、回数ごとに数値が変わる時に用いる

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";
// val3 is read-only

// const val3 = "const変数を再宣言";
// ただしオブジェクトや配列はデータの上書きは可能
const val4 = {
  name: "あいうえお",
  age: 28
};
// console.log(val4);

val4.name = "aiueo";
console.log(val4);

// nameというキーに対して「あいうえお」という値を入れていた。それを「aiueo」に変換できた
// 連想配列と同じように見えるが、厳密には異なる
// 連想配列だとキーに対して数値や文字列等の値を参照しているが、オブジェクトの場合だと
// 関数を入れる事ができる
// ただ書き方は同じなので、広い意味でオブジェクトと呼ぶ

// オブジェクトや配列には値を書き換えが可能であるため注意が必要
val4.addres = "hirosima";
// constで定義したオブジェクトはプロパティ（値）の変更が可能

// 配列も確認
// constで定義した配列はプロパティ（値）の変更が可能

const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
val5.push("monkey");
console.log(val5);
// オブジェクトや配列はプロパティを変える事が出来る
// 実際にReactの開発における変数宣言はconstがメインとなる
// ループ構文とかの中ではlet
