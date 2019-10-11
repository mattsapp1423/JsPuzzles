//---------------------------
// Puzzle 1
const arrayP1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const arrayP2 = [1,2,4,591,392,391,"2",5,10,2,"1","1",1,20,20];

//Collapse structure by one dimension
const collapse = (inStruct) => {
	let outArr = [];
	for(idx in inStruct){
		outArr.push(Object.values(inStruct[idx]));
	}
	return outArr;
}


//create structure by type, with properties of values
const cleanTheRoom = (inpArray) => {
	let groups ={ strings: {}, nums: {}	};
	inpArray.forEach(idx =>{
		let keys = [];
		if(typeof idx == "string"){
			keys = Object.keys(groups.strings);
			(keys.includes(idx.toString())) ? groups.strings[idx].push(idx) : groups.strings[idx] = [idx];
		}else{	
			keys = Object.keys(groups.nums);
			(keys.includes(idx.toString())) ? groups.nums[idx].push(idx) : groups.nums[idx] = [idx];
		}
	});
	return collapse(groups);
}

let temp = cleanTheRoom(arrayP2);