//Welcome to Bamazon made by Proc!, use this application to find fun items and purchase them!

var inquirer=require('inquirer');

//connects to the Bamazon_db database
var mysql=require('mysql');
var connection=mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root", //Your username
	password:"9016NCCU", //Your password
	database:"BamazonP_db"})

//shows if you're connected or not
connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id "+connection.threadID);
	console.log();})

//Display All Items available for sale
connection.query('SELECT * FROM BamazonP_db.items;',function(err,res){
	for(var i=0;i<res.length;i++){
		console.log(res[i].ItemID+" | "+res[i].ItemsName+" | "+res[i].Price+" | "+res[i].StockQuanitiy);
		}
	console.log("-----------------------------------");
});



inquirer.prompt([{
   type: "list",
   name: "option",
   message: "What product would you like to buy?",
   choices: [
"satchel"
"grill"
"Lord of the Rings"
"Bonsai Plant"
"Galaxy s-12"
"3D Printer"
"I-Pad Pro"
"The Hobbit"
"lawnmower"
"kilt"
"tuxedo"
"ticonderoga pencils"
"goldslick vodka"
   ]
}]).then(function(user) {
   console.log(user.option);

   if (user.option == 'satchel') {
       inquirer.prompt([{
           type: 'input',
           message: 'How many do you want to purchase?',
           name: 'numberItem'
       }]).then(function(item) {
           var post = { ItemsName: item.Purse-blk, StockQuanitiy: item.numberItem }
           con.query('Select * from items * where ItemsName set satchel', post, function(err, result) {
               if (err) throw err;
           });
           con.query('SELECT * from items order by ItemID DESC limit 1', function(err, result) {
               if (err) throw err;
               console.log(result);
           });
       })
   } 
   else if (user.option == 'grill') {
       inquirer.prompt([{
           type: 'input',
           message: 'How many do you want to purchase?',
           name: 'numberItem'
       }]).then(function(item) {
           var post = { ItemsName: item.grill, StockQuanitiy: item.numberItem }
           con.query('INSERT INTO items set ?', post, function(err, result) {
               if (err) throw err;
           });
           con.query('SELECT * from items order by ItemID DESC limit 1', function(err, result) {
               if (err) throw err;
               console.log(result);
           });
       })
   } 
   else if (user.option == 'kilt') {
       inquirer.prompt([{
           type: 'input',
           message: 'How many do you want to purchase?',
           name: 'numberItem'
       }]).then(function(item) {
           var post = { ItemsName: item.kilt, StockQuanitiy: item.numberItem }
           con.query('INSERT INTO items set ?', post, function(err, result) {
               if (err) throw err;
           });
           con.query('SELECT * from items order by ItemID DESC limit 1', function(err, result) {
               if (err) throw err;
               console.log(result);
           });
       })
   } 
   else {
       con.query('select * from items', function(err, result) {
           if (err) throw err;
           console.log(result);

});
       
     