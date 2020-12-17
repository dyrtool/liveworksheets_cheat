var data = JSON.parse(contenidojson);
var result = [];

for(var i = 0, len = data.length; i < len; i++) {
  var list = data[i]
  result[i] = { name: list[0] };

  for(var j = list.length - 1; j >= 1; j = j - 2) {
    var key = list[j];
    var value = list[j - 1];
    result[i][key] = value;
  }
}

var loops = 0;
result.forEach(function(entry) {
    console.log(loops.toString() + ". " + entry.name);
    loops++;
});
