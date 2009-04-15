(function($){
	
  	// RSpec/Bacon Style
	with (jqUnit) {
		
		//tests basic init functionality
		describe('jQuery Lorem Ipsum', 'plugin methods', {
			before: function(){
			}
		}).it('should be a function', function(){
			isType($.words, Function);
		}).it('should be a function', function(){
			isType($.paragraphs, Function);
		}).it('should be a function', function(){
			isType($.titled, Function);
		}).it('should be a function', function(){
			isType($.sentence, Function);
		}).it('should be a function', function(){
			isType($.paragraph, Function);
		}).pending('should do something awesome', function(){
			// It doesnt matter what you put here it wont be run until
			// you change this to an actual spec
			ok(false);
		});
		
		
	}
    
})(jQuery);
