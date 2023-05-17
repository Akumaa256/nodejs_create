const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./firebase-config.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const Agendamentos = db.collection("Agendamentos");
module.exports = Agendamentos

/*
const data = {
    data_contato: 2015-03-03,
    nome: 'Lucas Ramos',
    observacao: 'pepper',
    origem: 'Telefone',
    telefone: 11987654321
} */




