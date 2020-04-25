# todo_app

This application is a very basic todo app where the user can enter an item into a list. Items can be marked as complete by checking the box next to the item name. Items do not get removed from the list when checked.

This application was created with `npx nano-react-app`.

## Post-coding notes:
- I decided to approach this project by creating a `/components` directory and creating really basic boilerplate components (literally just an empty component definition and an export) to start myself off. This proved to be a good approach because it allowed me to quickly architect the app.
- After getting basic functionality working (adding items to the list) I was struck by how much more is involved in making this a legitimately functional application. True state management is required for that.