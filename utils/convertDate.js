

export const convertToDates = (unix_date) =>{
 const date = new Date(unix_date);
return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()]
}