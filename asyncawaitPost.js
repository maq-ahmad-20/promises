var posts = [{title:"POST1" , lastActive: "2023-07-01 00:00:00"},{title:"POST2" , lastActive: "2023-07-01 00:00:00"}];
var Post = {title:'POST3' , lastActive: ""};

const addPost = async (newPost) =>{
     
    const fn =  new Promise((resolve,reject)=>{
          console.log(posts);
          resolve();
    })
      
      
     const addPost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(newPost);
            resolve();
          },2000)
     })

     const updateLastUserActivityTime = new Promise((resolve,reject)=>{
           setTimeout(() => {
            newPost.lastActive =new Date();
           resolve();
          }, 1000);
     })
     const deletePost = new Promise((resolve,reject)=>{
        if(posts.length > 0){
            resolve(posts.pop());
         }
     })
      
    
  
      let [post , userTime] = await Promise.all([addPost,updateLastUserActivityTime]);
       
        await fn;
    
    
      
      await deletePost;
     
       await fn;
    
     console.log("-------------------------------------------------------------------------------------")

     
    }


  
   addPost(Post).then(()=>{ });


