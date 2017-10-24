var fs = require('fs');
let config = require('./config.json');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://slashdelta.com:7687", neo4j.auth.basic(config.user, config.pw));
const session = driver.session();

function doQuery(query){
  let resultPromise = session.run(
    query
  );
  return resultPromise.then(result => {
    session.close();
    return Promise.resolve();
  }).catch(err => {
    console.log(err);
    session.close();
    return Promise.reject();
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

let obj = emptyObject();

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('refs.cql')
});

lineReader.on('line', function (line) {
  lineReader.pause();
  doQuery(line).then(() => {
    lineReader.resume();
  });
});
driver.close();
