import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.mirror.co.uk`;

test('My first test', async t => {
  await t
       .expect(Selector("title").innerText).eql('Mirror Online: The intelligent tabloid. #madeuthink');

});
