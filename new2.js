function MainLotre(kode){
	if (kode==='A0001'){
	return 50000
}
	else if (kode==='A0002'){
	return 1000000
}
	else if (kode==='A0003'){
	return 'anda kurang beruntung'
}
	else{
		return 'kode tidak valid'
}

}


console.log(MainLotre('A0001'));
console.log(MainLotre('A0003'));
console.log(MainLotre('A0002'));
console.log(MainLotre('gak beli'));