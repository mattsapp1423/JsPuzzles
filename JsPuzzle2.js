//------------------------------------
//Puzzle 2
const removeDups = (inArray) =>{
	return inArray.filter((val,idx) => inArray.indexOf(val) === idx);
}


const findFactors = (inArray,Fact) =>{
	outArray = [];
	inArray = removeDups(inArray);
	inArray.forEach(idx =>{
		let currArray = inArray.filter(val => val !== idx);
		currArray = inArray.filter((val2) => (idx + val2)===Fact);
		currArray.forEach(val => {
			val !== [] ? outArray.push([idx,val]) : [];
		})
	})
	return outArray;
}