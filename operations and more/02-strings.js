
const name="radha";
const repoCount=50;
console.log(name+repoCount);


// new type of string declaration we use back quotes
//on the left most below escape ``

// new style is 
console.log(`hi i am ${name} earned ${repoCount}rs`);

//gennerally helpful to add or link other things by dot

const game=new String("barure");
console.log(game);
console.log(game[3]);

// to access the obect we use
console.log(game.__proto__);
//we can access all methods by dot

console.log(game.length);
console.log(game.toUpperCase());
console.log(typeof(game));
console.log(game.toLowerCase());


// to get the char at position 2
console.log(game.charAt(3));
console.log(game.indexOf(`a`));

let hie=game.substring(0,3);
console.log(hie);
let giv=game.slice(0,-2);
console.log(giv)


// learning string methods
// trim will remove all the starting and ending space;

let demo1=`          space remover of starting and ending      `;
console.log(demo1);
console.log(demo1.trimEnd()); // removes spaces from end
// only trim removes spaces from both start and end
console.log(demo1.trimStart());
console.log(demo1.trim()); 


// replace method 


// useful in urls and more
let var1=`hello sam`;
console.log(var1.replace('sam','sonu'));
const url1=`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim`;
console.log(url1.replace('org',`samu`));
// we can find it as well
/// we use includes keyword

console.log(url1.includes( `https`));

console.log(game.split(" "));
console.log(game.split(``));