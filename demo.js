
function deepCopy(obj){
  if(!obj ||typeof obj !=='object') return obj
  let copy = {}
  if(Object.prototype.toString.call(obj) === '[object Array]'){
    copy = []
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      copy[key] = deepCopy(obj[key]) 
    }
  }
  return copy
}


let dd = {
  name:"ss",
  weapon:{
    gun:{
      size:30,
      damage:100
    }
  }
}


let aa =  deepCopy(dd)
dd.name ='wdnm'

console.log(aa);
aa.weapon.gun.size=99
console.log(dd);