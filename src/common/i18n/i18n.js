angular.module('i18n', [
  'pascalprecht.translate'
])
  .config( function ($translateProvider) {
    /**
     * Available languages :
     * English
     * French
     */


      //ENGLISH
    $translateProvider.translations('en', {
      //WEBSITE
      'MENU.WEBSITE.NAME' : 'Wake-me-up.co',
      'WEBSITE.TITLE' : 'Internet\'s favorite alarm clock!',
      'WEBSITE.DESCRIPTION' : 'Use Youtube, SoundCloud, Deezer, MixCloud or your favorite radio link as an online alarm clock!',

      //PLURAL
      'PLURAL' : 's',
      'SINGLE' : '',
      'ZERO' : 's',

      //MESSAGE
      'LOADING' : 'Loading',
      'URL' : 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Add a language',
      'LANGUAGE': 'Language',

      //TIME
      'HOUR' : 'Hour',
      'MINUTE' : 'Minute',

      //MENU
      'MENU.ALARM.NAME' : 'Alarm clock',
      'MENU.CHRONO.NAME' : 'Chronometer',
      'MENU.COMMENTS.NAME' : 'Comments',
      'MENU.FACEBOOK' : 'Facebook page',
      'MENU.OLD.VERSION' : 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE' : 'Alarm settings',
      'ALARM.PANEL.PLATFORM' : 'Musical Platform',
      'ALARM.PANEL.PLATFORM.DESCRIPTION' : 'Use Youtube, SoundCloud, MixCloud, Deezer or Dailymotion',
      'ALARM.YOURCHOICE' : 'Propose a sound on our ',

      'ALARM.PANEL.RADIO' : 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION' : 'Use a radio link',
      'ALARM.RADIO1': 'Hot97',
      'ALARM.RADIO1.URL': 'http://player.liquidcompass.net/WQHTFM',
      'ALARM.RADIO2': 'WNYC',
      'ALARM.RADIO2.URL': 'https://www.wnyc.org/radio/#/streams/wnyc-fm939',
      'ALARM.RADIO3': 'Magic 105.4',
      'ALARM.RADIO3.URL': 'http://radioplayer.magic.co.uk/live/',
      'ALARM.RADIO4': 'CBS',
      'ALARM.RADIO4.URL': 'http://player.radio.com/listen/station/cbs-radio-news/',

      'ALARM.PANEL.URL' : 'URL',
      'ALARM.PANEL.TEST' : 'Test URL',

      'ALARM.PANEL.OFF' : 'Off',
      'ALARM.WILL.RING' : 'The alarm will ring in ',
      'ALARM.KEEPON.MESSAGE' : 'In order for the alarm to ring, please keep your computer running',

      'ALARM.PANEL.HOUR' : 'Hour',
      'ALARM.PANEL.HHOUR' : 'hour',
      'ALARM.PANEL.MINUTE' : 'Minute',
      'ALARM.PANEL.MMINUTE' : 'minute',
      'ALARM.PANEL.SECOND' : 'Second',
      'ALARM.PANEL.SSECOND' : 'second',
      'ALARM.PANEL.ACTIVATE' : 'Activate',

      //ERROR
      'FORM.ERROR.URL' : 'The URL is not valid, example: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE' : 'The minute is not valid, it must be between 0 et 59.',
      'FORM.ERROR.HOUR' : 'The hour is not valid, it must be between 0 and 23',
      'FORM.ERROR' : 'Non valid hour, example : 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE' : 'Chronometer',
      'CHRONO.BUTTON.START' : 'Start',
      'CHRONO.BUTTON.PAUSE' : 'Pause',
      'CHRONO.BUTTON.LAP' : 'Lap',
      'CHRONO.BUTTON.STOP' : 'Stop',
      'CHRONO.BUTTON.CLEAR' : 'Clear',
      'CHRONO.BUTTON.RESUME' : 'Resume',
      'CHRONO.RECORD.TIME' : 'Registered laps',

      //AD PANEL
      'AD.PANEL.TITLE' : 'Advertising',
      'AD.PANEL.SUBTITLE' : 'Because it takes times to create a website',
      'AD.PANEL.PARAGRAPH1' : 'You are using AdBlock, like me! However, I have spent a lot of times making this website looking as awesome as this.',
      'AD.PANEL.PARAGRAPH2' : 'I thank you if you choose to whitelist this website, I would raise my glass to you. Otherwise, I respect your choice and I hope you enjoy this gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE' : 'Facebook comments',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE' : 'Last 100 alarms registered',
      'FIREBASE.PANEL.LOADING' : 'Loading users alarm...',
      'FIREBASE.PARAGRAPH' : "Loading data from the Firebase database. If there are too many users connected it will not load... Sorry for any inconvenience.",
      'FIREBASE.LOOKFOR' : 'Look for an alarm on the',
      'REGISTRED.ALARM' : 'registred',

      //FOOTER
      'FOOTER.PART1' : 'Wakes up you with',
      'FOOTER.PART2' : 'since 2011',
      'FOOTER.IS.OPENSOURCE' : ' is open source'
    });

    //FRENCH
    $translateProvider.translations('fr', {
      //WEBSITE
      'MENU.WEBSITE.NAME' : 'Wake-me-up',
      'WEBSITE.TITLE' : 'Le réveil en ligne préféré des internautes!',
      'WEBSITE.DESCRIPTION' : 'Servez-vous de vos liens YouTube, Deezer, SoundCloud, Mixcloud pour vous réveiller.',

      //PLURAL
      'PLURAL' : 's',
      'SINGLE' : '',
      'ZERO' : '',

      //MESSAGE
      'LOADING' : 'Chargement',
      'URL' : 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Ajoutez une langue',
      'LANGUAGE': 'Langue',

      //TIME
      'HOUR' : 'Heure',
      'MINUTE' : 'Minute',

      //MENU
      'MENU.ALARM.NAME' : 'Alarme',
      'MENU.CHRONO.NAME' : 'Chronomètre',
      'MENU.COMMENTS.NAME' : 'Commentaires',
      'MENU.FACEBOOK' : 'Page Facebook',
      'MENU.OLD.VERSION' : 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE' : 'Paramètres alarme',
      'ALARM.PANEL.PLATFORM' : 'Plateforme musicale',
      'ALARM.PANEL.PLATFORM.DESCRIPTION' : 'Utilisez Youtube, SoundCloud, MixCloud, Deezer ou Dailymotion',
      'ALARM.YOURCHOICE' : 'Ton son! Propose le sur la page ',

      'ALARM.PANEL.RADIO' : 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION' : 'Utilisez un lien radio',

      'ALARM.RADIO1': 'Nova',
      'ALARM.RADIO1.URL': 'http://www.novaplanet.com/radionova/player',
      'ALARM.RADIO2': 'NRJ',
      'ALARM.RADIO2.URL': 'http://play.nrj.fr/nrj/nrj.html',
      'ALARM.RADIO3': 'Mouv',
      'ALARM.RADIO3.URL': 'http://www.lemouv.fr/player',
      'ALARM.RADIO4': 'RTL',
      'ALARM.RADIO4.URL': 'http://www.rtl.fr/direct',

      'ALARM.PANEL.URL' : 'URL',
      'ALARM.PANEL.TEST' : 'Tester l\'URL',

      'ALARM.PANEL.ACTIVATE' : 'Activer',
      'ALARM.PANEL.OFF' : 'Off',
      'ALARM.WILL.RING' : 'L\'alarme sonnera dans',
      'ALARM.KEEPON.MESSAGE' : 'Gardez votre ordinateur allumé pour faire fonctionner l\'alarme',

      //ERROR
      'FORM.ERROR.URL' : 'L\'URL n\'est pas valide, exemple: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE' : 'Les minutes ne sont pas au bon formats, elles doivent être comprises entre 0 et 59.',
      'FORM.ERROR.HOUR' : 'L\'heure n\'est pas au bon format, elle doit être comprise entre 0 et 23.',
      'FORM.ERROR' : 'Format d\'heure non valide, exemple : 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE' : 'Chronomètre',
      'CHRONO.BUTTON.START' : 'Start',
      'CHRONO.BUTTON.PAUSE' : 'Pause',
      'CHRONO.BUTTON.LAP' : 'Tour',
      'CHRONO.BUTTON.STOP' : 'Stop',
      'CHRONO.BUTTON.CLEAR' : 'Clear',
      'CHRONO.BUTTON.RESUME' : 'Continuer',
      'CHRONO.RECORD.TIME' : 'Temps enregistré',

      //AD PANEL
      'AD.PANEL.TITLE' : 'Publicité ',
      'AD.PANEL.SUBTITLE' : 'parce que faire un site ça prend du temps',
      'AD.PANEL.PARAGRAPH1' : "Tu utilises AdBlock, comme moi ! Cependant j'ai passé beaucoup de temps sur ce site, il y a une pub placée tout en bas de la page et une publicité vidéo \"inRead\" qui disparait lorsqu'elle se termine située en dessous du chronomètre.",
      'AD.PANEL.PARAGRAPH2' : 'Je te remercie si tu choisis de ne rien bloquer sur cette page et je boirai un  à ta santé ! Sinon, sache que je respecte ton choix et je te laisse profiter du gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE' : 'Commentaires Facebook',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE' : 'Les 8 dernières alarmes en temps réel',
      'FIREBASE.PANEL.LOADING' : 'Chargement des alarmes des internautes...',
      'FIREBASE.PARAGRAPH' : "Si cela dure trop longtemps il se peut que le compte gratuit de Firebase est atteint son nombre de connexions maximum...",
      'FIREBASE.LOOKFOR' : 'Chercher une alarme sur les',
      'REGISTRED.ALARM' : 'enregistrées',

      //FOOTER
      'FOOTER.PART1' : 'Vous réveille avec',
      'FOOTER.PART2' : 'depuis 2011',
      'FOOTER.IS.OPENSOURCE' : 'est open source'
    });

    //Spanish
    $translateProvider.translations('es', {
      //WEBSITE
      'MENU.WEBSITE.NAME' : 'Wake-me-up',
      'WEBSITE.TITLE' : 'El Despertador online preferido de Internet',
      'WEBSITE.DESCRIPTION' : 'Utilice YouTube, Deezer, SoundCloud, Mixcloud, Dailymotion',

      //PLURAL
      'PLURAL' : 's',
      'SINGLE' : '',
      'ZERO' : '',

      //MESSAGE
      'LOADING' : 'Carga',
      'URL' : 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Agregar un idioma',
      'LANGUAGE': 'Idioma',

      //TIME
      'HOUR' : 'Hora',
      'MINUTE' : 'Minuto',

      //MENU
      'MENU.ALARM.NAME' : 'Despertador',
      'MENU.CHRONO.NAME' : 'Cronógrafo',
      'MENU.COMMENTS.NAME' : 'Comentarios',
      'MENU.FACEBOOK' : 'Facebook',
      'MENU.OLD.VERSION' : 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE' : 'Ajuste de la alarma',
      'ALARM.PANEL.PLATFORM' : 'Plataforma de Música',
      'ALARM.PANEL.PLATFORM.DESCRIPTION' : 'Utilice YouTube, Deezer, SoundCloud, Mixcloud, Dailymotion',
      'ALARM.YOURCHOICE' : 'Su sonido! Ofrece en la página ',

      'ALARM.PANEL.RADIO' : 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION' : 'Utilice la radio',

      'ALARM.RADIO1': 'Nova',
      'ALARM.RADIO1.URL': 'http://www.novaplanet.com/radionova/player',
      'ALARM.RADIO2': 'NRJ',
      'ALARM.RADIO2.URL': 'http://play.nrj.fr/nrj/nrj.html',
      'ALARM.RADIO3': 'Mouv',
      'ALARM.RADIO3.URL': 'http://www.lemouv.fr/player',
      'ALARM.RADIO4': 'RTL',
      'ALARM.RADIO4.URL': 'http://www.rtl.fr/direct',

      'ALARM.PANEL.URL' : 'URL',
      'ALARM.PANEL.TEST' : 'Probar URL',

      'ALARM.PANEL.ACTIVATE' : 'Activar',
      'ALARM.PANEL.OFF' : 'Off',
      'ALARM.WILL.RING' : 'La alarma sonará en',
      'ALARM.KEEPON.MESSAGE' : 'Mantenga su equipo funcionando a operar la alarma',

      //ERROR
      'FORM.ERROR.URL' : 'La URL no es válida, por ejemplo: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE' : 'Los minutos no están en el formato correcto, deben estar entre 0 y 59.',
      'FORM.ERROR.HOUR' : 'La hora no esta en el formato correcto, deben estar entre 0 y 23.',
      'FORM.ERROR' : 'Formato de hora no válida, por ejemplo: 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE' : 'Cronógrafo',
      'CHRONO.BUTTON.START' : 'Start',
      'CHRONO.BUTTON.PAUSE' : 'Pausa',
      'CHRONO.BUTTON.LAP' : 'Torre',
      'CHRONO.BUTTON.STOP' : 'Stop',
      'CHRONO.BUTTON.CLEAR' : 'Clear',
      'CHRONO.BUTTON.RESUME' : 'Continuar',
      'CHRONO.RECORD.TIME' : 'Tiempo registrado',

      //AD PANEL
      'AD.PANEL.TITLE' : 'Publicidad ',
      'AD.PANEL.SUBTITLE' : 'porque hacer un sitio que lleva tiempo',
      'AD.PANEL.PARAGRAPH1' : "Utiliza AdBlock, como yo! Pero yo pasé mucho tiempo en este sitio, hay un pub situado en la parte inferior de la página y video publicitario inRead, que desaparece cuando termina debajo del cronómetro.",
      'AD.PANEL.PARAGRAPH2' : 'Gracias si decide no bloquear nada en esta página y voy a beber una cerveza a su salud! Si no es así, saber que yo respeto su elección y le permiten disfrutar el gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE' : 'Facebook Comentarios',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE' : 'Los últimos 8 alarmas en tiempo real',
      'FIREBASE.PANEL.LOADING' : 'Chargement des alarmes des internautes...',
      'FIREBASE.PARAGRAPH' : "Si se tarda demasiado tiempo, puede ser que la cuenta gratuita es Firebase alcanzó su número máximo de conexiones...",
      'FIREBASE.LOOKFOR' : 'Buscar una alarma en',
      'REGISTRED.ALARM' : 'registradas',

      //FOOTER
      'FOOTER.PART1' : 'Te despiertas con ',
      'FOOTER.PART2' : ' desde 2011',
      'FOOTER.IS.OPENSOURCE' : 'es open source'
    });

    //@TODO
    //$translateProvider.translations('de', {});
    //$translateProvider.translations('pt', {});
    //$translateProvider.translations('it', {});
    //$translateProvider.translations('pl', {});
    //$translateProvider.translations('ja', {});
    //$translateProvider.translations('ko', {});
    //$translateProvider.translations('tr', {});

    $translateProvider.fallbackLanguage(['en', 'fr']);
  });