//js with server/10_class.js 


//1)생성자함수 
function User(name, age, city) {
  //필드
  this.name = name;
  this.age = age;
  this.city = city;
  //메서드 
  this.getInfo = function () {
    return `${this.name},${this.age},${this.city}`;
  }
}


let kim = new User("Kim", 25, "jeju");
console.log(kim.getInfo());

//class 
class Emp {
  //생성자 
  constructor(id, name, dept) {
    this._id = id;
    this._name = name;
    this._dept = dept;
  }
  //get & set 
  get id() {
    return this._id;
  } //변경할수 없음 가지고 올수만 있음 

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  //메서드 
  setDept(dept) {
    this._dept = dept;
  }

  getDept() {
    return this._dept;
  }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200; //클래스에 생성자가 없으면 아무리 바꿔도 원래값 그대로임 
kang.name = 'King';
kang.setDept('Marketing');
console.log(kang);