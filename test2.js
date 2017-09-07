function reverser(str){
	var length=str.length;
	var belakang= length-1;
	var newstr='';
	console.log(str[belakang]);
	for(var i=belakang;i>=0;i--) {
		newstr=newstr+str[i];
	}
	
	return newstr;
}
console.log('==========reverser==============');
console.log(reverser('i am an awesome programmer'));
console.log(reverser('john doe'))//eod nhoj