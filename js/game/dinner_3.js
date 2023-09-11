// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("Mam&aacute;.");

	Choose({
		"Por eso estoy estudiando m&aacute;s con Jack.": Tutor,
		"Mira, hago lo que puedo, de verdad.": Tutor,
		"Mis notas no est&aacute;n tan mal.": Tutor
	});

}

function Tutor(message){

	n(message);
	m("Me tienes preocupada. Jack no es buena influencia para ti.");

	if($.hippies){
		m("Incluso creo que sus padres son drogadictos...");
		n("&iquest;Por qu&eacute; dices eso?");
	}else if($.im_a_poet){
		m("Lo &uacute;nico que hace es escribir poes&iacute;a.");
		n("&iquest;Por qu&eacute; dices eso?");
	}
	
	m("Voy a pagarte unas clases particulares.");
	n("...&iquest;qu&eacute;?");

	if($.studying_subject!=$.studying_subject_2){
		m("La profesora te dar&aacute; clases de "+$.studying_subject+" y "+$.studying_subject_2+".");
	}else{
		m("La profesora te dar&aacute; clases de "+$.studying_subject+".");
	}

	m("Se llama Claire. Es muy inteligente, guapa y cauc&aacute;sica. Adem&aacute;s, es de tu edad.");

	Choose({
		"&iquest;Intentas que deje de quedar con Jack?": Tutor_Seeing,
		"&iquest;Quieres emparejarme con ella?": Tutor_Matchmake,
		"&iquest;Podemos hablar de esto en otro momento?": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("&iquest;Perdona?, &iquest;<i>quedar</i> con Jack?");
	m("Ten cuidado con lo que dices. Parece que...");
	
	Choose({
		"&iquest;Que estamos saliendo? S&iacute;. Lo estamos.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...&iquest;Hola?");
			m(". . .");
			n("&iquest;Sigues ah&iacute;?");
			m(". . .");
			Threat_School();
		},
		"Me refer&iacute;a a estudiar con Jack.": function(message){
			n(message);
			m("Vale. Solo quer&iacute;a asegurarme.");
			n("Vale.");
			m(". . .");
			m("Claire es muy guapa.");
			n("Claro.");
			m("Sus pechos son muy bonitos.");
			Threat_Tutor();
		},
		"No. Somos. Novios.": function(message){
			n(message);
			m(". . .");
			m("Vale.");
			m("Yo no he dicho que lo se&aacute;is, pero... vale.");
			n("Somos amigos.");

			if($.relationship=="friend"){
				m("\"Colegas\"...");
			}
			if($.relationship=="best friend"){
				m("\"MEJORES amigos\"...");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("Bueno, si es lo que quieres, &iexcl;as&iacute; ser&aacute;!");
	n("Nooooo.");
	m("&iexcl;Que no te d&eacute; verg&uuml;enza! Te est&aacute;s convirtiendo en un hombre.");
	m("Y me dar&aacute;s muchos nietos.");

	Choose({
		"&iexcl;Para ya! &iexcl;Todav&iacute;a ni conozco a la tal Claire!": function(message){
			n(message);
			m("&iexcl;Todav&iacute;a!");
			m("&iexcl;Vendr&aacute; ma&ntilde;ana!");
			n("&iquest;C&oacute;mo? Pero ya he quedado con Jack...");
			m("Te he planchado tu mejor ropa. Causar&aacute;s muy buena impresi&oacute;n.");
			Threat_Tutor();
		},
		"Puede que s&iacute;, puede que no. Soy bi.": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("Em. &iquest;Bi?...");

			Show("nicky","dinner_nicky_defiant");

			n("S&iacute. Bi de BISEXUAL.");
			n("ME ATRAEN TANTO LOS HOMBRES COMO LAS MUJERES.");
			m(". . .");
			n(". . .");
			Threat_School();
		},
		"No. No quiero tener hijos nunca.": function(message){
			n(message);
			m("Cambiar&aacute;s de opini&oacute;n cuando crezcas.");
			m("Criar a un hijo es lo mejor que te puede pasar en la vida. &iexcl;Seguir&aacute;n tu ejemplo!");
			n("...por supuesto, egoc&eacute;ntrica.");
			m("&iquest;Qu&eacute; has dicho?");
			n("Nada.");
			m(". . .");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("No, porque ya le he dicho a Claire que venga ma&ntilde;ana.");
	n("&iexcl;&iquest;Que has hecho qu&eacute?!");
	n("No. Le promet&iacute; a Jack que estudiar&iacute;a con &eacute;l.");
	m(". . .");
	m("&iquest;Hasta qu&eacute; hora pretendes quedarte con &eacute;l ma&ntilde;ana?");

	Choose({
		"Toda la noche.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...&iquest;Hola?");
			n("No es raro. Los amigos se quedan a dormir en casa del otro.");
			m(". . .");
			Threat_School();
		},
		"Solo un rato por la tarde.": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("Lo sab&iacute;a. Las mentiras tienen las patas muy cortas.");
				n("&iquest;Eh?");
			}else{
				m("...Lo sab&iacute;a.");
			}
			m("No est&aacute;is estudiando.");
			Threat_Tutor();
		},
		"Una hora o as&iacute;.": function(message){
			n(message);
			m("En una hora no da tiempo a estudiar mucho.");
			if($.lying_about_hanging_out){
				m("Lo sab&iacute;a. Las mentiras tienen las patas muy cortas.");
				n("&iquest;Eh?");
			}
			m("No est&aacute;is estudiando.");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	n(". . .");
	m("Claire te dar&aacute; clases todos los d&iacute;as despu&eacute;s del instituto, a partir de ma&ntilde;ana.");

	Choose({
		"&iexcl;&iquest;Todos los d&iacute;as?! &iexcl;&iquest;Y mis amigos?!":function(message){
			n(message);
			m("Cari&ntilde;o, &iexcl;tu amiga soy yo!");
			n(". . .");
			m("Adem&aacute;s, Claire tambi&eacute;n puede ser tu amiga. O incluso algo m&aacute;s.");
			n(". . .");
			n("&iquest;Hemos acabado ya?");
			m("Solo... una cosa m&aacute;s.");
			Plot_Twist();
		},
		"Vale, pero los fines de semana no, &iquest;verdad?": function(message){
			n(message);
			m("No.");
			n("Genial. Entonces, ya est&aacute; todo hablado.");
			m("...S&iacute;.");
			n(". . .");
			m("Solo... una cosa m&aacute;s.");
			Plot_Twist();
		},
		"&iquest;Y qu&eacute; pasa si no estudio con Claire?": function(message){
			n(message);
			m("Ah, bueno, si tambi&eacute;n quieres salir con ella no pasa nada.");
			m("Lo que haga falta para que parezcas m&aacute;s masculino.");
			n("Puaj.");
			m("Ah.");
			m("Una cosa m&aacute;s.");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	m("Te vas a cambiar de instituto.");

	Show("nicky","dinner_nicky_outrage");

	n("&iexcl;&iquest;QU&Eacute;?!");
	m("Creo que no es solo Jack el que te est&aacute; influenciando, sino todo el instituto.");
	n("&iquest;EST&Aacute;S DE CO&Ntilde;A?");
	m("La cultura canadiense est&aacute; haciendo que dudes de qui&eacute;n eres.");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"No, &iexcl;es VUESTRA cultura asi&aacute;tica la retr&oacute;grada!": function(message){
			n(message);
			m("&iexcl;Comp&oacute;rtate! &iexcl;No seas tan maleducado!");
			m("&iexcl;Esa es TU cultura tambi&eacute;n!");
			n(". . .");
			Plot_Twist();
		},
		"&iexcl;No puedes hacerle eso a tu propio HIJO!": function(message){
			n(message);
			m("&iexcl;Comp&oacute;rtate! &iexcl;No seas tan maleducado!");
			m("Soy tu MADRE, &iexcl;estoy en mi derecho de hacer lo que quiera contigo!");
			n(". . .");
			Plot_Twist();
		},
		"Me la suda, en TODOS hay gente del colectivo.": function(message){
			n(message);
			m("&iexcl;Comp&oacute;rtate! &iexcl;No seas tan maleducado!");
			m("Y cuidadito, que podr&iacute;a cambiar de opini&oacute;n y educarte en casa.");
			n(". . .");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("&iquest;Te acuerdas de ayer, cuando supuestamente te fuiste a estudiar con Jack?");
	m("S&eacute; que fuisteis a ver una pel&iacute;cula a escondidas.");

	Show("nicky","dinner_nicky_sit");
	n(". . .");

	Show("clock_time","clock_1920");

	Choose({
		"Madre m&iacute;a. Has le&iacute;do mis mensajes.": function(message){
			n(message);
			m("S&iacute;. &iquest;Has visto qu&eacute; inteligente puedes llegar a ser cuando no te juntas con Jack?");
			Plot_Twist_2();
		},
		"No, estuvimos estudiando.": function(message){
			n(message);
			m("Mira que eres cabezota.");
			m("He le&iacute;do los mensajes.");
			Plot_Twist_2();
		},
		"&iquest;Por qu&eacute; dices eso?": function(message){
			n(message);
			m("Porque he le&iacute;do los mensajes.");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n(". . .");
	m("Antes de bajar a cenar, estaba en tu habitaci&oacute;n.");

	// Dinner_1
	m("Mientras gritabas '"+$.what_you_called_out+"' desde abajo, yo estaba encendiendo tu m&oacute;vil...");
	m("Y he le&iacute;do todo lo que os dec&iacute;ais Jack y t&uacute;.");
	m("Soy tu madre. Tengo el derecho a hacerlo.");

	n(". . .");

	if($.im_a_poet){
		m("&iquest;Poes&iacute;a de la rara?");
	}
	if($.hippies){
		m("&iquest;Hablando de fumar marihuana?");
	}
	if($.im_a_poet || $.hippies){
		m("&iquest;Ayud&aacute;ndote a enga&ntilde;ar a tu propia madre?");
		m("A saber qu&eacute; m&aacute;s hab&eacute;is hecho a mis espaldas.");
	}

	Choose({
		"Esto tiene que ser una pesadilla.": function(message){
			n(message);
			m("&iquest;Como en esa pel&iacute;cula de DiCaprio?");
			n("Se... se llama <i>Origen</i>.");
			m("No me hables.");
			Plot_Twist_3();
		},
		"Lo siento. Y mucho.": function(message){
			n(message);
			m("Te perdono.");
			m("Eres mi hijo, c&oacute;mo no te voy a perdonar.");
			Plot_Twist_3();
		},
		"Te odio.": function(message){
			n(message);
			m("Est&aacute; bien.");
			m("Yo te sigo queriendo, Nick.");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
