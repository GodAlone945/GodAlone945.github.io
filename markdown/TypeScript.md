# TypeScript

将 `ts` 文件编译为 `js`
```shell
tsc typescript.ts
tsc file1.ts file2.ts file4.ts
```

# 基础类型

## 布尔值

```js
let isDone: boolean = false;
```

## 数字

```js
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

## 字符串

```js
let name: string = "bob";
name = "smith";
```

## 数组

```js
let list: number[] = [1,2,3];

// 数组泛型，Array<元素类型>
let list: Array<number> = [1,2,3]
```

## 元组Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```js
let x: [string, number];

x = ['hello', 10];  // Ok

x = [10, 'hello'];  // Error

x[3] = 'world'  // 字符串可以赋值给（string | number）类型
```

## 枚举

```js
默认情况下，从0开始为元素编号。
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

或者全部都采用手动赋值
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
```

## Any

不清楚变量类型

```js
let notSure: any = 4;
notSure = "maybe a string instead"
notSure = false

let list: any[] = [1, true, "free"];
list[1] = 100;
```

## Never

never 类型表示的是那些用不存在的值得类型。

## Object

表示非原始类型，除number, string, boolean, symbol, null或undefined之外的类型。

```js
declare function create(o: object | null): void;

create({ prop: 0 });  // Ok
create(null);         // Ok
```

# 接口

```js
interface interface_name {}

interface labelledValue {
  label: string;
}
```

## 可选属性

```js
interface SquareConfig {
  color?: string;
  width?: number;
}
```

## 只读属性

```js
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
赋值后，x和y再也不能被改变了
```

`ReadonlyArray<T>`类型，把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;  // error!
ro.push(5);  // error!
```

## 额外的属性检查

最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些作为特殊用途使用的额外属性。

如果SquareConfig带有上面定义的类型的color和width属性，

```js
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```