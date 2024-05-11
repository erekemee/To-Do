var ol = document.getElementsByTagName('ol')[0]
const input = document.getElementsByTagName('input')[0]
const addBtn = document.getElementsByTagName('button')[0];

addBtn.addEventListener("click",()=>{
	let  li = document.createElement('li');
	console.log(li);
	li.innerText = input.value;
	ol.append(li);
	input.value="";
	let delBtn = document.createElement('button');
	delBtn.innerHTML = '<i class="bi bi-trash3"></i>' ;
	li.append(delBtn);
	let checkBtn = document.createElement('button');
	checkBtn.innerHTML = '<i class="bi bi-clipboard-check"></i>';
	li.append(checkBtn);
	delBtn.className = "del";
	saveData();
})

ol.addEventListener("click",(e)=>{
	console.log(e.target);
	let targetEl = e.target;
	let parentEl = (targetEl.parentElement).parentElement;
	if(e.target.className=="bi bi-trash3"){
		parentEl.remove();
	}else if(e.target.className=="bi bi-clipboard-check"){
		parentEl.classList.toggle("checked");
	}
	saveData();
});
function saveData(){
         localStorage.setItem("e",ol.innerHTML);
}
function getData(){
         ol.innerHTML = localStorage.getItem("e");
}
getData();