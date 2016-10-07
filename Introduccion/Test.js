Your environment has been set up for using Node.js 6.7.0 (x64) and npm.

C:\Users\Alvaro>node --use_strict
> 40+2
42
> var point = { x: 1, y:1};
undefined
> point
{ x: 1, y: 1 }
> point.x
1
> var bool = true; //false
undefined
> var number = 1234.5
undefined
>
>
> var text = " I want to be the pirate king"
undefined
>
>
> var object = {};
undefined
> var code = function () {return 42;};
undefined
>
>
> // En los comentarios hay más valores posibles para cada uno de los tipos.
undefined
> var bool = true; // false
undefined
> var number = 1234.5; // 42, -Infinity, +Infinity
undefined
> var text = 'I want to be a pirate!'; // "I want to be a pirate"
undefined
> var object = {}; // [], null
undefined
> var code = function () { return 42; };
undefined

>
> typeof true;
'boolean'
> typeof 1234.5;
'number'
> typeof 'I want to be a pirate!';
'string'
> typeof {};
'object'
> typeof function () { return 42; };
'function'
>
> var x
undefined
> typoof x;
typoof x;

> typeof x;
'undefined'
> x=5;
5
> typeof x;
'number'
>
> var point = { 'x': 10, 'y': 15 };
undefined
>
> var point = { 'x': 10, 'y': 15 };
undefined
> point.x
10
> pont.y
ReferenceError: pont is not defined
    at repl:1:1
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:96:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:313:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:513:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> point.y
15
> var menu = ['Attack', 'Defense', 'Inventory'];
undefined
> menu[0];
'Attack'
> menu[1];
'Defense'
> menu[2];
'Inventory'
> menu.lenght;
undefined
> menu.length;
3
> menu.push('Magic');
4
> menu.pop
[Function: pop]
> menu.pop();
'Magic'
> menu.splice(2,0, 'Magic');
[]
> menu[2]
'Magic'
> menu.splice(2, 2, 'Ench. Inventory');
[ 'Magic', 'Inventory' ]
> menu.splice(0, 0, 'Wait');
[]
> menu[0];
'Wait'
> menu[0] = 'Special';
'Special'
> menu;
[ 'Special', 'Attack', 'Defense', 'Ench. Inventory' ]
> menu.length;
4
> var item = menu[10];
undefined
> typeof item; // será undefined.
'undefined'
> menu[10] = 'Secret';
'Secret'
> menu;
[ 'Special',
  'Attack',
  'Defense',
  'Ench. Inventory',
  ,
  ,
  ,
  ,
  ,
  ,
  'Secret' ]
> menu.length;
11
> function getNextAliveEnemy() {
...   var nextEnemy;
...   if (aliveEnemies.length > 0) {
.....     nextEnemy = aliveEnemies[0];
.....   }
...   else {
.....     nextEnemy = null;
.....   }
...   return nextEnemy;
... }
undefined
> var hero = { sword: null, shield: null };
undefined
> hero.sword = { attack: 20, magic: 5 }; // coge una espada.
{ attack: 20, magic: 5 }
> hero.sword = null; // suelta la espada.
null
> var hero = {
...   name: 'Link',
...   life: 100,
...   weapon: { kind: 'sword', power: 20, magicPower: 5 },
...   defense: { kind: 'shield', power: 5, magicPower: 0 },
...   // Inventario por slots. Dos slots vacion y una último con 5 pociones.
...   inventory: [
...     { item: null, count: 0},
...     { item: null, count: 0},
...     { item: { kind: 'potion', power: 15 }, count: 5}
...   ]
... };
undefined
> hero.name;
'Link'
> hero.weapon.kind;
'sword'
> hero.inventory[0];
{ item: null, count: 0 }
> hero.inventory[2];
{ item: { kind: 'potion', power: 15 }, count: 5 }
> hero.inventory[2].item.power;
15
>