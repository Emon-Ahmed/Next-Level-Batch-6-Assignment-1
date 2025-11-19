const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface RatedItem {
  title: string;
  rating: number;
}
function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];
  const existsInArray = (
    arr: (string | number)[],
    value: string | number
  ): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };
  for (let i = 0; i < arr1.length; i++) {
    if (!existsInArray(result, arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!existsInArray(result, arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;
  const totals = products.map((item) => {
    const base = item.price * item.quantity;
    if (item.discount !== undefined) {
      const discountAmount = (base * item.discount) / 100;
      return base - discountAmount;
    }
    return base;
  });
  return totals.reduce((sum, value) => sum + value, 0);
};
