// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
function likes(names) {
  let [name1 = 'no one', name2, ...other] = names;
  let and = names.length == 2 ? ' and':names.length > 2? ',': '';
  let secAnd = names.length>2? 'and': '';
  name2 = name2 ?? '';
  other = other.length > 1? other.length + ' others': other;
 let likes = names.length<2? 'likes this': 'like this';
let result = (`${name1}${and} ${name2} ${secAnd} ${other} ${likes}`).replace(/\s+/g, ' ').trim();
  return result;
}