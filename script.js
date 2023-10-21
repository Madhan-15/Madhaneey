document.addEventListener("DOMContentLoaded", function ()
 {
    const textInput = document.getElementById("text-input");
  
    const characterCount = document.getElementById("count");
  
    textInput.addEventListener("input", function () {
    
        const text = textInput.value;
    
    
    const count = text.length;

    characterCount.textContent = count;

});
  });
  
  