/**
 * const,let等の変数宣言
 */
// var var1 = "var変数";
// console.log(var1);

// var1 = "var変数を上書き";
// console.log(var1);

// var var1 = "var変数を再宣言";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書き可能
// var2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言不可
// let var2 = "let変数";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数の上書き";

// const val3 = "const変数の再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "としひろ",
//   age: 30
// };
// val4.name = "Toshihiro";
// val4.addres = "Yokohama";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "としひろ";
// const age = 30;
// 「私の名前はとしひろです。年齢は30歳です。」

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "としひろ",
//   age: 30
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}ですよ。`;
// console.log(message2);

// const myProfile = ["としひろ", 30];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// ※参照は引き継がれない
// const arr6 = [...arr4];
// arr6[0] = 1000;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// ※参照が引き継がれてしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
