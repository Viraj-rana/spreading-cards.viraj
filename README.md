In script file we gonna use querySelector(querySelectorAll) to access all elements, paragraph , h tags everything instead of selecting element directly its puts all of the panels into it called the nodeList which is similar to an Array, infact you can see that simple `console.log(panels)`
   also you can select by index like an array so it will give you first index div element.
   

   We can also loop through the node with an array panels.forEach()
    which is my high order array method , this metod takes an function as an argument1

  [vs code 4-6 line of code]// so basically we don't need that we need event listener on each of panel so we can select each of them something happen.

removeActiveClasses()  here we are calling the function "removeActiveClasses()" to remove active class except clicked one
