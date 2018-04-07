export const FETCH_CHECKLIST = "fetch_checklist";
export const UPDATE_CHECKLIST = "update_checklist";


export function updateChecklist(id, checklist){
  let itemToChange = checklist[id];
  itemToChange.completed = true;
  localStorage.setItem(checklist, JSON.stringify(checklist));
  dispatch({ type: UPDATE_CHECKLIST, payload: checklist })
}

export function fetchChecklist(initialChecklist){
  const fetchedChecklist = localStorage.getItem('checklist') ? JSON.parse(localStorage.getItem('checklist')) : initialChecklist

  // let fetchedChecklist;

  // if (localStorage.checklist) {
  //   fetchedChecklist = localStorage.getItem('checklist')
  // } else {
  //   fetchedChecklist = initialChecklist;
  // }

  dispatch({type: FETCH_CHECKLIST, payload: fetchedChecklist})
}

