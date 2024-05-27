//let title = document.getElementById('title').innerHTML
//console.log(title)

// let todoList = document.createElement('p')
// todoList.textContent = "your todo will appear here..."
// document.body.appendChild(todoList)

// const button = document.querySelector('button')
// button.addEventListener('click', function (todo) {
// 	console.log("todo test")
// })

function addTodo() {
	// alert('todooo')
	console.log("test");

	let li = document.createElement('li');
	let inputValue = document.getElementById("todo").value;
	let t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === ''){
		alert("Please enter something...");
	}else{
		document.getElementById("ul").appendChild(li);
	}
	document.getElementById("todo").value = "";
}