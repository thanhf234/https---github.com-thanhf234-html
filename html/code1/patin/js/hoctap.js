var fullname = [

    {name: 'thanh' ,height: 165},
    {name: 'tha' ,height: 175},
    {name: 'th' ,height: 155},   


    
]


var stidensbani= fullname.sort((studen1,studen2) => {
if(studen1.height  >  studen2.height){
   return -1;
}
   else if(studen1.height <  studen2.height){
    return 1;
}
 else if(studen1.height =  studen2.height){
return 0;
}
})
console.log(stidensbani);