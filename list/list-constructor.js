'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;

  // console.log('from pop ', returnValue)
  return returnValue;
};


//shift removes and returns first item in the list
//shifts all elements to the left to fill in the array

List.prototype.shift = function () {
  let returnValue = this.data[0];
  for(let i = 0; i<this.length; i++){
    this.data[i]= this.data[i+1]
  }
  delete this.data[this.length];
  this.length --;
  return returnValue;

};

//unshit starts by shifting all elements to the right.
//unshift adds an item to the front of the list index 0, a

List.prototype.unshift =function(value){

  for(let i =this.length ; i>=0 ; i--){
    this.data[i+1]=this.data[i];
  }
  this.data[0]=value;
}
//removes items from the array at specified index and returns a new array.
List.prototype.slice = function (index, end){

let result =[];
if(end == undefined){
  for (let i = index; i<=this.length; i++){
    // result.push(this.data[i])
    result[result.length]=this.data[i]
}
}
else{
  for (let i = index; i<=end; i++){
    // result.push(this.data[i])
    result[result.length]=this.data[i]

  }
}


return result;
}


List.prototype.splice = function (start, deleteCount, ...items){
  let itemsStart = 0;
  if(deleteCount == undefined){

    for (let i = start; i<=this.length; i++){
      if(i <= items.length){
        this.data[i]=items[itemsStart]
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




module.exports = List;
