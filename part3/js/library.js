
const a = 11;
export default a; 
// 이렇게 내보내줘야지 다른 파일에서 import로 변수 a의 내용을 불러들일 수 있다.
// export default는 파일당 1회만 사용할 수 있다.



const b = 5;
const c = 7;
const d = 12;
const e = 15;


// 여러개를 export 하려면 export {변수} 이렇게 써 준다.
export {b};
export {c};

// 한꺼번에 이렇게 쓸 수도 있다.
export {d,e}



// 변수나 함수 앞에 이렇게 붙여도 된다.
export const f = 20;
export function 함수(){
  console.log("export");
}


const uglyName = "못생긴 이름 본체";
export {uglyName};



