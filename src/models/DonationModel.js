// const {Client} = require('pg');
//
// const client = new Client({
//     user: 'your_db_user',
//     host: 'localhost',
//     database: 'your_db_name',
//     password: 'your_db_password',
//     port: 5432,
// });
//
// client.connect();
//
// async function findLastDonation() {
//     const res = await client.query('SELECT * FROM donations ORDER BY created_at DESC LIMIT 1');
//     return res.rows[0];
// }
//
// async function findDonationsCount() {
//     const res = await client.query('SELECT COUNT(*) FROM donations');
//     return parseInt(res.rows[0].count, 10);
// }
//
// async function clearDatabase() {
//     await client.query('DELETE FROM donations'); // Adjust based on your schema
// }
//
// module.exports = {findLastDonation, findDonationsCount, clearDatabase};
