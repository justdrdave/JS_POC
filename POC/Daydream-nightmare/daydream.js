const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
.goto('https://www.mirror.co.uk/')
.click('.primary > section > :nth-child(2) > :nth-child(8) > a')
.goto('https://www.mirror.co.uk/tech/')
.click('.duet.primary > :nth-child(2) > .inner > .headline')
.goto('https://www.mirror.co.uk/science/people-wear-glasses-more-intelligent-12621624')
.end()
.then(function (result) {
  console.log(result)
})
.catch(function (error) {
  console.error('Error:', error);
});
