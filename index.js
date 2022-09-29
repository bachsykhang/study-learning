// Bài tập 1: Thêm phần tử vào mảng

var numbers = [10,20,30,40,50];

console.log(numbers);

var newArray = numbers.map( number => number + 5 );

console.log(newArray);

// Bài tập 2: Mảng chứa nhiều giá trị

const members = [
    {firstName:"sy", lastName: "khang", stt: 1},
    {firstName:"ba", lastName: "phuong", stt: 2},
    {firstName:"chi", lastName: "tai", stt: 3},
    {firstName:"ngoc", lastName: "tai", stt: 4},
];

console.log(members);

// Gọi ra  giá trị mong muốn

var firstMember = members.map( (member) => member.lastName);

console.log(firstMember);

// Bài tập 3: Học Render 

function renderList() {
    const htmls = members.map(mbList => {
        return `<div class="name"><span class="tendau">${mbList.firstName}</span>
        <span class="tengiua">${mbList.lastName}</span>
        <span class="stt">${mbList.stt}</span></div>`;
    });
    document.querySelector("#nameMember").innerHTML = htmls.join(" ");
}
renderList();

// every Giống như && của java
var checkstt = members.every( checkMinOne=> checkMinOne.stt === 1);
console.log(checkstt);

// some Giống như || của Java
var checkstt = members.some( checkMinOne=> checkMinOne.stt === 3);
console.log(checkstt);

// find Tìm về 1 phần tử duy nhất
var checkname = members.find( ckName => ckName.lastName === "khang");
console.log(checkname);

// filter Tìm về tất cả phần tử
var checkname = members.filter( ckName => ckName.lastName === "tai");
console.log(checkname);