function sort() {
    var mass = document.getElementById('mass').value;
    mass = mass.split(',');


    for (var j = mass.length - 1; j > 0; j--){
	    for (var i = 0; i < j; i++) {
	      if (mass[i] > mass[i + 1]) {
	        var temp = mass[i];
	        mass[i] = mass[i + 1];
	        mass[i + 1] = temp;
	      }
	    }
	}
    alert(mass);
}