let config = require('./config.json');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://slashdelta.com:7687", neo4j.auth.basic(config.user, config.pw));
const session = driver.session();

function createNode(obj){
  let resultPromise = session.run(
    'CREATE (u:Paper {title: {title},author:{author},year:{year}, index: {index}, abstract:{abstract}}) RETURN u',
    obj
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

function createEdge(obj) {
  let query = "";
  obj.references.map((ref) => {
    query += "MATCH (a:Paper),(b:Paper) WHERE a.index = '"+obj.index+"' AND b.index = '"+ref+"' CREATE (a)-[r:REFERENCES]->(b) RETURN r;\n";
  });

  if (query != ""){
    let resultPromise = session.run(query);

    return resultPromise.then(result => {
      session.close();
      return Promise.resolve();
    }).catch(err => {
      console.log(err);
      session.close();
      return Promise.reject();
    });
  } else {
    return Promise.resolve();
  }
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
  input: require('fs').createReadStream('acm.txt')
});

lineReader.on('line', function (line) {
  if(line === ""){
    lineReader.pause()
    /*createNode(obj).then(() => {
      lineReader.resume();
    })
    */
    createEdge(obj).then(() => {
      lineReader.resume();
    })
    obj = emptyObject();
  } else {
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
