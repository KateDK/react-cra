/**
  choice(items): returns a randomly selected item from array of items

  remove(items, item): removes the first matching item from items, if item exists, and returns it Otherwise returns undefined.
 */

 const choice = (arr)=>{
   return arr[Math.floor(Math.random() * arr.length)];
 }


 const remove = (arr, item)=>{
   for(let i = 0; i < arr.length; i++){
     if(arr[i] === item){
       return arr.splice(i,1);
     }
   }
   return undefined;
 }

 export {choice,remove};
