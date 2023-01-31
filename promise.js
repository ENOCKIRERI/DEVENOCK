/*const data = [  "Harry",  "Ross",  "Bruce",  "Cook",  "Carolyn",  "Morgan",  "Albert",  "Walker",  "Randy",  "Reed",  "Larry",  "Barnes",  "Lois",  "Wilson",  "Jesse",  "Campbell",  "Ernest",  "Rogers",  "Theresa",  "Patterson",  "Henry",  "Simmons",  "Michelle",  "Perry",  "Frank",  "Butler",  "Shirley"];

const getData = callback => {
  setTimeout(() => {
    callback(data);
  }, 2000);
};

const displayData = data => {
  console.log(data);
};

getData(displayData);
// this is a comment*/
const data1 = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

function getData(cb) {
  setTimeout(() => {
    cb(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

getData(displayData);

const data = [ "Harry", "Ross", "Bruce",  "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

getData()
  .then(displayData)
  .catch((error) => {
    console.error(error);
  });

function displayData(data) {
  console.log(data);
}
fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

