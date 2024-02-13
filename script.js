//your JS code here. If required.
const student = {
	name:"Aravind"
};
Object.prototype.getKeys = function(){
	return Object.keys(this);
};
const key = student.getKeys();
console.log(key);
