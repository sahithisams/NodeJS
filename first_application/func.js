var fs = require('fs');

fs.readFile('./text.txt','utf8',function(err,data){
    if(err)
        console.log('Error in reading file!');
    else
        console.log(data);
})