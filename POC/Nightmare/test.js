const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

  describe('test mirror home page title', () => {
    it('should find the nightmare github link first', function(done) {
      this.timeout('120s')

      const nightmare = Nightmare({show:true})
      nightmare
        .goto('https://www.mirror.co.uk')
        .evaluate(() => document.title)
        .end()
        .then(title => {
          console.log(title);
          expect(title).to.equal('Mirror Online: The intelligent tabloid. #madeuthink');
          done()
          })
    })
  })
