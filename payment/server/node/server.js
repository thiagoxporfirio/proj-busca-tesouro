const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const localStorage = require("localStorage")
const fetch = require("node-fetch")


// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-965460837260564-083110-b404ade4fa54cb859928aca4d42e84e7-137490497",
});
  



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("../../client"));

app.get("/", function (req, res) {
  res.status(200).sendFile("index.html");
}); 

app.post("/create_preference", (req, res) => {

	const userId = req.body.userId
	const plano = req.body.plano

	let preference = {
		items: [
			{
				userId: req.body.userId,
				title: req.body.description,
				unit_price: Number(req.body.price),
				plano: Number(req.body.plano),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: "all",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});




		app.get('/feedback', function(req, res) {
	
			console.log(req.query.status)
		if(req.query.status == "approved"){
	
			const dadosForm = {
				userId: userId,
				permission: plano
			}
			
			console.log(dadosForm)
	
			fetch("http://localhost:1323/user/change-permission", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dadosForm),
			  })
				.then(function(response) {
					
					setTimeout(() => {
	
						res.redirect('http://127.0.0.1:5502/SucessoPage/success.html')
	
					}, 1000)
					return response.json();
					
				})
				.catch(function(error) {
					console.log(error)
				});
				
		}else{
			//Quando estiver pendente
			setTimeout(() => {
				res.redirect('http://127.0.0.1:5502/index.html')
			}, 1000)
		}})
	
});






// app.get('/feedback', function(req, res) {
// 	res.json({
// 		Payment: req.query.payment_id,
// 		Status: req.query.status,
// 		MerchantOrder: req.query.merchant_order_id
// 	});
// });

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
  });
  
