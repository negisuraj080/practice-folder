function intro(name){
  return new Promise((resolve,reject)=>{
    condition = true;
    if(condition){
      setTimeout(()=>{
        resolve(`hi my name is ${name}`);
      },1000);
    }else{
      reject("intro promise was rejected");
    }
  });
}


function birthPlace(city){
  return new Promise((resolve,reject)=>{
    condition = true;
    if(condition){
      setTimeout(()=>{
        resolve(`hi I was born in ${city}`);
      },100);
    }else{
      reject("city promise was rejected");
    }
  });
}

function workPlace(company){
  return new Promise((resolve,reject)=>{
    condition = true;
    if(condition){
      setTimeout(()=>{
        resolve(`hi I work at ${company}`);
      },500);
    }else{
      reject("workplace promise was rejected");
    }
  });
}

intro("suraj")
.then((data)=>{
  console.log(data);
  return workPlace("google");
})
.then((data)=>{
  console.log(data);
  return birthPlace("haryana");
})
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})