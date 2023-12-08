//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// v2 Search
router.post('/v2/search/search-results', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Dog record"){
    res.redirect('/v2/search/dog-results')
  } else {
    res.redirect('/v2/search/owner-results')
  }

})
