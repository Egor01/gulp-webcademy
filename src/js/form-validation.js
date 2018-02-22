$(document).ready(function(){

(function(){
 var formValidation = {
      
      isValid: true;
   init: function(){
     // вызов внутренниx функций
     this._setUpListeners();
      },
      _setUpListeners: function(){
         $('#form-enter').on('submit', formValidation._validateForm);
      };


     _validateForm: function(event){
     	  event.preventDefault();
     	  console.log('private method _validateForm - runs');


     }




   }

 };
       formValidation.init();
}());

});
