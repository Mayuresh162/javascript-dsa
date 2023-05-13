//  one way
function greet(str) {
    let greeting = str || '';

    return {
        greet: function(newGreeting) {
            if (newGreeting) {
                greeting = greeting + ' ' + newGreeting;
                return this;
            }
            return greeting.trim();
        },
        toString: function() {
            return greeting.trim();
        }
    };
}

// another way
function recursiveGreet(initialGreeting) {
    let greeting = initialGreeting || '';
    
    function innerGreet(newGreeting) {
        if (newGreeting) {
            greeting = greeting + ' ' + newGreeting;
            return innerGreet;
        }
        return greeting.trim()
    }
  
    innerGreet.toString = function() {
      return greeting.trim();
    };
  
    return innerGreet;
}


console.log(greet('hello').greet('world').greet().toString());
console.log(greet('hello').greet('world').greet());
console.log(recursiveGreet('hello')(('world'))().toString());
console.log(recursiveGreet('hello')(('world'))());