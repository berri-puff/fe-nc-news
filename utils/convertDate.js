

export const convertToDates = (unix_date) =>{
 const date = new Date(unix_date);
 if ((date.getHours() < 10 && date.getHours() >=0) && (date.getMinutes() < 9 && date.getMinutes() >=0) ) {
    return [date.getFullYear(), date.getMonth(), date.getDate(), '0'+date.getHours(), '0'+date.getMinutes()]
 }
else if (date.getMinutes() < 9 && date.getMinutes() >=0){
    return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), '0'+date.getMinutes()]
 }

else if (date.getHours() <= 9 && date.getHours() >=0) {
    return [date.getFullYear(), date.getMonth(), date.getDate(), '0'+date.getHours(), date.getMinutes()]
 }

 else {
     return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()]
 }

}