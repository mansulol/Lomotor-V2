const array = [
  {
    name: 'John',
    nickname: 'Doe',
    age: 6
  },
  {
    name: 'Mansour',
    nickname: 'Lo',
    age: 19
  }
] 

array.map( (item, index) => (
  console.log(item.name +" es "+item.age > 18 ? 'Mayor de edad' : 'Menor de edad')
)
)
