// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n(". . .");
	m("Es porque tu padre nunca est&aacute; en casa, &iquest;verdad?");
	m("Est&aacute;s confundido por no haber tenido una figura paterna...");

	Choose({
		"Claro, como pap&aacute; es TAN buen ejemplo...": function(message){
			n(message);
			m("Nick, lo quieras o no, es tu padre. Deber&iacute;as quererlo.");
			My_Fault();
		},
		"No tiene nada que ver. Seguir&iacute;a siendo bi.": function(message){
			n(message);
			m("&iexcl;&iquest;Y t&uacute; qu&eacute; sabes?! &iexcl;&iquest;Eres psic&oacute;logo ahora?!");
			My_Fault();
		},
		"&iquest;Sabes qu&eacute;? Quiz&aacute;s tengas raz&oacute;n.": function(message){
			n(message);
			m("Claro...");
			My_Fault();
		}
	});

}

function My_Fault(){
	
	Show("clock_time","clock_1930");

	n(". . .");
	m("Todo esto es por mi culpa...");
	m("Te dije que tuvieras cuidado con esa gente, pero fue demasiado tarde...");

	Show("mom","mom_cry");

	m("Snif.");
	m("&iexcl;Ay, Nick! &iexcl;Pobrecito mi ni&ntilde;o!");

	Show("nicky","dinner_nicky_sit");

	Choose({
		"Mam&aacute;... no llores, por favor...": Cry_1,
		"No finjas.": Cry_2,
		"Snif.": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	m("Buaaa... buaaa... buaaa...");
	n("Lo siento. Por lo de Jack, las mentiras y por todo.");
	m("Bua... bua...");
	n("Lo retiro todo.");
	m("Snif...");
	n("...venga, mam&aacute;...");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("Buaaa..., buaaa...");
	n("Venga, que se nota que son l&aacute;grimas de cocodrilo.");
	m("Bua...bua...");
	n("&iquest;Puedes parar ya?");
	m("Snif...");
	n("PARA. YA.");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("AAAAAH");
	m("Buaaa...buaaa...buaaa...");
	n("GUA GUA GUA GUA GUAHHH");
	m("Bua... bua...");
	n("BRRrrRR-BRR-BRbR BUAH BUAHRR rrrRRR-BuaahHHH BuuuaaaahhH");
	m("Sniff...");

	Show("nicky","dinner_nicky_defiant");
	n("&iquest;Has terminado ya?");
	What_Are_You();

}

function What_Are_You(){

	m(". . .");
	m("Nick... &iquest;t&uacute; qu&eacute; eres?");
	n("&iquest;Perd&oacute;n?");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("&iquest;Qu&eacute; <i>eres<i>?");

	Choose({
		"Soy bisexual.": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("...y eso significa...");
			}
			n("Me atraen tanto los hombres como las mujeres.");
			m("Eso es imposible.")
			m("Tienes que elegir.");
			n("No, eso no funciona as&iacute;. En absoluto.");
			Have_You_Had_Sex();

		},
		"Solo estoy confuso.": function(message){

			$.what_are_you = "confused";

			n(message);
			m("...Lo s&eacute;.");
			m("Siento que Jack te haya confundido.");
			m("Est&aacute;s pasando por un mal momento, no pasa nada.");
			n(". . .");
			m("No pasa nada. De verdad...");
			Have_You_Had_Sex();

		},
		"Joder, soy tu hijo.": function(message){

			$.what_are_you = "son";

			n(message);
			n(". . .");
			n("&iquest;No es suficiente?");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m(". . .");
	m("&iquest;Te has acostado con Jack?");
	Choose({
		"S&iacute;.": function(message){
			n(message);
			m("&iexcl;Ay!");
			Have_You_Had_Sex_2();
		},
		"No.": function(message){
			n(message);
			m("Deja de mentir... Le&iacute; la conversaci&oacute;n...");
			n("Solo nos mand&aacute;bamos mensajes subidos de tono, en realidad no...");
			m("...y tus fotos...");
			Have_You_Had_Sex_2();
		},
		"No te lo dir&eacute;.": function(message){
			n(message);
			m("Madre m&iacute;a... s&iacute; que lo has hecho.");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n(". . .");
	m("&iquest;Qui&eacute;n... es la mujer de los dos?");

	Show("nicky","dinner_nicky_outrage");

	n("&iexcl;VENGA YA!");
	n("Eso es como preguntar qu&eacute; palillo chino hace de cuch...");
	m("&iquest;Qui&eacute;n es?");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"Yo soy el pasivo.":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"Suele serlo Jack.":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("Entonces... &iexcl;es posible que seas hetero! &iquest;No?");
			m("Y... t&uacute;... eres el que introduce...");
			m("el...");
			Throw_Up();
		},
		"Nos turnamos.":function(message){
			$.top_or_bottom = "versatile";

			n(message);
			Throw_Up();
		}
	});
}

function Throw_Up(){

	PlaySound("sfx","dinner_vomit");

	Show("clock_time","clock_1940");
	Show("mom","mom_vomit");
	Show("table","dinner_table_2");
	Wait(1000);

	Choose({
		"&iquest;Qu&eacute;?": Father_Soon,
		"&iquest;Qu&eacute;&eacute;&eacute;?": Father_Soon,
		"&iquest;Qu&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;?": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m(". . .");
	m("Tu padre volver&aacute; pronto.");
	n("La comida est&aacute; fr&iacute;a. Bueno, excepto por eso que acabas de echar.");
	m("Aunque llega tarde. Seguro que ha tenido un d&iacute;a estresante en el trabajo.");
	m("As&iacute; que... por favor... cuando vuelva...");
	m("Prom&eacute;teme que todo esto quedar&aacute; en secreto.");
	n(". . .");

	m("No le cuentes nada de Jack.");

	switch($.what_are_you){
		case "bisexual":
			m("No le digas que crees que eres bisexual.");
			break;
		case "confused":
			m("No le digas que tienes dudas acerca de tu sexualidad.");
			break;
		case "son":
			m("No le digas que nos mentiste para... hacer otras cosas con &eacute;l.");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("Ni que Jack hace de mujer.");
			break;
		case "bottom":
			m("Ni que t&uacute; haces de mujer.");
			break;
		case "versatile":
			m("Ni que Jack y t&uacute; hac&eacute;is de mujer.");
			break;
	}

	m("&iquest;Vale?...");

	Choose({
		"Vale.": function(message){
			$.promise_silence = "yes";
			
			n(message);
			m("De acuerdo.");
			m(". . .");
			m("Tu padre ya est&aacute; aqu&iacute;.");
			Father_Soon_2();
		},
		"No. Vale no.": function(message){
			$.promise_silence = "no";
			
			n(message);
			m("Nick, no, no, no, por favor...");
			m("Ay, no. Ya est&aacute; aqu&iacute;.");
			Father_Soon_2();
		},
		"Siempre y cuando t&uacute; tampoco se lo digas.": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			m("No lo har&eacute;.");
			n("Prom&eacute;temelo.");
			m("Te lo...");
			m("Shhh. Ya est&aacute; aqu&iacute;.");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
