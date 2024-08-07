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

// v10 Add or remove court
router.post('/v11/admin/court-question', function (req, res) {
  var addRemoveCourt = req.session.data['addRemoveCourt']
  if (addRemoveCourt === "remove"){
    res.redirect('/v11/admin/remove-court')
  } else {
    res.redirect('/v11/admin/add-court')
  }

})

// v10 Add or remove court
router.post('/v11/admin/court-added-question', function (req, res) {
  var addCourt = req.session.data['addCourt']
  if (addCourt === "no"){
    res.redirect('/v11/admin/index')
  } else {
    res.redirect('/v11/admin/confirmation-court-added')
  }

})

// v10 Add or remove court
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
      response.redirect("/v17/search/results-address")
  } if (search == "Barking"){
    response.redirect("/v17/search/results-address")
  } if (search == "IG11 7JF"){
    response.redirect("/v17/search/results-address")
  } if (search == "bouncer"){
    response.redirect("/v17/search/results-dog-name")
  } if (search == "Bouncer"){
    response.redirect("/v17/search/results-dog-name")
  } if (search == "208510"){
    response.redirect("/v17/search/results-index-number")
  } if (search == "123456789012345"){
    response.redirect("/v17/search/results-microchip")
  } if (search == "Michael Denton"){
    response.redirect("/v17/search/results-owner-name")
  } if (search == "Denton"){
    response.redirect("/v17/search/results-owner-name")
  } if (search == "denton"){
    response.redirect("/v17/search/results-owner-name")
  } if (search == "In breach"){
    response.redirect("/v17/search/results-status")
  } if (search == "none"){
    response.redirect("/v17/search/results-none")
  }
})

// v17 Report something or check dog record activity
router.post('/v17/dog-records/activity/activity-type', function (req, res) {
  var activityType = req.session.data['activityType']
  if (activityType == "add-activity"){
    res.redirect('/v17/dog-records/activity/add-activity')
  } else {
    res.redirect('/v17/dog-records/activity/activity-all')
  }

})
