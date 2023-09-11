// Then we broke up soon/X...
// Three stories (Lie / Truth / Half-truth) ... one interaction with each.
// Did you skip or not? Tie that into the sections.
// Your final choice, a whaaaaaat.

function Start_Outro(){

	// Just clear dialogue & stuff.
	queue(ClearScene,0);
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse_2");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	///////////////////////////////

	if($.breaking_up_soon){
		N("Y entonces cortamos tres d&iacute;as m&aacute;s tarde.");
	}else{
		N("Y entonces cortamos tres semanas m&aacute;s tarde.");
	}

	// Weave - intro
	if($.main_menu_convo_1==1){
		p(". . .");
		N("Te dije que esto no terminaba con unicornios gays.");
	}else if($.main_menu_convo_1==3){
		p(". . .");
		N("Sin sangre, sino l&aacute;grimas.");
	}else if($.main_menu_convo_2==1){
		p(". . .");
		N("Ten&iacute;as raz&oacute;n. Soy un poco negativo.");
	}

	Choose({
		"VOY A LLORAR.":function(message){
			p(message);
			N("No te reprimas, colegui.");
			Closure();
		},
		"Jo, qu&eacute; pena, t&iacute;o.":function(message){
			p(message);
			N("No lo niego.");
			Closure();
		},
		"No puedo decir que no lo ve&iacute;a venir...":function(message){
			p(message);
			N("Ya... Nosotros tambi&eacute;n lo ve&iacute;amos venir.");
			Closure();
		}
	});

}

function Closure(){

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("Puaj.");
	p("Me da asco usar el mismo color de bocadillo que el personaje del padre.");

	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("Eso me recuerda que muchos de los personajes se han cambiado.");
	N("Todos los nombres se han modificado, menos el m&iacute;o.");
	N("No he incluido a mi hermano peque&ntilde;o porque no tiene culpa de nada.");
	N("Y he metido a mi padre, a pesar de haber abandonado la familia mucho antes de 2010.");

	if($.main_menu_convo_2==3){
		N("Como hab&iacute;as dicho, este juego 'real' est&aacute; lleno de mentiras.");
	}
	
	p("Por lo menos podr&iacute;as haberme puesto un color distinto.");
	N("Han pasado cuatro a&ntilde;os desde esa noche...");
	N("&iquest;Qu&eacute; crees que pas&oacute; despu&eacute;s?");

	if($.main_menu_convo_2==2){
		N("No te preocupes. Como dijimos en el men&uacute; principal, no hay respuestas correctas.");
	}

	$.coming_out_stories_left = 3;
	$.order_of_stories = [];

	Choose({
		"Ni idea, t&iacute;o, dilo de una maldita vez.": function(message){
			p(message);
			N("Vale, te voy a contar lo que pas&oacute;.");
			N("...y lo que pas&oacute; y lo que que pas&oacute;.");
			p("Qu&eacute;.");
			Closure_Story();
		},
		"D&eacute;jame adivinar, &iquest;It Gets Better&trade;, 'todo mejora'?": function(message){
			p(message);
			N("&iexcl;La verdad es que s&iacute;! En las tres versiones de lo que pas&oacute;.");
			p("Qu&eacute;.");
			Closure_Story();
		},
		"&iquest;Flores y arco&iacute;ris y unicornios gay?": function(message){
			p(message);
			N("&iexcl;La verdad es que s&iacute;! Al menos, en una de las tres versiones de lo que pas&oacute;.");
			p("Claro.");
			Closure_Story();
		}
	});

}

function Closure_Story(){

	if($.coming_out_stories_left==3){
		N("&iquest;Qu&eacute; historia despu&eacute;s de mi salida del armario quieres escuchar?");
		N("No te preocupes, vas a poder escucharlas todas.");
	}else if($.coming_out_stories_left==2){
		N("Y ahora, &iquest;qu&eacute; versi&oacute;n quieres escuchar?");
	}else if($.coming_out_stories_left==1){
		N("Por &uacute;ltimo, vamos a escuchar la historia que queda...");
	}else{
		Finale_1();
		return;
	}

	$.coming_out_stories_left -= 1;

	var options = [];
	if(!$.told_story_lie) options["La Mentira."]=Tell_Me_A_Lie;
	if(!$.told_story_truth) options["La Verdad."]=Tell_Me_A_Truth;
	if(!$.told_story_half_truth) options["La Media Verdad."]=Tell_Me_A_Half_Truth; 
	Choose(options);

}

function Is_Last_Story(){
	if($.coming_out_stories_left==0){
		if($.asked_about && $.asked_credits){
			p("Otra vez me haces elegir cuando solo queda una &uacute;nica opci&oacute;n...");
		}else{
			p("&iquest;Por qu&eacute; has hecho que se pueda elegir si era la &uacute;nica opci&oacute;n que quedaba?");
			N("Ni idea. Sigamos.");
		}
	}
}



function Tell_Me_A_Lie(message){

	$.told_story_lie = true;
	$.order_of_stories.push("lie");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("Estupendo.");
	Is_Last_Story();

	N("Hui de casa con solo una maleta llena de ropa interior comestible.");
	if($.im_a_poet){
		N("Vagu&eacute; por Canad&aacute;. Me ganaba la vida escribiendo poes&iacute;a <i>amateur</i> a desconocidos.");
	}else{
		N("Vagu&eacute; por Canad&aacute;. Me ganaba la vida creando juegos de internet que no eran divertidos.");
	}
	N("Com&iacute; flores, segu&iacute; los arco&iacute;ris y me hice amigo de un unicornio homosexual.");
	p(". . .");
	N("Finalmente llegu&eacute; a Alaska, y all&iacute; conoc&iacute; a una pareja de adultos bisexuales que se llamaban Bonnie y Clyde.");
	N("Bonnie era una <i>sugar mommy</i> de unos 30 y pico a&ntilde;os, y Clyde un <i>sugar daddy</i> de unos 40 y pocos.");

	// FAMILY WITH BENEFITS
	// Weave in -- top or bottom

	Choose({
		"&iquest;La ropa interior comestible es comida y ropa?": function(message){
			$.outro_convo_lie = 1;
			p(message);
			N("&iexcl;Y gracias a mi flexibilidad, la maleta tambi&eacute;n serv&iacute;a como vivienda!");
			Tell_Me_A_Lie_2();
		},
		"Esta historia est&aacute; jodidamente jodida.": function(message){
			$.outro_convo_lie = 2;
			p(message);
			N("MI HISTORIA, MIS NORMAS.");
			Tell_Me_A_Lie_2();
		},
		"...\"sugars\".": function(message){
			$.outro_convo_lie = 3;
			p(message);
			N("Tambi&eacute;n conocidos como asaltacunas.");
			Tell_Me_A_Lie_2();
		}
	});
}
function Tell_Me_A_Lie_2(){
	
	N("Me adoptaron y me convert&iacute; en su yogur&iacute;n a tiempo completo.");

	if($.outro_convo_lie==1){
		p("...De nuevo, gracias a... bueno... tu flexibilidad.");
	}

	switch($.top_or_bottom){
		case "top": N("Como ya sabemos, me gusta que mis parejas sean 'la mujer' de la relaci&oacute;n."); break;
		case "bottom": N("Como ya sabemos, normalmente soy 'la mujer' de la relaci&oacute;n."); break;
		case "versatile": N("Como ya sabemos, me gusta ir turn&aacute;ndome el papel de 'la mujer' de la relaci&oacute;n."); break;
	}

	N("Me criaron, me quisieron, y me convert&iacute; en un eje productivo de la sociedad.");

	switch($.outro_convo_lie){
		case 2: p("Y cuanto m&aacute;s la miras de cerca, M&Aacute;S <i>jodidura</i> hay en lo jodidamente jodido."); break;
		case 3: p("...\"SUGARS\"."); break;
	}

	N("Eran mi nueva familia.");
	N("Una familia... con derecho a roce.");

	p(". . .");

	Closure_Story();

}





function Tell_Me_A_Truth(message){

	$.told_story_truth = true;
	$.order_of_stories.push("truth");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("Aqu&iacute; va.");
	Is_Last_Story();

	N("Segu&iacute; el consejo de Jack y parodi&eacute; <i>Origen</i> en mi juego web raruno 'Reimagine: The Game'.");
	switch($.inception_answer){
		case "awake": N("Sin embargo, no dije que Cobb estaba despierto al final."); break;
		case "dream": N("Sin embargo, no dije que en la pel&iacute;cula era todo un sue&ntilde;o."); break;
		case "neither": N("Todav&iacute;a sigo pensando que no importa si Cobb segu&iacute;a so&ntilde;ando."); break;
	}
	N("&iexcl;Reimagine: The Game se hizo famosillo en internet! Muy &uacute;til para ponerlo en el portfolio.");
	N("Unos meses m&aacute;s tarde, consegu&iacute; unas pr&aacute;cticas en Electronic Arts en la Bay Area de San Francisco. Muy lejos de mi familia en Canad&aacute;.");

	Choose({
		"&iexcl;Puaj!, &iquest;Electronic Arts...?": function(message){
			$.outro_convo_truth = 3;
			p(message);

			N("Ya, lo s&eacute;, lo s&eacute;.");
			N("Ahora hago juegos indie pretenciosos como este para pagar por mis pecados.");
			p("Paga con m&aacute;s ganas, joder.");
			Tell_Me_A_Truth_2();
		},
		"Y la Bay Area es muy LGBT <i>friendly</i>.": function(message){
			$.outro_convo_truth = 2;
			p(message);

			N("&iexcl;Por eso la llaman la Gay Area!");
			p("Eh... nadie la llama as&iacute;.");
			Tell_Me_A_Truth_2();
		},
		"&iexcl;Me encanta EA! Han hecho Los Sims, &iquest;no?": function(message){
			$.outro_convo_truth = 1;
			p(message);

			N("&iexcl;S&iacute;! Pero no trabaj&eacute; en ese proyecto. Nuestro equipo hac&iacute;a una versi&oacute;n web de...");
			N("[LO SIENTO, COLEGUI, ES CONFIDENCIAL]");
			p("Oh.");
			Tell_Me_A_Truth_2();
		}
	});

}
function Tell_Me_A_Truth_2(){
	
	N("Despu&eacute;s de EA, segu&iacute; haciendo juegos indie.");
	N("Pero segu&iacute; en contacto con mis amigos de EA y me qued&eacute; en la Bay Area.");

	N("Mejor&eacute; mis conocimientos t&eacute;cnicos.");
	N("Mejor&eacute; mis habilidades sociales.");
	N("Y aqu&iacute;... por fin estoy empezando a saber cu&aacute;l es mi identidad.");

	switch($.outro_convo_truth){
		case 1: p("Me muero por jugar 'Lo siento, colegui, es confidencial: el videojuego'."); break;
		case 2: p("Pero en serio, nadie la llama la Gay Area."); break;
		case 3: p("Pero en serio, puaj, Electronic Arts."); break;
	}

	Closure_Story();

}





function Tell_Me_A_Half_Truth(message){
	$.told_story_half_truth = true;
	$.order_of_stories.push("half-truth");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("Vale.");
	Is_Last_Story();

	N("Claire, en un ir&oacute;nico giro del destino, tambi&eacute;n era bisexual.");
	N("Nos lo confesamos mutuamente un d&iacute;a que estudi&aacute;bamos "+$.studying_subject+".");

	p("&iexcl;Y qu&eacute; giro!");

	N("Claire no estaba segura de su orientaci&oacute;n sexual, al igual que yo.");
	N("Ninguno ten&iacute;a mucha experiencia. Claire solo hab&iacute;a estado con mujeres y yo solo hab&iacute;a estado con Jack.");

	// CLAIRE AND I HELPED EACH OTHER EXPLORE OURSELVES, LESS GUILT, MORE EXPERIENCE.
	// Weave in -- studying what

	Choose({
		"Como si te vieras al espejo, pero al rev&eacute;s...": function(message){
			$.outro_convo_half_truth = 1;
			p(message);
			N("Bueno, todo lo que se ve en el espejo est&aacute; al rev&eacute;s.");
			p("Me has entendido.");
			N("Pero s&iacute;, Claire y yo nos contamos nuestras experiencias.");
			Tell_Me_A_Half_Truth_2();
		},
		"&iquest;Os ense&ntilde;&aacute;steis el uno al otro?": function(message){
			$.outro_convo_half_truth = 3;
			p(message);
			Tell_Me_A_Half_Truth_2();
		},
		"&iquest;Hicisteis cositas?": function(message){
			$.outro_convo_half_truth = 2;
			p(message);
			N("No. Era como una hermana. Una hermana con lo que no tendr&iacute;a sexo.");
			p("No... no era necesario que lo aclararas.");
			N("Pero s&iacute; que Claire y yo nos contamos nuestras experiencias.");
			Tell_Me_A_Half_Truth_2();
		}
	});

}
function Tell_Me_A_Half_Truth_2(){
	
	N("&iexcl;E intercambiamos consejos!");
	N("Por ejemplo... hacer un movimiento de 'ven' con los dedos o frotar la punta contra el cielo de la boca.");
	p("No era necesario dar tanta informaci&oacute;n, t&iacute;o...");

	if($.changing_schools || !$.father_oblivious){
		N("Al final me cambi&eacute; a su instituto.");
	}

	N("&Eacute;ramos mejores amigos. &iexcl;Todav&iacute;a lo somos! Ambos vivimos ahora en Estados Unidos, lejos de nuestras horribles familias.");
	N("Juntos, nos ayudamos a vencer nuestras inseguridades y a descubrir qui&eacute;nes &eacute;ramos...");
	N("Unas orgullosas putas bisexuales.");

	p("Qu&eacute; historia m&aacute;s conmoverdora, supongo.");
	
	N("Y por supuesto, nos ayud&aacute;bamos el uno al otro, tanto en asuntos de la vida como del coraz&oacute;n.");

	p(". . .");

	Closure_Story();

}





function Finale_1(){
	
	N("&iexcl;Y esa era la &uacute;ltima historia de lo que pas&oacute; despu&eacutes de salir del armario!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);
	
	Show("cup",null);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");

	Wait(1000);
	Show("nicky","coffee_nicky_still_2");

	//////////////////////////

	N("Colegui, no pude evitar darme cuenta de que...");
	if($.order_of_stories[0]=="truth"){
		N("Elegiste la Verdad primero.");
	}else if($.order_of_stories[2]=="truth"){
		N("Dejaste para el final la Verdad.");
	}else if($.order_of_stories[0]=="lie"){
		N("Elegiste la Mentira primero.");
	}else{
		N("Dejaste para el final la Mentira.");
	}
	N("&iquest;Qu&eacute; dice esto de ti?...");
	p(". . .");

	p("Sabes una cosa... normalmente cuando un juego te da distintos finales, no los hace TODOS A LA VEZ.");
	N("&iexcl;Ja! &iquest;Cre&iacute;as que eran FINALES?");

	Choose({
		"D&eacute;jame adivinar... &iquest;es solo el principio?": function(message){
			p(message);
			N("Es solo el prin... Oh. Vale, s&iacute;.");
			Finale_2();
		},
		"A ver, s&iacute;. Se ha acabado ya el juego, &iquest;no?": function(message){
			p(message);
			N("Cierto... pero la historia, que es mi historia, mi vida, contin&uacute;a.");
			Finale_2();
		},
		"Madre m&iacute;a, &iquest;cu&aacute;nto DURA este maldito juego?": function(message){
			p(message);
			N("No te preocupes. La siguiente elecci&oacute;n es la &uacute;ltima, te lo prometo.");
			Finale_2();
		}
	});

}

function Finale_2(){

	Show("nicky","coffee_nicky_packup_1");

	N(". . .");
	N("La verdad es que si pudiera volver atr&aacute;s y revivir todas las otras opciones posibles...");
	N("...que en parte lo he hecho creando este juego...");
	N("...no cambiar&iacutea absolutamente nada.");

	Show("nicky","coffee_nicky_packup_2");

	// SERIOUSNESS.
	PlaySound("sfx","laptop_shut");
	PlaySound("bg","bedroom_1",{loop:-1, volume:0.4});

	p("? ? ?");

	if($.punched){
		N("Que leyeran mis mensajes. Que me obligaran a cambiar de instituto. Que me dieran un pu&ntilde;etazo en la cara.");
	}else if($.father_oblivious==false){
		N("Que leyeran mis mensajes. Que me obligaran a cambiar de instituto. Que abusaran verbalmente de m&iacute;.");
	}else if($.changing_schools){
		N("Que leyeran mis mensajes. Que me obligaran a cambiar de instituto. Que intentaran que tuviera una 'terapia de reconversi&oacute;n' con Claire.");	
	}else{
		N("Que leyeran mis mensajes. Que no tuviera horas libres desp&uacute;es del instituto. Que intentaran que tuviera una 'terapia de reconversi&oacute;n' con Claire.");
	}

	N("De alg&uacute;n modo, tengo una especie de s&iacute;ndrome de Estocolmo... Agradezco todo lo que pas&oacute;.");

	Choose({
		"Qu&eacute;.": Finale_3,
		"Qu&eacute;&eacute;&eacute;&eacute;.": Finale_3,
		"Qu&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;&eacute;.": Finale_3
	});

}

function Finale_3(message){

	p(message);

	PlaySound("sfx","laptop_pack");
	Show("nicky","coffee_nicky_packup_3");

	N("&iexcl;S&iacute;, en serio!");
	N("No habr&iacute;a tenido ning&uacute;n tipo de motivaci&oacute;n para rehacer mi vida... si la anterior no hubiera sido una puta mierda.");

	PlaySound("sfx","laptop_pack_2");
	Show("nicky","coffee_nicky_packup_4");

	N("En el los &uacute;ltimos meses de 2010, Dan Savage lanz&oacute; la campa&ntilde;a It Gets Better&trade;, 'todo mejora'.");
	N("Las tres historias... la Mentira, la Verdad, y la Media Verdad... comparten una verdad com&uacute;n.");
	N("Todo mejora.");

	p(". . .");

	N("Y...");
	N("Al final...");
	N("De este largo, est&uacute;pido y penoso juego...");
	N("En el que jugu&eacute; contra personas que deber&iacute;an haber estado en mi equipo...");

	p(". . .");

	N("Gan&eacute;.");
	N(". . .");
	N("Gan&eacute;.");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	// CUTSCENE -- MY NEW BOYFRIEND
	Wait(1000);
	
	PlaySound("sfx2","laptop_pack");
	Show("nicky","coffee_nicky_date_1");
	Wait(1000);
	
	PlaySound("sfx","step_2");
	Show("nicky","coffee_nicky_date_2");
	Wait(1000);
	
	PlaySound("sfx","step_1");
	Show("nicky","coffee_nicky_date_3");
	Wait(1000);
	
	PlaySound("sfx","step_2",{volume:0.75});
	Show("nicky","coffee_nicky_date_4");
	Wait(1000);

	PlaySound("sfx","step_1",{volume:0.5});
	Show("nicky",null);
	Wait(1000);

	PlaySound("sfx","step_2",{volume:0.25});
	Choose({
		"&iquest;JUGAR DE NUEVO?": Finale_4
	});

}
function Finale_4(message){
	
	p(message);
	N("La vida real no se puede jugar de nuevo.");

	Wait(800);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	//queue(ClearScene,0); // coz the sound's cool!
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);


}


