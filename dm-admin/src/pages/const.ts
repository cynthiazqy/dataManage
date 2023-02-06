import Cat from './Cat';

export const hello = '你好，这是在增加ts-loader后增加的第一个 ts文件';

class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    return 'hi,' + this.name;
  }
}

export const sayHello = (name: string) => {
  let person = new Person(name);
  return person.sayHi();
};

export const miao = () => {
  return Cat.miao();
};
