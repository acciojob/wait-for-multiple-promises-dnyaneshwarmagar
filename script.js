//your JS code here. If required.
let table = document.querySelector("table");
let tbody = document.getElementById("output");
let tr = document.createElement("tr");
tr.setAttribute("id", "loading")
tr.innerHTML = `<td colspan="2">Loading...</td>`;
tbody.append(tr);

let promise1 = new Promise((resolve,reject)=>{
	const startTime = Date.now(); 
	setTimeout(()=>{
		const endTime = Date.now(); 
      const timeTaken = (endTime - startTime) / 1000; 
		resolve(timeTaken)
	},1000)
});

let promise2 = new Promise((resolve,reject)=>{
	const startTime = Date.now(); 
	setTimeout(()=>{
		const endTime = Date.now(); 
      const timeTaken = (endTime - startTime) / 1000; 
		resolve(timeTaken)
	},2000)
});

let promise3 = new Promise((resolve,reject)=>{
	const startTime = Date.now(); 
	setTimeout(()=>{
		const endTime = Date.now(); 
      const timeTaken = (endTime - startTime) / 1000; 
		resolve(timeTaken)
	},3000)
});

let result = Promise.all([promise1,promise2,promise3]);
result.then((resolvedPromises)=>{
	tbody.innerHTML = "";
	let sum ; 
	resolvedPromises.forEach((element,index)=>{
		sum += element;
		let tr = document.createElement("tr");
tr.innerHTML = `<td>Promise ${index+1}</td>
<td>${element}</td>
`;
		tbody.append(tr);
	});

	let tr = document.createElement("tr");
tr.innerHTML = `<td>Total</td>
<td>${sum}</td>
`;
		tbody.append(tr);
	
})
console.log(result);





