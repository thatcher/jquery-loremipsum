(function(_){
	
  	// RSpec/Bacon Style
	with (jqUnit) {


		describe('[jQuery-jsPath] (Lorem Ipsum Plug-in)', '| _ |', {
            
			before: function(){
                //no setup for this spec
			}
            
		}).should('expose these static functions', function(){
            
			defined(_, 'words' );
			defined(_, 'titled' );
			defined(_, 'sentence' );
			defined(_, 'paragraph' );
			defined(_, 'paragraphs' );
            
		});
        
        
        
		describe('[jQuery-jsPath] (Lorem Ipsum Plug-in)', '| _.words |', {
            
			before: function(){
                //no setup for this spec
			}
            
		}).should('return the correct number of words', function(){
            
            var i, words;
            for (i = 1; i < 20; i++) {
                words = _.words(i);
                equals(words.split(' ').length, i, 'returns ' + i + ' words \n' + words);
            }
            words = _.words(1, true);
            equals(words, 'lorem', 'returns 1 standard words \n' + words);
            words = _.words(2, true);
            equals(words, 'lorem ipsum', 'returns 2 standard words \n' + words);
            words = _.words(3, true);
            equals(words, 'lorem ipsum dolor', 'returns 3 standard words \n' + words);
            
		});
        
        
        describe('[jQuery-jsPath] (Lorem Ipsum Plug-in)', '| _.titled |', {
            
			before: function(){
                //no setup for this spec
			}
            
		}).should('return the correct number of titled words', function(){
			var i, words;
            for (i = 1; i < 10; i++) {
                words = _.titled(i);
                equals(words.split(' ').length, i, 'returns '+i+' words in the title. ' + words);
                _(words.split(' ')).each(function(){
                    match( /^[A-Z]/, this,  i + 'th word is titled \n' + this);
                });
            }
		});
        
        
        
        describe('[jQuery-jsPath] (Lorem Ipsum Plug-in)', '| _.sentence |', {
            
			before: function(){
                //no setup for this spec
			}
            
		}).should('return the correct number of words followed by punctuation', function(){
            
            var i, sentence, words;
            for (i = 1; i < 20; i++) {
                sentence = _.sentence();
                words = sentence.split(' ');
                ok(((8 <= words.length) && (words.length <= 15)), 'returns between 8 and 15 words \n' + sentence);
            }
               
		}).should('never add a comma just before the period', function(){
            
            var i, sentence, matches;
            for (i = 1; i < 20; i++) {
                sentence = _.sentence();
                matches = sentence.match(/(,\.)$/);
                if(matches){
                    ok(false,'sentence should not end in ",."\n' + sentence);
                }else{
                    ok( sentence, 'doesnt end in ",."\n' + sentence);
                }
            }
               
		});
        
        
        
        describe('[jQuery-jsPath] (Lorem Ipsum Plug-in)', '| _.paragraph |', {
            
			before: function(){
                //no setup for this spec
			}
            
		}).should('return the correct number of sentences', function(){
            
            var i, paragraph, sentences;
            for (i = 1; i < 20; i++) {
                paragraph = _.paragraph();
                sentences = paragraph.split('.');
                ok(((sentences.length >= 3) && (sentences.length <= 6)), 'returns between 3 and 6 sentences \n' + paragraph);
            }
             
		});
        
        
        
        describe('[jQuery-jsPath] (Lorem Ipsum Plug-in)', '| _.paragraphs |', {
            
			before: function(){
                //no setup for this spec
			}
            
		}).should('return the correct number of paragraphs', function(){
	
			var i, paragraphs;
            for (i = 1; i < 5; i++) {
                paragraphs = _.paragraphs(i);
                equals(paragraphs.length, i, 'returns '+i+' paragraphs. <br /><br />' + paragraphs.join('<br /><br />'));
            }
            
		});
		
		
	}
    
})(jsPath);
