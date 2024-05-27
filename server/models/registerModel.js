// models/vaccination.js

const VaccineType = Object.freeze({
    BCG: 'Bacillus Calmette Guerin (BCG)',
    DPT_HEPB_HIB: 'DPT-HepB-HiB',
    OPV: 'Oral Polio Vaccine (OPV)',
    PCV: 'Pneumococcal Conjugate Vaccine (PCV)',
    MR: 'Measles - Rubella (MR)'
});


const VaccinationDate = Object.freeze({
    ASADH_13_2081: 'Asadh 13, 2081',
    ASADH_17_2081: 'Asadh 17, 2081',
    ASADH_25_2081: 'Asadh 25, 2081',
    SHRAWAN_03_2081: 'Shrawan 03, 2081'
});

const VaccinationSpot = Object.freeze({
    PADMAKALYAN_SCHOOL: 'Padmakalyan School, Bhaktapur Durbar Sq.',
    LOKANTHALI_HEALTHPOST: 'Lokanthali Healthpost, Lokanthali',
    BALKOT_SWASTHYA_CHAUKI: 'Balkot Swasthya Chauki, Balkot',
    BAGESHOR_SCHOOL: 'Bageshor school, Chyamasing',
    THIMI_HEALTHPOST: 'Thimi Healthpost, Nayathimi',
    CHANGUNARAYAN_HOSPITAL: 'Changunarayan Hospital, Changunarayan'
});

const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    vaccinationSpot: {
        type: String,
        required: true,
        enum: Object.values(VaccinationSpot)
    },
    date: {
        type: String,
        required: true,
        enum: Object.values(VaccinationDate)
    },
    vaccineType: {
        type: String,
        required: true,
        enum: Object.values(VaccineType)
    },
    time: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Register', registerSchema);
