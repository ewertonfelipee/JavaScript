foo = () => {
  return new Promise((resolve) => {

    setTimeout(() => {
      console.log("done");
      resolve();
    }, 1000);
  })
}

async function foo2(){
  try {
    console.log("started");
    await foo();
    console.log("finished");
  }
  catch(err){
    console.log("error" + err);
  }
}

foo2();