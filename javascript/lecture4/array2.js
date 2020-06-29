const oddarr = [1,3,5,7,9];
const newarr = oddarr.filter(x=> x>4 );
//filter 결과 반환
console.log(newarr);

const postlist = [{"date":"yesterday","id":1},{"date":"today","id":2},{"date":"yesterday","id":3}];

const yesterdaypost = postlist.filter(post=>post.date=="yesterday");

yesterdaypost.forEach(post=>console.log(post.id));
console.log(yesterdaypost);                                                                     