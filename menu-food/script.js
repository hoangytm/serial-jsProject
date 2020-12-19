let data = [{
    id: 1,
    avatarPath: 'image/avatar1.jpg',
    name: 'khue thun',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsa pariatur quisquam repudiandae labore obcaecati sit ducimus expedita culpa placeat delectus, iure architecto unde corrupti voluptate reprehenderit ab maiores nulla.'
  },
  {
    id: 2,
    avatarPath: 'image/avatar2.jpg',
    name: 'khue thun 1',
    description: 'The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get access to our alpha and future releases!'
  },
  {
    id: 3,
    avatarPath: 'image/avatar3.jpg',
    name: 'khue thun 2',
    description: 'Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. To design is to discover relationships and to make arrangements and rearrangements among these ingredients.'
  }
]

function changeAvatar(i) {
  let avatar = document.getElementById('image')
  console.log(data[i].avatarPath)
  avatar.src = data[i].avatarPath
}

function changeName(i) {
  let name = document.getElementById('name')
  console.log(data[i].name)
  name.innerHTML = data[i].name
}

function changeDicription(i) {
  let description = document.getElementById('description')
  console.log(data[i].description)
  description.innerHTML = data[i].description
}
let index = 0;

function next() {
  console.log('next')
  if (index <data.length-1) index++
  changeAvatar(index)
  changeName(index)
  changeDicription(index)
}

function previous() {
  console.log('previous')
  if (index >0) index--
  changeAvatar(index)
  changeName(index)
  changeDicription(index)
}