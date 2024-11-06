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

// v10 Confirm police remove
router.post('/v10/admin/police-removed-question', function (req, res) {
  var removePolice = req.session.data['removePolice']
  if (removePolice === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-police-removed')
  }

})

// v10 Add or remove activity
router.post('/v10/admin/activity-question', function (req, res) {
  var addRemoveActivity = req.session.data['addRemoveActivity']
  if (addRemoveActivity === "remove"){
    res.redirect('/v10/admin/what-is-the-activity-remove')
  } else {
    res.redirect('/v10/admin/which-record')
  }

})

// v10 Activity to remove
router.post('/v10/admin/activity-remove-question', function (req, res) {
  var whichActivityRemove = req.session.data['whichActivityRemove']
  if (whichActivityRemove === "receive"){
    res.redirect('/v10/admin/remove-receive-activity')
  } else {
    res.redirect('/v10/admin/remove-send-activity')
  }

})

// v10 Confirm send remove
router.post('/v10/admin/send-removed-question', function (req, res) {
  var removeSendConfirm = req.session.data['removeSendConfirm']
  if (removeSendConfirm === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-send-activity-removed')
  }

})

// v10 Confirm received remove
router.post('/v10/admin/receive-removed-question', function (req, res) {
  var removeReceiveActivity = req.session.data['removeReceiveActivity']
  if (removeReceiveActivity === "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-receive-activity-removed')
  }

})


// v10 Add or check dog record activity
router.post('/v10/dog-records/activity/activity-type', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "add-activity"){
    res.redirect('/v10/dog-records/activity/add-activity')
  } else {
    res.redirect('/v10/dog-records/activity/activity-all')
  }

})

// v10 Add an activity
router.post('/v10/dog-records/activity/add-activity-question', function (req, res) {
  var addActivity = req.session.data['addActivity']
  if (addActivity == "sent"){
    res.redirect('/v10/dog-records/activity/send-activity')
  } else {
    res.redirect('/v10/dog-records/activity/receive-activity')
  }

})

// v10 Add an activity confirm
router.post('/v10/dog-records/activity/add-activity-confirm-question', function (req, res) {
  var addActivityConfirm = req.session.data['addActivityConfirm']
  if (addActivityConfirm == "no"){
    res.redirect('/v10/admin/index')
  } else {
    res.redirect('/v10/admin/confirmation-activity-added')
  }

})

// v11 Owner's question
router.post('/v11/cdo/create/owner-surname-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName == "NoakesNoakes"){
  res.redirect('/v11/cdo/create/postcode')
  } if (lastName == "de Vilde Vil"){
    res.redirect('/v11/cdo/create/single/confirm-address')
  } else {
    res.redirect('/v11/cdo/create/multiple/select-owner')
  }

})

// v11 Add an activity
router.post('/v11/cdo/create/multiple/multi-dog-question', function (req, res) {
  var existingOwner = req.session.data['existingOwner']
  if (existingOwner == "New dog"){
    res.redirect('/v11/cdo/create/multiple/microchip-number')
  } else {
    res.redirect('/v11/cdo/create/multiple/application-type')
  }

})


// v11 Add or remove police
router.post('/v11/admin/police-question', function (req, res) {
  var addRemovePolice = req.session.data['addRemovePolice']
  if (addRemovePolice === "remove"){
    res.redirect('/v11/admin/remove-police')
  } else {
    res.redirect('/v11/admin/add-police')
  }

})

// v11 Add or remove police
router.post('/v11/admin/police-added-question', function (req, res) {
  var addPolice = req.session.data['addPolice']
  if (addPolice === "no"){
    res.redirect('/v11/admin/index')
  } else {
    res.redirect('/v11/admin/confirmation-police-added')
  }

})

// v11 Confirm police remove
router.post('/v11/admin/police-removed-question', function (req, res) {
  var removePolice = req.session.data['removePolice']
  if (removePolice === "no"){
    res.redirect('/v11/admin/index')
  } else {
    res.redirect('/v11/admin/confirmation-police-removed')
  }

})

// v11 Add or remove court
router.post('/v11/admin/court-question', function (req, res) {
  var addRemoveCourt = req.session.data['addRemoveCourt']
  if (addRemoveCourt === "remove"){
    res.redirect('/v11/admin/remove-court')
  } else {
    res.redirect('/v11/admin/add-court')
  }

})

// v11 Add or remove court
router.post('/v11/admin/court-added-question', function (req, res) {
  var addCourt = req.session.data['addCourt']
  if (addCourt === "no"){
    res.redirect('/v11/admin/index')
  } else {
    res.redirect('/v11/admin/confirmation-court-added')
  }

})

// v11 Add or remove court
router.post('/v11/admin/court-removed-question', function (req, res) {
  var removeCourt = req.session.data['removeCourt']
  if (removeCourt === "no"){
    res.redirect('/v11/admin/index')
  } else {
    res.redirect('/v11/admin/confirmation-court-removed')
  }

})


// v11 Add or remove activity
router.post('/v11/admin/activity-added-question', function (req, res) {
  var addActivity = req.session.data['addActivity']
  if (addActivity === "no"){
    res.redirect('/v11/admin/add-activity')
  } else {
    res.redirect('/v11/admin/confirmation-activity-added')
  }

})

// v11 Confirm activity remove
router.post('/v11/admin/activity-removed-question', function (req, res) {
  var removeActivity = req.session.data['removeActivity']
  if (removeActivity === "no"){
    res.redirect('/v11/admin/activities-added')
  } else {
    res.redirect('/v11/admin/confirmation-activity-removed')
  }

})

// v12 Create question
router.post('/v12/cdo/create/create-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName === "Walsh"){
    res.redirect('/v12/cdo/create/multiple/select-owner')
  } else {
    res.redirect('/v12/cdo/create/postcode')
  }

})

// v12 Change dog owner
router.post('/v12/cdo/create/owner-question', function (req, res) {
  var transferOwnership = req.session.data['transferOwnership']
  if (transferOwnership === "no"){
    res.redirect('/v12/cdo/create/next-step')
  } else {
    res.redirect('/v12/cdo/create/application-type')
  }

})

// v12 Create question
router.post('/v12/cdo/create/confirm-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName === "Walsh"){
    res.redirect('/v12/cdo/create/enforcement-details-2')
  } else {
    res.redirect('/v12/cdo/create/enforcement-details')
  }

})

// v12 Confirm activity remove
router.post('/v12/admin/activity-removed-question', function (req, res) {
  var removeActivity = req.session.data['removeActivity']
  if (removeActivity === "no"){
    res.redirect('/v12/admin/activities-added')
  } else {
    res.redirect('/v12/admin/confirmation-activity-removed')
  }

})

// v14 View dog and owner record
router.post('/v14/manage/next-page', function (req, res) {
  var nextPage = req.session.data['nextPage']
  if (nextPage == "owner-record"){
  res.redirect('/v14/owner-records/owner-record-ED30228')
  } if (nextPage == "error"){
    res.redirect('/v14/manage/manage-cdo-error')
  } else {
    res.redirect('/v14/dog-records/dog-record-ED30228-1')
  }

})

// v14 View dog and owner record
router.post('/v14/manage/next-page-2', function (req, res) {
  var nextPage = req.session.data['nextPage']
  if (nextPage == "owner-record"){
  res.redirect('/v14/owner-records/owner-record-ED30228')
  } if (nextPage == "error"){
    res.redirect('/v14/manage/manage-cdo-error-2')
  } else {
    res.redirect('/v14/dog-records/dog-record-ED30228-2')
  }

})

// v14 View dog and owner record
router.post('/v14/manage/next-page-3', function (req, res) {
  var nextPage = req.session.data['nextPage']
  if (nextPage == "owner-record"){
  res.redirect('/v14/owner-records/owner-record-ED30228')
} if (nextPage == "complete"){
    res.redirect('/v14/manage/certificate')
  } else {
    res.redirect('/v14/dog-records/dog-record-ED30228-complete')
  }

})

// v15 Change status
router.post('/v15/dog-records/change-status-question', function (req, res) {
  var dogStatus = req.session.data['dogStatus']
  if (dogStatus === "In breach"){
    res.redirect('/v15/dog-records/breach-reason')
  } else {
    res.redirect('/v15/dog-records/status-changed')
  }

})

// v15 Breach reason
router.post('/v15/dog-records/breach-reason-question', function (req, res) {
  var breachReason = req.session.data['breachReason']
  if (breachReason == null){
  res.redirect('/v15/dog-records/breach-reason-error')
    } else {
      res.redirect('/v15/dog-records/status-changed')
    }

})

// v15 Breach reason error
router.post('/v15/dog-records/breach-reason-error-question', function (req, res) {
  var breachReason = req.session.data['breachReason']
  if (breachReason == null){
  res.redirect('/v15/dog-records/breach-reason-error')
    } else {
      res.redirect('/v15/dog-records/status-changed')
    }

})

// v17 Sign in
router.post('/v17/sign-in-field', function (req, res) {
  var signIn = req.session.data['signIn']
  if (signIn.includes('@')) {
    res.redirect('/v17/password')
  } else {
    res.redirect('/v17/sign-in-error')
  }

})

// v17 Password
router.post('/v17/password-field', function (req, res) {
  var password = req.session.data['password']
  if (password === "password"){
    res.redirect('/v17/index')
  } else {
    res.redirect('/v17/password-error')
  }

})

// v17 Comment type
router.post('/v17/search/search-input', function(request, response) {
  var search = request.session.data['search']
  if (search == "247 Norcroft Road"){
    response.redirect("/v17/search/record-1/results-address")
  } else if (search == "247 Norcroft"){
    response.redirect("/v17/search/record-1/results-address")
  } else if (search == "247 norcroft"){
    response.redirect("/v17/search/record-1/results-address")
  } else if (search == "norcroft"){
    response.redirect("/v17/search/record-1/results-address")
  } else if (search == "5 Station Road"){
    response.redirect("/v17/search/record-2/results-address")
  } else if (search == "station road"){
    response.redirect("/v17/search/record-2/results-address")
  } else if (search == "30 Hounds Gate"){
    response.redirect("/v17/search/record-3/results-address")
  } else if (search == "5 Bullytree Lane"){
    response.redirect("/v17/search/record-4/results-address")
  } else if (search == "bullytree"){
    response.redirect("/v17/search/record-4/results-address")
  } else if (search == "Barking"){
    response.redirect("/v17/search/record-1/results-address")
  } else if (search == "Woofferton"){
    response.redirect("/v17/search/record-2/results-address")
  } else if (search == "Nottingham"){
    response.redirect("/v17/search/record-3/results-address")
  } else if (search == "Leeds"){
    response.redirect("/v17/search/record-4/results-address")
  } else if (search == "IG11 7JF"){
    response.redirect("/v17/search/record-1/results-address")
  } else if (search == "SY8 4NL"){
    response.redirect("/v17/search/record-2/results-address")
  } else if (search == "NG1 7BA"){
    response.redirect("/v17/search/record-3/results-address")
  } else if (search == "LS25 5AQ"){
    response.redirect("/v17/search/record-4/results-address")
  } else if (search == "mutley"){
    response.redirect("/v17/search/record-1/results-dog-name")
  } else if (search == "bouncer"){
    response.redirect("/v17/search/record-2/results-dog-name")
  } else if (search == "bronson"){
    response.redirect("/v17/search/record-3/results-dog-name")
  } else if (search == "Mutley"){
    response.redirect("/v17/search/record-1/results-dog-name")
  } else if (search == "Bouncer"){
    response.redirect("/v17/search/record-2/results-dog-name")
  } else if (search == "Bronson"){
    response.redirect("/v17/search/record-3/results-dog-name")
  } else if (search == "208510"){
    response.redirect("/v17/search/record-1/results-index-number")
  } else if (search == "418696"){
    response.redirect("/v17/search/record-2/results-index-number")
  } else if (search == "ED208510"){
    response.redirect("/v17/search/record-1/results-index-number")
  } else if (search == "ED418696"){
    response.redirect("/v17/search/record-2/results-index-number")
  } else if (search == "338596"){
    response.redirect("/v17/search/record-3/results-index-number")
  } else if (search == "ED338596"){
    response.redirect("/v17/search/record-3/results-index-number")
  } else if (search == "198587"){
    response.redirect("/v17/search/record-4/results-index-number")
  } else if (search == "ED198587"){
    response.redirect("/v17/search/record-4/results-index-number")
  } else if (search == "123456789012345"){
    response.redirect("/v17/search/record-1/results-microchip")
  } else if (search == "112233445566778"){
    response.redirect("/v17/search/record-2/results-microchip")
  } else if (search == "098765432123456"){
    response.redirect("/v17/search/record-3/results-microchip")
  } else if (search == "123451234512345"){
    response.redirect("/v17/search/record-4/results-microchip")
  } else if (search == "Michael Denton"){
    response.redirect("/v17/search/record-1/results-owner-name")
  } else if (search == "michael denton"){
    response.redirect("/v17/search/record-1/results-owner-name")
  } else if (search == "Vicki Sugden"){
    response.redirect("/v17/search/record-2/results-owner-name")
  } else if (search == "vicki sugden"){
    response.redirect("/v17/search/record-2/results-owner-name")
  } else if (search == "Nathan Stockton"){
    response.redirect("/v17/search/record-3/results-owner-name")
  } else if (search == "nathan stockton"){
    response.redirect("/v17/search/record-3/results-owner-name")
  } else if (search == "Heidi Sturgeon"){
    response.redirect("/v17/search/record-4/results-owner-name")
  } else if (search == "heidi sturgeon"){
    response.redirect("/v17/search/record-4/results-owner-name")
  } else if (search == "Denton"){
    response.redirect("/v17/search/record-1/results-owner-name")
  } else if (search == "Sugden"){
    response.redirect("/v17/search/record-2/results-owner-name")
  } else if (search == "Stockton"){
    response.redirect("/v17/search/record-3/results-owner-name")
  } else if (search == "Sturgeon"){
    response.redirect("/v17/search/record-4/results-owner-name")
  } else if (search == "denton"){
    response.redirect("/v17/search/record-1/results-owner-name")
  } else if (search == "sugden"){
    response.redirect("/v17/search/record-2/results-owner-name")
  } else if (search == "stockton"){
    response.redirect("/v17/search/record-3/results-owner-name")
  } else if (search == "sturgeon"){
    response.redirect("/v17/search/record-4/results-owner-name")
  } else if (search == "In breach"){
    response.redirect("/v17/search/record-1/results-status")
  } else {
    response.redirect('/v17/search/results-none')
  }
})

// v17 Report something or check dog record activity
router.post('/v17/dog-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/dog-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v17/dog-records/record-1/activity/activity-all')
  }

})

router.post('/v17/owner-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/owner-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v17/owner-records/record-1/activity/activity-all')
  }

})

router.post('/v17/dog-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/dog-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v17/dog-records/record-2/activity/activity-all')
  }

})

router.post('/v17/owner-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/owner-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v17/owner-records/record-2/activity/activity-all')
  }

})

router.post('/v17/dog-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/dog-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v17/dog-records/record-3/activity/activity-all')
  }

})

router.post('/v17/owner-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/owner-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v17/owner-records/record-3/activity/activity-all')
  }

})

router.post('/v17/dog-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/dog-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v17/dog-records/record-4/activity/activity-all')
  }

})

router.post('/v17/owner-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v17/owner-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v17/owner-records/record-4/activity/activity-all')
  }

})

// v17 Comment type
router.post('/v17/dog-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/dog-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/dog-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/dog-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/dog-records/record-1/comment/report-details')
  }

})

router.post('/v17/owner-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/owner-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/owner-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/owner-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/owner-records/record-1/comment/report-details')
  }

})

router.post('/v17/dog-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/dog-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/dog-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/dog-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/dog-records/record-2/comment/report-details')
  }

})

router.post('/v17/owner-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/owner-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/owner-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/owner-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/owner-records/record-2/comment/report-details')
  }

})

router.post('/v17/dog-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/dog-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/dog-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/dog-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/dog-records/record-3/comment/report-details')
  }

})

router.post('/v17/owner-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/owner-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/owner-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/owner-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/owner-records/record-3/comment/report-details')
  }

})

router.post('/v17/dog-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/dog-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/dog-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/dog-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/dog-records/record-4/comment/report-details')
  }

})

router.post('/v17/owner-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v17/owner-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v17/owner-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v17/owner-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v17/owner-records/record-4/comment/report-details')
  }

})

// v17 Verify
router.post('/v17/verify-question', function (req, res) {
  var verify = req.session.data['verify']
  if (verify == "email"){
    res.redirect('/v17/security-word')
  } else {
    res.redirect('/v17/send-text')
  }

})

// v18 No court for interim exempt
router.post('/v18/cdo/create/application-type', function (req, res) {
  var recordType = req.session.data['recordType']
  if (recordType == "Interim exemption scheme"){
    res.redirect('/v18/cdo/create/interim-exempt/confirm-dog-details')
  } else {
    res.redirect('/v18/cdo/create/cdo/confirm-dog-details')
  }

})

// v19 Comment type
router.post('/v19/search/search-input', function(request, response) {
  var search = request.session.data['search']
  if (search == "247 Norcroft Road"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "247 Norcroft"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "247 norcroft"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "norcroft"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "Norcroft"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "5 Station Road"){
    response.redirect("/v19/search/record-2/results-address")
  } else if (search == "station road"){
    response.redirect("/v19/search/record-2/results-address")
  } else if (search == "30 Hounds Gate"){
    response.redirect("/v19/search/record-3/results-address")
  } else if (search == "5 Bullytree Lane"){
    response.redirect("/v19/search/record-4/results-address")
  } else if (search == "bullytree"){
    response.redirect("/v19/search/record-4/results-address")
  } else if (search == "Barking"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "Woofferton"){
    response.redirect("/v19/search/record-2/results-address")
  } else if (search == "Nottingham"){
    response.redirect("/v19/search/record-3/results-address")
  } else if (search == "Leeds"){
    response.redirect("/v19/search/record-4/results-address")
  } else if (search == "IG11 7JF"){
    response.redirect("/v19/search/record-1/results-address")
  } else if (search == "SY8 4NL"){
    response.redirect("/v19/search/record-2/results-address")
  } else if (search == "NG1 7BA"){
    response.redirect("/v19/search/record-3/results-address")
  } else if (search == "LS25 5AQ"){
    response.redirect("/v19/search/record-4/results-address")
  } else if (search == "mutley"){
    response.redirect("/v19/search/record-1/results-dog-name")
  } else if (search == "bouncer"){
    response.redirect("/v19/search/record-2/results-dog-name")
  } else if (search == "bronson"){
    response.redirect("/v19/search/record-3/results-dog-name")
  } else if (search == "Mutley"){
    response.redirect("/v19/search/record-1/results-dog-name")
  } else if (search == "Bouncer"){
    response.redirect("/v19/search/record-2/results-dog-name")
  } else if (search == "Bronson"){
    response.redirect("/v19/search/record-3/results-dog-name")
  } else if (search == "208510"){
    response.redirect("/v19/search/record-1/results-index-number")
  } else if (search == "418696"){
    response.redirect("/v19/search/record-2/results-index-number")
  } else if (search == "ED208510"){
    response.redirect("/v19/search/record-1/results-index-number")
  } else if (search == "ED418696"){
    response.redirect("/v19/search/record-2/results-index-number")
  } else if (search == "338596"){
    response.redirect("/v19/search/record-3/results-index-number")
  } else if (search == "ED338596"){
    response.redirect("/v19/search/record-3/results-index-number")
  } else if (search == "198587"){
    response.redirect("/v19/search/record-4/results-index-number")
  } else if (search == "ED198587"){
    response.redirect("/v19/search/record-4/results-index-number")
  } else if (search == "123456789012345"){
    response.redirect("/v19/search/record-1/results-microchip")
  } else if (search == "112233445566778"){
    response.redirect("/v19/search/record-2/results-microchip")
  } else if (search == "098765432123456"){
    response.redirect("/v19/search/record-3/results-microchip")
  } else if (search == "123451234512345"){
    response.redirect("/v19/search/record-4/results-microchip")
  } else if (search == "Michael Denton"){
    response.redirect("/v19/search/record-1/results-owner-name")
  } else if (search == "michael denton"){
    response.redirect("/v19/search/record-1/results-owner-name")
  } else if (search == "Vicki Sugden"){
    response.redirect("/v19/search/record-2/results-owner-name")
  } else if (search == "vicki sugden"){
    response.redirect("/v19/search/record-2/results-owner-name")
  } else if (search == "Nathan Stockton"){
    response.redirect("/v19/search/record-3/results-owner-name")
  } else if (search == "nathan stockton"){
    response.redirect("/v19/search/record-3/results-owner-name")
  } else if (search == "Heidi Sturgeon"){
    response.redirect("/v19/search/record-4/results-owner-name")
  } else if (search == "heidi sturgeon"){
    response.redirect("/v19/search/record-4/results-owner-name")
  } else if (search == "Denton"){
    response.redirect("/v19/search/record-1/results-owner-name")
  } else if (search == "Sugden"){
    response.redirect("/v19/search/record-2/results-owner-name")
  } else if (search == "Stockton"){
    response.redirect("/v19/search/record-3/results-owner-name")
  } else if (search == "Sturgeon"){
    response.redirect("/v19/search/record-4/results-owner-name")
  } else if (search == "denton"){
    response.redirect("/v19/search/record-1/results-owner-name")
  } else if (search == "sugden"){
    response.redirect("/v19/search/record-2/results-owner-name")
  } else if (search == "stockton"){
    response.redirect("/v19/search/record-3/results-owner-name")
  } else if (search == "sturgeon"){
    response.redirect("/v19/search/record-4/results-owner-name")
  } else if (search == "In breach"){
    response.redirect("/v19/search/record-1/results-status")
  } else {
    response.redirect('/v19/search/results-none')
  }
})

// v19 Report something or check dog record activity
router.post('/v19/dog-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/dog-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v19/dog-records/record-1/activity/activity-all')
  }

})

router.post('/v19/owner-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/owner-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v19/owner-records/record-1/activity/activity-all')
  }

})

router.post('/v19/dog-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/dog-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v19/dog-records/record-2/activity/activity-all')
  }

})

router.post('/v19/owner-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/owner-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v19/owner-records/record-2/activity/activity-all')
  }

})

router.post('/v19/dog-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/dog-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v19/dog-records/record-3/activity/activity-all')
  }

})

router.post('/v19/owner-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/owner-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v19/owner-records/record-3/activity/activity-all')
  }

})

router.post('/v19/dog-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/dog-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v19/dog-records/record-4/activity/activity-all')
  }

})

router.post('/v19/owner-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v19/owner-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v19/owner-records/record-4/activity/activity-all')
  }

})

// v19 Comment type
router.post('/v19/dog-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/dog-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/dog-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/dog-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/dog-records/record-1/comment/report-details')
  }

})

router.post('/v19/owner-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/owner-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/owner-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/owner-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/owner-records/record-1/comment/report-details')
  }

})

router.post('/v19/dog-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/dog-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/dog-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/dog-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/dog-records/record-2/comment/report-details')
  }

})

router.post('/v19/owner-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/owner-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/owner-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/owner-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/owner-records/record-2/comment/report-details')
  }

})

router.post('/v19/dog-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/dog-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/dog-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/dog-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/dog-records/record-3/comment/report-details')
  }

})

router.post('/v19/owner-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/owner-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/owner-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/owner-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/owner-records/record-3/comment/report-details')
  }

})

router.post('/v19/dog-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/dog-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/dog-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/dog-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/dog-records/record-4/comment/report-details')
  }

})

router.post('/v19/owner-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v19/owner-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v19/owner-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v19/owner-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v19/owner-records/record-4/comment/report-details')
  }

})

// v19 Verify
router.post('/v19/verify-question', function (req, res) {
  var verify = req.session.data['verify']
  if (verify == "email"){
    res.redirect('/v19/security-word')
  } else {
    res.redirect('/v19/send-text')
  }

})

// v21 Comment type
router.post('/v21/search/search-input', function(request, response) {
  var search = request.session.data['search']
  if (search == "247 Norcroft Road"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "247 Norcroft"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "247 norcroft"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "norcroft"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "Norcroft"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "5 Station Road"){
    response.redirect("/v21/search/record-2/results-address")
  } else if (search == "station road"){
    response.redirect("/v21/search/record-2/results-address")
  } else if (search == "30 Hounds Gate"){
    response.redirect("/v21/search/record-3/results-address")
  } else if (search == "5 Bullytree Lane"){
    response.redirect("/v21/search/record-4/results-address")
  } else if (search == "bullytree"){
    response.redirect("/v21/search/record-4/results-address")
  } else if (search == "Barking"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "Woofferton"){
    response.redirect("/v21/search/record-2/results-address")
  } else if (search == "Nottingham"){
    response.redirect("/v21/search/record-3/results-address")
  } else if (search == "Leeds"){
    response.redirect("/v21/search/record-4/results-address")
  } else if (search == "IG11 7JF"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "ig117jf"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "ig11 7jf"){
    response.redirect("/v21/search/record-1/results-address")
  } else if (search == "SY8 4NL"){
    response.redirect("/v21/search/record-2/results-address")
  } else if (search == "sy8 4nl"){
    response.redirect("/v21/search/record-2/results-address")
  } else if (search == "sy84nl"){
    response.redirect("/v21/search/record-2/results-address")
  } else if (search == "NG1 7BA"){
    response.redirect("/v21/search/record-3/results-address")
  } else if (search == "ng1 7ba"){
    response.redirect("/v21/search/record-3/results-address")
  } else if (search == "ng17ba"){
    response.redirect("/v21/search/record-3/results-address")
  } else if (search == "LS25 5AQ"){
    response.redirect("/v21/search/record-4/results-address")
  } else if (search == "ls255aq"){
    response.redirect("/v21/search/record-4/results-address")
  } else if (search == "ls25 5aq"){
    response.redirect("/v21/search/record-4/results-address")
  } else if (search == "mutley"){
    response.redirect("/v21/search/record-1/results-dog-name")
  } else if (search == "bouncer"){
    response.redirect("/v21/search/record-2/results-dog-name")
  } else if (search == "bronson"){
    response.redirect("/v21/search/record-3/results-dog-name")
  } else if (search == "Mutley"){
    response.redirect("/v21/search/record-1/results-dog-name")
  } else if (search == "Bouncer"){
    response.redirect("/v21/search/record-2/results-dog-name")
  } else if (search == "Bronson"){
    response.redirect("/v21/search/record-3/results-dog-name")
  } else if (search == "208510"){
    response.redirect("/v21/search/record-1/results-index-number")
  } else if (search == "418696"){
    response.redirect("/v21/search/record-2/results-index-number")
  } else if (search == "ED208510"){
    response.redirect("/v21/search/record-1/results-index-number")
  } else if (search == "ED418696"){
    response.redirect("/v21/search/record-2/results-index-number")
  } else if (search == "338596"){
    response.redirect("/v21/search/record-3/results-index-number")
  } else if (search == "ED338596"){
    response.redirect("/v21/search/record-3/results-index-number")
  } else if (search == "198587"){
    response.redirect("/v21/search/record-4/results-index-number")
  } else if (search == "ED198587"){
    response.redirect("/v21/search/record-4/results-index-number")
  } else if (search == "123456789012345"){
    response.redirect("/v21/search/record-1/results-microchip")
  } else if (search == "112233445566778"){
    response.redirect("/v21/search/record-2/results-microchip")
  } else if (search == "098765432123456"){
    response.redirect("/v21/search/record-3/results-microchip")
  } else if (search == "123451234512345"){
    response.redirect("/v21/search/record-4/results-microchip")
  } else if (search == "Michael Denton"){
    response.redirect("/v21/search/record-1/results-owner-name")
  } else if (search == "michael denton"){
    response.redirect("/v21/search/record-1/results-owner-name")
  } else if (search == "Vicki Sugden"){
    response.redirect("/v21/search/record-2/results-owner-name")
  } else if (search == "vicki sugden"){
    response.redirect("/v21/search/record-2/results-owner-name")
  } else if (search == "exempt"){
    response.redirect("/v21/search/record-2/results-status")
  } else if (search == "Nathan Stockton"){
    response.redirect("/v21/search/record-3/results-owner-name")
  } else if (search == "nathan stockton"){
    response.redirect("/v21/search/record-3/results-owner-name")
  } else if (search == "Heidi Sturgeon"){
    response.redirect("/v21/search/record-4/results-owner-name")
  } else if (search == "heidi sturgeon"){
    response.redirect("/v21/search/record-4/results-owner-name")
  } else if (search == "Denton"){
    response.redirect("/v21/search/record-1/results-owner-name")
  } else if (search == "Sugden"){
    response.redirect("/v21/search/record-2/results-owner-name")
  } else if (search == "Stockton"){
    response.redirect("/v21/search/record-3/results-owner-name")
  } else if (search == "pre-exempt"){
    response.redirect("/v21/search/record-3/results-status")
  } else if (search == "Sturgeon"){
    response.redirect("/v21/search/record-4/results-owner-name")
  } else if (search == "denton"){
    response.redirect("/v21/search/record-1/results-owner-name")
  } else if (search == "sugden"){
    response.redirect("/v21/search/record-2/results-owner-name")
  } else if (search == "stockton"){
    response.redirect("/v21/search/record-3/results-owner-name")
  } else if (search == "sturgeon"){
    response.redirect("/v21/search/record-4/results-owner-name")
  } else if (search == "failed"){
    response.redirect("/v21/search/record-4/results-status")
  } else if (search == "in breach"){
    response.redirect("/v21/search/record-1/results-status")
  } else {
    response.redirect('/v21/search/results-none')
  }
})

// v21 Report something or check dog record activity
router.post('/v21/dog-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/dog-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v21/dog-records/record-1/activity/activity-all')
  }

})

router.post('/v21/owner-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/owner-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v21/owner-records/record-1/activity/activity-all')
  }

})

router.post('/v21/dog-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/dog-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v21/dog-records/record-2/activity/activity-all')
  }

})

router.post('/v21/owner-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/owner-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v21/owner-records/record-2/activity/activity-all')
  }

})

router.post('/v21/dog-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/dog-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v21/dog-records/record-3/activity/activity-all')
  }

})

router.post('/v21/owner-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/owner-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v21/owner-records/record-3/activity/activity-all')
  }

})

router.post('/v21/dog-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/dog-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v21/dog-records/record-4/activity/activity-all')
  }

})

router.post('/v21/owner-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v21/owner-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v21/owner-records/record-4/activity/activity-all')
  }

})

// v21 Comment type
router.post('/v21/dog-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/dog-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/dog-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/dog-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/dog-records/record-1/comment/report-details')
  }

})

router.post('/v21/owner-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/owner-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/owner-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/owner-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/owner-records/record-1/comment/report-details')
  }

})

router.post('/v21/dog-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/dog-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/dog-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/dog-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/dog-records/record-2/comment/report-details')
  }

})

router.post('/v21/owner-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/owner-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/owner-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/owner-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/owner-records/record-2/comment/report-details')
  }

})

router.post('/v21/dog-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/dog-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/dog-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/dog-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/dog-records/record-3/comment/report-details')
  }

})

router.post('/v21/owner-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/owner-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/owner-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/owner-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/owner-records/record-3/comment/report-details')
  }

})

router.post('/v21/dog-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/dog-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/dog-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/dog-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/dog-records/record-4/comment/report-details')
  }

})

router.post('/v21/owner-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v21/owner-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v21/owner-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v21/owner-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v21/owner-records/record-4/comment/report-details')
  }

})

// v21 Verify
router.post('/v21/verify-question', function (req, res) {
  var verify = req.session.data['verify']
  if (verify == "email"){
    res.redirect('/v21/security-word')
  } else {
    res.redirect('/v21/send-text')
  }

})

// Demo Comment type
router.post('/demo/search/search-input', function(request, response) {
  var search = request.session.data['search']
  if (search == "247 Norcroft Road"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "247 Norcroft"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "247 norcroft"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "norcroft"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "Norcroft"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "5 Station Road"){
    response.redirect("/demo/search/record-2/results-address")
  } else if (search == "station road"){
    response.redirect("/demo/search/record-2/results-address")
  } else if (search == "30 Hounds Gate"){
    response.redirect("/demo/search/record-3/results-address")
  } else if (search == "5 Bullytree Lane"){
    response.redirect("/demo/search/record-4/results-address")
  } else if (search == "bullytree"){
    response.redirect("/demo/search/record-4/results-address")
  } else if (search == "Barking"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "Woofferton"){
    response.redirect("/demo/search/record-2/results-address")
  } else if (search == "Nottingham"){
    response.redirect("/demo/search/record-3/results-address")
  } else if (search == "Leeds"){
    response.redirect("/demo/search/record-4/results-address")
  } else if (search == "IG11 7JF"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "ig117jf"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "ig11 7jf"){
    response.redirect("/demo/search/record-1/results-address")
  } else if (search == "SY8 4NL"){
    response.redirect("/demo/search/record-2/results-address")
  } else if (search == "sy8 4nl"){
    response.redirect("/demo/search/record-2/results-address")
  } else if (search == "sy84nl"){
    response.redirect("/demo/search/record-2/results-address")
  } else if (search == "NG1 7BA"){
    response.redirect("/demo/search/record-3/results-address")
  } else if (search == "ng1 7ba"){
    response.redirect("/demo/search/record-3/results-address")
  } else if (search == "ng17ba"){
    response.redirect("/demo/search/record-3/results-address")
  } else if (search == "LS25 5AQ"){
    response.redirect("/demo/search/record-4/results-address")
  } else if (search == "ls255aq"){
    response.redirect("/demo/search/record-4/results-address")
  } else if (search == "ls25 5aq"){
    response.redirect("/demo/search/record-4/results-address")
  } else if (search == "mutley"){
    response.redirect("/demo/search/record-1/results-dog-name")
  } else if (search == "bouncer"){
    response.redirect("/demo/search/record-2/results-dog-name")
  } else if (search == "bronson"){
    response.redirect("/demo/search/record-3/results-dog-name")
  } else if (search == "Mutley"){
    response.redirect("/demo/search/record-1/results-dog-name")
  } else if (search == "Bouncer"){
    response.redirect("/demo/search/record-2/results-dog-name")
  } else if (search == "Bronson"){
    response.redirect("/demo/search/record-3/results-dog-name")
  } else if (search == "208510"){
    response.redirect("/demo/search/record-1/results-index-number")
  } else if (search == "418696"){
    response.redirect("/demo/search/record-2/results-index-number")
  } else if (search == "ED208510"){
    response.redirect("/demo/search/record-1/results-index-number")
  } else if (search == "ED418696"){
    response.redirect("/demo/search/record-2/results-index-number")
  } else if (search == "338596"){
    response.redirect("/demo/search/record-3/results-index-number")
  } else if (search == "ED338596"){
    response.redirect("/demo/search/record-3/results-index-number")
  } else if (search == "198587"){
    response.redirect("/demo/search/record-4/results-index-number")
  } else if (search == "ED198587"){
    response.redirect("/demo/search/record-4/results-index-number")
  } else if (search == "123456789012345"){
    response.redirect("/demo/search/record-1/results-microchip")
  } else if (search == "112233445566778"){
    response.redirect("/demo/search/record-2/results-microchip")
  } else if (search == "098765432123456"){
    response.redirect("/demo/search/record-3/results-microchip")
  } else if (search == "123451234512345"){
    response.redirect("/demo/search/record-4/results-microchip")
  } else if (search == "Michael Denton"){
    response.redirect("/demo/search/record-1/results-owner-name")
  } else if (search == "michael denton"){
    response.redirect("/demo/search/record-1/results-owner-name")
  } else if (search == "Vicki Sugden"){
    response.redirect("/demo/search/record-2/results-owner-name")
  } else if (search == "vicki sugden"){
    response.redirect("/demo/search/record-2/results-owner-name")
  } else if (search == "exempt"){
    response.redirect("/demo/search/record-2/results-status")
  } else if (search == "Nathan Stockton"){
    response.redirect("/demo/search/record-3/results-owner-name")
  } else if (search == "nathan stockton"){
    response.redirect("/demo/search/record-3/results-owner-name")
  } else if (search == "Heidi Sturgeon"){
    response.redirect("/demo/search/record-4/results-owner-name")
  } else if (search == "heidi sturgeon"){
    response.redirect("/demo/search/record-4/results-owner-name")
  } else if (search == "Denton"){
    response.redirect("/demo/search/record-1/results-owner-name")
  } else if (search == "Sugden"){
    response.redirect("/demo/search/record-2/results-owner-name")
  } else if (search == "Stockton"){
    response.redirect("/demo/search/record-3/results-owner-name")
  } else if (search == "pre-exempt"){
    response.redirect("/demo/search/record-3/results-status")
  } else if (search == "Sturgeon"){
    response.redirect("/demo/search/record-4/results-owner-name")
  } else if (search == "denton"){
    response.redirect("/demo/search/record-1/results-owner-name")
  } else if (search == "sugden"){
    response.redirect("/demo/search/record-2/results-owner-name")
  } else if (search == "stockton"){
    response.redirect("/demo/search/record-3/results-owner-name")
  } else if (search == "sturgeon"){
    response.redirect("/demo/search/record-4/results-owner-name")
  } else if (search == "failed"){
    response.redirect("/demo/search/record-4/results-status")
  } else if (search == "in breach"){
    response.redirect("/demo/search/record-1/results-status")
  } else {
    response.redirect('/demo/search/results-none')
  }
})

// demo Report something or check dog record activity
router.post('/demo/dog-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/dog-records/record-1/comment/comment-type')
  } else {
    res.redirect('/demo/dog-records/record-1/activity/activity-all')
  }

})

router.post('/demo/owner-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/owner-records/record-1/comment/comment-type')
  } else {
    res.redirect('/demo/owner-records/record-1/activity/activity-all')
  }

})

router.post('/demo/dog-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/dog-records/record-2/comment/comment-type')
  } else {
    res.redirect('/demo/dog-records/record-2/activity/activity-all')
  }

})

router.post('/demo/owner-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/owner-records/record-2/comment/comment-type')
  } else {
    res.redirect('/demo/owner-records/record-2/activity/activity-all')
  }

})

router.post('/demo/dog-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/dog-records/record-3/comment/comment-type')
  } else {
    res.redirect('/demo/dog-records/record-3/activity/activity-all')
  }

})

router.post('/demo/owner-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/owner-records/record-3/comment/comment-type')
  } else {
    res.redirect('/demo/owner-records/record-3/activity/activity-all')
  }

})

router.post('/demo/dog-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/dog-records/record-4/comment/comment-type')
  } else {
    res.redirect('/demo/dog-records/record-4/activity/activity-all')
  }

})

router.post('/demo/owner-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/demo/owner-records/record-4/comment/comment-type')
  } else {
    res.redirect('/demo/owner-records/record-4/activity/activity-all')
  }

})

// demo Comment type
router.post('/demo/dog-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/dog-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/dog-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/dog-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/dog-records/record-1/comment/report-details')
  }

})

router.post('/demo/owner-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/owner-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/owner-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/owner-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/owner-records/record-1/comment/report-details')
  }

})

router.post('/demo/dog-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/dog-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/dog-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/dog-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/dog-records/record-2/comment/report-details')
  }

})

router.post('/demo/owner-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/owner-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/owner-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/owner-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/owner-records/record-2/comment/report-details')
  }

})

router.post('/demo/dog-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/dog-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/dog-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/dog-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/dog-records/record-3/comment/report-details')
  }

})

router.post('/demo/owner-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/owner-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/owner-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/owner-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/owner-records/record-3/comment/report-details')
  }

})

router.post('/demo/dog-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/dog-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/dog-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/dog-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/dog-records/record-4/comment/report-details')
  }

})

router.post('/demo/owner-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/demo/owner-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/demo/owner-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/demo/owner-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/demo/owner-records/record-4/comment/report-details')
  }

})

// v22 Comment type
router.post('/v22/search/search-input', function(request, response) {
  var search = request.session.data['search']
  if (search == "247 Norcroft Road"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "247 Norcroft"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "247 norcroft"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "norcroft"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "Norcroft"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "5 Station Road"){
    response.redirect("/v22/search/record-2/results-address")
  } else if (search == "station road"){
    response.redirect("/v22/search/record-2/results-address")
  } else if (search == "30 Hounds Gate"){
    response.redirect("/v22/search/record-3/results-address")
  } else if (search == "5 Bullytree Lane"){
    response.redirect("/v22/search/record-4/results-address")
  } else if (search == "bullytree"){
    response.redirect("/v22/search/record-4/results-address")
  } else if (search == "Barking"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "Woofferton"){
    response.redirect("/v22/search/record-2/results-address")
  } else if (search == "Nottingham"){
    response.redirect("/v22/search/record-3/results-address")
  } else if (search == "Leeds"){
    response.redirect("/v22/search/record-4/results-address")
  } else if (search == "IG11 7JF"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "ig117jf"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "ig11 7jf"){
    response.redirect("/v22/search/record-1/results-address")
  } else if (search == "SY8 4NL"){
    response.redirect("/v22/search/record-2/results-address")
  } else if (search == "sy8 4nl"){
    response.redirect("/v22/search/record-2/results-address")
  } else if (search == "sy84nl"){
    response.redirect("/v22/search/record-2/results-address")
  } else if (search == "NG1 7BA"){
    response.redirect("/v22/search/record-3/results-address")
  } else if (search == "ng1 7ba"){
    response.redirect("/v22/search/record-3/results-address")
  } else if (search == "ng17ba"){
    response.redirect("/v22/search/record-3/results-address")
  } else if (search == "LS25 5AQ"){
    response.redirect("/v22/search/record-4/results-address")
  } else if (search == "ls255aq"){
    response.redirect("/v22/search/record-4/results-address")
  } else if (search == "ls25 5aq"){
    response.redirect("/v22/search/record-4/results-address")
  } else if (search == "mutley"){
    response.redirect("/v22/search/record-1/results-dog-name")
  } else if (search == "bouncer"){
    response.redirect("/v22/search/record-2/results-dog-name")
  } else if (search == "bronson"){
    response.redirect("/v22/search/record-3/results-dog-name")
  } else if (search == "Mutley"){
    response.redirect("/v22/search/record-1/results-dog-name")
  } else if (search == "Bouncer"){
    response.redirect("/v22/search/record-2/results-dog-name")
  } else if (search == "Bronson"){
    response.redirect("/v22/search/record-3/results-dog-name")
  } else if (search == "208510"){
    response.redirect("/v22/search/record-1/results-index-number")
  } else if (search == "418696"){
    response.redirect("/v22/search/record-2/results-index-number")
  } else if (search == "ED208510"){
    response.redirect("/v22/search/record-1/results-index-number")
  } else if (search == "ED418696"){
    response.redirect("/v22/search/record-2/results-index-number")
  } else if (search == "338596"){
    response.redirect("/v22/search/record-3/results-index-number")
  } else if (search == "ED338596"){
    response.redirect("/v22/search/record-3/results-index-number")
  } else if (search == "198587"){
    response.redirect("/v22/search/record-4/results-index-number")
  } else if (search == "ED198587"){
    response.redirect("/v22/search/record-4/results-index-number")
  } else if (search == "123456789012345"){
    response.redirect("/v22/search/record-1/results-microchip")
  } else if (search == "112233445566778"){
    response.redirect("/v22/search/record-2/results-microchip")
  } else if (search == "098765432123456"){
    response.redirect("/v22/search/record-3/results-microchip")
  } else if (search == "123451234512345"){
    response.redirect("/v22/search/record-4/results-microchip")
  } else if (search == "Michael Denton"){
    response.redirect("/v22/search/record-1/results-owner-name")
  } else if (search == "michael denton"){
    response.redirect("/v22/search/record-1/results-owner-name")
  } else if (search == "Vicki Sugden"){
    response.redirect("/v22/search/record-2/results-owner-name")
  } else if (search == "vicki sugden"){
    response.redirect("/v22/search/record-2/results-owner-name")
  } else if (search == "exempt"){
    response.redirect("/v22/search/record-2/results-status")
  } else if (search == "Nathan Stockton"){
    response.redirect("/v22/search/record-3/results-owner-name")
  } else if (search == "nathan stockton"){
    response.redirect("/v22/search/record-3/results-owner-name")
  } else if (search == "Heidi Sturgeon"){
    response.redirect("/v22/search/record-4/results-owner-name")
  } else if (search == "heidi sturgeon"){
    response.redirect("/v22/search/record-4/results-owner-name")
  } else if (search == "Denton"){
    response.redirect("/v22/search/record-1/results-owner-name")
  } else if (search == "Sugden"){
    response.redirect("/v22/search/record-2/results-owner-name")
  } else if (search == "Stockton"){
    response.redirect("/v22/search/record-3/results-owner-name")
  } else if (search == "pre-exempt"){
    response.redirect("/v22/search/record-3/results-status")
  } else if (search == "Sturgeon"){
    response.redirect("/v22/search/record-4/results-owner-name")
  } else if (search == "denton"){
    response.redirect("/v22/search/record-1/results-owner-name")
  } else if (search == "sugden"){
    response.redirect("/v22/search/record-2/results-owner-name")
  } else if (search == "stockton"){
    response.redirect("/v22/search/record-3/results-owner-name")
  } else if (search == "sturgeon"){
    response.redirect("/v22/search/record-4/results-owner-name")
  } else if (search == "failed"){
    response.redirect("/v22/search/record-4/results-status")
  } else if (search == "in breach"){
    response.redirect("/v22/search/record-1/results-status")
  } else {
    response.redirect('/v22/search/results-none')
  }
})

// v22 Report something or check dog record activity
router.post('/v22/dog-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/dog-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v22/dog-records/record-1/activity/activity-all')
  }

})

router.post('/v22/owner-records/activity/activity-type-1', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/owner-records/record-1/comment/comment-type')
  } else {
    res.redirect('/v22/owner-records/record-1/activity/activity-all')
  }

})

router.post('/v22/dog-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/dog-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v22/dog-records/record-2/activity/activity-all')
  }

})

router.post('/v22/owner-records/activity/activity-type-2', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/owner-records/record-2/comment/comment-type')
  } else {
    res.redirect('/v22/owner-records/record-2/activity/activity-all')
  }

})

router.post('/v22/dog-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/dog-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v22/dog-records/record-3/activity/activity-all')
  }

})

router.post('/v22/owner-records/activity/activity-type-3', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/owner-records/record-3/comment/comment-type')
  } else {
    res.redirect('/v22/owner-records/record-3/activity/activity-all')
  }

})

router.post('/v22/dog-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/dog-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v22/dog-records/record-4/activity/activity-all')
  }

})

router.post('/v22/owner-records/activity/activity-type-4', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "report-something"){
    res.redirect('/v22/owner-records/record-4/comment/comment-type')
  } else {
    res.redirect('/v22/owner-records/record-4/activity/activity-all')
  }

})

// v22 Comment type
router.post('/v22/dog-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/dog-records/record-1/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/dog-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/dog-records/record-1/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/dog-records/record-1/comment/report-details')
  }

})

router.post('/v22/owner-records/record-1/comment/comment-type-question-1', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/owner-records/record-1/comment/select-dog')
  } if (comment == "address"){
    res.redirect('/v22/owner-records/record-1/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/owner-records/record-1/comment/select-dog-death')
  } if (comment == "something"){
    res.redirect('/v22/owner-records/record-1/comment/report-details')
  }

})

router.post('/v22/dog-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/dog-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/dog-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/dog-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/dog-records/record-2/comment/report-details')
  }

})

router.post('/v22/owner-records/record-2/comment/comment-type-question-2', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/owner-records/record-2/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/owner-records/record-2/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/owner-records/record-2/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/owner-records/record-2/comment/report-details')
  }

})

router.post('/v22/dog-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/dog-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/dog-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/dog-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/dog-records/record-3/comment/report-details')
  }

})

router.post('/v22/owner-records/record-3/comment/comment-type-question-3', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/owner-records/record-3/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/owner-records/record-3/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/owner-records/record-3/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/owner-records/record-3/comment/report-details')
  }

})

router.post('/v22/dog-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/dog-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/dog-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/dog-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/dog-records/record-4/comment/report-details')
  }

})

router.post('/v22/owner-records/record-4/comment/comment-type-question-4', function (req, res) {
  var comment = req.session.data['comment']
  if (comment == "exemption"){
  res.redirect('/v22/owner-records/record-4/comment/breach-reason')
  } if (comment == "address"){
    res.redirect('/v22/owner-records/record-4/comment/postcode')
  } if (comment == "death"){
    res.redirect('/v22/owner-records/record-4/comment/report-death')
  } if (comment == "something"){
    res.redirect('/v22/owner-records/record-4/comment/report-details')
  }

})

// v22 Which dog
router.post('/v22/owner-records/record-1/comment/which-dog', function (req, res) {
  var dogBreach = req.session.data['dogBreach']
  if (dogBreach == "dog1"){
    res.redirect('/v22/owner-records/record-1/comment/breach-reason')
  } else {
    res.redirect('/v22/owner-records/record-1/comment/breach-reason')
  }

})

// v23 Add or remove police
router.post('/v23/admin/police-question', function (req, res) {
  var addRemoveCourt = req.session.data['addRemovePolice']
  if (addRemoveCourt === "remove"){
    res.redirect('/v23/admin/remove-police')
  } else {
    res.redirect('/v23/admin/add-police')
  }

})

// v23 Add 2nd police
router.post('/v23/admin/add-2nd-police', function (req, res) {
  var add2ndPolice = req.session.data['add2ndPolice']
  if (add2ndPolice === "no"){
    res.redirect('/v23/admin/check-answers')
  } else {
    res.redirect('/v23/admin/add-police-2')
  }

})

// v23 Add 2nd police
router.post('/v23/admin/add-3rd-police', function (req, res) {
  var add2ndPolice = req.session.data['add3rdPolice']
  if (add2ndPolice === "no"){
    res.redirect('/v23/admin/check-answers')
  } else {
    res.redirect('/v23/admin/add-police-3')
  }

})

// v23 Add or remove police
router.post('/v23/admin/police-added-question', function (req, res) {
  var addCourt = req.session.data['addPolice']
  if (addCourt === "no"){
    res.redirect('/v23/admin/index')
  } else {
    res.redirect('/v23/admin/confirmation-police-added')
  }

})

// v23 Add or remove police
router.post('/v23/admin/police-removed-question', function (req, res) {
  var removePolice = req.session.data['removePolice']
  if (removePolice === "no"){
    res.redirect('/v23/admin/add-or-remove-police')
  } else {
    res.redirect('/v23/admin/confirmation-police-removed')
  }

})

// v23 Address question
router.post('/v23/cdo/create/address-question', function (req, res) {
  var existingOwner = req.session.data['existingOwner']
  if (existingOwner == "address1"){
  res.redirect('/v23/cdo/create/multiple/select-dog')
} if (existingOwner == "address2"){
    res.redirect('/v23/cdo/create/multiple/select-dog')
  } if (existingOwner == "newAddress"){
    res.redirect('/v23/cdo/create/postcode')
  }

})

// v23 Change dog owner
router.post('/v23/cdo/create/owner-question', function (req, res) {
  var transferOwnership = req.session.data['transferOwnership']
  if (transferOwnership === "no"){
    res.redirect('/v23/cdo/create/next-step')
  } else {
    res.redirect('/v23/cdo/create/application-type')
  }

})

// v23 Create question
router.post('/v23/cdo/create/confirm-question', function (req, res) {
  var lastName = req.session.data['lastName']
  if (lastName === "Walsh"){
    res.redirect('/v23/cdo/create/enforcement-details-2')
  } else {
    res.redirect('/v23/cdo/create/enforcement-details')
  }

})

// v23 Owner's postcode
router.post('/v23/owner-records/postcode-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "66"){
    res.redirect('./confirm-address')
  } else if (propertyNumber == "88"){
    res.redirect('./confirm-address-scotland')
  } else if (propertyNumber == "44"){
    res.redirect('./confirm-address-wales')
  } else {
    res.redirect('./select-address')
  }

})

// v23 Enter address
router.post('/v23/owner-records/choose-country-question', function (req, res) {
  var chooseCountry = req.session.data['chooseCountry']
  if (chooseCountry == "england"){
    res.redirect('./country-england-police')
  } else if (chooseCountry == "scotland"){
    res.redirect('./country-scotland')
  } else {
    res.redirect('./country-wales-police')
  }

})

// v23 In breach question 1
router.post('/v23/owner-records/in-breach-routing-1', function (req, res) {
  var chooseCountry = req.session.data['chooseCountry']
  if (chooseCountry == "england"){
    res.redirect('./change-police')
  } else if (chooseCountry == "scotland"){
    res.redirect('./owner-record-ED30874-scotland-breach')
  } else {
    res.redirect('./change-police')
  }

})

// v23 In breach question 2
router.post('/v23/owner-records/in-breach-routing-2', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "66"){
    res.redirect('./country-england')
  } else if (propertyNumber == "88"){
    res.redirect('./owner-record-ED30874-scotland')
  } else if (propertyNumber == "44"){
    res.redirect('./owner-record-ED30874-wales')
  }

})

// v23 Confirm address
router.post('/v23/owner-records/confirm-address-question', function (req, res) {
  var propertyNumber = req.session.data['propertyNumber']
  if (propertyNumber == "66"){
    res.redirect('./country-england')
  } else if (propertyNumber == "88"){
    res.redirect('./country-scotland')
  } else {
    res.redirect('./country-wales')
  }

})


// v23 Comment type
router.post('/v23/admin/police-force', function(request, response) {
  var force = request.session.data['force']
  if (force == "Bedfordshire Police"){
    response.redirect("/v23/admin/police-bedfordshire")
  } else if (force == "Dorset Police"){
    response.redirect("/v23/admin/police-dorset")
  } else if (force == "Dyfed-Powys Police"){
    response.redirect("/v23/admin/police-dyfed-powys")
  } else if (force == "Lincolnshire Police"){
    response.redirect("/v23/admin/police-lincolnshire")
  } else if (force == "Norfolk Constabulary"){
    response.redirect("/v23/admin/police-norfolk")
  } else if (force == "Surrey Police"){
    response.redirect("/v23/admin/police-surrey")
  } else if (force == "West Midlands Police"){
    response.redirect("/v23/admin/police-west-midlands")
  } else {
    response.redirect('/v23/admin/police-surrey')
  }
})


// v22 Comment type
router.post('/v24/search-question', function(request, response) {
  var search = request.session.data['search']
  if (search == "rocky"){
    response.redirect("/v24/search/dog-results-dog-name")
  } else if (search == "Rocky"){
    response.redirect("/v24/search/dog-results-dog-name")
  } else if (search == "123456789012345"){
    response.redirect("/v24/search/dog-results-microchip")
  } else if (search == "ryan"){
    response.redirect("/v24/search/dog-results-owner-name")
  } else if (search == "heseltine"){
    response.redirect("/v24/search/dog-results-owner-name")
  } else if (search == "ryan heseltine"){
    response.redirect("/v24/search/dog-results-owner-name")
  } else if (search == "albert road"){
    response.redirect("/v24/search/dog-results-address")
  } else if (search == "albert rd"){
    response.redirect("/v24/search/dog-results-address")
  } else {
    response.redirect('/v24/search/results-none')
  }
})
