const posts = [{title:'POST1' , lastActive: "2023-07-01 00:00:00"},{title:'POST2' , lastActive: "2023-07-01 00:00:00"}];

function getPosts(){
  posts.forEach((val)=>{
    console.log(val);
  })
     
}

function createPost(post){
    return new Promise((resolve , reject)=>{
         setTimeout(()=>{
           posts.push(post);
           resolve();
         },2000)
    })
}

function updateLastUserActivityTime(post){
    new Promise((resolve,reject)=>{
       setTimeout(() => {
         post.lastActive =new Date();
        resolve();
       }, 1000);
    })
}

function deletePost(){
  return new Promise((resolve,reject)=>{
      if(posts.length > 0){
         resolve(posts.pop());
      }else{
        reject("Error : The Array is Empty");
      }
  })
}

let post ={title:'POST3' , lastActive: ""};
let create = createPost(post);
let lastActive =updateLastUserActivityTime(post);

Promise.all([create,lastActive]).then(()=>{
    for(let i=0;i<posts.length;i++)
    console.log(JSON.stringify(posts[i]));
    deletePost().then((msg)=>{
       console.log("Deleted Post : " + msg.title);
       for(let i=0;i<posts.length;i++){
       console.log(JSON.stringify(posts[i]));
       }
    }).catch((msg)=>{
      console.log(msg);
    })
})