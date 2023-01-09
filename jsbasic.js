// Cách tạo 1 object
var  array = {
    a : "Trung",
    b : function () {
        console.log("Welcome to "+this.a) },
    c : [1,23,4],
    d : {e:["a","b",1],f:function () {
        console.log(this.a);
        console.log(this.a.length) // đếm số phần tử của a
    }}
}
// Cách lấy các biến trong Object

array.b() // lấy hàm trong Object
console.log(array['c'][2])
console.log(array['d']['e'][2])

for (value in array){
   console.log(value)
   console.log(array[value])
}
// Cách lấy tên họ 
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31
  }

  var lastName = employee['name'].split(" ")
  console.log(lastName[1]);
  
  var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName : function () {
      console.log(this.name.split(" ")[1]);
    }
  }
  employee.lastName()

// Cách thêm bớt xóa phần tử trong mảng

var roster = []

function addNew(){
  var newName = prompt("What name would you like to add? ");
  roster.push(newName)
}

function remove(){
  var remName = prompt("What name would you like to remove?");
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

function display(){
  console.log(roster);
}

var start = prompt("Would you like to start the roster web app? y/n");
var request = 1;

if (start === "y") {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === "add") {
      addNew();
    }else if (request === "display") {
      display();
    }else if (request == "remove") {
      remove();
    }
  }
}
// Cách hàm event js
var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

headOne.addEventListener('mouseover',function() {
        headOne.textContent = "Mouse Currently Over";
        headOne.style.color = 'red';
})
headOne.addEventListener('mouseout',function() {
        headOne.textContent = 'Hover Over Me!'
        headOne.style.color = 'black'
})
headTwo.addEventListener('click',function () {
        headTwo.textContent = 'CLICK ON'
        headTwo.style.color = 'blue'
})
headThree.addEventListener('dblclick',function () {
        headThree.textContent = 'I WAS DOUBLE CLICKED'
        headThree.style.color = 'red'
})


//////////////////////////////////////////////////////// tài liệu 2


// class javascript
class Person {
  constructor(name,address){
      this.name=name;
      this.address=address;
  }
  getAddress(){
      return "T live in " + this.address
  }
}
const a = new Person('trung','nam dinh')
console.log(a.getAddress())

//Đa hình javascript
class Animal{
  constructor(){

  }
  doAction(){
      return 'Go Go away'
  }
}
class Dog extends Animal{
  constructor(model) {
      super()
      this.model=model
  }
}
const myDog = new Dog('BullDogs')
console.log(myDog.doAction(),myDog)

// class javascript
class Novel{
  constructor(Title,Author) {
      this.Title=Title
      this.Author=Author
  }
  getAuthor(){
      return this.Title + this.Author
  }
}
let myNovel = new Novel('Tôi thấy hoa vàng trên cỏ xanh',' Nguyễn Ngọc Ánh')
console.log(myNovel.getAuthor())

// object javascript
let tutorial = {
  name: 'React Tutorial',
  author: 'Hoi Dan It vs Eric',
  language: 'Javascript'
}
console.log(tutorial['name'],tutorial['author'],tutorial['language'])
// or
console.log(tutorial.name,tutorial.author,tutorial.language)
// Arrow functions 
const hello = () => { return 'Hello World!'}
console.log(hello())

// Map thay cho for trong reactJS 
const myArray = [1,2,3,4]
//viết khi đoạn code chỉ có 1 dòng
const myList = myArray.map((value) => value*2 )
//viết đầy đủ với hàm map
const myList1 = myArray.map((value,index) => {
      console.log(value,index)
      return value*2
})
console.log(myList1,myArray)

// Filter trong javascript
const Ages = [12,13,18,29]
//cách viết ngắn ngọn
const a1 = Ages.filter((value) => value > 18)
console.log(a1)
//cách viết đầy đủ
const aa = Ages.filter((value) =>{
      return value >= 18
})
console.log(aa)
// Template strings (xuống dòng nhanh chóng javascript)
let a11 = 1
let b = 2
console.log(`Tổng 2 số a và b là ${(a+b)}
không phải là hiệu ${a-b}`)

const base_url = "localhost:8080"
const api = "get-user"
const fetch_page = 2
console.log(`${base_url}/api?page = ${fetch_page}`)

//Toán tử ba dấu chấm (copy mảng)
const x = [1,2,3]
const y = [4,5,6]
let z = [...x,...y]
//thêm phần tử vào cuối
z = [...x,...y,7]
//thêm phần tử vào đầu
z = [0,...x,...y]
console.log(z)
//Thêm vào object
let xy = {
      name: 'trung',
      age: 19,
      address: 'nam dinh'
}
let xz = {
      height: 170,
      wight: 56,
      age: 20
}
let xyz = {...xy,...xz}// Ghi đè age 19 thành 20
let xy1 = {...xy,height:56}//thêm phần tử vào object

//Giản lược hóa cấu trúc(Lấy biến object một cách nhanh hơn)
const person = { name: 'Eric', age: 26, eyeColor: 'black', like: 'girl' };
const { age, name, eyeColor } = person; 
//giản lược hóa cấu trúc(lấy phần tử trong hàm nhanh hơn)
const city = ['nam dinh','ha noi','thanh hoa','ninh binh']
const [namdinh,hanoi,,ninhbinh] = city

//Rút gọn toán tử if else 

x >= 5 ? console.log('True') : console.log('False') 
 
y = x > 6 ? 'True' : 'False'
console.log(y) 

// Toán tử ?(để né debug)
let user = {}
console.log(user?.address?.street) 
console.log(user?.address?.street ?? 'errol')

let userAdmin = {
    admin() {
    console.log("I am Eric");
    }
};
    let userGuest = { };
    userAdmin.admin?.( ) ; // I am Eric
    userGuest?.admin?.( ); //kiểm tra xem admin có tồn tại
// Truy cập thuộc tính(toán tử ?)
let name1 = 'firstName'
let userr = {
    firstName: 'promax',
    age: 26,
    address: 'nam dinh'
}
let userrr = null

console.log(userr?.[name1])
console.log(userrr?.[name1])