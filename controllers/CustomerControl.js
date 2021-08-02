const { response } = require('express')
const Customer = require('../models/Customer')

// Displays the Customer Info//

const index = (req, res, next) => {
    Customer.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

const show = (req, res, next) => {
    let customerID = req.body.customerID
    Customer.findById(customerID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
        message: 'An Error Occured'
        })
    })
}

// Adding a New Customer//

const store = (req, res, next) => {
    let customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    customer.save()
    .then(response => {
        res.json({
            message: 'Customer Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//updating customer info//

const update = (req, res, next) => {
    let customerID = new customerID
    
    let updateData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    Customer.findByIdAndUpdate(customerID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Customer Updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

// delete an customer//

const destroy = (req, res, next) => {
    let customerID = req.body.customerID
    Customer.findByIdAndRemove(customerID)
    .then(() => {
        req.json({
            message: 'Customer Deleted Succesfully!'
        })
    })
    .catch(error => {
        req.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}