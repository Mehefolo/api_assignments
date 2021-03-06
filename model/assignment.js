let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    matiere: String,
    nomprof : String,
    dateDeRendu: Date,
    rendu: Boolean,
    auteur: String,
    note: Number,
    photo: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
