// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 
$(function () {
  
  var timeBlock= $(".time-block")
  function saveEvent(event){
    var button = $(event.target)
    if(button.attr("class").includes("saveBtn")){
      var textarea = button.siblings("textarea")
      var parentId = button.parent().attr("id")
      localStorage.setItem(parentId, textarea.val())
    }
    var icon = $(event.target)
    if(icon.attr('class').includes("fas fa-save")){
      var textarea = icon.parent().siblings("textarea")
      var parentId = icon.parent().parent().attr("id")
      localStorage.setItem(parentId, textarea.val())
    }
  }
  timeBlock.each(function(index, time){
    var parentId = time.id
    console.log(parentId)
    var event= localStorage.getItem(parentId)
    console.log(event)
    var textarea = $("#" + parentId).children("textarea")
    console.log(textarea)
    textarea.val(event)
  })
  timeBlock.on("click", saveEvent)

  
  
})  
 

 
