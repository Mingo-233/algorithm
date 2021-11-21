/*真题描述： 设计一个支持以下两种操作的数据结构：

void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。*/

const WordDictionary = function(word){
  this.words = {}
}
WordDictionary.prototype.addWord = function(word){
  const len = word.length
  if(this.words[len]){
    this.words[len].push(word)
  }else{
    this.words[len] = [word]
  }
}
WordDictionary.prototype.search = function(word){
  const len = word.length
  if(!this.words[len]) return false
  if(!word.includes('.')){
    console.log('a');
    if(this.words[len].includes(word)){
      return true
    }else return false
  }else{
    //正则
    const reg = new RegExp(word)
    console.log(reg);
    let b= this.words[len].some(item=>reg.test(item))
   return b
  }
}
let dic = new WordDictionary()
let arr = ['bad','dad','mad']
for (const iterator of arr) {
  dic.addWord(iterator)
}
console.log(dic);

console.log(dic.search('..d'));