// inner)module/03_path.js 
console.log(__filename); //절대경로 출력 
console.log(__dirname);  //

path=require('path'); 

console.log('폴더정보',
           path.dirname(__filename)
);
console.log('실제파일명 : %s',
  path.basename(__filename)
);
console.log(' 확장자 : %s',
  path.extname(__filename)
);