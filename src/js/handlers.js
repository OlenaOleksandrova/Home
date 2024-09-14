import { state } from "./state";

 export const  onTaskFormSubmit = (event) => {
     event.preventdefault();
     const inputValue = event.target.elements.taskName.value.trim;
     console.log(inputValue);
     state.tasks.push(inputValue)
     console.log(state.tasks);

     

     
     event.target.raset();
}