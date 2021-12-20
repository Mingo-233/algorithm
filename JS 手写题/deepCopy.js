function deepCopy(obj){
  if(obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  if(!obj || typeof obj !== 'object') return obj
  let copy =  {}
  if(Object.prototype.toString.call(obj) === '[object Array]'){
    copy = []
  }
  console.log(obj);
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      copy[key] = deepCopy(obj[key])
    }
  }
  return copy
}