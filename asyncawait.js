console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async ()=>{
    const promiseWifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');
        }, 1000);
    })

     const getPopCorn = new Promise((resolve , reject)=>{
        resolve(`popcorn`);
     })

     const getButter =new Promise((resolve , reject)=>{
        resolve(`Butter`);
     })

     const getCoolDrinks = new Promise((resolve,reject)=>{
        resolve(`CoolDrink`)
     })

    let ticket = await promiseWifeBringingTicket;
    console.log(`wife ! I have the ${ticket}`);
    console.log('Husband we should go in');
    console.log('wife i am so hungry');

    let popcorn = await getPopCorn;
      console.log(`husband says I got ${popcorn}`)
      console.log('Husband we should go in');
      console.log('wife i need butter on my pop corn')

     let butter = await getButter;

     console.log(`Husband says here is the ${butter} on pop corn`)
    console.log('Husband we should go in')
    console.log("Wife says I need CoolDrink")

     let coolDrink = await getCoolDrinks;
    
     console.log(`Husband Says here is your ${coolDrink}`);  

      return ticket;
}

preMovie().then((t)=>{
   console.log(`person 3 shows the ${t}`);
})


console.log('person4: shows ticket');
console.log('person5: shows ticket');
