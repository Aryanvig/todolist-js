let input = prompt('What would you like to do?')
const todos= ['yoyo honey simgh']
while (input != 'quit' && input !== 'q'){
    if(input=== 'list'){
        console.log('********')
        for (let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
            }
           }
           else if (input === 'new'){
            const newTodo = prompt('Enter your new todo')
            todos.push(newTodo);
            console.log(`${newTodo} added to the list..`)
    }
    else if (input === 'delete'){
        const del = prompt('OK, what would you like to delete')
         todos.splice('del',1);
         console.log(`You deleted todo ${del[0]} from your list`)
    }
    input = prompt('What would you like to do?')
}
console.log('OK, YOU CAN QUIT THE APP');
