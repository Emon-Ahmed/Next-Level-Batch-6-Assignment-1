### 1. What are some differences between interfaces and types in TypeScript?

`TypeScript` এ আমরা কোনো `object` কেমন হবে, সেটা ঠিক করার জন্য `interface` আর `type`, দুইটাই ব্যবহার করতে পারি আর দুইটার একই রকম তবে কিছু ডিফারেন্ট ওয়ে আছে

> Interface extend করা যায়

```
interface Person { name: string }

interface Employee extends Person { salary: number }
```

> Type ও extend করা যায়, কিন্তু ডিফারেন্ট ওয়েতে,

```
type Person = { name: string };
type Employee = Person & { salary: number };
```

> Interface, merge হয়, Type merge হয় না

```
interface User { name: string }

interface User { age: number }
```

### 2. What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` একটি টাইপ অপারেটর যা কোনো অবজেক্ট টাইপের প্রোপার্টি নামগুলিকে টাইপ হিসেবে বের করে দেয়

> উদাহরণঃ

```
type Person = {
  name: string;
  age: number;
};

type PersonKey = keyof Person;
```

> ফলাফলঃ

```
"name" | "age"
```
