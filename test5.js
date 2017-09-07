function calculateMean(arr){
	var output=0;
	for(var i=0;i<arr.length;i++){
		
		output+=arr[i];
	}
	return output/arr.length
};
console.log(calculateMean([1,3,5]));