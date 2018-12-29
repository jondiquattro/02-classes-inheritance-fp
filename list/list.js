'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  shift(){
    let returnValue = this.data[0];
    for(let i = 0; i<this.length; i++){
      this.data[i]= this.data[i+1]
    }
    delete this.data[this.length];
    return returnValue;
  }

  unshift(value){
    
    for(let i = 0; i< this.length; i++){
      this.data[i]=this.data[i+1]
    }
    this.data[0]=value;
  }

  slice(index, end){
  let result =[];
  if(end == undefined){
    for (let i = index; i<=this.length; i++){
      result.push(this.data[i])
  }
  }
  else{
    for (let i = index; i<=end; i++){
      result.push(this.data[i])
    }
  }
  return result;
    }
    
  splic(start, deleteCount, ...items){
    let itemsStart = 0;
    if(deleteCount == undefined){
  
      for (let i = start; i<=this.length; i++){
        if(i <= items.length){
          this.data[i]=items[itemsStart]
          console.log(items[itemsStart])
          itemsStart ++;
        }
        else{
          this.data[i]=this.data[i+1];
        }
    }
      delete this.data[this.length];
  
    }
    else{
        for (let i = start; i<=deleteCount; i++){
          if(i <= items.length){
            this.data[i]=items[itemsStart];
            itemsStart ++;
          }
          else{
            this.data[i]=this.data[i+1];
  
          }
      }
      delete this.data[this.length];
    
  }
  }


}

module.exports = List;
