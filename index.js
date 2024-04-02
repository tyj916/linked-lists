import { LinkedList } from './linkedLists.js';

const list = LinkedList();
list.prepend(12345);
list.prepend(5321);
list.append(3423);
list.append('pop me');
list.pop();
console.log(list.head().value);
console.log(list.tail().value);
console.log(list.size());
console.log(list.at(1));
console.log(list.contains(3423));
console.log(list.contains('no such value'));
console.log(list.find(3423));
console.log(list.find('no such value'));
console.log(list.toString());