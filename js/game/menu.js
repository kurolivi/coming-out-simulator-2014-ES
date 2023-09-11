function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>COMING OUT SIMULATOR 2014</b>");
	N("Un juego medio real sobre medias verdades.");
	N("Hola, compi. Estar&eacute; encantado de acompa&ntilde;arte durante los pr&oacute;ximos 20 minutos (o eso espero).");
	N("&iquest;Qu&eacute; quieres hacer?");

	Choose({
		"&iexcl;Venga, a jugar!": Play,
		"&iquest;Qui&eacute;n eres? (Cr&eacute;ditos)": function(){
			Credits("&iquest;Qui&eacute;n eres?");
		},
		"Mmm, cu&eacute;ntame m&aacute;s. (Acerca del juego)": function(){
			About("Mmm, cu&eacute;ntame m&aacute;s.");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("&iexcl;As&iacute; que te metes de lleno! &iexcl;Muy bien!");
		N("Para qu&eacute; molestarse en leer los Cr&eacute;ditos o el Acerca del juego...");
		p("Shh.");
		N("Vale, vale.");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("&iquest;Por qu&eacute; has hecho que se pueda elegir si era la &uacute;nica opci&oacute;n que quedaba?");
		N("NI IDEA.");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("&iexcl;Venga, vamos!");
	}

	N("Retrocedamos cuatro a&ntilde;os, a 2010...");
	p("&iquest;&iexcl;De eso hace ya CUATRO a&ntilde;os!?");
	N("...a la noche que cambi&oacute; mi vida para siempre.");

	N("Dime, colegui, &iquest;c&oacute;mo crees que acaba todo esto?");

	Choose({
		"&iquest;Con flores y arco&iacute;ris y unicornios gays?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("S&iacute;. As&iacute; es, ni m&aacute;s ni menos, c&oacute;mo termina el juego.");
			p("&iquest;De verdad?");
			N("No.");
			Play_2();
		},
		"Por lo visto, contigo usando Reddit en Starbucks.": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("Oye, que estoy codificando en mi port&aacute;til. Convirtiendo mi experiencia personal en el juego que est&aacute;s jugando.");
			p("Nah, seguramente est&eacute;s procrastinando.");
			N("Dijo la sart&eacute;n al cazo.");
			p("<i>Touch&eacute;</i>.");
			N("En fin...");
			Play_2();
		},
		"TODO ACABA CON SANGRE.": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("Si lo pintas as&iacute;, supongo que mi historia no es tan tr&aacute;gica.");
			N("Aunque es como ver el vaso lleno al cien por cien.");
			p("Sangreeeee.");
			N("En fin...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("Si no te hubieras saltado la secci&oacute;n Acerca del juego, sabr&iacute;as que esta es una historia muy personal.");
		p("Shh.");
	}

	N("En este juego hay di&aacute;logos que mis padres, mi exnovio y yo dijimos de verdad.");
	N("Adem&aacute;s de todo lo que podr&iacute;amos, deber&iacute;amos y nunca deber&iacute;amos haber dicho.");
	N("No importa cu&aacute;l es cu&aacute;l.");
	N("Ya no.");

	Choose({
		"&iquest;C&oacute;mo se gana un juego sin opciones correctas?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("Exacto.");
			p(". . .");
			Play_3();
		},
		"Eres un poco negativo, &iquest;no?": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("Es que la vida no es de color de rosa.");
			p("Eso es que s&iacute;.");
			Play_3();
		},
		"&iquest;Este juego 'real' est&aacute; lleno de mentiras?": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("Aunque el di&aacute;logo fuera 100&nbsp;% real, seguir&iacute;a lleno al 100&nbsp;% de mentiras.");
			p(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("Te pondr&aacute;s en la piel de mi yo de 2010.");
	if(!$.asked_credits){
		N("Ya que te saltaste los Cr&eacute;ditos, mi nombre (a&uacute;n no legal) es Nicky Case. Para que lo sepas.");
		p("Shh.");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "Este juego no termina con unicornios gays. "; break;
		case 2: whatISay = "Este juego es liberarse, madurar, aceptar. "; break;
		case 3: whatISay = "Este juego no acaba en sangre, sino en l&aacute;grimas. "; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "Siento ser un poco negativo."; break;
		case 2: whatISay += "Y no hay respuestas correctas."; break;
		case 3: whatISay += "Y est&aacute; lleno de mentiras."; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("&iexcl;Oye, eso es lo que acabo de decir!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("Mientras juegas...");
	N("Elige bien tus palabras.");
	N("Los personajes recordar&aacute;n todo lo que dices. Y lo que no.");
	p("S&iacute;. Hasta me has recordado mis elecciones durante esta misma conversaci&oacute;n.");
	N("Exacto.");

	N(". . .");
	N("Hay cosas que son dif&iacute;ciles de olvidar.");
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("&iquest;Qui&eacute;n eres?");
	}
	
	N("&iexcl;Ah, qu&eacute; maleducado soy! Me presento.");
	N("Hola, soy Nicky Case.");
	N("No es mi nombre legal, es mi nombre REAL.");

	p("Eso es muy raro, t&iacute;o.");
	if($.asked_about){
		p("Y como me acabas de decir, &iquest;es tu historia personal?");
	}else{
		p("&iquest;Y t&uacute; has hecho este juego?");
	}

	N("Sip, soy el &uacute;nico escritor, programador y artista de Coming Out Simulator 2014.");

	if($.asked_about){
		p("&iquest;Todo esto t&uacute; solo?");
		p("Lo he dicho antes y lo volver&eacute; a decir...");
		p("Por supuesto, egoc&eacute;ntrico.");
		N("Bueno, no es TODO m&iacute;o.");
		N("Los sonidos y el audio est&aacute;n sacados de diversas fuentes de dominio p&uacute;blico.");
	}else{
		N("Pero los sonidos y el audio est&aacute;n sacados de diversas fuentes de dominio p&uacute;blico.");
	}

	N("Aunque quien est&aacute; principalmente detr&aacute;s de este juego soy yo...");
	N("...hay muchas personas detr&aacute;s de su historia.");

	if($.asked_about){
		Choose({
			"&iexcl;Hablando de eso, vamos a jugar ya!": Play
		});
	}else{
		Choose({
			"Hablando de eso, &iquest;y si empezamos a jugar?": Play,
			"&iquest;Por qu&eacute; has hecho esto? (Acerca del juego)": function(){
				About("&iquest;Por qu&eacute; has hecho esto?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("Quer&iacute;a contar mi historia.");
	}else{
		N("Este juego...");
		N("...m&aacute;s que un simulador, en realidad...");
		N("...es una historia muy personal.");
	}
	
	p("Por supuesto, egoc&eacute;ntrico.");
	N("Ja, por supuesto.");

	if($.asked_credits){
		p("En realidad no, un egoc&eacute;ntrico usar&iacute;a su nombre real.");
		N("Ya te he dicho que ES mi nombre re...");
		p("Vale, vale, bicho raro.");
	}

	N("Hice el juego para la Game Jam Nar8. Eso me dio una excusa. &iexcl;Y una fecha l&iacute;mite!");
	p("Procrastinaste hasta el &uacute;ltimo d&iacute;a, &iquest;verdad?");
	N("S&iacute;.");
	N("Ejem... &iexcl;Bueno! Adem&aacute;s, este juego no tiene <i>copyright</i>. Est&aacute; en dominio p&uacute;blico.");
	N("Soy tan abierto con el c&oacute;digo fuente como con mi sexualidad.");

	p("Uf, ese juego de palabras es horrible.");
	N("Pues ag&aacute;rrate que vienen curvas: un terapeuta son 1024 gigapeutas para un programador.");
	p("Noooooo.");

	if($.asked_credits){
		Choose({
			"Vamos a jugar ya.": Play
		});
	}else{
		Choose({
			"Chistes malos aparte, &iquest;podemos jugar ya?": Play,
			"Entonces, &iquest;qui&eacute;n ERES? (Cr&eacute;ditos)": function(){
				Credits("Entonces, &iquest;qui&eacute;n ERES?");
			}
		});
	}

}