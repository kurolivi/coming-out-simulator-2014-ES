// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");
	
	f("&iexcl;Hola, Qiying! &iexcl;Hola, Nick!");
	f("&iexcl;Ya estoy en casa!");
	
	Show("dad","dad_serious");

	m("Hola, cielo.");
	n("&iquest;Qu&eacute; pasa, pap&aacute;? &iquest;Qu&eacute; tal el d&iacute;a?");

	f("He hecho horas extras. Espero que lo aprecien en la evaluaci&oacute;n del desempe&ntilde;o.");
	f("Aunque, en realidad, he estado todo el d&iacute;a jugando en el ordenador. &iexcl;Ja, ja!");
	n("Ja, ja...");

	f("Nick, &iquest;por qu&eacute; <i>tus</i> juegos son tan aburridos?");

	Choose({
		"Cre&iacute;a que mis juegos eran divertidos...": function(message){
			n(message);
			f("&iexcl;Bueno, bueno! Es que tienes un sentido del humor muy particular. &iexcl;Ja, ja!");
			n(". . .");
			Casual();
		},
		"No todos los juegos tienen que ser divertidos.": function(message){
			n(message);
			f("Ah, s&iacute;. Es verdad.");
			f("Los juegos MALOS son los aburridos. &iexcl;Ja, ja!");
			n(". . .");
			Casual();
		},
		"&iexcl;Son ARTE!": function(message){
			n(message);
			f("&iexcl;Bah! &iquest;Para qu&eacute; sirve el arte?");
			f("Lo siguiente es que te pongas a escribir poes&iacute;a de la mala.");
			n(". . .");
			Casual();
		}
	});

}

function Casual(){
	
	f("Oye, Qi, &iquest;qu&eacute; es lo que lleva tu plato?");
	f("Ah...");

	Show("clock_time","clock_1950");

	Choose({
		"Es v&oacute;mito.": function(message){
			
			n(message);

			$.grounded = 2;
			f("&iexcl;Nick! &iexcl;Una semana castigado!");
			f("No insultes as&iacute; la cocina de tu madre.");
			f("Su comida ya se insulta lo suficiente. &iexcl;Ja, ja!");

			Casual_2();

		},
		"&iexcl;No te lo comas! No est&aacute;... muy bueno.": function(message){
			
			n(message);

			$.grounded = 1;
			f("&iexcl;Nick! &iexcl;Un d&iacute;a castigado!");
			f("Muestra un poco de respeto. &iexcl;Ten m&aacute;s fe en la cocina de tu madre!");
			f("&iexcl;Porque tal y como cocina, nos vendr&iacute;a bien un milagro! &iexcl;Ja, ja!");

			Casual_2();

		},
		"&iquest;Y si lo pruebas, pap&aacute;?": function(message){
			
			n(message);

			$.grounded = 0;
			m("Nick...");
			f("&iexcl;No hace falta que me lo digas dos veces!");
			f("[Toma una cucharada]");
			f(". . .");
			n(". . .");
			m(". . .");
			f("Bueno, has cocinado cosas peores, cari&ntilde;o. &iexcl;Ja, ja!");

			Casual_2();

		}
	});

}

function Casual_2(){
	
	m("Cari&ntilde;o...");
	f("Bueno, &iexcl;hijo! &iquest;Qu&eacute; tal la escuela?");

	Choose({
		"Bien.": function(message){

			n(message);

			f("&iquest;Bien, de verdad?");
			if($.studying_subject!=$.studying_subject_2){
				f("&iquest;Y tus malas notas en "+$.studying_subject+" y en "+$.studying_subject_2+"?");
			}else{
				f("&iquest;Y tus malas notas en "+$.studying_subject+"?");
			}

			m("Nick y yo est&aacute;bamos hablando de eso.");
			Getting_A_Tutor();

		},
		"Ma&ntilde;ana estudio en casa de un amigo.": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("&iquest;No te acuerdas? Te he dicho que ma&aacute;ana est&aacute;s castigado.");
				}
				if($.grounded==2){
					f("&iquest;No te acuerdas? Te he dicho que esta semana est&aacute;s castigado.");
				}
				f("La estupidez la has sacado de tu madre. &iexcl;Ja, ja!");
				
				n("Bueno, yo...");

				$.grounded++;
				if($.grounded==2){
					f("Es m&aacute;s, ahora est&aacute;s castigado una semana.");
				}
				if($.grounded==3){
					f("Es m&aacute;s, ahora est&aacute;s castigado DOS semanas.");
				}

			}

			m("Hablando de estudios...");
			Getting_A_Tutor();

		},
		"PAP&Aacute;, ESTOY SALIENDO CON JACK.": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("PAP&Aacute; ESTOY SALIENDO...");
			Show("nicky","dinner_nicky_sit");

			m("A CORRER todos los d&iacute;as despu&eacute;s de clase.");
			f("&iexcl;Qu&eacute; bien!");
			f("Desde luego, te vendr&iacute;a bien adelgazar un poco, si no, &iquest;c&oacute;mo vas a conseguir novia?");
			f("Lo de regordete lo has sacado de tu madre. &iexcl;Ja, ja!");
			n("Ja, ja...");
			m("Hablando de estudios...");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("Est&aacute;bamos hablando sobre buscar a alguien que d&eacute; clases particulares.");
	f("&iexcl;Oh! &iquest;La tal Claire?");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("Mam&aacute;, dijimos que no &iacute;bamos a hablar sobre eso...");
			if($.tried_talking_about_it){
				m("Has sido <i>t&uacute;</i> el que ha sacado el tema.");
			}
			break;
		case "no":
			n("Mam&aacute;, dijiste que no &iacute;bamos a hablar sobre eso...");
			m("&iexcl;Has sido t&uacute; el que no ha prometido quedarse callado!");
			break;
		case "tit for tat":
			n("Mam&aacute;, dijiste que no sacar&iacute;as el tema si yo no lo hac&iacute;a...");
			if($.tried_talking_about_it){
				m("Has sido <i>t&uacute;</i> el que acaba de intentar hablar sobre ello.");
			}
			break;
	}

	f("&iquest;Sobre qu&eacute;?");
	f("Soy el cabeza de familia. Ser&aacute; mejor que no me ocult&eacute;is nada.");
	m("Oh... Es solo que a Nick le gusta mucho Claire.");

	Choose({
		"&iexcl;&iquest;Qu&eacute;?! &iexcl;Es mentira!": function(message){
			n(message);
			f("No seas t&iacute;mido.");
			Getting_A_Tutor_2();
		},
		"Vale. Me hab&eacute;is pillado. Me gusta Claire.": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"Tengo novio.": function(message){
			n(message);
			f("&iexcl;S&iacute;, hijo! &iexcl;Vas a tener novia!");
			n("<i>Tengo</i>. Ya <i>tengo</i> no...");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){
	
	f("&iexcl;Te est&aacute;s convirtiendo en un hombre de verdad, hijo m&iacute;o!");
	f("Si yo tuviera tu edad, tambi&eacute;n dejar&iacute;a a tu madre y me ligar&iacute;a a Claire! &iexcl;Ja, ja!");

	n("Eso es muy raro, t&iacute;o.");
	f("&iquest;Me est&aacute;s contestando? &iexcl;A ver si voy a tener que darte un tortazo, chaval!");

	if($.changing_schools){
		m("Tambi&eacute;n est&aacute;bamos pensando en cambiar a Nick de instituto.");
		m("A lo mejor al de Claire.");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("Claire va a darle clases a Nick de "+$.studying_subject+" y "+$.studying_subject_2+" todos los d&iacute;as despu&eacute;s del instituto.");
	}else{
		m("Claire va a darle clases a Nick de "+$.studying_subject+" todos los d&iacute;as despu&eacute;s del instituto.");
	}

	f("Nick, &iquest;t&uacute; qu&eacute; opinas? &iquest;S&iacute; o no?");
	m("Le parece muy buena ide...");
	f("C&aacute;llate, Qi. Le he preguntado a mi hijo.");
	m(". . .");

	Show("dad","dad_threat");

	f("Nicklaus Liow.");
	if($.changing_schools){
		f("&iquest;Quieres cambiar de instituto para ir tras tu novia buenorra?");
	}else{
		f("&iquest;Quieres pasar las horas extraescolares con tu novia buenorra?");
	}

	n("Es complicado, yo...");
	f("Responde como un hombre. No hables a medias tintas.");
	f("S&iacute;. O. No.");

	n(". . .");

	Choose({
		"S&iacute;.": Agree_With_Dad,
		"No.": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	n("...S&iacute;.");

	f("Mmm.");
	f("&iexcl;Hab&eacute;is tomado una decisi&oacute;n vital muy a la ligera!");
	f("De hecho, tan a la ligera que la hab&eacute;is tomado en menos de una hora y me lo hab&eacute;is intentado ocultar. Qu&eacute; cambio m&aacute;s repentino.");
	m(". . .");
	n(". . .");

	f("Nick, has hecho algo malo, &iquest;verdad?");
	f("&iquest;Qu&eacute; has hecho?");

	Choose({
		"He suspendido los ex&aacute;menes.": function(message){
			
			n(message);

			f("...Oh.");
			f("S&iacute;, tienes que mejorar tus notas.");

			Show("dad","dad_serious");

			f("&iexcl;O te quedar&aacute;s estancado trabajando en la ense&ntilde;anza como tu madre! &iexcl;Ja, ja!");
			n(". . .");
			Agreeable_Ending();

		},
		"Me acost&eacute; con Jack.": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			m("Snif.");
			f(". . .");
			Argument_Ending();

		},
		"Me acost&eacute; con Claire.": function(message){
			
			n(message);
			
			m("...&iexcl;Nick!");
			f(". . .");
			f("Nada maaaaaaaal.");
			m("...&iexcl;Cari&ntilde;o!");
			f("Bueno, eh, no la has dejado embarazada, &iquest;no?");
			n("No. No soy est&uacute;pido.");
			
			Show("dad","dad_serious");

			f("Bien hecho. Si no, tendr&iacute;as que pasarte dos d&eacute;cadas criando un ni&ntilde;o, &iexcl;como yo! &iexcl;Ja, ja!");
			n("Ja, ja...");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("&iexcl;Por un momento, Nick, he pensado que hab&iacute;as estado fumando hierba con el <i>hippie</i> de tu compa&ntilde;ero Jack, o algo as&iacute;!");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	f("&iexcl;Bueno!");
	f("&iquest;Qui&eacute;n quiere ver una peli este finde? He o&iacute;do que <i>Origen</i> est&aacute; bien.");

	Choose({	
		"&iexcl;Venga, vale! Todav&iacute;a no la he visto.": function(message){
			n(message);
			f("&iexcl;Entonces hay plan!");
			f("Nick, &iquest;sabes qui&eacute;n sale en la peli?");
			n("Mm... &iquest;Leonardo DiCaprio?");
			f("No, no, Ellen Page.");
			f("&iquest;No se parece un poco a Claire?");
			n("Supongo.");
			Dinner_Ending();
		},
		"Eh... mejor una peli distinta...": function(message){
			n(message);
			f("&iquest;Por qu&eacute;, <i>Origen</i> es demasiado complicada?");
			n("Oye...");
			if($.studying_subject!=$.studying_subject_2){
				f("Claro, ahora entiendo que suspendieras "+$.studying_subject+" y "+$.studying_subject_2+"...");
			}else{
				f("Claro, ahora entiendo que suspendieras "+$.studying_subject+"...");
			}
			f("&iexcl;Venga ya, solo es una <i>peli</i>!");
			f("&iexcl;No creo que hayas sacado tanta estupidez de tu madre! &iexcl;Ja, ja!");
			n("Ja, ja...");
			Dinner_Ending();
		},
		"Ah, ya he visto <i>Origen</i>.": function(message){
			n(message);
			f("Aj&aacute;, ya veo...");
			f("Has tenido una cita en el cine con tu amiguita especial Claire, &iquest;verdad?");
			n("S&iacute;.");
			n("Una cita con una persona muy especial para m&iacute;.");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("...No.");

	f("&iquest;C&oacute;mo?");
	n("No. Mam&aacute; est&aacute; haciendo esto para que no vuelva a ver a Jack.");
	f("Jack.");
	n("Mi amigo.");

	Choose({
		"Mi novio.": function(message){
			
			n(message);

			Show("mom","mom_cry");
			m("Snif.");

			m("&iexcl;Es Jack el que ha hecho que nuestro hijo sea as&iacute;!");
			f("No dejar&eacute; que tengas el mismo tipo de vida que eligi&oacute; ese chico, Nick.");
			Argument_Ending();
		},
		"Mam&aacute; le odia porque es gay.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("Snif.");

			f("Has hecho llorar a tu madre.");
			if($.hippies){
				m("&iexcl;Y sus padres son drogadictos!");
			}
			f("No dejar&eacute; que tengas el mismo tipo de vida que eligi&oacute; ese chico, Nick.");
			Argument_Ending();
		},
		"Mam&aacute; le odia porque CREE que es gay.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("Snif.");

			m("&iexcl;Jack ES gay!");
			if($.hippies){
				m("&iexcl;Y sus padres son drogadictos!");
			}
			f("No dejar&eacute; que tengas el mismo tipo de vida que eligi&oacute; ese chico, Nick.");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n(". . .");

	if($.top_or_bottom=="top"){
		m("Jack es el que hace de mujer, no &eacute;l...");
	}
	switch($.what_are_you){
		case "bisexual":
			m("Nick no es gay del todo, &iexcl;&eacute;l mismo me ha dicho que le siguen gustando las chicas!");
			n(". . .");
			break;
		case "confused":
			m("&iexcl;Nick me ha dicho antes que solo est&aacute; confuso!");
			f("Oh, y tanto que lo est&aacute;.");
			n(". . .");
			break;
		case "son":
			n("Mira, como le acabo de decir a mam&aacute;, soy vuestro HIJO, &iquest;no es suficien...");
			break;
	}
	
	f("Nick, te vas a cambiar de instituto.");
	n(". . .");
	m("Bua... bua... bua...");

	f("Tu madre y yo vamos a revisar de vez en cuando tus mensajes y correos.");
	n(". . .");
	m("Buaaa... buaaa...");

	f("Y si hace falta que le pague un extra a Claire para que te haga darte cuenta de que eres hetero, lo har&eacute;.");
	n(". . .");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("&iexcl;Cuando antes me he echado a llorar, me ha dicho que eran l&aacute;grimas de cocodrilo!");
		f("Qi, c&aacute;llate. No estamos hablando de ti.");
	}
	if($.crying=="mocking"){
		m("&iexcl;Cuando antes me he echado a llorar, se ha re&iacute;do de m&iacute;!");
		f("Qi, c&aacute;llate. No estamos hablando de ti.");
	}

	f("Bueno, Nick.");
	f("&iquest;Vas a decir algo, lo que sea, sobre todo esto?");

	Choose({
		"S&iacute;. Esto es una mierda, que te jodan.": function(message){

			n("S&iacute;.");
			n("Esto es una MIERDA.");
			n("Que te JODAN.");
			
			Show("nicky","dinner_nicky_outrage");
			n("Que os JODAN, egoc&eacute;ntricos de MIER...");
			
			Dinner_Ending_Punch();

		},
		"No. Acepto el castigo.": function(message){

			n(message);
			f("Bien dicho. Al menos hablas como un hombre.");
			n(". . .");

			Show("dad","dad_serious");

			m("Snif...");
			f("Me voy al bar, a ver si consigo algo que s&iacute; se pueda comer.");

			Show("dad",null);

			f("Y cari&ntilde;o, cielo, coraz&oacute;n, tu comida es una mierda.");
			PlaySound("sfx","dinner_door");

			m(". . .");
			
			Show("mom","mom_cry");

			m("Buaaaaa...");
			
			Dinner_Ending();

		},
		"No puedes hacerme da&ntilde;o.": function(message){

			n(message);
			f(". . .");
			m("Cari&ntilde;o, no...");
			f("Eso son palabras mayores, hijo.");
			m("&iexcl;Cielo, no lo hagas, por favor!");
			f("Al menos te enfrentas a m&iacute;. Como un hombre de verdad.");
			m("&iexcl;Por favor! &iexcl;Es mi culpa! No...");
			f("Un poco de hielo bajar&aacute; la hinchaz&oacute;n.");
			m("&iexcl;CARI&Ntilde;O!");
			
			Dinner_Ending_Punch();

		}
	});

}

function Dinner_Ending_Punch(){

	Wait(500);

	queue(ClearDialogue,0);

	StopSound("clock");
	PlaySound("sfx","dinner_punch");

	Show("dad",null);
	Show("mom","mom_cry");
	Show("nicky","dinner_nicky_punched");
	Show("dinner_punch_arm","dinner_punch_arm",{x:0,y:300});
	
	$.punched = true;
	Dinner_Ending();	
	
}

function Dinner_Ending(){

	Wait(500);

	queue(ClearDialogue,0);

	Wait(500);

	PlaySound("clock","dinner_meowing",{loop:-1});
	Show("clock","clock_meowing");
	Show("clock_time","clock_2000");

	Wait(1000);

	Clear();
	Start_Jack_2();

}

