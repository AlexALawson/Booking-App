const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const Appt = require('./models/appt'); 
//create app

var app = express(); 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 


var port = process.env.PORT || 8080; 

//db setup

mongoose.connect('mongodb://boots525:bookingapp123@ds155028.mlab.com:55028/bookit')

//ROUTES

var router = express.Router(); //instance of express router 

//Middleware for routes

router.use((req, res, next) => {
	//log to the console
	console.log('middleware working'); 
	next(); //continue after running middleware 
})

//test route

router.get('/', (req, res) => {
	res.json({ message: 'connected to the api!!'})
});

//addtl routes

app.use('/api', router); 


router.route('/appts')

	//create a new appointment (localhost:8080/api/appts)

	.post((req, res) => {
		var appt = new Appt(); 
		appt.apptDate = req.body.apptDate; 
		appt.startTime = req.body.startTime; 
		appt.endTime = req.body.endTime; 
		appt.clientName = req.body.clientName; 
		appt.description = req.body.description; 
		appt.apptType = req.body.apptType;

		//save and check for errors 

		appt.save((err) => {
			if(err){
				res.send(err);
				}
			res.json({ message: "Appt Created! "}); 
		})
	})

	.get((req, res) => {
		Appt.find((err,appts) => {
			Appt.find((err, appts) => {
				if(err) {
					res.send(err)
				}

				res.json(appts);
			})
		})
	});

//route of a specific appt
router.route('/appts/:appt_id')
	//grab the appt by id
	.get((req, res) => {
		Appt.findById(req.params.appt_id, (err, appt) => {
			if(err) {
				res.send(err)
			}
			res.json(appt)
		})
	})
	//update the appt
	.put((req, res) => {
		Appt.findById(req.params.appt_id, (err, appt) =>{
			if(err)
				res.send(err); 


		appt.apptDate = req.body.apptDate; 
		appt.startTime = req.body.startTime; 
		appt.endTime = req.body.endTime; 
		appt.clientName = req.body.clientName; 
		appt.description = req.body.description; 
		appt.apptType = req.body.apptType;

		appt.save((err) => {
			if(err){
				res.send(err)
			}

			res.json({ message: "Appt Updated!"})
		})
		})
	})
	//remove a specific appointment
	.delete((req, res) => {
		Appt.remove({
			_id: req.params.appt_id
		}, (err, appt) => {
			if(err)
				res.send(err); 

			res.json({ message: "Successfully deleted appointment!"})
		})
	});



//start server 

app.listen(port); 
console.log('listening on port 8080');
