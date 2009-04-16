(function(_){
	
  	// RSpec/Bacon Style
	with (jqUnit) {
		
		//tests basic init functionality
		describe('jQuery Lorem Ipsum', 'plugin methods', {
			before: function(){
			}
		}).it('should be a function', function(){
			isType(_.words, Function);
		}).it('should be a function', function(){
			isType(_.paragraphs, Function);
		}).it('should be a function', function(){
			isType(_.titled, Function);
		}).it('should be a function', function(){
			isType(_.sentence, Function);
		}).it('should be a function', function(){
			isType(_.paragraph, Function);
		}).pending('should do something awesome', function(){
			// It doesnt matter what you put here it wont be run until
			// you change this to an actual spec
			ok(false);
		});
		
		
	}
    
})(jsPath);
