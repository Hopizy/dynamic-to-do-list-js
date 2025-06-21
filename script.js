<script>
    function addItem(){
        //get current number of todo Items (for creating the ID)
        const currentNumberOfItems = document.querySelectorAll('.item').length
        console.log(currentNumberOfItems)
        console.log('Research:', document.querySelectorAll('.item'))

        const item = document.getElementById('todoInput').value //pulling value from input box
        const text = document.createTextNode(item) //turning input text into node
        const newItem = document.createElement('li') //creates a list
        newItem.id = currentNumberOfItems //give the new <li> an auto-incrementing id property
        newItem.classList.add('item') //add the item class so we can search for it by class
        //we didn't end up searching by class, but you can find every <li> on the page
        //using console.log(document.querySelectorAll('.item'))
        newItem.appendChild(text) //appends task entered from input
        document.getElementById('todoList').appendChild(newItem) //appends the entered task to the list

        const btn = document.createElement('button') // Create a <button> element
        const t = document.createTextNode('Delete')  // Create a text node
        btn.appendChild(t)                           // Append the text to <button>
        newItem.appendChild(btn)                     // Append <button> into the new <li>

        //we are going to create an event listener on the button
        //this takes 2 parameters
        //first = event type (on click)
        //second = callback function to run when the event is detected
        btn.addEventListener('click', function(event) {
            console.log(event.target.parentNode) //we want the element in which the button exists
            console.log('Research:', event) //look at all the stuff in here!
            deleteItem(event.target.parentNode) //run our delete function
        })
    }

    //now that we have an event listener and know the parent
    //we just have to find a way to delete the parent
    //we can call the input anything, and it will be a DOM element (event.target.parentNode)
    function deleteItem(parent) {
        console.log(parent.id) //lets check the parent's id

        //we can use element.removeChild() to ditch the todo item
        //first, we have to get the <ul> somehow
        const todoList = document.getElementById('todoList') //let's get the <ul> by ID
        todoList.removeChild(parent) //cya later "parent that the button was inside of"
    }
</script>