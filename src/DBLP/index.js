var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('acm.txt')
});

lineReader.on('line', function (line) {
  if(line === "#%18483"){
    console.log(line);
  }
});
