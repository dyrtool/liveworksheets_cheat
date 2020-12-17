var data  =contenidojson;


var result = [];

for(var i = 0, len = data.length; i < len; i++) {
  var list = data[i];
  
  result[i] = { name: list[0] };

  for(var j = list.length - 1; j >= 1; j = j - 2) {
    var key = list[j];
    var value = list[j - 1];
    
    if (j > 100) {
        //console.log(j)
        //console.log('calc', j, key, value);
    }
    

    result[i][key] = value;

    
  }
}

result.forEach(function(entry) {
    alert(entry.name)
    console.log(entry.name);
});