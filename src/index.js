class SmartCalculator {
  constructor(initialValue) {
   this.value=initialValue.toString();
  }
  toString() {
    return eval(this.value);
  }
  add(number) {
  this.value+="+"+number;

  return this;
  }
  
  subtract(number) {
  this.value+="-"+number;
  return this; 
  }

  multiply(number) {
  this.value+="*"+number;
  return this;
    }

  devide(number) {
  this.value+="/"+number;
  return this;
    // your implementation
  }

  pow(number) {
  this.value+="**"+number;
  return this;
    // your implementation
  }
}
this.value=eval(this.value);
module.exports = SmartCalculator;