var one_array = ["ABC", "123", "-!-"];

var another_array = ["DEF", "456", "**&"];

var a_third_array = ["GHI", "789", "^#@"];

var space_array = ["  ", "  ", "  "];
 

for (var j=0; j<3; j++) {

	var temp_string = one_array[j] + space_array[j] + another_array[j] + space_array[j] + a_third_array[j];

	console.log(temp_string);

}

