$(document).ready(function(){

	(function(){

		var formValidation = {

			init: function(){
				// вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('.reglog__form-errors').on('submit', formValidation._validatForm).on('submit', formValidation._sendEmail);
			},

			_validatForm: function(event){
				event.preventDefault();
				console.log('private method_validatForm-runs');
				var reglog__form-errors = $(this),
				    inputs = reglog__form-errors.find('nput, textarea'),
				    valid = true;

				    $.each(inputs, function(index, val){
				    	var input =$(val),
				    	     value = input.val().trim(),
				    	   formGroup = input.parents('reglog__form-errors') ,

				    	   textError = 'Введите email'
				    	   tooltip = $(' <span class='input_email_error'> ' + + textError '</span>');


				    	   if ( value.length === 0 ){      
				    	   	 formGroup.addClass('error');
				    	   	 formGroup.find('.form__tooltip').remove();

				    	   	  tooltip.appendTo(formGroup);
				    	   	   valid = false;

				    	   	   input.on('focus', function(){
				    	   	   	formGroup.find('.form__tooltip').remove();
				    	   	   });
				    	   	   
				    	   	   input.on('keydown', function(){
				    	   	   	formGroup.removeClass('error');
				    	   	   });


				    	   	   formValidation.isValid = valid;
				    	   	 },

				    	   	 _sendEmail: funstion(){

				    	   	 	if (formValidation.isValid === true){



				    	   	 	}


				    	   	 }


				    	   	   




				    	   } 

				    });
			},

		};

		formValidation.init();

	}());

});


