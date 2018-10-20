'use strict';
var cat = {
  name: 'Fluffy',
  age: 2,
  color: 'grey',
  vaccinated : true,
  wool: 'long'
};
cat.age = 3;
cat.wool = 'long';
delete cat.wool;