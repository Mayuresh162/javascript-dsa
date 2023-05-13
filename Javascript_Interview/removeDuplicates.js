let dummyObject =
[
{id:0,fname:'a'},
{id:0,mname:'b'},
{id:0,lname:'c'},
{id:1,fname:'a1'},
{id:1,mname:'b1'},
{id:1,lname:'c1'},
{id:2,fname:'a2'},
{id:2,mname:'b2'},
{id:2,lname:'c2'}
]

//     [{id:0,fname:'a',mname:'b',lname:'c'},
// {id:1,fname:'a1',mname:'b1',lname:'c1'},
// {id:2,fname:'a2',mname:'b2',lname:'c2'},
// ]

let lookup = {};
dummyObject.forEach(element => {
    if(!lookup[element['id']]) {
        lookup[element['id']] = element;
    } else {
        lookup[element['id']] = {...lookup[element['id']], ...element}
    }
})
console.log(Object.keys(lookup).map(id => lookup[id]));