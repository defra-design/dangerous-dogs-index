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
    res.redirect('/v2/search/dog-results-4')
  } else {
    res.redirect('/v2/search/owner-results-3')
  }

})

// v3 Search
router.post('/v3/search/search-results', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Dog record"){
    res.redirect('/v3/search/dog-results')
  } else {
    res.redirect('/v3/search/owner-results')
  }

})

// v4 View activities
router.post('/v4/dog-records/activity/activity', function (req, res) {
  var activity = req.session.data['activity']
  if (activity == "All"){
    res.redirect('/v4/dog-records/activity/activity-all')
  } if (activity == "Exemption details"){
    res.redirect('/v4/dog-records/activity/activity-exemption')
  } if (activity == "Dog details"){
    res.redirect('/v4/dog-records/activity/activity-dog')
  } else {
    res.redirect('/v4/dog-records/activity/activity-owner')
  }

})

// v4 Add an activity
router.post('/v4/dog-records/activity/add-activity-question', function (req, res) {
  var addActivity = req.session.data['addActivity']
  if (addActivity == "sent"){
    res.redirect('/v4/dog-records/activity/send-activity')
  } else {
    res.redirect('/v4/dog-records/activity/receive-activity')
  }

})


// v4 Select owner
router.post('/v4/cdo/create/select-owner-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "Smith"){
    res.redirect('/v4/cdo/create/select-owner')
  } else {
    res.redirect('/v4/cdo/create/postcode')
  }

})
