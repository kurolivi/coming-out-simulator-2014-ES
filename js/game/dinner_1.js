function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("clock_time","clock_1855",{x:155+5,y:294+37});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	Wait(2500);
	n("&iquestNo hay nadie?");
	n(". . .");

	Choose({
		"&iquest;Mam&aacute;&#225;&#225;&#225;&#225;?": Waiting_1,
		"&iquest;Pap&aacute;&#225;&#225;&#225;&#225;?": Waiting_1,
		"&iquest;Hola, hay alguien?": Waiting_1
	});

}

function Waiting_1(message){
	
	$.what_you_called_out = message;
	n(message);

	n(". . .");

	Choose({
		"[empezar a comer]": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		"[esperar un poco m&aacute;s]": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		"[jugar con la comida]": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){
	
	n(message);
	n(". . .");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"&iexcl;Calla ya, felino, pues tu maullido figura chillido!": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				m("&iquest;Te ha ense&ntilde;ado alg&uacute;n amigo a escribir poes&iacute;a?");
			}else{
				m("Qu&eacute; po&eacute;tico.");
			}

			Show("nicky","dinner_nicky_sit");
			n("Oh, hola, mam&aacute;.");
			
			Waiting_End();
		},
		"Uf, &iquest;por qu&eacute; tenemos eso?": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			m("Tu abuelo nos lo regal&oacute;.");

			Show("nicky","dinner_nicky_sit");
			n("&iexclOh! Hola, mam&aacute;.");
			
			Waiting_End();
		},
		"&iexclMiau! &iexclMiau! &iexclMiau! &iexclMiau!": function(message){
			
			n("Miau.");
			n("&iexclMiau!");

			Show("nicky","dinner_nicky_outrage");
			n("&iexclMIAU!");

			Show("mom","mom_stand");

			m("Nick, &iquestqu&eacute haces?...");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			n("MIAuuuu, no te hab&iacute;a visto. Ejem. Hola, mam&aacute.");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}