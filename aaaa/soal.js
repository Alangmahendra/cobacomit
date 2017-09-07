function removeDash(str){
	str=str.split('-').join(' ')
 	return str;
}

function capitalizeString(str){
	str=str.toLowerCase().split(' ');
	var tam='';
	var hsl='';
    for(i=0;i<str.length;i++){
		tam=str[i];
		hsl=hsl + tam[0].toUpperCase()+tam.substr(1) + ' ';
	}
	
	
		return hsl

}

function transformTextToNumber(str){
	
	str=str.replace(/[Aa]/g, '4');
	str=str.replace(/[iI]/g, '1');
	str=str.replace(/[eE]/g, '3');
	str=str.replace(/[oO]/g, '0');
    return str;
}

function stringManipulator(str) {
 var cleanedStr = removeDash(str);
 var capitalizedStr = capitalizeString(cleanedStr);
 var transformedStr = transformTextToNumber(capitalizedStr);
 return transformedStr;
}
	console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// // L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// // D15 15 V3ry 345y 1 C4n D0 Th15