const Register = require("../models/registerModel")
const catchAsync = require("../utils/asyncCatch")
const appError = require("../utils/appError");
const { query } = require("express");

const TOTAL_vACCINATION_DURATION = 2; //IN MINUTES
const STARTING_HOUR = 12;

const calculateTime = (noOfPeople)=>{
    let totalMinutes = noOfPeople * 2;
    let hours = Math.floor(totalMinutes/60);
    hours = hours==0?12:hours;
    let minutes = totalMinutes%60;
    return `${hours}:${minutes} PM`;
}

exports.register =catchAsync(async(req, res, next)=>{
    const {name, address, age, vaccinationSpot, date, vaccineType} = req.body;
    const registeredPeople = await Register.find({date, vaccinationSpot}).countDocuments();
    const time = calculateTime(registeredPeople);
    const register = await Register.create({
        name,
        address,
        age,
        vaccinationSpot,
        date,
        vaccineType,
        time
    })
    res.status(201).json({
        success: true,
        data: register,
        message: "Successfully registered"
    })
})


exports.getAllRegisters = catchAsync(async(req, res, next)=>{
    const {vaccineType, vaccinationSpot, date} = req.query;
   const  query = { vaccineType, vaccinationSpot, date }
    console.log(query);

    
    if(query.vaccineType === undefined){
        delete query.vaccineType;
    }
    if(query.vaccinationSpot === undefined){
        delete query.vaccinationSpot;
    }
    
    if(query.date === undefined){
        delete query.date;
    }
    const registers = await Register.find(query);

    if(!registers){
        return next(new appError("No data found", 404))
    }
    res.status(200).json({
        success: true,
        data: registers,
        message: "Successfully fetched",
        noOfRegisters: registers.length

    })
})