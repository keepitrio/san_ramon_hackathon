export const FETCH_CHECKLIST = "fetch_checklist";
export const UPDATE_CHECKLIST = "update_checklist";


export function updateChecklist(index, checklist){
  let itemToChange = checklist[index];
  itemToChange.completed = !itemToChange.completed;
  localStorage.setItem("checklist", JSON.stringify(checklist));
  return{
    type: UPDATE_CHECKLIST, 
    payload: checklist 
  }
}

export function fetchChecklist(initialChecklist){
  // const fetchedChecklist = localStorage.getItem('checklist') ? JSON.parse(localStorage.getItem('checklist')) : initialChecklist;
  let fetchedChecklist;
  if (localStorage.checklist) {
    fetchedChecklist = JSON.parse(localStorage.getItem('checklist'))
  } else {
    fetchedChecklist = initialChecklist;
  }

  return{
    type: FETCH_CHECKLIST, 
    payload: fetchedChecklist
  }
}

