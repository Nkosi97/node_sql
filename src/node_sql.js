"use strict";
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "user",
  database: "db",
  password: "pass",
  port: 5432,
});

client.connect();

const createTable = async () => {
  try {
    const query = await client.query(
      `CREATE TABLE 
            Visitors(
            id serial primary key,
            name VARCHAR(50),
            age  INT,
            visit_date  DATE,
            visit_time  TIME,
            assistant VARCHAR(50),
            comments VARCHAR(200)
           );`
    );
    console.log(query);
    console.log("table created!");
  } catch (e) {
    console.log(e);
  }
};

// createTable();

const addNewVisitor = async (name, age, date, time, assistant, comment) => {
  try {
    const query = await client.query(
      "INSERT INTO Visitors(name, age, visit_date, visit_time, assistant, comments) VALUES ($1,$2,$3,$4,$5,$6)",
      [name, age, date, time, assistant, comment]
    );
    console.log(query.rows);
    console.log("data saved");
  } catch (e) {
    console.log(e);
  }
};

const listVisitor = async () => {
  try {
    const query = await client.query(
      `
            SELECT ID , name FROM Visitors;`
    );
    console.log(query.rows);
    console.log("successfully");
  } catch (e) {
    console.log(e);
  }
};

const deleteVisitor = async () => {
  try {
    const query = await client.query(
      `
          DELETE  FROM Visitors WHERE id = ${1}
          ;`
    );
    console.log(query);
    console.log("deleted successfully");
  } catch (e) {
    console.log(e);
  }
};

const updateVisitor = async (name, assistant) => {
  try {
    const query = await client.query(
      `
            UPDATE  Visitors SET name= 'laido', assistant ='thabo' WHERE id=${1}
          ;`
    );
    console.log(query.rows);
    console.log("updated!");
  } catch (e) {
    console.log(e);
  }
};

const viewVisitor = async () => {
  try {
    const query = await client.query(
      `
            SELECT * FROM Visitors WHERE id=${1}
          ;`
    );
    console.log(query.rows);
    console.log("viewed!");

    return query.rows;
  } catch (e) {
    console.log(e);
  }
};

const deleteAllVisitors = async () => {
  try {
    const query = await client.query(
      `
            DELETE  FROM Visitors 
          ;`
    );
    console.log(query);
    console.log("all deleted!");
  } catch (e) {
    console.log(e);
  }
};


// addNewVisitor("Nkosinathi", 23, "06/11/2020", "15:40", "thando", "lovely");

module.exports = {
  addNewVisitor,
  deleteVisitor,
  viewVisitor,
  listVisitor,
  updateVisitor,
  deleteAllVisitors
};

