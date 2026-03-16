/**
 * Off Day Collective — Internationalisation
 * Supports: English (en), Spanish (es), French (fr),
 *           German (de), Portuguese (pt), Japanese (ja), Mandarin (zh)
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────────────── */
  /* TRANSLATIONS  (all value strings use double-quotes to avoid conflicts   */
  /*               with French / other language apostrophes)                 */
  /* ─────────────────────────────────────────────────────────────────────── */

  const T = {

    /* English — empty because the HTML already contains English text.
       applyLang('en') triggers the restore-originals path.              */
    en: {},

    /* ── SPANISH ───────────────────────────────────────────────────────── */
    es: {
      'nav.library':        "Biblioteca",
      'nav.shop':           "Tienda",
      'nav.forum':          "Foro",
      'nav.soon':           "Otoño 2026",
      'hero.eyebrow':       "Volume 01 — Otoño 2026",
      'hero.subhead':       "Esa persona que permanece quieta mientras el mundo se mueve a su alrededor — eso eres tú en tu mejor día libre. Estamos construyendo todo lo que necesitas para llegar allí.",
      'hero.cta':           "Solicitar Acceso Anticipado",
      'phases.eyebrow':     "El Arco del Día",
      'phases.h2':          "Tres tempos. Tres estados mentales.",
      'phase1.meta':        "Fase I",
      'phase1.title':       "Claridad",
      'phase1.hint':        "Descubre el ritual matutino →",
      'phase2.meta':        "Fase II",
      'phase2.title':       "Impulso",
      'phase2.hint':        "Descubre el ritual del día →",
      'phase3.meta':        "Fase III",
      'phase3.title':       "Reflexión",
      'phase3.hint':        "Descubre el ritual nocturno →",
      'stats.label1':       "Educación\nCientífica",
      'stats.label2':       "Objetos Curados\nCon Propósito",
      'stats.label3':       "Acceso al Foro\nComunitario",
      'products.eyebrow':   "Próximamente Otoño 2026",
      'products.h2':        "Una vista previa de lo que se está formando.",
      'products.drag':      "Arrastra para explorar",
      'tag.morning':        "Mañana",
      'tag.body':           "Cuerpo",
      'tag.journey':        "Jornada",
      'tag.writing':        "Escritura",
      'tag.evening':        "Tarde",
      'tag.table':          "Mesa",
      'tag.education':      "Educación",
      'tag.community':      "Comunidad",
      'card1.name':         "Para el Ritual Matutino",
      'card1.material':     "Objetos que retienen el calor y recompensan la lentitud",
      'card1.ritual':       "Ancla tu práctica de Claridad",
      'card1.why':          "Los primeros 90 minutos del día marcan el ritmo de las próximas 12 horas. Todo en esta categoría está seleccionado para mantener tus manos ocupadas, los ojos lejos de pantallas y tu sistema nervioso en su ritmo natural de despertar.",
      'card2.name':         "Para el Cuerpo",
      'card2.material':     "Para la piel, el baño y los sentidos",
      'card2.ritual':       "Profundiza tu liberación vespertina",
      'card2.why':          "Un baño cálido 60–90 minutos antes de dormir provoca vasodilatación periférica — la temperatura corporal baja más rápido y el inicio del sueño se acelera. El calor aplicado con intención no es indulgencia. Es ingeniería circadiana.",
      'card3.name':         "Para la Jornada del Día",
      'card3.material':     "Herramientas para moverse, crear y vagar",
      'card3.ritual':       "Impulsa tu práctica de Momentum",
      'card3.why':          "El movimiento sin estructura produce un 60% más de creatividad que estar sentado. Estas son las cosas que llevas cuando el objetivo es perderse — y atrapar las ideas que te encuentran cuando lo haces.",
      'card4.name':         "La Práctica Analógica",
      'card4.material':     "Cuadernos, lápices y herramientas para pensar en papel",
      'card4.ritual':       "Apoya tu práctica de Reflexión",
      'card4.why':          "Escribir a mano activa vías neuronales diferentes a las del teclado — ralentiza el pensamiento a una velocidad que el cuerpo puede procesar y crea un registro físico de tu vida interior que ningún algoritmo puede optimizar.",
      'card5.name':         "Para la Liberación Vespertina",
      'card5.material':     "Cosas que calman, enraízan e invitan a la presencia",
      'card5.ritual':       "Potencia tu práctica de Reflexión",
      'card5.why':          "La transición del cuerpo hacia el sueño es un proceso biológico de dos horas que la mayoría anula con pantallas. Todo en esta categoría apoya esa transición — calor, peso, poca luz y conexión analógica.",
      'card6.name':         "Algo para la Mesa",
      'card6.material':     "Tés, granos e ingredientes que merecen la pena",
      'card6.ritual':       "Ancla tu mañana y tu noche",
      'card6.why':          "El ritual de preparar algo desde cero — medir, infusionar, probar — activa la corteza prefrontal e interrumpe la rumia. La comida preparada lentamente es comida que obliga a estar presente.",
      'card7.name':         "Las Guías de Ritual",
      'card7.material':     "La ciencia y la práctica, juntas",
      'card7.ritual':       "Incluida en cada Volumen",
      'card7.why':          "Cada objeto incluye una guía: qué hacer con él, por qué funciona y cómo adaptar el ritual a tu propia vida. No son instrucciones — son invitaciones a una práctica que te pertenece.",
      'card8.name':         "El Foro Off Day",
      'card8.material':     "Tu práctica, en diálogo con otros",
      'card8.ritual':       "Disponible con cada Volumen",
      'card8.why':          "El cambio de comportamiento es mucho más duradero en un contexto social. El foro no es una sección de comentarios — es un espacio estructurado para personas que están rediseñando activamente cómo pasan su tiempo fuera del trabajo.",
      'system.eyebrow':     "Cómo Funciona",
      'system.h2part1':     "Los productos solos no cambian tus fines de semana.",
      'system.h2part2':     "Por eso cada Volumen incluye la ciencia.",
      'system.step1.title': "Explora el Volumen",
      'system.step1.desc':  "Explora una selección cuidadosa de objetos de fabricantes independientes — cada uno elegido por su papel específico en los tres tempos del día libre. Tú eliges lo que habla a tu práctica.",
      'system.step2.title': "Aprende Por Qué Funciona",
      'system.step2.desc':  "Cada artículo incluye una guía de ritual y un artículo educativo que explica el mecanismo. No es lenguaje de marketing — es investigación real sobre por qué ciertos estímulos sensoriales cambian tu sistema nervioso, tu sueño y tu creatividad.",
      'system.step2.cta':   "Lee tres de la Biblioteca",
      'system.step3.title': "Practica con el Colectivo",
      'system.step3.desc':  "Los miembros tienen acceso a un espacio comunitario privado donde comparten lo que funciona, adaptan rituales a sus vidas y se apoyan mutuamente. Tu día libre mejora cuando otros también se lo toman en serio.",
      'access.title':       "El Colectivo está formándose.",
      'access.desc':        "Los miembros fundadores compran en Volume 01 a precios fundacionales — con acceso a la biblioteca de educación ritual y un lugar en el Foro Off Day exclusivo para miembros.",
      'access.vp1':         "Objetos de Volume 01, guías rituales y educación",
      'access.vp2':         "Precios de miembro fundador en todo",
      'access.vp3':         "Acceso al foro comunitario privado al lanzamiento",
      'access.emailLabel':  "Ingresa tu firma de correo",
      'access.cta':         "Solicitar Acceso",
      'access.reassurance': "Sin spam. Sin ruido. Solo la señal.",
      'phase1.desc':        "Antes de que comience el ruido. El ritual de Claridad es una práctica matutina estructurada en torno a la lentitud — bebidas calientes hechas a mano, algo para la piel, algo para la página. La investigación muestra que los primeros 90 minutos después de despertar establecen tu curva de cortisol para todo el día. Hemos seleccionado cada objeto en esta fase para extender esa ventana: cosas que retienen el calor, requieren tus manos y recompensan tu paciencia.",
      'phase2.desc':        "El camino arraigado. El Impulso te pone en movimiento sin destino — un paseo sin nada en los oídos, una comida preparada lentamente, algo creado con tus manos en lugar de una pantalla. Los estudios sobre resolución creativa de problemas demuestran que el movimiento físico no estructurado produce más ideas nuevas que la lluvia de ideas deliberada. Cada objeto en esta fase está elegido para sacarte afuera, mantenerte presente y dejar que tu mente vague hacia algún lugar útil.",
      'phase3.desc':        "El profundo exhalor. La Reflexión reemplaza tu desplazamiento nocturno con un ritual de descanso que tu cuerpo realmente reconoce — calor, peso, poca luz y conversación real. Tu transición hacia el sueño comienza 2–3 horas antes de cerrar los ojos, y la mayoría lo anula con pantallas. Cada objeto en esta fase está elegido para apoyar esa transición: cosas que alivian, cosas que te arraigan y cosas que invitan al tipo de presencia que un teléfono no puede proporcionar.",
      'manifesto.h2line1':  "El mundo moderno no tiene peso.",
      'manifesto.h2line2':  "Curamos la gravedad.",
      'manifesto.body1':    "Cada Volumen está organizado en torno a los tres tempos del día. En su interior encontrarás objetos cuidadosamente elegidos — cosas que te ralentizan a propósito — cada uno acompañado de un ritual guiado y una pieza educativa sobre por qué realmente funciona. No son vibras. Es ciencia que se puede sentir.",
      'manifesto.tempo1':   "I. La Quietud Matutina.",
      'manifesto.tempo2':   "II. La Jornada del Día.",
      'manifesto.tempo3':   "III. La Liberación Vespertina.",
      'manifesto.body2':    "Objetos curados. Rituales guiados. Fines de semana que devuelven.",
      'manifesto.body3':    "Cada producto es rastreable hasta su fabricante. Publicamos el nombre, la ubicación y la historia detrás de cada artículo que obtenemos — porque los objetos en tus momentos más tranquilos deben llevar la misma intencionalidad que los momentos en sí.",
      'manifesto.link':     "Explorar los Volúmenes",
      'library.eyebrow':    "De la Biblioteca",
      'library.h2part1':    "La ciencia del descanso.",
      'library.h2part2':    "Gratis.",
      'library.desc':       "Publicamos la investigación detrás de cada ritual que diseñamos. Aquí hay una vista previa de lo que leen los miembros — y lo que está disponible para todos ahora mismo.",
      'library.cta':        "Leer los tres artículos en la Biblioteca",
    },

    /* ── FRENCH ────────────────────────────────────────────────────────── */
    fr: {
      'nav.library':        "Bibliothèque",
      'nav.shop':           "Boutique",
      'nav.forum':          "Forum",
      'nav.soon':           "Automne 2026",
      'hero.eyebrow':       "Volume 01 — Automne 2026",
      'hero.subhead':       "Cette personne qui reste immobile pendant que le monde tourne autour d'elle — c'est vous lors de votre meilleure journée. Nous construisons tout ce dont vous avez besoin pour y arriver.",
      'hero.cta':           "Demander un Accès Anticipé",
      'phases.eyebrow':     "L'Arc du Jour",
      'phases.h2':          "Trois tempos. Trois états d'esprit.",
      'phase1.meta':        "Phase I",
      'phase1.title':       "Clarté",
      'phase1.hint':        "Découvrir le rituel matinal →",
      'phase2.meta':        "Phase II",
      'phase2.title':       "Élan",
      'phase2.hint':        "Découvrir le rituel du jour →",
      'phase3.meta':        "Phase III",
      'phase3.title':       "Réflexion",
      'phase3.hint':        "Découvrir le rituel du soir →",
      'stats.label1':       "Éducation\nScientifique",
      'stats.label2':       "Objets Sélectionnés\nAvec Intention",
      'stats.label3':       "Accès au Forum\nCommunautaire",
      'products.eyebrow':   "Bientôt — Automne 2026",
      'products.h2':        "Un aperçu de ce qui se forme.",
      'products.drag':      "Faites glisser pour explorer",
      'tag.morning':        "Matin",
      'tag.body':           "Corps",
      'tag.journey':        "Journée",
      'tag.writing':        "Écriture",
      'tag.evening':        "Soir",
      'tag.table':          "Table",
      'tag.education':      "Éducation",
      'tag.community':      "Communauté",
      'card1.name':         "Pour le Rituel Matinal",
      'card1.material':     "Objets qui retiennent la chaleur et récompensent la lenteur",
      'card1.ritual':       "Ancre votre pratique de Clarté",
      'card1.why':          "Les 90 premières minutes de votre journée définissent le rythme des 12 heures suivantes. Tout dans cette catégorie est sélectionné pour garder vos mains occupées, vos yeux loin des écrans et votre système nerveux dans son rythme naturel d'éveil.",
      'card2.name':         "Pour le Corps",
      'card2.material':     "Pour la peau, le bain et les sens",
      'card2.ritual':       "Approfondit votre Libération du Soir",
      'card2.why':          "Un bain chaud 60–90 minutes avant de dormir provoque une vasodilatation périphérique — la température corporelle baisse plus vite, l'endormissement s'accélère. La chaleur appliquée intentionnellement n'est pas une indulgence. C'est de l'ingénierie circadienne.",
      'card3.name':         "Pour la Journée",
      'card3.material':     "Outils pour bouger, créer et se perdre",
      'card3.ritual':       "Alimente votre pratique de Momentum",
      'card3.why':          "Le mouvement non structuré produit 60 % de créativité en plus. Ce sont les choses que vous emportez quand l'objectif est de vous perdre — et d'attraper les idées qui vous trouvent quand vous le faites.",
      'card4.name':         "La Pratique Analogique",
      'card4.material':     "Carnets, crayons et outils pour penser sur papier",
      'card4.ritual':       "Soutient votre pratique de Réflexion",
      'card4.why':          "Écrire à la main active des voies neuronales différentes de la frappe — cela ralentit la pensée à une vitesse que le corps peut traiter et crée un registre physique de votre vie intérieure qu'aucun algorithme ne peut optimiser.",
      'card5.name':         "Pour la Libération du Soir",
      'card5.material':     "Des choses qui apaisent, ancrent et invitent à la présence",
      'card5.ritual':       "Alimente votre pratique de Réflexion",
      'card5.why':          "La transition du corps vers le sommeil est un processus biologique de deux heures que la plupart des gens écrasent avec des écrans. Tout dans cette catégorie soutient cette transition — chaleur, poids, lumière tamisée et connexion analogique.",
      'card6.name':         "Quelque Chose pour la Table",
      'card6.material':     "Thés, céréales et ingrédients qui méritent qu'on ralentisse",
      'card6.ritual':       "Ancre votre matin et votre soir",
      'card6.why':          "Le rituel de préparer quelque chose de zéro — mesurer, infuser, goûter — engage le cortex préfrontal et interrompt la rumination. La nourriture préparée lentement est une nourriture qui force la présence.",
      'card7.name':         "Les Guides de Rituel",
      'card7.material':     "La science et la pratique, ensemble",
      'card7.ritual':       "Inclus dans chaque Volume",
      'card7.why':          "Chaque objet est accompagné d'un guide : quoi en faire, pourquoi ça fonctionne, et comment adapter le rituel à votre propre vie. Ce ne sont pas des instructions — ce sont des invitations à une pratique qui vous appartient.",
      'card8.name':         "Le Forum Off Day",
      'card8.material':     "Votre pratique, en dialogue avec d'autres",
      'card8.ritual':       "Accessible avec chaque Volume",
      'card8.why':          "Le changement de comportement est bien plus durable dans un contexte social. Le forum n'est pas une section de commentaires — c'est un espace structuré pour des personnes qui repensent activement leur façon de passer du temps hors du travail.",
      'system.eyebrow':     "Comment ça Marche",
      'system.h2part1':     "Les produits seuls ne changent pas vos week-ends.",
      'system.h2part2':     "C'est pourquoi chaque Volume inclut la science.",
      'system.step1.title': "Explorer le Volume",
      'system.step1.desc':  "Parcourez une sélection réfléchie d'objets de créateurs indépendants — chacun choisi pour son rôle dans les trois tempos du jour de repos. Vous choisissez ce qui parle à votre pratique.",
      'system.step2.title': "Apprendre Pourquoi ça Marche",
      'system.step2.desc':  "Chaque article est accompagné d'un guide de rituel et d'un texte éducatif expliquant le mécanisme. Pas de langage marketing — de vraies recherches sur pourquoi certains stimuli sensoriels modifient votre système nerveux, votre sommeil et votre créativité.",
      'system.step2.cta':   "Lire trois de la Bibliothèque",
      'system.step3.title': "Pratiquer avec le Collectif",
      'system.step3.desc':  "Les membres ont accès à un espace communautaire privé où l'on partage ce qui fonctionne, on adapte les rituels à sa vie et on se tient mutuellement responsable. Votre jour de repos s'améliore quand d'autres le prennent aussi au sérieux.",
      'access.title':       "Le Collectif se forme.",
      'access.desc':        "Les membres fondateurs achètent sur Volume 01 aux tarifs fondateurs — avec accès à la bibliothèque d'éducation rituelle et une place dans le Forum Off Day réservé aux membres.",
      'access.vp1':         "Objets Volume 01, guides rituels et éducation",
      'access.vp2':         "Tarifs fondateurs sur tout",
      'access.vp3':         "Accès au forum communautaire privé au lancement",
      'access.emailLabel':  "Entrez votre signature e-mail",
      'access.cta':         "Demander l'Accès",
      'access.reassurance': "Pas de spam. Pas de bruit. Juste le signal.",
      'phase1.desc':        "Avant que le bruit commence. Le rituel de Clarté est une pratique matinale structurée autour de la lenteur — des boissons chaudes préparées à la main, quelque chose pour la peau, quelque chose pour la page. Les recherches montrent que les 90 premières minutes après le réveil déterminent votre courbe de cortisol pour toute la journée. Nous avons sélectionné chaque objet dans cette phase pour prolonger cette fenêtre : des choses qui retiennent la chaleur, qui exigent vos mains et qui récompensent votre patience.",
      'phase2.desc':        "Le chemin ancré. Momentum vous met en mouvement sans destination — une promenade sans rien dans les oreilles, un repas préparé lentement, quelque chose créé avec vos mains plutôt qu'un écran. Les études sur la résolution créative de problèmes montrent régulièrement que le mouvement physique non structuré produit plus d'idées nouvelles que le brainstorming délibéré. Chaque objet dans cette phase est choisi pour vous faire sortir, vous garder présent et laisser votre esprit vagabonder quelque part d'utile.",
      'phase3.desc':        "Le profond soupir. La Réflexion remplace votre défilement du soir par un rituel d'apaisement que votre corps reconnaît vraiment — chaleur, poids, faible lumière et vraie conversation. Votre transition vers le sommeil commence 2–3 heures avant de fermer les yeux, et la plupart des gens l'écrasent avec des écrans. Chaque objet dans cette phase est choisi pour soutenir cette transition : des choses qui apaisent, des choses qui vous ancrent et des choses qui invitent le type de présence qu'un téléphone ne peut pas offrir.",
      'manifesto.h2line1':  "Le monde moderne est sans poids.",
      'manifesto.h2line2':  "Nous curons la gravité.",
      'manifesto.body1':    "Chaque Volume est organisé autour des trois tempos de la journée. À l'intérieur, vous trouverez des objets soigneusement choisis — des choses qui vous ralentissent délibérément — chacun accompagné d'un rituel guidé et d'un court texte éducatif sur la raison pour laquelle cela fonctionne réellement. Pas des vibrations. De la science que vous pouvez ressentir.",
      'manifesto.tempo1':   "I. L'Immobilité Matinale.",
      'manifesto.tempo2':   "II. Le Voyage du Jour.",
      'manifesto.tempo3':   "III. La Libération du Soir.",
      'manifesto.body2':    "Objets sélectionnés. Rituels guidés. Des week-ends qui redonnent.",
      'manifesto.body3':    "Chaque produit est traçable jusqu'à son fabricant. Nous publions le nom, le lieu et l'histoire derrière chaque article que nous sourçons — parce que les objets dans vos moments les plus calmes doivent porter la même intentionnalité que les moments eux-mêmes.",
      'manifesto.link':     "Explorer les Volumes",
      'library.eyebrow':    "De la Bibliothèque",
      'library.h2part1':    "La science du repos.",
      'library.h2part2':    "Gratuit.",
      'library.desc':       "Nous publions les recherches derrière chaque rituel que nous concevons. Voici un aperçu de ce que lisent les membres — et ce qui est disponible pour tout le monde en ce moment.",
      'library.cta':        "Lire les trois articles dans la Bibliothèque",
    },

    /* ── GERMAN ─────────────────────────────────────────────────────────── */
    de: {
      'nav.library':        "Bibliothek",
      'nav.shop':           "Shop",
      'nav.forum':          "Forum",
      'nav.soon':           "Herbst 2026",
      'hero.eyebrow':       "Volume 01 — Herbst 2026",
      'hero.subhead':       "Diese Person, die ruhig steht, während sich die Welt um sie dreht — das sind Sie an Ihrem besten freien Tag. Wir bauen alles, was Sie brauchen, um dorthin zu gelangen.",
      'hero.cta':           "Frühzugang Beantragen",
      'phases.eyebrow':     "Der Tagesbogen",
      'phases.h2':          "Drei Tempos. Drei Geisteszustände.",
      'phase1.meta':        "Phase I",
      'phase1.title':       "Klarheit",
      'phase1.hint':        "Morgenritual entdecken →",
      'phase2.meta':        "Phase II",
      'phase2.title':       "Dynamik",
      'phase2.hint':        "Tagesritual entdecken →",
      'phase3.meta':        "Phase III",
      'phase3.title':       "Reflexion",
      'phase3.hint':        "Abendritual entdecken →",
      'stats.label1':       "Wissenschaftlich\nFundierte Bildung",
      'stats.label2':       "Kuratierte Objekte\nMit Zweck",
      'stats.label3':       "Community-Forum\nZugang",
      'products.eyebrow':   "Kommt Herbst 2026",
      'products.h2':        "Ein Vorgeschmack auf das, was entsteht.",
      'products.drag':      "Ziehen zum Entdecken",
      'tag.morning':        "Morgen",
      'tag.body':           "Körper",
      'tag.journey':        "Tageslauf",
      'tag.writing':        "Schreiben",
      'tag.evening':        "Abend",
      'tag.table':          "Tisch",
      'tag.education':      "Bildung",
      'tag.community':      "Gemeinschaft",
      'card1.name':         "Für das Morgenritual",
      'card1.material':     "Objekte, die Wärme halten und Langsamkeit belohnen",
      'card1.ritual':       "Verankert Ihre Klarheitspraxis",
      'card1.why':          "Die ersten 90 Minuten des Tages bestimmen den Rhythmus der nächsten 12 Stunden. Alles in dieser Kategorie ist darauf ausgelegt, Ihre Hände beschäftigt und Ihre Augen von Bildschirmen fern zu halten.",
      'card2.name':         "Für den Körper",
      'card2.material':     "Für Haut, Bad und Sinne",
      'card2.ritual':       "Vertieft Ihre Abendentspannung",
      'card2.why':          "Ein warmes Bad 60–90 Minuten vor dem Schlafengehen löst periphere Vasodilatation aus — die Körperkerntemperatur sinkt schneller, der Schlaf setzt früher ein. Bewusst eingesetzte Wärme ist keine Verwöhnung — es ist zirkadiane Optimierung.",
      'card3.name':         "Für den Tageslauf",
      'card3.material':     "Werkzeuge zum Bewegen, Gestalten und Wandern",
      'card3.ritual':       "Nährt Ihre Dynamikpraxis",
      'card3.why':          "Unstrukturierte Bewegung erzeugt 60 % mehr Kreativität als Sitzen. Das sind die Dinge, die Sie mitnehmen, wenn es darum geht, sich zu verlieren — und die Ideen einzufangen, die Sie dabei finden.",
      'card4.name':         "Die Analogpraxis",
      'card4.material':     "Notizbücher, Stifte und Werkzeuge zum Denken auf Papier",
      'card4.ritual':       "Unterstützt Ihre Reflexionspraxis",
      'card4.why':          "Handschreiben aktiviert andere Nervenbahnen als Tippen — es verlangsamt Gedanken auf eine Geschwindigkeit, die der Körper verarbeiten kann, und schafft ein physisches Zeugnis Ihres inneren Lebens.",
      'card5.name':         "Für die Abendentspannung",
      'card5.material':     "Dinge, die beruhigen, erden und zur Präsenz einladen",
      'card5.ritual':       "Nährt Ihre Reflexionspraxis",
      'card5.why':          "Der körperliche Übergang in den Schlaf ist ein zweistündiger biologischer Prozess, den die meisten Menschen mit Bildschirmen überschreiben. Alles in dieser Kategorie unterstützt diesen Übergang — Wärme, Gewicht, gedämpftes Licht und analoge Verbindung.",
      'card6.name':         "Etwas für den Tisch",
      'card6.material':     "Tees, Körner und Zutaten, für die es sich lohnt zu verlangsamen",
      'card6.ritual':       "Verankert Ihren Morgen und Abend",
      'card6.why':          "Das Ritual, etwas von Grund auf zuzubereiten — abmessen, aufbrühen, kosten — aktiviert den präfrontalen Kortex und unterbricht das Grübeln. Langsam zubereitetes Essen zwingt zur Gegenwärtigkeit.",
      'card7.name':         "Die Ritualführer",
      'card7.material':     "Wissenschaft und Praxis, vereint",
      'card7.ritual':       "In jedem Volume enthalten",
      'card7.why':          "Jedes Objekt kommt mit einem Leitfaden: Was tun damit, warum es wirkt und wie Sie das Ritual an Ihr Leben anpassen. Keine Anweisungen — Einladungen zu einer Praxis, die Ihnen gehört.",
      'card8.name':         "Das Off Day Forum",
      'card8.material':     "Ihre Praxis im Dialog mit anderen",
      'card8.ritual':       "Mit jedem Volume freigeschaltet",
      'card8.why':          "Verhaltensänderungen sind in einem sozialen Kontext weit nachhaltiger. Das Forum ist kein Kommentarbereich — es ist ein strukturierter Raum für Menschen, die aktiv neu gestalten, wie sie ihre Zeit außerhalb der Arbeit verbringen.",
      'system.eyebrow':     "Wie Es Funktioniert",
      'system.h2part1':     "Produkte allein verändern Ihre Wochenenden nicht.",
      'system.h2part2':     "Deshalb enthält jeder Band die Wissenschaft.",
      'system.step1.title': "Das Volume Entdecken",
      'system.step1.desc':  "Stöbern Sie in einer sorgsam kuratierten Auswahl unabhängiger Hersteller — jedes Objekt für seine spezifische Rolle in den drei Tempos des freien Tages gewählt. Sie entscheiden, was zu Ihrer Praxis spricht.",
      'system.step2.title': "Verstehen Warum Es Wirkt",
      'system.step2.desc':  "Jedes Artikel kommt mit einem Ritualführer und einem Bildungstext, der den Mechanismus erklärt. Kein Marketingsprache — echte Forschung über die Wirkung auf Nervensystem, Schlaf und Kreativität.",
      'system.step2.cta':   "Drei aus der Bibliothek lesen",
      'system.step3.title': "Mit dem Kollektiv Üben",
      'system.step3.desc':  "Mitglieder erhalten Zugang zu einem privaten Gemeinschaftsraum, in dem Menschen teilen, was funktioniert, Rituale an ihr Leben anpassen und sich gegenseitig zur Verantwortung ziehen.",
      'access.title':       "Das Kollektiv formt sich.",
      'access.desc':        "Frühmitglieder shoppen in Volume 01 zu Gründerpreisen — mit Zugang zur Ritual-Bildungsbibliothek und einem Platz im exklusiven Off Day Forum für Mitglieder.",
      'access.vp1':         "Volume 01 Objekte, Ritualführer und Bildung",
      'access.vp2':         "Gründerpreise auf alles",
      'access.vp3':         "Privater Community-Forum-Zugang zum Launch",
      'access.emailLabel':  "Geben Sie Ihre E-Mail-Adresse ein",
      'access.cta':         "Zugang Beantragen",
      'access.reassurance': "Kein Spam. Kein Lärm. Nur das Signal.",
      'phase1.desc':        "Bevor der Lärm beginnt. Das Clarity-Ritual ist eine strukturierte Morgenpraxis, die sich um Langsamkeit dreht — warme Getränke von Hand zubereitet, etwas für die Haut, etwas für die Seite. Studien zeigen, dass die ersten 90 Minuten nach dem Aufwachen Ihre Kortisolkurve für den gesamten Tag bestimmen. Wir haben jedes Objekt in dieser Phase ausgewählt, um dieses Fenster zu verlängern: Dinge, die Wärme halten, Ihre Hände brauchen und Ihre Geduld belohnen.",
      'phase2.desc':        "Der geerdte Weg. Momentum bringt Sie ohne Ziel in Bewegung — ein Spaziergang ohne etwas in den Ohren, eine langsam zubereitete Mahlzeit, etwas mit den Händen statt einem Bildschirm erschaffen. Studien zur kreativen Problemlösung zeigen konsequent, dass unstrukturierte körperliche Bewegung mehr neue Ideen produziert als gezieltes Brainstorming. Jedes Objekt in dieser Phase ist ausgewählt, um Sie nach draußen zu bringen, gegenwärtig zu halten und dem Gedanken zu erlauben, irgendwo Nützliches zu wandern.",
      'phase3.desc':        "Das tiefe Ausatmen. Reflexion ersetzt Ihr abendliches Scrollen durch ein Entspannungsritual, das Ihr Körper wirklich erkennt — Wärme, Gewicht, schwaches Licht und echtes Gespräch. Ihr Übergang zum Schlaf beginnt 2–3 Stunden bevor Sie die Augen schließen, und die meisten Menschen überschreiben ihn mit Bildschirmen. Jedes Objekt in dieser Phase ist ausgewählt, um diesen Übergang zu unterstützen: Dinge, die beruhigen, Dinge, die Sie erden, und Dinge, die zu der Art von Präsenz einladen, die ein Telefon nicht bieten kann.",
      'manifesto.h2line1':  "Die moderne Welt ist gewichtslos.",
      'manifesto.h2line2':  "Wir kuratieren Gravität.",
      'manifesto.body1':    "Jedes Volume ist um die drei Tempi des Tages organisiert. Darin finden Sie sorgfältig ausgewählte Objekte — Dinge, die Sie absichtlich verlangsamen — jedes gepaart mit einem geführten Ritual und einem kurzen Bildungstext darüber, warum es tatsächlich funktioniert. Keine Stimmungen. Wissenschaft, die man spüren kann.",
      'manifesto.tempo1':   "I. Die Morgendliche Stille.",
      'manifesto.tempo2':   "II. Die Reise des Tages.",
      'manifesto.tempo3':   "III. Das Abendliche Loslassen.",
      'manifesto.body2':    "Kuratierte Objekte. Geführte Rituale. Wochenenden, die zurückgeben.",
      'manifesto.body3':    "Jedes Produkt ist bis zu seinem Hersteller zurückverfolgbar. Wir veröffentlichen den Namen, den Standort und die Geschichte hinter jedem Artikel, den wir beziehen — denn die Objekte in Ihren stillen Momenten sollten dieselbe Intentionalität tragen wie die Momente selbst.",
      'manifesto.link':     "Die Volumes erkunden",
      'library.eyebrow':    "Aus der Bibliothek",
      'library.h2part1':    "Die Wissenschaft der Ruhe.",
      'library.h2part2':    "Kostenlos.",
      'library.desc':       "Wir veröffentlichen die Forschung hinter jedem Ritual, das wir gestalten. Hier ist eine Vorschau dessen, was Mitglieder lesen — und was jetzt für alle verfügbar ist.",
      'library.cta':        "Alle drei Artikel in der Bibliothek lesen",
    },

    /* ── PORTUGUESE ─────────────────────────────────────────────────────── */
    pt: {
      'nav.library':        "Biblioteca",
      'nav.shop':           "Loja",
      'nav.forum':          "Fórum",
      'nav.soon':           "Outono 2026",
      'hero.eyebrow':       "Volume 01 — Outono 2026",
      'hero.subhead':       "Essa pessoa que permanece imóvel enquanto o mundo se move ao redor — é você no seu melhor dia livre. Estamos construindo tudo o que você precisa para chegar lá.",
      'hero.cta':           "Solicitar Acesso Antecipado",
      'phases.eyebrow':     "O Arco do Dia",
      'phases.h2':          "Três tempos. Três estados mentais.",
      'phase1.meta':        "Fase I",
      'phase1.title':       "Clareza",
      'phase1.hint':        "Descobrir o ritual matinal →",
      'phase2.meta':        "Fase II",
      'phase2.title':       "Impulso",
      'phase2.hint':        "Descobrir o ritual do dia →",
      'phase3.meta':        "Fase III",
      'phase3.title':       "Reflexão",
      'phase3.hint':        "Descobrir o ritual noturno →",
      'stats.label1':       "Educação\nBaseada em Ciência",
      'stats.label2':       "Objetos Curados\nCom Propósito",
      'stats.label3':       "Acesso ao Fórum\nComunitário",
      'products.eyebrow':   "Em Breve — Outono 2026",
      'products.h2':        "Uma prévia do que está se formando.",
      'products.drag':      "Arraste para explorar",
      'tag.morning':        "Manhã",
      'tag.body':           "Corpo",
      'tag.journey':        "Jornada",
      'tag.writing':        "Escrita",
      'tag.evening':        "Noite",
      'tag.table':          "Mesa",
      'tag.education':      "Educação",
      'tag.community':      "Comunidade",
      'card1.name':         "Para o Ritual Matinal",
      'card1.material':     "Objetos que guardam calor e recompensam a lentidão",
      'card1.ritual':       "Ancora sua prática de Clareza",
      'card1.why':          "Os primeiros 90 minutos do dia definem o ritmo das próximas 12 horas. Tudo nesta categoria é selecionado para manter suas mãos ocupadas, seus olhos longe das telas e seu sistema nervioso em seu ritmo natural de despertar.",
      'card2.name':         "Para o Corpo",
      'card2.material':     "Para a pele, o banho e os sentidos",
      'card2.ritual':       "Aprofunda sua Liberação Noturna",
      'card2.why':          "Um banho quente 60–90 minutos antes de dormir provoca vasodilatação periférica — a temperatura corporal cai mais rápido e o início do sono é acelerado. O calor aplicado intencionalmente não é indulgência. É engenharia circadiana.",
      'card3.name':         "Para a Jornada do Dia",
      'card3.material':     "Ferramentas para se mover, criar e vagar",
      'card3.ritual':       "Alimenta sua prática de Impulso",
      'card3.why':          "O movimento não estruturado produz 60% mais criatividade do que ficar sentado. São as coisas que você carrega quando o objetivo é se perder — e capturar as ideias que te encontram quando você faz isso.",
      'card4.name':         "A Prática Analógica",
      'card4.material':     "Cadernos, lápis e ferramentas para pensar no papel",
      'card4.ritual':       "Apoia sua prática de Reflexão",
      'card4.why':          "Escrever à mão ativa vias neurais diferentes da digitação — desacelera o pensamento a uma velocidade que o corpo pode processar e cria um registro físico da sua vida interior que nenhum algoritmo pode otimizar.",
      'card5.name':         "Para a Liberação Noturna",
      'card5.material':     "Coisas que acalmam, enraízam e convidam à presença",
      'card5.ritual':       "Alimenta sua prática de Reflexão",
      'card5.why':          "A transição do corpo para o sono é um processo biológico de duas horas que a maioria das pessoas substitui por telas. Tudo nesta categoria apoia essa transição — calor, peso, pouca luz e conexão analógica.",
      'card6.name':         "Algo para a Mesa",
      'card6.material':     "Chás, grãos e ingredientes que merecem ser preparados com calma",
      'card6.ritual':       "Ancora sua manhã e noite",
      'card6.why':          "O ritual de preparar algo do zero — medir, preparar, provar — ativa o córtex pré-frontal e interrompe a ruminação. Comida preparada lentamente é comida que força a presença.",
      'card7.name':         "Os Guias de Ritual",
      'card7.material':     "A ciência e a prática, juntas",
      'card7.ritual':       "Incluído em cada Volume",
      'card7.why':          "Cada objeto vem com um guia: o que fazer com ele, por que funciona e como adaptar o ritual à sua vida. Não são instruções — são convites a uma prática que pertence a você.",
      'card8.name':         "O Fórum Off Day",
      'card8.material':     "Sua prática, em diálogo com outros",
      'card8.ritual':       "Desbloqueado com cada Volume",
      'card8.why':          "A mudança de comportamento é muito mais duradoura em um contexto social. O fórum não é uma seção de comentários — é um espaço estruturado para pessoas que estão redesenhando ativamente como passam seu tempo fora do trabalho.",
      'system.eyebrow':     "Como Funciona",
      'system.h2part1':     "Produtos sozinhos não mudam seus fins de semana.",
      'system.h2part2':     "É por isso que cada Volume inclui a ciência.",
      'system.step1.title': "Explorar o Volume",
      'system.step1.desc':  "Explore uma seleção cuidadosa de objetos de fabricantes independentes — cada um escolhido por seu papel específico nos três tempos do dia livre. Você escolhe o que fala à sua prática.",
      'system.step2.title': "Aprender Por Que Funciona",
      'system.step2.desc':  "Cada item vem com um guia de ritual e um texto educativo explicando o mecanismo. Não é linguagem de marketing — é pesquisa real sobre por que certos estímulos sensoriais mudam seu sistema nervoso, sono e criatividade.",
      'system.step2.cta':   "Leia três da Biblioteca",
      'system.step3.title': "Praticar com o Coletivo",
      'system.step3.desc':  "Os membros têm acesso a um espaço comunitário privado onde as pessoas compartilham o que está funcionando, adaptam rituais às suas vidas e se responsabilizam mutuamente.",
      'access.title':       "O Coletivo está se formando.",
      'access.desc':        "Os membros fundadores compram no Volume 01 a preços fundadores — com acesso à biblioteca de educação ritual e um lugar no Fórum Off Day exclusivo para membros.",
      'access.vp1':         "Objetos Volume 01, guias rituais e educação",
      'access.vp2':         "Preços de membro fundador em tudo",
      'access.vp3':         "Acesso ao fórum comunitário privado no lançamento",
      'access.emailLabel':  "Digite sua assinatura de e-mail",
      'access.cta':         "Solicitar Acesso",
      'access.reassurance': "Sem spam. Sem ruído. Só o sinal.",
      'phase1.desc':        "Antes do ruído começar. O ritual de Clareza é uma prática matinal estruturada em torno da lentidão — bebidas quentes feitas à mão, algo para a pele, algo para a página. A pesquisa mostra que os primeiros 90 minutos após acordar definem sua curva de cortisol para o dia inteiro. Selecionamos cada objeto nesta fase para estender essa janela: coisas que retêm calor, requerem suas mãos e recompensam sua paciência.",
      'phase2.desc':        "O caminho enraizado. O Impulso te coloca em movimento sem destino — uma caminhada sem nada nos ouvidos, uma refeição preparada lentamente, algo criado com as mãos em vez de uma tela. Estudos sobre resolução criativa de problemas mostram consistentemente que o movimento físico não estruturado produz mais ideias novas do que o brainstorming deliberado. Cada objeto nesta fase é escolhido para te levar para fora, manter presente e deixar sua mente vagar para algum lugar útil.",
      'phase3.desc':        "A expiração profunda. A Reflexão substitui sua rolagem noturna por um ritual de relaxamento que seu corpo realmente reconhece — calor, peso, pouca luz e conversa real. Sua transição para o sono começa 2–3 horas antes de fechar os olhos, e a maioria das pessoas a substitui por telas. Cada objeto nesta fase é escolhido para apoiar essa transição: coisas que acalmam, coisas que enraízam você e coisas que convidam ao tipo de presença que um telefone não pode proporcionar.",
      'manifesto.h2line1':  "O mundo moderno não tem peso.",
      'manifesto.h2line2':  "Nós curamos a gravidade.",
      'manifesto.body1':    "Cada Volume é organizado em torno dos três ritmos do dia. Dentro você encontrará objetos cuidadosamente escolhidos — coisas que te desaceleram de propósito — cada um acompanhado de um ritual guiado e um breve conteúdo educativo sobre por que realmente funciona. Não são vibrações. É ciência que você pode sentir.",
      'manifesto.tempo1':   "I. A Quietude Matinal.",
      'manifesto.tempo2':   "II. A Jornada do Dia.",
      'manifesto.tempo3':   "III. A Libertação Noturna.",
      'manifesto.body2':    "Objetos curados. Rituais guiados. Fins de semana que recompensam.",
      'manifesto.body3':    "Cada produto é rastreável até seu fabricante. Publicamos o nome, localização e história por trás de cada item que sourçamos — porque os objetos nos seus momentos mais quietos devem carregar a mesma intencionalidade que os próprios momentos.",
      'manifesto.link':     "Explorar os Volumes",
      'library.eyebrow':    "Da Biblioteca",
      'library.h2part1':    "A ciência do descanso.",
      'library.h2part2':    "Grátis.",
      'library.desc':       "Publicamos a pesquisa por trás de cada ritual que desenvolvemos. Aqui está uma prévia do que os membros leem — e o que está disponível para todos agora.",
      'library.cta':        "Ler todos os três artigos na Biblioteca",
    },

    /* ── JAPANESE ───────────────────────────────────────────────────────── */
    ja: {
      'nav.library':        "ライブラリー",
      'nav.shop':           "ショップ",
      'nav.forum':          "フォーラム",
      'nav.soon':           "2026年秋",
      'hero.eyebrow':       "Volume 01 — 2026年秋",
      'hero.subhead':       "世界が動き続ける中でも静かに立ち続けられるあなた—それがあなたの最高のオフデイの姿です。私たちはそこへ辿り着くために必要なすべてを構築しています。",
      'hero.cta':           "先行アクセスを申し込む",
      'phases.eyebrow':     "一日のアーク",
      'phases.h2':          "三つのテンポ。三つの心の状態。",
      'phase1.meta':        "フェーズ I",
      'phase1.title':       "明晰",
      'phase1.hint':        "朝のリチュアルを探る →",
      'phase2.meta':        "フェーズ II",
      'phase2.title':       "勢い",
      'phase2.hint':        "昼のリチュアルを探る →",
      'phase3.meta':        "フェーズ III",
      'phase3.title':       "内省",
      'phase3.hint':        "夜のリチュアルを探る →",
      'stats.label1':       "科学に基づく\n教育",
      'stats.label2':       "目的を持つ\nキュレートされたオブジェクト",
      'stats.label3':       "コミュニティ\nフォーラムアクセス",
      'products.eyebrow':   "2026年秋リリース予定",
      'products.h2':        "形成されつつあるものの一端。",
      'products.drag':      "ドラッグして探索",
      'tag.morning':        "朝",
      'tag.body':           "ボディ",
      'tag.journey':        "旅",
      'tag.writing':        "筆記",
      'tag.evening':        "夕",
      'tag.table':          "テーブル",
      'tag.education':      "教育",
      'tag.community':      "コミュニティ",
      'card1.name':         "朝のリチュアルのために",
      'card1.material':     "温もりを保ち、ゆっくりを報いるオブジェクト",
      'card1.ritual':       "明晰プラクティスを支える",
      'card1.why':          "一日の最初の90分が、その後12時間の調子を決定します。このカテゴリーのすべては、手を動かし続け、目をスクリーンから離し、神経系を自然な覚醒リズムに保つために選ばれています。",
      'card2.name':         "ボディのために",
      'card2.material':     "肌、入浴、感覚のためのもの",
      'card2.ritual':       "夕のリリースを深める",
      'card2.why':          "就寝60〜90分前の温浴は末梢血管拡張を引き起こし、深部体温が速く低下して入眠が早まります。意図的な熱は甘やかしではありません。概日リズムの工学です。",
      'card3.name':         "一日の旅のために",
      'card3.material':     "動き、創造し、さまよるためのツール",
      'card3.ritual':       "モメンタムプラクティスを支える",
      'card3.why':          "構造化されていない動きは、座っているときと比べ60%多くの創造的なアウトプットを生みます。これは、迷子になることを目的に持ち歩くものです—そして迷子になったときに訪れるアイデアを捉えるために。",
      'card4.name':         "アナログプラクティス",
      'card4.material':     "ノート、鉛筆、紙で考えるためのツール",
      'card4.ritual':       "内省プラクティスをサポート",
      'card4.why':          "手書きはタイピングとは異なる神経経路を活性化します—思考を体が処理できる速度に落とし、どんなアルゴリズムも最適化できない内面生活の物理的な記録を作ります。",
      'card5.name':         "夕のリリースのために",
      'card5.material':     "心を落ち着かせ、地に足をつけ、存在へと誘うもの",
      'card5.ritual':       "内省プラクティスを支える",
      'card5.why':          "睡眠への体の移行は2時間の生物学的プロセスで、ほとんどの人がスクリーンで上書きしています。このカテゴリーのすべてがその移行を支えます—温もり、重さ、弱い光、アナログなつながり。",
      'card6.name':         "テーブルに何か",
      'card6.material':     "ゆっくり向き合う価値のあるお茶、穀物、食材",
      'card6.ritual':       "朝と夜を固定する",
      'card6.why':          "ゼロから何かを作るリチュアル—量る、浸出させる、味わう—は前頭前野を活性化し、反芻思考を中断します。ゆっくり作られた食事は、存在することを強制する食事です。",
      'card7.name':         "リチュアルガイド",
      'card7.material':     "科学とプラクティス、ともに",
      'card7.ritual':       "すべてのVolumeに付属",
      'card7.why':          "すべてのオブジェクトにはガイドが付きます：何をするか、なぜ効くか、そしてリチュアルを自分の生活に適応させる方法。説明書ではありません—あなたのものである実践への招待です。",
      'card8.name':         "Off Day フォーラム",
      'card8.material':     "あなたのプラクティス、他者との対話の中で",
      'card8.ritual':       "すべてのVolumeでアンロック",
      'card8.why':          "行動変容は社会的なコンテキストの中でずっと持続します。フォーラムはコメントセクションではありません—仕事外の時間の使い方を積極的に再設計している人々のための構造化された空間です。",
      'system.eyebrow':     "仕組み",
      'system.h2part1':     "製品だけでは週末は変わりません。",
      'system.h2part2':     "だからこそ、すべてのVolumeには科学が含まれています。",
      'system.step1.title': "Volumeを探索する",
      'system.step1.desc':  "インディペンデントなメーカーから厳選されたオブジェクトのコレクションをご覧ください。それぞれはオフデイの三つのテンポにおける特定の役割のために選ばれています。あなたの実践に語りかけるものを選んでください。",
      'system.step2.title': "なぜ効くかを学ぶ",
      'system.step2.desc':  "すべてのアイテムには、リチュアルガイドとメカニズムを説明する教育記事が付属しています。マーケティング言語ではなく、特定の感覚入力が神経系、睡眠、創造性を変える理由についての本物のリサーチです。",
      'system.step2.cta':   "ライブラリーから3つ読む",
      'system.step3.title': "コレクティブと実践する",
      'system.step3.desc':  "メンバーはプライベートなコミュニティスペースにアクセスでき、人々は何が効果的かを共有し、リチュアルを自分の生活に適応させ、互いに責任を持ち合います。",
      'access.title':       "コレクティブが形成されつつあります。",
      'access.desc':        "初期メンバーは創設者価格でVolume 01をショッピングできます—リチュアル教育ライブラリーへのアクセスと会員専用Off Dayフォーラムの席が得られます。",
      'access.vp1':         "Volume 01のオブジェクト、リチュアルガイド、教育",
      'access.vp2':         "すべてにおける創設者価格",
      'access.vp3':         "ローンチ時のプライベートコミュニティフォーラムアクセス",
      'access.emailLabel':  "メールアドレスを入力してください",
      'access.cta':         "アクセスを申し込む",
      'access.reassurance': "スパムなし。ノイズなし。シグナルだけ。",
      'phase1.desc':        "雑音が始まる前。明晰のリチュアルは、ゆっくりさを中心に組み立てられた構造的な朝の実践です — 手で作る温かい飲み物、肌のためのもの、ページのためのもの。研究によると、起床後最初の90分が一日全体のコルチゾール曲線を決定します。私たちはこの窓を延ばすために、この段階のすべてのオブジェクトを選びました：温もりを保ち、手を必要とし、忍耐を報いるもの。",
      'phase2.desc':        "地に足のついた道。モメンタムは目的地なしにあなたを動かします — 耳に何もない散歩、ゆっくり作られた食事、スクリーンの代わりに手で作るもの。創造的な問題解決に関する研究は、構造化されていない身体的な動きが意図的なブレインストーミングよりも多くの新しいアイデアを生み出すことを一貫して示しています。この段階のすべてのオブジェクトは、外に出て、現在にとどまり、思考が役立つ場所へさまようことを可能にするために選ばれています。",
      'phase3.desc':        "深い吐息。内省は夜のスクロールを、体が本当に認識するくつろぎのリチュアルに置き換えます — 温もり、重さ、弱い光、そして本物の会話。睡眠への移行は目を閉じる2〜3時間前に始まりますが、ほとんどの人がスクリーンでそれを上書きしています。この段階のすべてのオブジェクトは、その移行をサポートするために選ばれています：癒すもの、あなたを地に足つかせるもの、スマートフォンが提供できない種類の存在感へと誘うもの。",
      'manifesto.h2line1':  "現代の世界は無重力だ。",
      'manifesto.h2line2':  "私たちは重力をキュレートする。",
      'manifesto.body1':    "各Volumeは一日の三つのテンポを中心に整理されています。中には慎重に選ばれたオブジェクトがあります — 意図的にあなたを遅らせるもの — それぞれがガイド付きリチュアルと、なぜ実際に効果があるかについての短い教育コンテンツと組み合わされています。感覚ではありません。感じることができる科学です。",
      'manifesto.tempo1':   "I. 朝の静けさ。",
      'manifesto.tempo2':   "II. 一日の旅。",
      'manifesto.tempo3':   "III. 夕暮れの解放。",
      'manifesto.body2':    "厳選されたオブジェクト。ガイド付きリチュアル。恩返しをする週末。",
      'manifesto.body3':    "すべての製品はその製造者まで追跡可能です。私たちが調達するすべてのアイテムの背後にある名前、場所、ストーリーを公開しています — なぜなら、あなたの最も静かな瞬間にあるオブジェクトは、その瞬間自体と同じ意図性を持つべきだからです。",
      'manifesto.link':     "Volumeを探索する",
      'library.eyebrow':    "ライブラリーから",
      'library.h2part1':    "休息の科学。",
      'library.h2part2':    "無料。",
      'library.desc':       "私たちが設計するすべてのリチュアルの背後にある研究を公開しています。これはメンバーが読むものと、今すぐ誰でも利用できるもののプレビューです。",
      'library.cta':        "ライブラリーで3つの記事をすべて読む",
    },

    /* ── MANDARIN CHINESE ───────────────────────────────────────────────── */
    zh: {
      'nav.library':        "图书馆",
      'nav.shop':           "商店",
      'nav.forum':          "论坛",
      'nav.soon':           "2026年秋",
      'hero.eyebrow':       "Volume 01 — 2026年秋",
      'hero.subhead':       "那个在世界不断运转中保持静止的人——那就是你最好的休息日里的自己。我们正在为你打造所需的一切。",
      'hero.cta':           "申请早期访问",
      'phases.eyebrow':     "一天的弧度",
      'phases.h2':          "三种节奏。三种心境。",
      'phase1.meta':        "阶段 I",
      'phase1.title':       "清明",
      'phase1.hint':        "探索晨间仪式 →",
      'phase2.meta':        "阶段 II",
      'phase2.title':       "动力",
      'phase2.hint':        "探索日间仪式 →",
      'phase3.meta':        "阶段 III",
      'phase3.title':       "沉思",
      'phase3.hint':        "探索夜间仪式 →",
      'stats.label1':       "科学支持的\n教育",
      'stats.label2':       "精心策划的物件\n各有其用",
      'stats.label3':       "社区论坛\n访问权限",
      'products.eyebrow':   "即将于2026年秋推出",
      'products.h2':        "正在形成的预览。",
      'products.drag':      "拖动探索",
      'tag.morning':        "早晨",
      'tag.body':           "身体",
      'tag.journey':        "旅程",
      'tag.writing':        "书写",
      'tag.evening':        "傍晚",
      'tag.table':          "餐桌",
      'tag.education':      "教育",
      'tag.community':      "社区",
      'card1.name':         "晨间仪式之选",
      'card1.material':     "保持温暖、回报慢节奏的物件",
      'card1.ritual':       "巩固你的清明实践",
      'card1.why':          "一天最初的90分钟决定了接下来12小时的节奏。此类别的一切均经过精心挑选，让你的双手忙碌、眼睛远离屏幕，神经系统保持自然的清醒节律。",
      'card2.name':         "为身体而选",
      'card2.material':     "为肌肤、沐浴与感官而备",
      'card2.ritual':       "深化你的夜间释放",
      'card2.why':          "睡前60至90分钟的温水浸泡可引发外周血管扩张——核心体温下降更快，入睡加速。有意识地使用热水不是放纵，而是昼夜节律工程。",
      'card3.name':         "日间旅程之选",
      'card3.material':     "行走、创作与漫游的工具",
      'card3.ritual':       "助燃你的动力实践",
      'card3.why':          "非结构化的运动比静坐能产生60%更多的创意输出。这些是你迷失方向时随身携带的物件——捕捉那些在途中找到你的灵感。",
      'card4.name':         "模拟实践",
      'card4.material':     "纸上思考的笔记本、铅笔与工具",
      'card4.ritual':       "支持你的沉思实践",
      'card4.why':          "手写激活的神经路径与打字不同——它将思维减慢至身体可处理的速度，并创造出任何算法都无法优化的内心生活物理记录。",
      'card5.name':         "夜间释放之选",
      'card5.material':     "舒缓、安抚、邀请当下的物件",
      'card5.ritual':       "助燃你的沉思实践",
      'card5.why':          "身体进入睡眠的过渡是一个长达两小时的生物学过程，大多数人用屏幕将其覆盖。此类别的一切都支持这一过渡——温暖、重量、低照度与模拟连接。",
      'card6.name':         "餐桌之选",
      'card6.material':     "值得放慢脚步品味的茶、谷物与食材",
      'card6.ritual':       "固定你的早晨与夜晚",
      'card6.why':          "从零开始准备食物的仪式——称量、浸泡、品尝——激活前额叶皮质并中断反刍思维。慢慢烹制的食物是迫使你活在当下的食物。",
      'card7.name':         "仪式指南",
      'card7.material':     "科学与实践，合而为一",
      'card7.ritual':       "每个Volume均附带",
      'card7.why':          "每件物件均附带指南：如何使用、为何有效，以及如何将仪式调整至适合你的生活。这不是说明书——而是邀请你踏上属于自己的实践之旅。",
      'card8.name':         "Off Day 论坛",
      'card8.material':     "你的实践，在与他人的对话中",
      'card8.ritual':       "每个Volume解锁",
      'card8.why':          "行为改变在社会环境中更为持久。论坛不是评论区——而是一个结构化的空间，供那些积极重新设计工作外时间使用方式的人交流互动。",
      'system.eyebrow':     "运作方式",
      'system.h2part1':     "单靠产品无法改变你的周末。",
      'system.h2part2':     "这就是为什么每个Volume都包含科学。",
      'system.step1.title': "探索Volume",
      'system.step1.desc':  "浏览来自独立制造商精心挑选的物件—每一件都为休息日三种节奏中的特定角色而选择。你来决定什么与你的实践产生共鸣。",
      'system.step2.title': "学习为何有效",
      'system.step2.desc':  "每件物品均附有仪式指南和教育文章，解释其背后的机制。不是营销语言——而是关于特定感官输入如何改变你的神经系统、睡眠与创造力的真实研究。",
      'system.step2.cta':   "从图书馆读三篇",
      'system.step3.title': "与集体一起实践",
      'system.step3.desc':  "会员可访问私人社区空间，人们在那里分享有效的方法、将仪式调整至自己的生活，并相互问责。",
      'access.title':       "集体正在形成。",
      'access.desc':        "早期会员以创始会员价格在Volume 01购物——并获得仪式教育图书馆访问权和会员专属Off Day论坛席位。",
      'access.vp1':         "Volume 01物件、仪式指南与教育",
      'access.vp2':         "全场创始会员定价",
      'access.vp3':         "上线时的私人社区论坛访问",
      'access.emailLabel':  "输入您的电子邮件",
      'access.cta':         "申请访问",
      'access.reassurance': "无垃圾邮件。无噪音。只有信号。",
      'phase1.desc':        "在嘈杂开始之前。清晰仪式是一种以缓慢为中心构建的结构化晨间练习——手工制作的热饮、护肤之物、书写之物。研究表明，醒来后的前90分钟决定了你全天的皮质醇曲线。我们为这一阶段选择了每一件物品，以延长这个时间窗口：那些保持温暖、需要双手、奖励耐心的东西。",
      'phase2.desc':        "扎根的道路。动力让你在没有目的地的情况下移动——一次耳朵里什么都没有的散步、一顿慢慢准备的饭菜、用双手而非屏幕创造的东西。关于创造性问题解决的研究一致表明，非结构化的身体运动比刻意的头脑风暴产生更多新想法。这一阶段的每件物品都是为了让你走出去、保持当下，让思维漫游到有用的地方而选择的。",
      'phase3.desc':        "深深的呼气。反思用你的身体真正能识别的放松仪式取代你的夜间滚动——温暖、重量、低光线和真实的对话。你向睡眠的过渡在你闭上眼睛前2-3小时就开始了，大多数人用屏幕覆盖它。这一阶段的每件物品都是为了支持这种过渡而选择的：舒缓的东西、让你扎根的东西，以及邀请手机无法提供的那种临在感的东西。",
      'manifesto.h2line1':  "现代世界是无重的。",
      'manifesto.h2line2':  "我们策展重力。",
      'manifesto.body1':    "每个Volume都围绕一天的三个节奏组织。里面有精心挑选的物品——那些刻意让你慢下来的东西——每件都配有引导仪式和一篇关于为什么真正有效的简短教育内容。不是感觉。是可以感受到的科学。",
      'manifesto.tempo1':   "I. 晨间静谧。",
      'manifesto.tempo2':   "II. 日间旅程。",
      'manifesto.tempo3':   "III. 傍晚释放。",
      'manifesto.body2':    "精心策划的物品。引导式仪式。给予回报的周末。",
      'manifesto.body3':    "每件产品都可以追溯到其制造者。我们公布每件采购商品背后的名称、地点和故事——因为你最安静时刻的物品应该与那些时刻本身承载同样的意图性。",
      'manifesto.link':     "探索 Volumes",
      'library.eyebrow':    "来自图书馆",
      'library.h2part1':    "休息的科学。",
      'library.h2part2':    "免费。",
      'library.desc':       "我们发布每个我们设计的仪式背后的研究。这是会员所读内容的预览——以及目前所有人都可以获得的内容。",
      'library.cta':        "在图书馆阅读全部三篇文章",
    },

  }; // end T

  /* ─────────────────────────────────────────────────────────────────────── */
  /* ORIGINAL TEXT CACHE — for restoring English                             */
  /* ─────────────────────────────────────────────────────────────────────── */

  let originals = null;

  function cacheOriginals() {
    if (originals) return;
    originals = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      originals[el.dataset.i18n + '__text'] = el.textContent;
    });
    var h2 = document.getElementById('system-h2');
    if (h2) originals['system-h2__html'] = h2.innerHTML;
    var mh2 = document.getElementById('manifesto-h2');
    if (mh2) originals['manifesto-h2__html'] = mh2.innerHTML;
    var lh2 = document.getElementById('library-h2');
    if (lh2) originals['library-h2__html'] = lh2.innerHTML;
    var cta2 = document.getElementById('step2-cta');
    if (cta2) originals['step2-cta__html'] = cta2.innerHTML;
    var heroCta = document.querySelector('.hero-cta');
    if (heroCta && heroCta.firstChild && heroCta.firstChild.nodeType === 3) {
      originals['hero-cta__text'] = heroCta.firstChild.textContent;
    }
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  /* APPLY LANGUAGE                                                           */
  /* ─────────────────────────────────────────────────────────────────────── */

  function applyLang(lang) {
    cacheOriginals();
    var t = T[lang];

    if (!t || lang === 'en') {
      // Restore English originals
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var cached = originals[el.dataset.i18n + '__text'];
        if (cached !== undefined) el.textContent = cached;
      });
      var h2 = document.getElementById('system-h2');
      if (h2 && originals['system-h2__html']) h2.innerHTML = originals['system-h2__html'];
      var mh2 = document.getElementById('manifesto-h2');
      if (mh2 && originals['manifesto-h2__html']) mh2.innerHTML = originals['manifesto-h2__html'];
      var lh2 = document.getElementById('library-h2');
      if (lh2 && originals['library-h2__html']) lh2.innerHTML = originals['library-h2__html'];
      var cta2 = document.getElementById('step2-cta');
      if (cta2 && originals['step2-cta__html']) cta2.innerHTML = originals['step2-cta__html'];
      var heroCta = document.querySelector('.hero-cta');
      if (heroCta && heroCta.firstChild && heroCta.firstChild.nodeType === 3 && originals['hero-cta__text']) {
        heroCta.firstChild.textContent = originals['hero-cta__text'];
      }
    } else {
      // Apply translated strings
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
      });
      // System h2 (contains <br> + <span>)
      var h2 = document.getElementById('system-h2');
      if (h2 && t['system.h2part1'] && t['system.h2part2']) {
        h2.innerHTML = t['system.h2part1'] + ' <br><span class="gold-text italic">' + t['system.h2part2'] + '</span>';
      }
      // Manifesto h2 (contains <br> + gold span + world-word span)
      var mh2 = document.getElementById('manifesto-h2');
      if (mh2 && t['manifesto.h2line1'] && t['manifesto.h2line2']) {
        mh2.innerHTML = t['manifesto.h2line1'] + ' <br><span class="gold-text italic">' + t['manifesto.h2line2'] + '</span>';
      }
      // Library h2 (contains gold span)
      var lh2 = document.getElementById('library-h2');
      if (lh2 && t['library.h2part1'] && t['library.h2part2']) {
        lh2.innerHTML = t['library.h2part1'] + ' <span class="gold-text italic">' + t['library.h2part2'] + '</span>';
      }
      // Step-2 library CTA (preserve the → arrow span)
      var cta2 = document.getElementById('step2-cta');
      if (cta2 && t['system.step2.cta']) {
        cta2.innerHTML = t['system.step2.cta'] + ' <span class="arrow">\u2192</span>';
      }
      // Hero CTA first text node (preserves the ↓ arrow span child)
      var heroCta = document.querySelector('.hero-cta');
      if (heroCta && heroCta.firstChild && heroCta.firstChild.nodeType === 3 && t['hero.cta']) {
        heroCta.firstChild.textContent = t['hero.cta'] + ' ';
      }
    }

    // <html lang> attribute
    document.documentElement.lang = lang;

    // Picker button label
    var code = document.getElementById('lang-code');
    if (code) code.textContent = lang.toUpperCase();

    // Active state on options
    document.querySelectorAll('.lang-option').forEach(function (li) {
      li.classList.toggle('active', li.dataset.lang === lang);
    });

    // Persist preference
    try { localStorage.setItem('odc-lang', lang); } catch (_) {}
  }

  /* ─────────────────────────────────────────────────────────────────────── */
  /* PICKER INITIALISATION                                                    */
  /* ─────────────────────────────────────────────────────────────────────── */

  // Scripts are loaded at the bottom of <body>, so the DOM is already fully
  // parsed when this IIFE runs — no need to wait for DOMContentLoaded.
  // The button toggle itself is handled by an inline onclick attribute on
  // #lang-btn in the HTML, which is unconditionally reliable.
  // This block wires up: close-on-outside-click, close-on-Escape, and
  // language selection, plus restores any saved language preference.
  (function initPicker() {
    // Restore saved preference early so translated text animates in
    // rather than flashing English first (body.loaded fires ~1500 ms later).
    var saved = 'en';
    try { saved = localStorage.getItem('odc-lang') || 'en'; } catch (_) {}
    if (saved !== 'en') applyLang(saved);

    var btn      = document.getElementById('lang-btn');
    var dropdown = document.getElementById('lang-dropdown');
    if (!btn || !dropdown) return;

    // Close when clicking outside the picker
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#lang-picker')) {
        dropdown.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdown.classList.contains('is-open')) {
        dropdown.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });

    // Language selection
    document.querySelectorAll('.lang-option').forEach(function (li) {
      li.addEventListener('click', function () {
        applyLang(li.dataset.lang);
        dropdown.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }());

  window.ODC_applyLang = applyLang;

}());
