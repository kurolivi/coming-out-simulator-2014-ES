// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	m("Hola, cielo.");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("Vaya, has empezado a comer sin m&iacute;. Eres muy impaciente.");
			n("...tienes raz&oacute;n.");
			break;
		case "wait":
			m("Podr&iacute;as haber empezado sin m&iacute;. Se te va a enfriar la comida.");
			n("...claro.");
			break;
		case "play":
			m("Ya sabes que jugar con la comida es de ni&ntilde;os.");
			n("S&iacute;, s&iacute;.");
			break;
	}

	m("Tu padre vendr&aacute; tarde. Seguramente llegar&aacute; para la cena en una hora.");

	Choose({
		"Vale. Vamos a comer.": function(message){
			n(message);
			n("*&ntilde;am, &ntilde;am, &ntilde;am*");
			m(". . .");
			m("&iquest;Qu&eacute; planes tienes para ma&ntilde;ana?");
			Start_Dinner_2_1();
		},
		"Tengo algo que contaros.": function(message){
			n(message);
			m("Muy bien, cu&eacute;ntanoslo cuando vuelva tu padre.");
			n("Ah. Vale.");
			m(". . .");
			n("*&ntilde;am, &ntilde;am, &ntilde;am*");
			m("&iquest;Y qu&eacute; planes tienes para ma&ntilde;ana?");
			Start_Dinner_2_1();
		},
		"Hay algo que tengo que contarte a ti primero.": function(message){
			n(message);
			m("Espera, Nick, &iexcl;a&uacute;n no te he preguntado c&oacute;mo te ha ido el d&iacute;a!");
			n("Pues bien.");
			m("Vale. &iquest;Y qu&eacute; planes tienes para ma&ntilde;ana?");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("Pues... estudiar.")
	n("S&iacute;. Ma&ntilde;ana voy a estudiar.");
	m("&iquest;Qu&eacute; asignatura?");
	n("Eh...");

	Choose({
		"Qu&iacute;mica.": function(message){
			$.studying_subject = "Qu&iacute;mica";
			Start_Dinner_2_2(message);
		},
		"C&aacute;lculo.": function(message){
			$.studying_subject = "C&aacute;lculo";
			Start_Dinner_2_2(message);
		},
		"Inform&aacute;tica.": function(message){
			$.studying_subject = "Inform&aacute;tica";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("Bien.");
	m("Podr&iacute;as sacar mejores notas en "+$.studying_subject+".");
	n(". . .");
	m("Ir&eacute; a la biblioteca ma&ntilde;ana.");
	m("&iquest;Te ver&eacute; all&iacute; estudiando?");
	n("Voy a estudiar en casa de Jack.");
	m("&iquest;Otra vez?");
	m("Pasas mucho tiempo con &eacute;l.");

	Choose({
		"Estudiamos juntos, ya est&aacute;.": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"Mam&aacute;, Jack es... m&aacute;s que un amigo.": function(message){
			
			$.relationship = "best friend";
			n(message);
			
			$.lying_about_hanging_out = true;
			m("Ah, &iquest;mejores amigos?");
			n("Mmm. Bueno...");
			m("As&iacute; que qued&aacute;is para pasar el rato, no para estudiar.");
			n("&iexcl;Claro que ESTUDIAMOS!");
			m(". . .");
			m("Muy bien, solo quiero que no me mientas.");
			n("No lo hago.");
			Buddy_1_point_5();
		},
		"Bueno, eso es lo que hacen los colegas.": function(message){
			$.relationship = "friend";
			Buddy_1(message);
		}
	});

}


///////////////////////////////////////
////// 2) SUSPECTING Jack IS GAY ///////
///////////////////////////////////////


function Buddy_1(message){
	n(message);

	if($.relationship!="study"){
		$.lying_about_hanging_out = true;
		m("Vaya. As&iacute; que te dedicas a pasar el rato en vez de estudiar.");
		n("&iexcl;Claro que ESTUDIAMOS!");
		m(". . .");
		m("Muy bien, solo quiero que no me mientas.");
		n("No lo hago.");
	}else{
		m("Vale. Es para estar segura.");
		n("&iquest;De... qu&eacute;?");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("Espera...");
	m("Pensaba que hab&iacute;as dicho que 'estudi&aacute;bais juntos, ya est&aacute;'.");
	m("No me hab&iacute;as contado que &eacute;rais amigos.");
	$.lying_about_relationship = true;
	Choose({
		"Quer&iacute;a decir que es mi compa&ntilde;ero de estudio.": callback,
		"Bueno, puede que tambi&eacute;n sea mi amigo...": callback,
		"No, siempre he dicho que somos amigos.": callback
	});
}

function Buddy_1_point_5(){

	m("No te juntes mucho con &eacute;l.");
	m("La gente podr&iacute;a pensar otras cosas.");

	Choose({
		"Ah. No, solo somos amigos.": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"A lo mejor lo que la gente piensa es verdad.": Buddy_4,
		"&iquest;Qu&eacute; quieres decir con eso?": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("Vale.");
	if($.lying_about_relationship){
		m("Solo te pido que no me mientas.");
		n("No lo har&eacute;.");
		m(". . .");
		m("Pero... lo de tus quedadas con Jack...");
	}
	m("Es que la gente puede pensar cosas porque...");
	m("Jack parece...");
	m("&iquest;gay?");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("Entre madre e hijo, creo que es... ya sabes...");
	n("No, &iquest;qu&eacute;?");
	m("&iexcl;Gay!");
	m("Parece gay y se comporta como tal.");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("Vaya, eso es algo zen, &iquest;no?");
	n("Mmm.");
	m("Todo lo zen tiene que ver con la naturaleza y tu compa&ntilde;ero Jack...");
	m("...ya sabes, no parece muy natural.");
	Choose({
		"Crees que es gay.": function(message){
			n(message);
			m("&iexcl;S&iacute;!");
			m("&iexcl;T&uacute; tambi&eacute;n lo sospechas!");
			Buddy_Choice();
		},
		"&iexcl;No digas eso de mi amigo!": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("Vale.");
					m("Solo quiero que no me mientas.");
					n("No lo har&eacute;.");
					m(". . .");

					m("Pero s&iacute;, aunque creas que es malo 'no parecer natural'.");
					n("Nunca he dicho...");
					m("&iexcl;Solo quiero protegerte! Porque ese chico act&uacute;a como...");
					m("&iexcl;un gay!");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("Solo estoy siendo sincera.");
				m("Pero s&iacute;, aunque creas que es malo 'no parecer natural'.");
				n("Nunca he dicho...");
				m("&iexcl;Solo quiero protegerte! Porque ese chico act&uacute;a como...");
				m("&iexcl;un gay!");
				Buddy_Choice();

			}

		},
		"&iquest;Qu&eacute; quieres decir con que 'no es natural'?": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("Y como dices que es un 'colega'...");
		m("La gente podr&iacute;a pensar que t&uacute; tambi&eacute;n eres gay.");
	}
	if($.relationship=="best friend"){
		m("Y como dices que es tu MEJOR amigo...");
		m("La gente podr&iacute;a pensar que t&uacute; tambi&eacute;n eres gay.");
	}
	Choose({
		"Act&uacute;a como si fuera gay. Por suerte no lo es...": function(message){
			n(message);
			m("&iquest;Ves? T&uacute; tambi&eacute;n notas que hay algo raro.");
			n("...claro.");
			Buddy_Aftermath();
		},
		"&iexcl;&iquest;Qu&eacute; tiene de malo ser gay?!": function(message){
			n(message);
			m("&iexcl;Nada! Nada.");
			Buddy_Aftermath();
		},
		"Puede que... mi amigo sea gay.": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("Vale.");
					m("Solo quiero que no me mientas.");
					n("No lo har&eacute;.");
					m(". . .");
					Buddy_Aftermath();
				});
			}else{
				n(message);
				Buddy_Aftermath();
			}
			
		}
	});
}


function Buddy_Aftermath(){

	m("No me malinterpretes.");
	m("&iexcl;No quiero decir que ese tipo de personas sean malas!");
	m("Solo creo que... deber&iacute;as tener cuidado con ellas.");
	m("Jack podr&iacute;a... ya sabes, hacer que te volvieras gay.");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"&iquest;Qu&eacute;?": Buddy_Aftermath_2,
		"&iquest;Qu&eacute;&eacute;&eacute;?": Buddy_Aftermath_2,
		"&iquest;Qu&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;?": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){
	
	n(message);

	n("&iquest;C&oacute;mo puedes...");
	n("Puf, d&eacute;jalo.");
	m("Nick, siento haberte molestado.");
	n("No, mam&aacute;, deja de hacer es...");
	m("Sigamos hablando de tus notas.");
	m("&iquest;Qu&eacute; has dicho que ibas a estudiar ma&ntilde;ana?");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	n("Eh...");

	Choose({
		"&iquest;Inform&aacute;tica?": function(message){
			$.studying_subject_2 = "Inform&aacute;tica";
			Grades_Start(message);
		},
		"&iquest;Qu&iacute;mica?": function(message){
			$.studying_subject_2 = "Qu&iacute;mica";
			Grades_Start(message);
		},
		"&iquest;C&aacute;lculo?": function(message){
			$.studying_subject_2 = "C&aacute;lculo";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	m(". . .");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("Antes me hab&iacute;as dicho que "+$.studying_subject+".");
	m("&iquest;Y ahora me dices que "+$.studying_subject_2+"?");
	$.lying_about_studying = true;
	n("Mam&aacute;, es que estaba confu...");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("Esta es la SEGUNDA vez que me mientes esta noche.");
		n("No he mentido sobre...");
	}
	m("De todas maneras, tus notas en las dos asignaturas son muy malas.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("Has dudado por un momento.");
	n("Estaba comiendo.");
	m("Vale.");
	if($.lying_about_hanging_out){
		m("Me pregunto si realmente estudias con Jack o si solo pasas el rato.");
		n("Estudiamos.");
	}
	m(". . .");
	m("A&uacute;n as&iacute;, tus notas de "+$.studying_subject_2+" son muy malas.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
