var nd=require("needle")
var url="https://api.themoviedb.org/3/movie/top_rated?api_key=281c6196bbbfd2d514c9667a6c174c96&language=en-US&page=1"
nd.get(url,(error,response,body)=>{
if(error)
 console.log(error)
else{
   var results=body.results
      for(ele in results)
            console.log(results[ele].title)
    }
})