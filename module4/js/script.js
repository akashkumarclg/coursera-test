(function () {

var names = ["Akash", "John", "Jen", "Jay", "Paul", "Ashish", "Larry", "Sumit", "Piyush", "Joy"];


for (var i = 0; i < names.length; i++) {
   
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
    
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})(window);
