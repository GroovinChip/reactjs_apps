# todo_app v2.0.0

This application is a very basic todo app where the user can enter an item into a list. Items can be marked as complete by checking the box next to the item name. When marked complete, items are removed from the list

This application was created with `npx nano-react-app`.

## Post-coding notes:
- I decided to approach this project by creating a `/components` directory and creating really basic boilerplate components (literally just an empty component definition and an export) to start myself off. This proved to be a good approach because it allowed me to quickly architect the app.
- After getting basic functionality working (adding items to the list) I was stuck with state problems. I decided to move back working to class components to solve this problem, and I had success.