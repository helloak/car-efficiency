const tf=require('@tensorflow/tfjs');
const _ = require('lodash');

class LinearRegression {



 constructor(features, labels, options ) {

   this.features = tf.tensor(features);
   this.labels = tf.tensor(labels);


  this.features = tf.ones([this.features.shape[0],1]).concat(this.features, 1);


   this.options = Object.assign({learningRate: 0.1, iterations: 1000 },options

 );

  this.b =0;
    this.m= 0;



}


gradientDescent() {

const currentGuessesForMPG = this.features.map(row=>{

  return this.m * row[0] + this.b;
});


  const bSlope = _.sum(currentGuessesForMPG.map((guess, i) => {

          return guess - this.labels[i][0];

  })) *2/this.features.length;





 const mSlope = _.sum(currentGuessesForMPG.map((guess, i) => {

          return  -1 *(this.features[i][0] - guess);

  })) *2/this.features.length;


  this.m = this.m - mSlope * this.options.learningRate;
  this.b = this.b - bSlope * this.options.learningRate;


  }




train() {

    for(let i=0; i<this.options.iterations; i++) {

      this.gradientDescent();

    }
  }

}


module.exports = LinearRegression;
