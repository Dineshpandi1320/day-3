//JASON Javascript 
var obj =[ 
{
    "name": "Dinesh",
    "age":"20",
    "gender":"male",
    "subject": ["tamil","english","maths","science","social"]
}
]
for(var i=0; i<obj.length; i++)
{
    //console.log(obj);
}
//FOR IN LOOP

for(var i in obj)
{
    //console.log(obj)
}
//FOR OF LOOP


for(var  i of obj)
{
   // console.log(obj)
}
obj.forEach(element => {
    //console.log(element)
});

//output

// {name: 'Dinesh', age: '20', gender: 'male', subject: Array(5)}

// : 
// {name: 'Dinesh', age: '20', gender: 'male', subject: Array(5)}

// : 
// {name: 'Dinesh', age: '20', gender: 'male', subject: Array(5)}

// : 
// Object
// age
// : 
// "20"
// gender
// : 
// "male"
// name
// : 
// "Dinesh"
// subject
// : 
// (5) ['tamil', 'english', 'maths', 'science', 'social']




//resume create JSON format
var resume={
    "Name" :"Dineshpandi",
    "Age"  :"20",
    "Gender" :"male",
    "qualification" :["10th","12th","U.G"],
    "location" :"Dindigul",
    "languages_know" :["tamil","english"],
    "programming_skils" :["c","java","python","javascript"],
    "exprience" :"fresher"
}
console.log(resume)

// //output
// {Name: 'Dineshpandi', Age: '20', Gender: 'male', qualification: Array(3), location: 'Dindigul', …}
