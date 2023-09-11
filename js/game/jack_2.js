// Denounement
// j("That mode of communication?"); j("It's imprecise, impersonal, impossible to truly connect.");

// Recap what happened.
// Who's to blame.
// All coming towards --> Break up now, or try to stay together?

// Love you, X. Love you, Y.
// IMMEDIATELY CUT TO NOW - WE BROKE UP.

function Start_Jack_2(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_2");
	Show("us","bedroom_us_2");
	Show("light","bedroom_light_2",{x:0,y:159});

	PlaySound("bg","bedroom_2",{loop:-1,volume:0.5});

	if($.punched){
		Show("punch","bedroom_punch",{x:256,y:404});
	}

	/////////////////////////////

	n("Ey, Jack.");
	if($.sadsack){
		j("Hola, Nicky bb. &iquest;Perdura la amargura?");
	}else{
		j("Hola, Nicky bb.");
	}
	j("&iquest;C&oacute;mo ha ido lo de dec&iacute;rselo a tus padres? No quer&iacute;a decirte que te lo dije, pero te lo dije.");

	Choose({
		"Jack... la hemos cagado y bien.": function(message){
			n(message);
			j("No... no, no.");
			j("Est&aacute;s de broma, &iquest;verdad? &iquest;Qu&eacute; ha pasado?");
			What_Happened();
		},
		"Podr&iacute;a haber sido peor.": function(message){
			n(message);
			j("Oh... no...");
			j("No esperaba que ellos fueran a... qu&eacute;... &iquest;qu&eacute; ha pasado?");
			What_Happened();
		},
		"C&aacute;llate, Jack.": function(message){
			n(message);
			j("S&iacute;&iacute;&iacute;, &iexcl;sab&iacute;a que ten&iacute;a raz&oacute;n!");
			n("No. Jack, no podemos vernos nunca m&aacute;s.");
			j("Espera.");
			j("No, no, no. Est&aacute;s de broma, &iquest;verdad? &iquest;Qu&eacute; ha pasado?");
			What_Happened();
		}
	});

}

function What_Happened(){

	if($.punched){
		Choose({
			"Mi padre me dio un pu&ntilde;etazo.": What_Happened_Abuse,
			"Me quieren cambiar de instituto.": What_Happened_School,
			"Han le&iacute;do nuestra conver.": What_Happened_Texts
		});
	}else if($.father_oblivious==false){
		Choose({
			"Mis padres empezaron a discutir.": What_Happened_Abuse,
			"Me quieren cambiar de instituto.": What_Happened_School,
			"Han le&iacute;do nuestra conver.": What_Happened_Texts
		});
	}else{
		n("Bueno, por ahora a mi padre se la pela. Pero mi madre...");
		if($.changing_schools){
			Choose({
				"Quiere cambiarme de instituto.": What_Happened_School,
				"Me est&aacute; emparejando con una desconocida.": What_Happened_Girl,
				"Ha le&iacute;do nuestra conver.": What_Happened_Texts,
			});
		}else{
			Choose({
				"Me ha buscado a una profesora particular.": What_Happened_School,
				"Me est&aacute; emparejando con una desconocida.": What_Happened_Girl,
				"Ha le&iacute;do nuestra conver.": What_Happened_Texts,
			});
		}
	}

}

function What_Happened_Abuse(message){
	$.told_jack = "abuse";

	n(message);
	j("&iexcl;Madre m&iacute;a!");
	j("Nicky, tienes que llamar a Asuntos Sociales.");
	n("&iexcl;&iquest;Qu&eacute;?! No. Eso es pasarse.");
	j("Pero... bueno, al menos prom&eacute;teme que hablar&aacute;s ma&ntilde;ana con el orientador.");
	n("Vale.");
	j(". . .");
	What_Happened_2();
}
function What_Happened_School(message){
	$.told_jack = "school";

	n(message);
	j("&iexcl;No!");
	j("&iexcl;&iquest;Por qu&eacute;?! &iquest;Por qu&eacute; hacen eso?");
	n("Porque 'Jack y el instituto son una mala influencia para m&iacute;', o algo as&iacute;. Lo &uacute;nico que quieren es separarnos.");
	j("Me parece fatal...");
	What_Happened_2();
}
function What_Happened_Girl(message){
	$.told_jack = "girl";

	n(message);
	j("Puaj, &iquest;lo dices en serio?");
	n("Se llama Claire no s&eacute; qu&eacute;. Tambi&eacute;n me dar&aacute; clases particulares.");
	j("Puajx2, &iquest;tambi&eacute;n quieren liarte con tu propia profesora?");
	n("Exacto."); 
	What_Happened_2();
}
function What_Happened_Texts(message){
	$.told_jack = "texts";

	n(message);
	j("&iexcl;Eso es de muy mala educaci&oacute;n!");
	j("Espera, &iquest;entonces qu&eacute; vas a hacer con los mensajes?");
	n("Har&eacute; que no los vean. Mis padres tampoco es que sean expertos en tecnolog&iacute;a.");
	j("...de muy mala educaci&oacute;n, la verdad.");
	What_Happened_2();
}

function What_Happened_2(){
	
	n("Y esa es solo una de las tres cosas de mierda que pasaron.");
	j("Nicky...");
	j("Estoy muy, muy arrepentido.");
	j("Todo esto es mi culpa. Yo te anim&eacute; a salir del armario con tus padres. Soy un imb&eacute;cil.");

	Choose({
		"S&Iacute;, lo eres.": function(message){
			$.blame = "jack";

			n(message);
			n("Si no te hubieras puesto en plan 'ohhh, Nicky, salir del armario te libera el alma' y toda esa mierda, esto no habr&iacute;a pasado...");
			j(". . .");
			n("Lo siento. Eres la &uacute;nica persona con la que puedo desahogarme.");
			n("Es que vaya mierda.");
			What_Now();
		},
		"No, es SU culpa.": function(message){
			$.blame = "parents";

			n(message);
			n("Ellos ya hab&iacute;an le&iacute;do nuestros mensajes. Cualquier cosa que hubiera dicho despu&eacute;s de eso, no cambiar&iacute;a nada.");
			if($.told_jack!="texts"){
				j("&iexcl;Qu&eacute;! &iexcl;No me has dicho que tambi&eacute;n leyeron los mensajes!");
			}else{
				j("Y no ven m&aacute;s all&aacute; de su moral anticuada, los pobres.");
				n("Si fuera t&uacute;, yo no les tendr&iacute;a l&aacute;stima.");
			}
			What_Now();
		},
		"No, todo esto es mi culpa.": function(message){
			$.blame = "nicky";

			n(message);
			n("Deber&iacute;a haberle puesto una contrase&ntilde;a, haber utilizado texto cifrado o esconderlo mejor...");
			if($.told_jack!="texts"){
				j("&iquest;Pero tambi&eacute;n han le&iacute;do los mensajes?...");
			}
			j("Nicky, t&uacute; no ten&iacute;as por qu&eacute; desconfiar de ellos, son tus padres. Ellos se han aprovechado de eso. No es tu culpa.");
			n("Ya...");
			What_Now();
		}
	});

}

function What_Now(){

	j(". . .");

	n("Ya sabes... Hablar con mis padres, es como...");
	n("...esta forma de comunicarnos, &iquest;te acuerdas?");
	n("Es impreciso, impersonal y hace que sea imposible conectar de verdad.");

	j(". . .");
	j("&iquest;Y ahora qu&eacute; va a pasar?");

	Choose({
		"Voy a arruinar los planes de mis padres.": function(message){
			n(message);

			if($.told_jack=="texts"){
				n("Cambiar&eacute; de correo y tel&eacute;fono para hablar contigo.");
				n("As&iacute; ellos no podr&aacute;n entrometerse en nuestras conversaciones nunca m&aacute;s.");
			}else if($.told_jack=="girl"){
				n("Le contar&eacute; todo esto a Claire. Con suerte me ayudar&aacute; a aguantar.");
			}else{
				n("Encontrar&eacute; la manera, de alg&uacute;n modo...");
			}

			What_Now_2();
		},
		"Ir&eacute; a hablar con el orientador ma&ntilde;ana.": function(message){
			n(message);

			if($.told_jack=="abuse"){
				n("Como te promet&iacute;. Como hiciste que te prometiera.");
			}else if($.told_jack=="school"){
				n("El instituto, eso es. No s&eacute; cuando tienen pensado cambiarme.");
			}else{
				n("Al menos habr&aacute; alguien m&aacute;s con quien pueda desahogarme.");
			}

			What_Now_2();
		},
		"Me voy de esta casa.": function(message){
			n(message);

			n("No me refiero a huir. Aunque si lo hiciera, podr&iacute;a quedarme en la tuya.");
			n("Bueno. Voy a intentar conseguir unas pr&aacute;cticas o una beca en Estados Unidos.");
			n("Y alejarme mucho, mucho de esta gente.");
			What_Now_2();
		}
	});

}

function What_Now_2(){

	j("No, pero me refiero... &iquest;qu&eacute; ser&aacute; ahora de nosotros?");
	n("Jack...");
	j("&iquest;Qu&eacute; hacemos? &iquest;Qu&eacute;... qu&eacute; va a pasar?");
	n(". . .");

	Choose({
		"Tenemos que dejarlo.": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("No, no, no...");
			n("No puedo hacerte esto, Jack. No puedo arrastrarte conmigo.");
			j("Bueno, al menos no me digas que 'podemos seguir siendo amigos'.");
			n("Podemos seguir sien...");
			n(". . .");
			j("Porque por supuesto que somos amigos. Claro que s&iacute;.");
			n(". . .");
			What_Now_3();
		},
		"Estaremos juntos mientras podamos.": function(message){
			n(message);

			j(". . .");
			j("Mientras podamos.");
			n(". . .");
			What_Now_3();
		},
		"No lo s&eacute;.": function(message){
			$.breaking_up_soon = true;

			n(message);

			j(". . .");
			What_Now_3();
		}
	});

}

function What_Now_3(){

	n("Es tarde.");
	n("Ahora tengo muchas cosas que consultar con la almohada.");
	j("Vale.");
	j(". . .");
	j("Te quiero, Nicky.");
	n("Yo tambi&eacute;n te quiero, Jack.");
	
	var insult = "";
	if($.hippies) insult+=" <i>hippie</i> moderno";
	if($.im_a_poet) insult+=" poeta <i>amateur</i>";
	if(insult!=""){
		n("Qu&eacute;"+insult+" eres.");
	}else{
		n("Qu&eacute; tonto eres.");
	}

	The_Game_Ends();

}

function The_Game_Ends(){
	Wait(500);
	Start_Outro();
}

