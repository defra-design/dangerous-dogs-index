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


// v7 Owner's postcode
router.post('/v7/cdo/create/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "12"){
    res.redirect('/v7/cdo/create/confirm-address')
  } else {
    res.redirect('/v7/cdo/create/select-address')
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

// v7 Add or check owner record activity
router.post('/v7/owner-records/activity/activity-type', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "add-activity"){
    res.redirect('/v7/owner-records/activity/send-activity')
  } else {
    res.redirect('/v7/owner-records/activity/activity')
  }

})


// v7 Owner's postcode
router.post('/v7/owner-records/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "66"){
    res.redirect('/v7/owner-records/confirm-address')
  } else {
    res.redirect('/v7/owner-records/select-address')
  }

})

// v8 Owner's question
router.post('/v8/cdo/create/owner-surname-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "Noakes"){
  res.redirect('/v8/cdo/create/postcode')
  } if (lastName == "de Vil"){
    res.redirect('/v8/cdo/create/single/confirm-address')
  } else {
    res.redirect('/v8/cdo/create/multiple/select-owner')
  }

})

// v8 Microchip number
router.post('/v8/cdo/create/microchip-question', function (req, res) {
  var microchipNumber = req.session.data['microchipNumber']
  if (microchipNumber == "123456789012345"){
    res.redirect('/v8/cdo/create/duplicate-dog')
  } else {
    res.redirect('/v8/cdo/create/dog-details')
  }

})

// v8 Owner's postcode
router.post('/v8/cdo/create/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "126"){
    res.redirect('/v8/cdo/create/confirm-address')
  } else {
    res.redirect('/v8/cdo/create/select-address')
  }

})

// v8 Add or check owner record activity
router.post('/v8/owner-records/activity/activity-type', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "add-activity"){
    res.redirect('/v8/owner-records/activity/send-activity')
  } else {
    res.redirect('/v8/owner-records/activity/activity')
  }

})

// v9 Search - Microchip number
router.post('/v9/microchip-search-results', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Owner record"){
    res.redirect('/v9/microchip-number/search/owner-results')
  } else {
    res.redirect('/v9/microchip-number/search/dog-results')
  }

})

// v9 Search - Owner name
router.post('/v9/owner-search-results', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Owner record"){
    res.redirect('/v9/owner-name/search/owner-results')
  } else {
    res.redirect('/v9/owner-name/search/dog-results')
  }

})

// v9 Search - Address
router.post('/v9/address-search-results', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Owner record"){
    res.redirect('/v9/address/search/owner-results')
  } else {
    res.redirect('/v9/address/search/dog-results')
  }

})

// v9 Sign in
router.post('/v9/sign-in-field', function (req, res) {
  var signIn = req.session.data['signIn']
  if (signIn.includes('@')) {
    res.redirect('/v9/password')
  } else {
    res.redirect('/v9/sign-in-error')
  }

})

// v9 Password
router.post('/v9/password-field', function (req, res) {
  var password = req.session.data['password']
  if (password === "password"){
    res.redirect('/v9/microchip-number/index')
  } else {
    res.redirect('/v9/password-error')
  }

})

// v9 Comment type
router.post('/v9/microchip-number/dog-records/comment/comment-type-question', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v9/microchip-number/dog-records/comment/report-details')
  } if (comment == "address"){
    res.redirect('/v9/microchip-number/dog-records/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v9/microchip-number/dog-records/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v9/microchip-number/dog-records/comment/report-details')
  }

})

// v8 Owner's question
router.post('/v8/cdo/create/owner-surname-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "Noakes"){
  res.redirect('/v8/cdo/create/postcode')
  } if (lastName == "de Vil"){
    res.redirect('/v8/cdo/create/single/confirm-address')
  } else {
    res.redirect('/v8/cdo/create/multiple/select-owner')
  }

})

// v9 Delete dog record
router.post('/v9/dog-records/are-you-sure-question', function (req, res) {
  var areYouSure = req.session.data['areYouSure']
  if (areYouSure === "no"){
    res.redirect('/v9/dog-records/dog-record-ED200010')
  } else {
    res.redirect('/v9/dog-records/confirmation-1')
  }

})

// v9 Delete dog record 2
router.post('/v9/dog-records/are-you-sure-question-2', function (req, res) {
  var areYouSure = req.session.data['areYouSure']
  if (areYouSure === "no"){
    res.redirect('/v9/dog-records/dog-record-ED200011')
  } else {
    res.redirect('/v9/dog-records/delete-owner-record')
  }

})

// v9 Delete owner record with dog record
router.post('/v9/dog-records/delete-owner-record-question', function (req, res) {
  var ownerRecordDelete = req.session.data['ownerRecordDelete']
  if (ownerRecordDelete === "no"){
    res.redirect('/v9/dog-records/confirmation-3')
  } else {
    res.redirect('/v9/dog-records/confirmation-2')
  }

})

// v9 Delete owner record
router.post('/v9/owner-records/are-you-sure-question', function (req, res) {
  var areYouSure = req.session.data['areYouSure']
  if (areYouSure === "no"){
    res.redirect('/v9/owner-records/owner-record-mt-3')
  } else {
    res.redirect('/v9/owner-records/confirmation')
  }

})

// v9 Dog results search
router.post('/v9/dog-records/dog-results-record', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType === "Owner record"){
    res.redirect('/v9/dog-records/owner-results')
  } else {
    res.redirect('/v9/dog-records/dog-results-nil')
  }

})

// v9 Admin pseudonym
router.post('/v9/admin/pseudonym-question', function (req, res) {
  var areYouSure = req.session.data['areYouSure']
  if (areYouSure === "no"){
    res.redirect('/v9/admin/pseudonym-added-links')
  } else {
    res.redirect('/v9/admin/pseudonyms-links')
  }

})

// v9 Admin add police
router.post('/v9/admin/add-police-question', function (req, res) {
  var addPolice = req.session.data['addPolice']
  if (addPolice === "no"){
    res.redirect('/v9/admin/police-forces')
  } else {
    res.redirect('/v9/admin/confirmation-added')
  }

})

// v9 Admin remove police
router.post('/v9/admin/remove-police-question', function (req, res) {
  var updatePolice = req.session.data['updatePolice']
  if (updatePolice === "no"){
    res.redirect('/v9/admin/police-forces')
  } else {
    res.redirect('/v9/admin/confirmation-updated')
  }

})

// v10 Add or remove court
router.post('/v10/admin/court-question', function (req, res) {
  var addRemoveCourt = req.session.data['addRemoveCourt']
  if (addRemoveCourt === "remove"){
    res.redirect('/v10/admin/remove-court')
  } else {
    res.redirect('/v10/admin/add-court')
  }

})

// v10 Add or remove court
router.post('/v10/admin/court-added-question', function (req, res) {
  var addCourt = req.session.data['addCourt']
  if (addCourt === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-court-added')
  }

})

// v10 Add or remove court
router.post('/v10/admin/court-removed-question', function (req, res) {
  var removeCourt = req.session.data['removeCourt']
  if (removeCourt === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-court-removed')
  }

})

// v10 Add or remove police
router.post('/v10/admin/police-question', function (req, res) {
  var addRemovePolice = req.session.data['addRemovePolice']
  if (addRemovePolice === "remove"){
    res.redirect('/v10/admin/remove-police')
  } else {
    res.redirect('/v10/admin/add-police')
  }

})


// v10 Add or remove police
router.post('/v10/admin/police-added-question', function (req, res) {
  var addPolice = req.session.data['addPolice']
  if (addPolice === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-police-added')
  }

})

// v10 Add or remove court
router.post('/v10/admin/police-removed-question', function (req, res) {
  var removePolice = req.session.data['removePolice']
  if (removePolice === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-police-removed')
  }

})
