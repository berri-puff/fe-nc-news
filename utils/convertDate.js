import React from "react";
export const convertToDates = (unformatedDate) =>{
 const date = new Date(unformatedDate);
  return new Intl.DateTimeFormat('en-GB', {
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  }).format(date);
}