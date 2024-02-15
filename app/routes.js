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
router.post('/v4/cdo/create/create-record-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "Smith"){
    res.redirect('/v4/cdo/create/select-owner')
  } else {
    res.redirect('/v4/cdo/create/postcode')
  }

})

// v4 Select existing owner address
router.post('/v4/cdo/create/select-owner-question', function (req, res) {
  var existingOwner = req.session.data['existingOwner']
  if (existingOwner == "address1"){
    res.redirect('/v4/cdo/create/microchip-number')
  } else {
    res.redirect('/v4/cdo/create/postcode')
  }

})

// v4 Owner's postcode
router.post('/v4/cdo/create/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "12"){
    res.redirect('/v4/cdo/create/confirm-address')
  } else {
    res.redirect('/v4/cdo/create/select-address')
  }

})

// v4 Microchip number
router.post('/v4/cdo/create/microchip-question', function (req, res) {
  var microchipNumber = req.session.data['microchipNumber']
  if (microchipNumber == "123456789012345"){
    res.redirect('/v4/cdo/create/duplicate-dog')
  } else {
    res.redirect('/v4/cdo/create/dog-details')
  }

})

// v5 Select owner
router.post('/v5/cdo/create/create-record-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "Smith"){
    res.redirect('/v5/cdo/create/select-owner')
  } else {
    res.redirect('/v5/cdo/create/postcode')
  }

})

// v5 Select existing owner address
router.post('/v5/cdo/create/select-owner-question', function (req, res) {
  var existingOwner = req.session.data['existingOwner']
  if (existingOwner == "address1"){
    res.redirect('/v5/cdo/create/microchip-number')
  } else {
    res.redirect('/v5/cdo/create/postcode')
  }

})

// v5 Owner's postcode
router.post('/v5/cdo/create/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "12"){
    res.redirect('/v5/cdo/create/confirm-address')
  } else {
    res.redirect('/v5/cdo/create/select-address')
  }

})

// v5 Microchip number
router.post('/v5/cdo/create/microchip-question', function (req, res) {
  var microchipNumber = req.session.data['microchipNumber']
  if (microchipNumber == "123456789012345"){
    res.redirect('/v5/cdo/create/duplicate-dog')
  } else {
    res.redirect('/v5/cdo/create/dog-details')
  }

})


// v6 Select owner
router.post('/v6/cdo/create/create-record-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "Smith"){
    res.redirect('/v6/cdo/create/select-owner')
  } else {
    res.redirect('/v6/cdo/create/postcode')
  }

})

// v6 Select existing owner address
router.post('/v6/cdo/create/select-owner-question', function (req, res) {
  var existingOwner = req.session.data['existingOwner']
  if (existingOwner == "address1"){
    res.redirect('/v6/cdo/create/microchip-number')
  } else {
    res.redirect('/v6/cdo/create/postcode')
  }

})

// v6 Owner's postcode
router.post('/v6/cdo/create/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "12"){
    res.redirect('/v6/cdo/create/confirm-address')
  } else {
    res.redirect('/v6/cdo/create/select-address')
  }

})

// v6 Microchip number
router.post('/v6/cdo/create/microchip-question', function (req, res) {
  var microchipNumber = req.session.data['microchipNumber']
  if (microchipNumber == "123456789012345"){
    res.redirect('/v6/cdo/create/duplicate-dog')
  } else {
    res.redirect('/v6/cdo/create/dog-details')
  }

})

// v6 Search
router.post('/v6/search/search-results', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Dog record"){
    res.redirect('/v6/search/dog-results')
  } else {
    res.redirect('/v6/search/owner-results')
  }

})

// v7 Add or check dog record activity
router.post('/v7/dog-records/activity/activity-type', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "add-activity"){
    res.redirect('/v7/dog-records/activity/add-activity')
  } else {
    res.redirect('/v7/dog-records/activity/activity-all')
  }

})

// v7 Add an activity
router.post('/v7/dog-records/activity/add-activity-question', function (req, res) {
  var addActivity = req.session.data['addActivity']
  if (addActivity == "sent"){
    res.redirect('/v7/dog-records/activity/send-activity')
  } else {
    res.redirect('/v7/dog-records/activity/receive-activity')
  }

})
