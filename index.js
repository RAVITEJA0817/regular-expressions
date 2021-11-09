var re = [1-30]/['A-B'][1-3]/[2000-2021];
 function testInfo(dob) {
  var OK = re.exec(dob.value);
  var btn1 =  document.getElementById('btn')
 btn1.addEventListener('keypress',function(e){
 if (!OK) {
    out.textContent = `you are not eligible`;
  } else {
    out.textContent = `you are eligible`;
  }
 })
}