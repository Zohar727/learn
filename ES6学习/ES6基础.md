# ES6基础

## 字符串扩展

### 字符串unicode表示法

- '\u{7A}' // z

### codePointAt

- 正确处理4个字节储存的字符，返回一个字符的码点

### String.fromCharPoint

- 从码点返回字符

### String.fromCOdePoint

- 返回码点大于32位的字符

### 字符串遍历

- Interator for...of

### normalize

- 将字符的不同表示方法统一为同样的形式

### startWith(str, index)

- 返回布尔值，表示参数字符串是否在原字符串头部

### endWith(str, index)

- 同上，判断是否在尾部

### includes(str, index)

- 同上，判断是否包含

### repeat(n)

- 将原字符串重复n次

### padStart(n, str), padEnd(n, str)

- 字符串头部补全，尾部补全

### matchAll()

- 字符串的正则匹配

### 模版字符串

### String.raw()

- 还原原生String对象

## 正则的扩展

## 数值的扩展

### 二进制、八进制表示法

- 0b 0o

### Number对象

- isFinite()
- isNaN()
- parseInt()
- parseFloat()
- isInteger
- EPSILON

	- JS能够表示的最小精度

- isSafeInteger

	- JS安全整数范围

### Math对象扩展

- Math.trunc

	- 去除一个数的小数部分

- Math.sign()

	- 判断数值的正负零

- Math.cbrt()

	- 计算立方根

- Math.clz32()

	- 将整数使用32位二进制形式表示

- Math.imul()

	- 返回两个数以32位带符号整数形式相乘的结果

### 指数运算符

- 2**2 // 8

## 函数的扩展

## 数组的扩展

### 扩展运算符 ...

- 将一个数组转为用逗号分隔的参数序列
- 替代函数的apply方法
- 应用

	- 复制数组

		- const a2 = [...a1];

	- 合并数组

		- const newArr = [...a1, ...a2, ...a3]

	- 与解构赋值结合使用
	- 字符串转数组

		- [...str].length

### Array.from

- 将类数组对象和可遍历(Iterator)对象转为数组
- 类似于map的遍历

	- Array.from(arraylike, x => x*x)

- 字符串转数组，返回字符串长度

### Array.of

- 将一组值转化为数组

	- Array(3, 11, 8) // [3, 11, 8]

### copyWithin(target, start, end)

- 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。

### find

- 返回第一个符合条件的数组成员，无则返回undefined

	- [1,2,3].find((n) => n < 0)

### findIndex

- 返回第一个符合条件的数组成员下标

### fill(val, start, end)

- 给定值，填充一个数组

### 数据实例entries(), keys(), values()

### includes(val, index)

- 查找数组是否存在某值

### flat()

- 多维数组转化为一维数组

### Subtopic

*XMind - Trial Version*