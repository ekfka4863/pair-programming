// cf. https://poiemaweb.com/fastcampus-exercise/exercise-hof


// EX 9. id 프로퍼티의 값 중에서 최대값 구하기
// todos의 id 프로퍼티의 값 중에서 최대값을 구하는 함수를 작성하라.
// 단, for 문, Array#forEach는 사용하지 않도록 하자.
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
	const container = [];
	todos.map((todo) => container.push(todo.id)); // 화살표 끝에 있는 것들은 자동으로 리턴~ 
	return Math.max(...container);   //
}

console.log(getMaxId()); // 3


// ------------- Clean Code ---------------- //
const todos = [
	{ id: 3, content: 'HTML', completed: false },
	{ id: 2, content: 'CSS', completed: true },
	{ id: 1, content: 'Javascript', completed: false }
];
function getMaxId() {
	return Math.max(...todos.map( todo => todo.id));   //
}
console.log(getMaxId()); // 3