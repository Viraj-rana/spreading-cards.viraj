const panels = document.querySelectorAll('.panel')
//querySelector does to access anything 

panels.forEach(function (panel) { //basically here you can also take arrow function which most people probably using, I use function to keep it simple.
    panel.addEventListener('click', () =>{ //here we take arrow function
          
          removeActiveClasses()  // here we are calling the function "removeActiveClasses()" to remove active class except clicked one
        panel.classList.add('active') //1- so here when we click every class is active we need clicked one
    })
//console.log(panel)
})  //now it will loop through all panels and show me every panels in my console.

function removeActiveClasses(){
    panels.forEach(panel =>{  // we don't need parenthesis here because we just using one argument "panel"
               panel.classList.remove('active') //for the particular panel we will looping through we call remove and we call all active classes remove
    })
}
