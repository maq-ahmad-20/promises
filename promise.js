console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 1000);
})

// promiseWifeBringingTicket.then((ticket)=>{
//     console.log(`person3 : shows ${ticket}`);

// })

const getPopcorn = promiseWifeBringingTicket.then((ticket)=>{
      console.log(`wife ! I have the ticket`);
      console.log('Husband we should go in');
      console.log('wife i am so hungry')

      return new Promise((resolve,reject)=>{
        resolve(`${ticket} popcorn`);
      })

})

const getButter = getPopcorn.then((ticket)=>{
    console.log("husband says I got popcorn")

    console.log('Husband we should go in');
      console.log('wife i need butter on my pop corn')

      return new Promise((resolve,reject)=>{
        resolve(`${ticket} butter`);
      })
})
 
// get cool drinks promise
const getCoolDrinks = getButter.then((ticket)=>{
    
    console.log('Husband says here is the butter')
    console.log('Husband we should go in')
    console.log("Wife says I need CoolDrink")

   

      return new Promise((resolve,reject)=>{
        resolve(`${ticket} CoolDrink`);
      })
})

 getCoolDrinks.then((ticket)=>{
    console.log("Person 3: shows the ticket");
 })


 console.log('person4: shows ticket');
console.log('person5: shows ticket');

