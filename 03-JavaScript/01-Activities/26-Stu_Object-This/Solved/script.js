// This refers to the window
console.log(this);

function helloThis() { 
   console.log("Inside this function, this is " + this); 
}

var child = { 
   age: 10,
   ageTenYears: function() {
      console.log(this.age + 10); 
   }
};

var investor = {  
   name: "Cash Saver",
   investment: {
      initialInvestment: 5000,
      investmentGrowth: function() {
         console.log(this.initialInvestment * 1.15)
      }
   }   
};

// This refers to the window object
helloThis();

// This refers to the child object. Will console log 20
child.ageTenYears();

// This refers to the investment object. Will log 5750
investor.investment.investmentGrowth();
