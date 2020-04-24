# array_hook

A simple ReactJS app that uses Hooks to create list and allow the user to add to that list via textfield and button. I consider this a precursor to making a todo-list app.

Some things I learned:
- With Hooks you cannot add to an array using `.push()`, you have to use `.concat()`
- You cannot access the value of a textfield from a different element, you have to define a variable to hold the user's input specifically.
- Calling an update function to a value directly from a button's `onClick` will cause an infinite render loop. You have to define a separate function to handle updating the value. Specifically, this code defines the following:

    `const [list, setList] = useState([]);` to represent the list

    `const [currentValue, setValue] = useState();` to represent the user's input into the textfield
    
    Calling `setList` directly from a button causes the infinite render loop. Instead, I had to create the following function and call it from my button:

    ```
    const onAddListClick = () => {
        setList(oldList => [...oldList, currentValue]);
    }
    ```
- In order to display an array, you have to map it. You also have to make sure to give each item a key since your array is now a map. 
- There are multiple ways to update an array. Doing `setList(oldList => [...oldList, currentValue]);` using the spread operator seems to be the best option.
- When updating an array you have to specify that you are taking the previous vesion of the array and updating it. Hence specifying `oldList` in `setList(oldList => [...oldList, currentValue]);` and not passing in `list` as I had defined above.
