var config = require('./config.json');

const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://slashdelta.com:7687", neo4j.auth.basic(config.user, config.pw));
const session = driver.session();

function createNode(obj){
  var obj_int = obj
  var resultPromise = session.run(
    'CREATE (u:Paper {title: {title},author:{author},year:{year}, index: {index}, abstract:{abstract}}) RETURN u',
    obj_int
  );

  resultPromise.then(result => {
    session.close();

    const singleRecord = result.records[0];
    const node = singleRecord.get(0);

    console.log(node.properties.title);

    // on application exit:
  }).catch(err => {
    console.log(err);
  });
}

function emptyObject() {
  return {
    title: "",
    author: "",
    year: "",
    index: "",
    references: [],
    abstract: ""
  }
}
var obj = emptyObject();

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('acm.txt')
});

lineReader.on('line', function (line) {
  if(line === ""){
    createNode(obj);
    obj = emptyObject();
  }else {
    if(line.startsWith("#*")){
      obj.title = line.replace("#*", '');
    }
    if(line.startsWith("#@")){
      obj.author = line.replace("#@", '');
    }
    if(line.startsWith("#t")){
      obj.year = line.replace("#t", '');
    }
    if(line.startsWith("#!")){
      obj.abstract = line.replace("#!", '');
    }
    if(line.startsWith("#index")){
      obj.index = line.replace("#index", '');
    }
    if(line.startsWith("#%")){
      obj.references.push(line.replace("#%", ''));
    }
  }

});
driver.close();
