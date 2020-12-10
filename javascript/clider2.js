new Vue ({
    el: "#app",
    
    data: {
      name : '',
      value : 0,
      value1 : 0,
      value2 : 0,
      value3 : 0,
      value4 : 0,
      value5 : 0,
      value6 : 0,
      value7 : 0,
      
    },
    computed : {
     
      getTestNumber : function () {
          t = parseInt(this.value)  +
              parseInt(this.value1) +
              parseInt(this.value2) +
              parseInt(this.value3) +
              parseInt(this.value4) +
              parseInt(this.value5) +
              parseInt(this.value6) +
              parseInt(this.value7)
            if(t <= 10 ) {
              return t
            } else {
              !this.getTestNumber
            }

         return t
      },
      
    },

     
  })
  