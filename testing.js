const updateClick = function(){
  let connt = 0;
  return function() {
    console.log(connt);
    connt++;
  }
}

updateClick()();
updateClick()();
updateClick()();
updateClick()();

