// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){
	
	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("Y cuando dice:");
	j("'He comprado la aerol&iacute;nea'.");
	j("&iexcl;Me ha hecho much&iacute;sima gracia!");
	n("&iquest;En serio ha dicho eso?");
	n("Es que no me he enterado de qu&eacute; se re&iacute;a la gente en el cine.");
	j("Pues, o necesitas subt&iacute;tulos, o tienes que limpiarte mejor los o&iacute;dos.");
	j("Entonces, &iquest;qu&eacute; crees que ha pasado al final?");

	Choose({
		"Todo era un sue&ntilde;o.": Inception_Dream,
		"&iexcl;Seguro que volvi&oacute; al mundo real!": Inception_Awake,
		"Eso da igual, Cobb al final acepta la realidad.": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("O sea, &iquest;que el rollo de la redenci&oacute;n de Cobb no es verdad?");
	n("No, es una mentira, y de las gordas.");
	j("Eres un poco negativo, &iquest;no?");

	Choose({
		"S&iacute;. No encuentro cura a mi amargura.": Sadsack,
		"A veces... pero no cuando estoy contigo.": function(message){
			$.im_a_poet = true;

			n(message);
			j("Ay, Nicky, mi poeta <i>amateur</i>...");
			n("Creo que soy un bomb&oacute;n...");
			n("porque si no ser&iacute;a imposible haber dicho algo tan empalagoso.");
			j("T&uacute; no te preocupes.");
			n("Bueno...");
			Thanks();
		},
		"Solo soy realista.": function(message){
			$.hippies = true;

			n(message);
			j("Tienes que ser m&aacute;s positivo en la vida.");
			n("Y T&Uacute; tienes que dejar de ser un <i>hippie</i> moderno.");
			n("Bueno...");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("Si no, todo lo que ocurre en la peli ser&iacute;a mentira.");
	n("&iquest;Qu&eacute; sentido tiene vivir en una mentira?");
	j("Ay, Nicky, mi poeta <i>amateur</i>...");
	j("Entonces te ha gustado la peli, &iquest;no?");

	Choose({
		"&iexcl;Pues claro que s&iacute;!": function(message){
			n(message);
			Thanks();
		},
		"Meh, a veces era un poco confusa.": function(message){
			n(message);
			j("Creo que esa era la intenci&oacute;n.");
			n("Pues misi&oacute;n cumplida.");
			n("Bueno...");
			Thanks();
		},
		"BWOOOOOOOOOOONG.": function(message){
			n(message);
			j("Me lo tomar&eacute; como un s&iacute;.");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("&iquest;Eh?");
	n("&iexcl;No le import&oacute; si la peonza dejaba de girar al final!");
	n("Realidad, sue&ntilde;o o una mezcla de los dos... a Cobb le da igual.");
	n("Al final Cobb es feliz y eso es lo que importa.");
	j("Eres o muy po&eacute;tico o muy negativo.");

	Choose({
		"Soy poeta y ni siquiera lo sab&iacute;a.": function(message){

			$.im_a_poet = true;

			n("Soy poeta");
			n("y ni siquiera era consciente de ello.");
			j("Para la poes&iacute;a tienes un talento, seguramente viene de nacimiento.");
			n("Es lo que me saca junto a ti de mi tormento.");
			n("Bueno...");
			Thanks();

		},
		"Es que no encuentro cura a mi amargura.": Sadsack,
		"O las dos cosas.":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("LA POES&Iacute;A ES DOLOR. EL ARTE ES SUFRIMIENTO.");
			j("Eso es algo que dir&iacute;a mi madre.");
			n("Tus padres son unos <i>hippies</i> modernos.");
			n("Bueno...");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	n(message);
	j("Ay, pues qu&eacute; mal.");
	j("Espero que nuestra cita en el cine te haya animado un poco.");
	n("&iexcl;Claro que s&iacute;!");
	Thanks();

}

function Thanks(){
	
	n("En fin, &iexcl;gracias por haberme llevado a ver <i>Origen</i>!");
	j("Gracias a ti, Nicky.");
	j("&iexcl;Deber&iacute;as parodiar <i>Origen</i> en ese juego tuyo tan raruno!");
	n("Mmm, quiz&aacute;s.");
	n("&iexcl;Podemos volver a quedar ma&ntilde;ana por la tarde!");

	j("Bueno...");
	n("Espero convencer a mis padres para poder quedarme hasta por la noche.");

	j("Ojal&aacute; les hubieses dicho a tus padres que est&aacute;bamos en el cine en vez de estudiando.");
	n("Voy a fingir que nos vamos a tirar toda la noche empollando para los ex&aacute;... &iquest;qu&eacute;?");

	j("No puedes seguir ocult&aacute;ndoselo.");
	n("Jack...");

	Choose({
		"No pueden enterarse nunca jam&aacute;s.": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("&iquest;En serio? &iquest;Nunca?");
			Hiding();
		},
		"Ojal&aacute; pudiese cont&aacute;rselo.": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"A&uacute;n no estoy preparado para cont&aacute;rselo.": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("Puedo ayudarte.");
			Hiding();
		}
	});

}

function Hiding(){

	j("Nicky, ocultarlo te est&aacute; carcomiendo el alma.");

	if($.inception_answer=="awake"){
		j("Como has dicho antes, &iquest;qu&eacute; sentido tiene vivir en una mentira?");
	}
	if($.inception_answer=="dream"){
		j("Es... como t&uacute; dir&iacute;as... 'una mentira de las gordas', &iquest;no?");
	}

	if($.sadsack){
		j("Cuando has dicho: 'no encuentro cura a mi amargura'...");
		j("Sab&iacute;a que no estabas de broma. Al menos, no del todo.");
	}

	n("Jack, venga ya.");
	j("El a&ntilde;o pasado sal&iacute; del armario y se lo cont&eacute; a mis padres.");
	if($.hippies){
		n("Esa comparaci&oacute;n NO es justa.");
		n("COMO HE DICHO, tus padres y t&uacute; sois una panda de <i>hippies</i> modernos.");
		n("Cuando voy a tu casa, no s&eacute; si el humo es de incienso o de marihuana.");
		j("&iexcl;Oye! &iexcl;Solo fumamos hierba un d&iacute;a s&iacute; y otro no!");
		n("S&iacute;, s&iacute;...");
		j("La cosa es que mis padres me apoyaron cuando sal&iacute; del armario.");
	}else{
		j("&iexcl;Y fueron muy comprensivos!");
	}

	j("Ahora vives en Canad&aacute;. Aqu&iacute; mucha gente es LGBT <i>friendly</i>.");
	j("&iquest;C&oacute;mo sabes que tus padres no van a ser comprensivos contigo tambi&eacute;n?");

	Choose({
		"Los padres asi&aacute;ticos son muy hom&oacute;fobos.": Hiding_2,
		"No s&eacute;, puede que no lo haya intentado...": Hiding_2,
		"No est&aacute;n a favor de lo que no sea ESTUDIAR.": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		n("Bueno... que no pueden enterarse nunca jam&aacute;s.");
	}

	j("Te cuesta confiar.");
	j("Prefieres escribirme en vez de llamarme...");
	j("...porque crees que tus padres podr&iacute;an estar escuch&aacute;ndote a escondidas.");

	n("&iexcl;Ser&iacute;an capaces!");

	j("Esta forma de comunicarnos...");
	j("...es imprecisa, impersonal y hace que sea imposible conectar de verdad.");

	if($.im_a_poet){
		n("Anda, si al final vas a ser un poeta <i>amateur</i> como yo.");
	}else{
		n("No est&aacute; tan mal...");
	}

	if($.coming_out_readiness=="yes"){
		j("T&uacute; mismo has dicho que te encantar&iacute; poder cont&aacute;rselo.");
		j("Cuent&aacute;selo a tus padres.");
	}else{
		j("Nicky.");
	}
	j("Cu&eacute;ntales lo nuestro. Esta noche.");

	Choose({
		"&iexcl;&iquest;Esta noche?! Ni hablar.": Hiding_3,
		"Ay... Lo har&eacute; lo mejor que pueda.": Hiding_3,
		"Lo voy a dejar caer.": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	j(". . .");
	n("No quiero volverlos locos.");
	n("A&uacute;n tengo que convencerlos para quedarme en tu casa ma&ntilde;ana por la noche.");
	n("Les voy a decir que tengo que estudiar contigo otra vez.");
	j(". . .");
	n("Es la hora de la cena. Voy a bajar ya.");

	j("Ey... Estoy de acuerdo.");
	n("&iquest;Qu&eacute;?");
	j("Con tu reflexi&oacute;n sobre el final de la pel&iacute;cula.");
	switch($.inception_answer){
		case "dream": j("Creo que Cobb a&uacute;n estaba so&ntilde;ando, viviendo en una mentira."); break;
		case "awake": j("Creo que Cobb se reuni&oacute; con su familia real en el mundo real."); break;
		case "neither": j("Creo que no importa nada mientras Cobb sea feliz."); break;
	}
	n("Vaya.");
	j("Vale.");
	if($.coming_out_readiness=="maybe"){
		j("Espero que hayas cambiado de idea y ya est&eacute;s preparado para cont&aacute;rselo.");
	}
	j("Buena suerte. Escr&iacute;beme en una hora.");

	var insult = "";
	if($.hippies) insult+=" <i>hippie</i> moderno";
	if($.im_a_poet) insult+=" poeta <i>amateur</i>";
	n("Nos vemos.");
	if(insult!=""){
		n("Qu&eacute;"+insult+" eres.");
	}else{
		n("Qu&eacute; tonto eres.");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}