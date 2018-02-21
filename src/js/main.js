$(document).ready(function() {
	console.log('js work!');

	// скрипт для страницы регистрации
	(function(){

		var formValidationReg = {

			isvalid: true,

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$("#form-reg").on("submit", formValidationReg._validateForm);
			},

			_validateForm: function(e){
				e.preventDefault();


				var form = $(this),
					inputs = form.find('input'),
					valid = true;

				// обходим поля ввода и если они не заполенены, по submit выдаст ошибку
				$.each(inputs, function(index, val){
					var input = $(val),
						value = input.val().trim();
						
					if (value.length === 0 && input.data("email")) {
						valid = false,
						$(".reglog__form-errors-email").addClass('visible-error')
					}else if (value.length === 0 && input.data("pass")){
						valid = false,
						$(".reglog__form-errors-pass").addClass('visible-error')
					}
					
					// отслеживаем нажатие кнопок в поле ввода и если текст вводится, убираем ошибку
					input.on('keydown', function(){
						if(input.data("email")){
							$(".reglog__form-errors-email").removeClass('visible-error');
						}else if(input.data("pass")){
							$(".reglog__form-errors-pass").removeClass('visible-error');
						}
					});

					// отслеживаем нажатие кнопок в поле ввода и если текст был вставлен или подставлен автозаполнением, убираем ошибку
					input.on('change', function(){
						if(input.data("email")){
							$(".reglog__form-errors-email").removeClass('visible-error');
						}else if(input.data("pass")){
							$(".reglog__form-errors-pass").removeClass('visible-error');
						}
					});

				});


				formValidationReg.isvalid = valid;
			}

		};

		formValidationReg.init();

	}());


	// скрипт для страницы входа
	(function(){

		var formValidationLog = {

			isvalid: true,

			init: function(){
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$("#form-log").on("submit", formValidationLog._validateForm);
			},

			_validateForm: function(e){
				e.preventDefault();


				var form = $(this),
					inputs = form.find('input'),
					valid = true;

				// обходим поля ввода и если они не заполенены, по submit выдаст ошибку
				$.each(inputs, function(index, val){
					var input = $(val),
						value = input.val().trim();
						
					if (value.length === 0 && input.data("email")) {
						valid = false,
						$(".reglog__form-errors-email").addClass('visible-error')
					}else if (value.length === 0 && input.data("pass")){
						valid = false,
						$(".reglog__form-errors-pass").addClass('visible-error')
					}
					
					// отслеживаем нажатие кнопок в поле ввода и если текст вводится, убираем ошибку
					input.on('keydown', function(){
						if(input.data("email")){
							$(".reglog__form-errors-email").removeClass('visible-error');
						}else if(input.data("pass")){
							$(".reglog__form-errors-pass").removeClass('visible-error');
						}
					});

					// отслеживаем нажатие кнопок в поле ввода и если текст был вставлен или подставлен автозаполнением, убираем ошибку
					input.on('change', function(){
						if(input.data("email")){
							$(".reglog__form-errors-email").removeClass('visible-error');
						}else if(input.data("pass")){
							$(".reglog__form-errors-pass").removeClass('visible-error');
						}
					});

				});


				formValidationLog.isvalid = valid;
			}

		};

		formValidationLog.init();

	}());


});

