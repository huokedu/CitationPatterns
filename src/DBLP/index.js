var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://username:password@slashdelta.com:7474');


var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('acm.txt')
});

lineReader.on('line', function (line) {
  if(line === "#%18483"){
    console.log(line);
  }
});
