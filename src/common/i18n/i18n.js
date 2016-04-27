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
      'MENU.WEBSITE.NAME': 'Wake-me-up.co',
      'WEBSITE.TITLE': 'Internet\'s favorite alarm clock!',
      'WEBSITE.DESCRIPTION': 'Use Youtube, Twitch, SoundCloud, Deezer, MixCloud or your favorite radio link as an online alarm clock!',

      //PLURAL
      'PLURAL': 's',
      'SINGLE': '',
      'ZERO': 's',

      //MESSAGE
      'LOADING': 'Loading',
      'URL': 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Add a language',
      'LANGUAGE': 'Language',

      //TIME
      'HOUR': 'Hour',
      'MINUTE': 'Minute',

      //MENU
      'MENU.ALARM.NAME': 'Alarm clock',
      'MENU.CHRONO.NAME': 'Chronometer',
      'MENU.COMMENTS.NAME': 'Comments',
      'MENU.FACEBOOK': 'Facebook page',
      'MENU.OLD.VERSION': 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE': 'Alarm settings',
      'ALARM.PANEL.PLATFORM': 'Musical Platform',
      'ALARM.PANEL.PLATFORM.DESCRIPTION': 'Use Youtube, Twitch, SoundCloud, MixCloud, Deezer or Dailymotion',
      'ALARM.YOURCHOICE': 'Propose a sound on our ',

      'ALARM.PANEL.RADIO': 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION': 'Use a radio link',
      'ALARM.RADIO1': 'Hot97',
      'ALARM.RADIO1.URL': 'http://player.liquidcompass.net/WQHTFM',
      'ALARM.RADIO2': 'WNYC',
      'ALARM.RADIO2.URL': 'https://www.wnyc.org/radio/#/streams/wnyc-fm939',
      'ALARM.RADIO3': 'Magic 105.4',
      'ALARM.RADIO3.URL': 'http://radioplayer.magic.co.uk/live/',
      'ALARM.RADIO4': 'CBS',
      'ALARM.RADIO4.URL': 'http://player.radio.com/listen/station/cbs-radio-news/',

      'ALARM.PANEL.URL': 'URL',
      'ALARM.PANEL.TEST': 'Test URL',

      'ALARM.PANEL.OFF': 'Off',
      'ALARM.WILL.RING': 'The alarm will ring in ',
      'ALARM.KEEPON.MESSAGE': 'In order for the alarm to ring, please keep your computer running and this tab must be visible',

      'ALARM.PANEL.HOUR': 'Hour',
      'ALARM.PANEL.HHOUR': 'hour',
      'ALARM.PANEL.MINUTE': 'Minute',
      'ALARM.PANEL.MMINUTE': 'minute',
      'ALARM.PANEL.SECOND': 'Second',
      'ALARM.PANEL.SSECOND': 'second',
      'ALARM.PANEL.ACTIVATE': 'Activate',

      //ERROR
      'FORM.ERROR.URL': 'The URL is not valid, example: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE': 'The minute is not valid, it must be between 0 et 59.',
      'FORM.ERROR.HOUR': 'The hour is not valid, it must be between 0 and 23',
      'FORM.ERROR': 'Non valid hour, example : 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE': 'Chronometer',
      'CHRONO.BUTTON.START': 'Start',
      'CHRONO.BUTTON.PAUSE': 'Pause',
      'CHRONO.BUTTON.LAP': 'Lap',
      'CHRONO.BUTTON.STOP': 'Stop',
      'CHRONO.BUTTON.CLEAR': 'Clear',
      'CHRONO.BUTTON.RESUME': 'Resume',
      'CHRONO.RECORD.TIME': 'Registered laps',

      //AD PANEL
      'AD.PANEL.TITLE': 'Advertising',
      'AD.PANEL.SUBTITLE': 'Because it takes times to create a website',
      'AD.PANEL.PARAGRAPH1': 'You are using AdBlock, like me! However, I have spent a lot of times making this website looking as awesome as this.',
      'AD.PANEL.PARAGRAPH2': 'I thank you if you choose to whitelist this website, I would raise my glass to you. Otherwise, I respect your choice and I hope you enjoy this gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE': 'Facebook comments',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE': 'Last 100 alarms registered',
      'FIREBASE.PANEL.LOADING': 'Loading users alarm...',
      'FIREBASE.PARAGRAPH': "Loading data from the Firebase database. If there are too many users connected it will not load... Sorry for any inconvenience.",
      'FIREBASE.LOOKFOR': 'Look for an alarm on the',
      'REGISTRED.ALARM': 'registred',

      //FOOTER
      'FOOTER.PART1': 'Wakes up you with',
      'FOOTER.PART2': 'since 2011',
      'FOOTER.IS.OPENSOURCE': ' is open source'
    });

    //FRENCH
    $translateProvider.translations('fr', {
      //WEBSITE
      'MENU.WEBSITE.NAME': 'Wake-me-up.co',
      'WEBSITE.TITLE': 'Le réveil en ligne préféré des internautes!',
      'WEBSITE.DESCRIPTION': 'Servez-vous de vos liens YouTube, Deezer, SoundCloud, Mixcloud pour vous réveiller.',

      //PLURAL
      'PLURAL': 's',
      'SINGLE': '',
      'ZERO': '',

      //MESSAGE
      'LOADING': 'Chargement',
      'URL': 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Ajoutez une langue',
      'LANGUAGE': 'Langue',

      //TIME
      'HOUR': 'Heure',
      'MINUTE': 'Minute',

      //MENU
      'MENU.ALARM.NAME': 'Alarme',
      'MENU.CHRONO.NAME': 'Chronomètre',
      'MENU.COMMENTS.NAME': 'Commentaires',
      'MENU.FACEBOOK': 'Page Facebook',
      'MENU.OLD.VERSION': 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE': 'Paramètres alarme',
      'ALARM.PANEL.PLATFORM': 'Plateforme musicale',
      'ALARM.PANEL.PLATFORM.DESCRIPTION': 'Utilisez Youtube, Twitch, SoundCloud, MixCloud, Deezer ou Dailymotion',
      'ALARM.YOURCHOICE': 'Ton son! Propose le sur la page ',

      'ALARM.PANEL.RADIO': 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION': 'Utilisez un lien radio',

      'ALARM.RADIO1': 'Nova',
      'ALARM.RADIO1.URL': 'http://www.novaplanet.com/radionova/player',
      'ALARM.RADIO2': 'NRJ',
      'ALARM.RADIO2.URL': 'http://play.nrj.fr/nrj/nrj.html',
      'ALARM.RADIO3': 'Mouv',
      'ALARM.RADIO3.URL': 'http://www.lemouv.fr/player',
      'ALARM.RADIO4': 'RTL',
      'ALARM.RADIO4.URL': 'http://www.rtl.fr/direct',

      'ALARM.PANEL.URL': 'URL',
      'ALARM.PANEL.TEST': 'Tester l\'URL',

      'ALARM.PANEL.ACTIVATE': 'Activer',
      'ALARM.PANEL.OFF': 'Off',
      'ALARM.WILL.RING': 'L\'alarme sonnera dans',
      'ALARM.KEEPON.MESSAGE': 'Gardez votre ordinateur allumé pour faire fonctionner l\'alarme et cet onglet doit rester visible',

      //ERROR
      'FORM.ERROR.URL': 'L\'URL n\'est pas valide, exemple: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE': 'Les minutes ne sont pas au bon format, elles doivent être comprises entre 0 et 59.',
      'FORM.ERROR.HOUR': 'L\'heure n\'est pas au bon format, elle doit être comprise entre 0 et 23.',
      'FORM.ERROR': 'Format d\'heure non valide, exemple : 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE': 'Chronomètre',
      'CHRONO.BUTTON.START': 'Start',
      'CHRONO.BUTTON.PAUSE': 'Pause',
      'CHRONO.BUTTON.LAP': 'Tour',
      'CHRONO.BUTTON.STOP': 'Stop',
      'CHRONO.BUTTON.CLEAR': 'Clear',
      'CHRONO.BUTTON.RESUME': 'Continuer',
      'CHRONO.RECORD.TIME': 'Temps enregistré',

      //AD PANEL
      'AD.PANEL.TITLE': 'Publicité ',
      'AD.PANEL.SUBTITLE': 'parce que faire un site ça prend du temps',
      'AD.PANEL.PARAGRAPH1': "Tu utilises AdBlock, comme moi ! Cependant j'ai passé beaucoup de temps sur ce site, il y a une pub placée tout en bas de la page et une publicité vidéo sans son qui disparait lorsqu'elle se termine située en dessous des paramètres de l'alarme.",
      'AD.PANEL.PARAGRAPH2': 'Je te remercie si tu choisis de ne rien bloquer sur cette page et je boirai un  à ta santé ! Sinon, sache que je respecte ton choix et je te laisse profiter du gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE': 'Commentaires Facebook',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE': 'Les 8 dernières alarmes en temps réel',
      'FIREBASE.PANEL.LOADING': 'Chargement des alarmes des internautes...',
      'FIREBASE.PARAGRAPH': "Si cela dure trop longtemps il se peut que le compte gratuit de Firebase ait atteint son nombre de connexions maximum...",
      'FIREBASE.LOOKFOR': 'Chercher une alarme sur les',
      'REGISTRED.ALARM': 'enregistrées',

      //FOOTER
      'FOOTER.PART1': 'Vous réveille avec',
      'FOOTER.PART2': 'depuis 2011',
      'FOOTER.IS.OPENSOURCE': 'est open source'
    });

    //Spanish
    $translateProvider.translations('es', {
      //WEBSITE
      'MENU.WEBSITE.NAME': 'Wake-me-up.co',
      'WEBSITE.TITLE': 'El Despertador online preferido de Internet',
      'WEBSITE.DESCRIPTION': 'Utilice YouTube, Twitch, Deezer, SoundCloud, Mixcloud, Dailymotion',

      //PLURAL
      'PLURAL': 's',
      'SINGLE': '',
      'ZERO': '',

      //MESSAGE
      'LOADING': 'Carga',
      'URL': 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Agregar un idioma',
      'LANGUAGE': 'Idioma',

      //TIME
      'HOUR': 'Hora',
      'MINUTE': 'Minuto',

      //MENU
      'MENU.ALARM.NAME': 'Despertador',
      'MENU.CHRONO.NAME': 'Cronógrafo',
      'MENU.COMMENTS.NAME': 'Comentarios',
      'MENU.FACEBOOK': 'Facebook',
      'MENU.OLD.VERSION': 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE': 'Ajuste de la alarma',
      'ALARM.PANEL.PLATFORM': 'Plataforma de Música',
      'ALARM.PANEL.PLATFORM.DESCRIPTION': 'Utilice YouTube, Twitch, Deezer, SoundCloud, Mixcloud, Dailymotion',
      'ALARM.YOURCHOICE': 'Su sonido! Ofrece en la página ',

      'ALARM.PANEL.RADIO': 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION': 'Utilice la radio',

      'ALARM.RADIO1': 'Nova',
      'ALARM.RADIO1.URL': 'http://www.novaplanet.com/radionova/player',
      'ALARM.RADIO2': 'NRJ',
      'ALARM.RADIO2.URL': 'http://play.nrj.fr/nrj/nrj.html',
      'ALARM.RADIO3': 'Mouv',
      'ALARM.RADIO3.URL': 'http://www.lemouv.fr/player',
      'ALARM.RADIO4': 'RTL',
      'ALARM.RADIO4.URL': 'http://www.rtl.fr/direct',

      'ALARM.PANEL.URL': 'URL',
      'ALARM.PANEL.TEST': 'Probar URL',

      'ALARM.PANEL.ACTIVATE': 'Activar',
      'ALARM.PANEL.OFF': 'Off',
      'ALARM.WILL.RING': 'La alarma sonará en',
      'ALARM.KEEPON.MESSAGE': 'Mantenga su equipo funcionando a operar la alarma',

      //ERROR
      'FORM.ERROR.URL': 'La URL no es válida, por ejemplo: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE': 'Los minutos no están en el formato correcto, deben estar entre 0 y 59.',
      'FORM.ERROR.HOUR': 'La hora no esta en el formato correcto, deben estar entre 0 y 23.',
      'FORM.ERROR': 'Formato de hora no válida, por ejemplo: 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE': 'Cronógrafo',
      'CHRONO.BUTTON.START': 'Iniciar',
      'CHRONO.BUTTON.PAUSE': 'Detener',
      'CHRONO.BUTTON.LAP': 'Marque',
      'CHRONO.BUTTON.STOP': 'Stop',
      'CHRONO.BUTTON.CLEAR': 'Reajustar',
      'CHRONO.BUTTON.RESUME': 'Continuar',
      'CHRONO.RECORD.TIME': 'Tiempo registrado',

      //AD PANEL
      'AD.PANEL.TITLE': 'Publicidad ',
      'AD.PANEL.SUBTITLE': 'porque hacer un sitio que lleva tiempo',
      'AD.PANEL.PARAGRAPH1': "Utiliza AdBlock, como yo! Pero yo pasé mucho tiempo en este sitio, hay un pub situado en la parte inferior de la página y video publicitario inRead, que desaparece cuando termina debajo del cronómetro.",
      'AD.PANEL.PARAGRAPH2': 'Gracias si decide no bloquear nada en esta página y voy a beber una cerveza a su salud! Si no es así, saber que yo respeto su elección y le permiten disfrutar el gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE': 'Facebook Comentarios',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE': 'Las últimas 8 alarmas en tiempo real',
      'FIREBASE.PANEL.LOADING': 'Chargement des alarmes des internautes...',
      'FIREBASE.PARAGRAPH': "Si se tarda demasiado tiempo, puede ser que la cuenta gratuita es Firebase alcanzó su número máximo de conexiones...",
      'FIREBASE.LOOKFOR': 'Buscar una alarma en',
      'REGISTRED.ALARM': 'registradas',

      //FOOTER
      'FOOTER.PART1': 'Te despiertas con ',
      'FOOTER.PART2': ' desde 2011',
      'FOOTER.IS.OPENSOURCE': 'es open source'
    });


    //Italian
    $translateProvider.translations('it', {
      //WEBSITE
      'MENU.WEBSITE.NAME': 'Wake-me-up.co',
      'WEBSITE.TITLE': 'La sveglia online preferita dagli utenti!',
      'WEBSITE.DESCRIPTION': 'Serviti dei link YouTube, Deezer, SoundCloud, Mixcloud per svegliarti',

      //PLURAL
      'PLURAL': 's',
      'SINGLE': '',
      'ZERO': '',

      //MESSAGE
      'LOADING': 'Caricamento',
      'URL': 'URL',

      //LANGUAGE
      'ADD.YOURS': 'Aggiungere una lingua',
      'LANGUAGE': 'Lingua',

      //TIME
      'HOUR': 'Ora',
      'HHOUR': 'ora',
      'MINUTE': 'Minuto',
      'MMINUTE': 'minuto',
      'SECOND': 'Secondo',
      'SSECOND': 'secondo',

      //MENU
      'MENU.ALARM.NAME': 'Sveglia',
      'MENU.CHRONO.NAME': 'Cronometro',
      'MENU.COMMENTS.NAME': 'Commenti',
      'MENU.FACEBOOK': 'Page Facebook',
      'MENU.OLD.VERSION': 'Version 1',

      //ALARM PANEL
      'ALARM.PANEL.TITLE': 'Impostazioni sveglia',
      'ALARM.PANEL.PLATFORM': 'Piattaforma musicale',
      'ALARM.PANEL.PLATFORM.DESCRIPTION': ' Usa YouTube, Deezer, SoundCloud, Mixcloud o Dailymotion',
      'ALARM.YOURCHOICE': ' La tua musica! Condividila sulla pagina',

      'ALARM.PANEL.RADIO': 'Radio',
      'ALARM.PANEL.RADIO.DESCRIPTION': 'Utilizza un link radio',

      'ALARM.RADIO1': 'Virgin Radio',
      'ALARM.RADIO1.URL': 'http://www.virginradio.it/sezioni/1184/virgin-radio-fm',
      'ALARM.RADIO2': 'Radio DeeJay',
      'ALARM.RADIO2.URL': 'http://www.deejay.it/radio/',
      'ALARM.RADIO3': 'RDS',
      'ALARM.RADIO3.URL': 'http://www.rds.it/diretta/',
      'ALARM.RADIO4': 'RTL',
      'ALARM.RADIO4.URL': 'http://www.rtl.it/FM/',


      'ALARM.PANEL.TEST': 'Provare il link',
      'ALARM.PANEL.ACTIVATE': 'On',
      'ALARM.PANEL.OFF': 'Off',
      'ALARM.WILL.RING': 'La sveglia suonerà tras',
      'ALARM.KEEPON.MESSAGE': 'Tieni il computer acceso per far funzionare la sveglia',

      //ERROR
      'FORM.ERROR.URL': 'Il link non è valido, ecco un esempio: http://www.youtube.com/watch?v=KGyZY4HNumw',
      'FORM.ERROR.MINUTE': ' I minuti non sono validi, devono essere tra 0 e 59',
      'FORM.ERROR.HOUR': 'L\'ora non è valida, deve essere tra 0 e 23',
      'FORM.ERROR': 'Il formato dell\'ora non è valido, ecco un esempio: 7:00',

      //CHRONO PANEL
      'CHRONO.PANEL.TITLE': 'Cronometro',
      'CHRONO.BUTTON.START': 'Start',
      'CHRONO.BUTTON.PAUSE': 'Pausa',
      'CHRONO.BUTTON.LAP': 'Ripetizione',
      'CHRONO.BUTTON.STOP': 'Stop',
      'CHRONO.BUTTON.CLEAR': 'Cancella',
      'CHRONO.BUTTON.RESUME': 'Continuare',
      'CHRONO.RECORD.TIME': 'Tempo registrato',

      //AD PANEL
      'AD.PANEL.TITLE': 'Pubblicità ',
      'AD.PANEL.SUBTITLE': 'perchè per fare un sito ci vuole tempo',
      'AD.PANEL.PARAGRAPH1': "Usi AdBlock, proprio come me! Nonostante ciò ho passato molto tempo su questo sito, ci sono solo una pubblicità in fondo alla pagina e un video pubblicitario che scompare non appena finito sotto i parametri della sveglia.",
      'AD.PANEL.PARAGRAPH2': 'Ti ringrazio se scegli di non bloccare nulla su questa pagina, brinderò alla tua salute! Altrimenti, sappi che rispetto la tua scelta e ti offro questa gif.',

      //COMMENTS PANEL
      'COMMENTS.PANEL.TITLE': 'Commenti Facebook',

      //COMMENTS PANEL
      'FIREBASE.PANEL.TITLE': 'Le 8 ultime sveglie in tempo reale',
      'FIREBASE.PANEL.LOADING': 'Caricamento della sveglia degli utenti...',
      'FIREBASE.PARAGRAPH': "Se il sistema ci mette troppo tempo, può darsi che tu abbia già raggiunto il limite di connessioni dell'account gratuito Firebase...",
      'FIREBASE.LOOKFOR': 'Cercare una sveglia sulle',
      'REGISTRED.ALARM': 'registrate',

      //FOOTER
      'FOOTER.PART1': ' Ti sveglia con',
      'FOOTER.PART2': 'dal 2011',
      'FOOTER.IS.OPENSOURCE': 'è open source'
    });

    $translateProvider.translations('pt',{
      'MENU.WEBSITE.NAME': 'Wake-me-up.co',
    'WEBSITE.TITLE':	'o toque do despertador',
    'WEBSITE.DESCRIPTION':	'Usa il tuo link di YouTube, Deezer, SoundCloud, Mixcloud per svegliarti',
    'LOADING':	'Aguardando',
    'URL':	'URL',
    'ADD.YOURS':	'Adiciona uma idioma',
    'LANGUAGE':	'Idioma',

    'HOUR':	'Hora',
    'HHOUR':	'hora',
    'MINUTE':	'Minuto',
    'MMINUTE':	'Minuto',

    'SECOND': 'Segundo',
    'SSECOND': 'segundo',

    'MENU.ALARM.NAME':	'Alarme',
    'MENU.CHRONO.NAME':	'Cronômetro',
    'MENU.COMMENTS.NAME':	'Comentários',
    'MENU.FACEBOOK':	'Página Facebook',
    'ALARM.PANEL.TITLE':	'Ajustes alarme',
    'ALARM.PANEL.PLATFORM':	'Plataforma musical',
    'ALARM.PANEL.PLATFORM.DESCRIPTION':	'Utiliza Youtube, Twitch, Deezer, Mixcloud ou Soundclound',
    'ALARM.YOURCHOICE':	'A sua musica! Oferece na pagina.',
    'ALARM.PANEL.RADIO':	'Radio',
    'ALARM.PANEL.RADIO.DESCRIPTION':	'Utiliza um link Radio',
    //'ALARM.RADIO1': '',
    //  'ALARM.RADIO1.URL': '',
    //'ALARM.RADIO2': '',
    //'ALARM.RADIO2.URL': '',
    //'ALARM.RADIO3': '',
    //'ALARM.RADIO3.URL': '',
    //'ALARM.RADIO4': '',

    'ALARM.PANEL.TEST':	'Testar o URL',
    'ALARM.PANEL.ACTIVATE' :	'Activar',
      'ALARM.PANEL.OFF':	'Off',
      'ALARM.WILL.RING':	'Alarme vai sonar em',
      'ALARM.KEEPON.MESSAGE':	'Guarda seu Computador ligado para usar Alarme',
      'FORM.ERROR.URL':	'URL não valido. Exemplo :',
      'FORM.ERROR.MINUTE':	'Minutos não são no bom formato. Devem ser entre 0 e 59',
      'FORM.ERROR.HOUR':	'Hora não é no bom formato. Deve ser entre 0 et 23',
      'FORM.ERROR':	'Formato da hora não esta valido. Exemplo :',
      'CHRONO.PANEL.TITLE':	'Chronometro',
      'CHRONO.BUTTON.START':	'Iniciar',
      'CHRONO.BUTTON.PAUSE':	'Pause',
      'CHRONO.BUTTON.LAP':	'repetição',
      'CHRONO.BUTTON.STOP':	'Stop',
      'CHRONO.BUTTON.CLEAR':	'Limpar',
      'CHRONO.BUTTON.RESUME':	'Continuar',
      'CHRONO.RECORD.TIME':	'Hora salvado',
      'FIREBASE.PANEL.TITLE':	'os ultimos 8 alarmes em tempo real',
      'FIREBASE.PANEL.LOADING':	'carregando os alarmos dos usuarios',
      'FIREBASE.PARAGRAPH':	'Se aqui dura demais, pode ser que o conto gratuito Firebase esta na sua limita de usuarios',
      'FIREBASE.LOOKFOR':	'buscar uma alarme em',
      'REGISTRED.ALARM':	'salvado',
      'FOOTER.PART1':	'acorda você com',
      'FOOTER.PART2':	'desde 2011',
      'FOOTER.IS.OPENSOURCE':	'esta open source',
      'AD.PANEL.TITLE':	'Publicidade',
      'AD.PANEL.SUBTITLE':	'porque fzer um site necessita muito tempo',
      'AD.PANEL.PARAGRAPH1':	'Você esta usando Adblock, como eu. Mais eu trabalhei muito tempo em esse ste. Tem uma publicidade na finha da pagina e uma video localizada na baixo dos parametros que desaparace automaticamente',
      'AD.PANEL.PARAGRAPH2':	'Se você opta por não bloquear as publicidades, muito obrigado. Se não, eu respecto a sua esscolha. desfrute os GIFs!'
  });


$translateProvider.translations('ru',{
  'MENU.WEBSITE.NAME': 'Wake-me-up.co',
  'WEBSITE.TITLE':	'Будильник который выбирают все пользователи интернета ',
  'WEBSITE.DESCRIPTION':	'Используйте ссылки из YouTube,  Deezer,  Soundcloud, Mixcloud для приятного пробуждения  ',
  'LOADING':	'Загрузка ',
  'URL':	'Ссылка ',
  'ADD.YOURS':	'Добавить язык',
  'LANGUAGE':	'Язык',
  'HOUR':	'Час',
  'HHOUR':	'Час',
  'MINUTE':	'Минута',
  'MMINUTE':	'Минута',
  'SECOND': 'второй',
  'SSECOND': 'второй',

  'MENU.ALARM.NAME':	'Будильник',
  'MENU.CHRONO.NAME':	'Хронометр',
  'MENU.COMMENTS.NAME':	'Комментарии',
  'MENU.FACEBOOK':	'Страница Facebook ',
  'ALARM.PANEL.TITLE':	'Настройки будильника ',
  'ALARM.PANEL.PLATFORM':	'Музыкальная платформа',
  'ALARM.PANEL.PLATFORM.DESCRIPTION':	'Используйте Youtube, Twitch, SoundCloud, MixCloud, Deezer, Dailymotion',
    'ALARM.YOURCHOICE':	'Твоя музыка! Делись с ней на странице',
      'ALARM.PANEL.RADIO':	'Радиа',
      'ALARM.PANEL.RADIO.DESCRIPTION':	'Используйте ссылку на радио',
      'ALARM.PANEL.TEST':	'Проверить ссылку ',
      'ALARM.PANEL.ACTIVATE' :	'Включить ',
      'ALARM.PANEL.OFF':	'Выключить',
      'ALARM.WILL.RING':	'Будильник прозвонит через',
      'ALARM.KEEPON.MESSAGE':	'Оставьте компьютер включенным  чтобы активировать будильник ',
      'FORM.ERROR.URL':	'Ошибка ссылки, например:',
      'FORM.ERROR.MINUTE':	'Неправильный формат минут,  он должен быть в пределах от 0 до 59',
      'FORM.ERROR.HOUR':	'Неправильный формат времени, он должен быть в пределах от 0 до 23',
      'FORM.ERROR':	'Неправильный формат времени,  пример:',
      'CHRONO.PANEL.TITLE':	'Хронометр',
      'CHRONO.BUTTON.START':	'Старт',
      'CHRONO.BUTTON.PAUSE':	'Пауза',
      'CHRONO.BUTTON.LAP':	'Повтор',
      'CHRONO.BUTTON.STOP':	'Стоп',
      'CHRONO.BUTTON.CLEAR':	'Очистить',
      'CHRONO.BUTTON.RESUME':	'Продолжить ',
      'CHRONO.RECORD.TIME':	'Сохраненное время',
      'COMMENTS.PANEL.TITLE':	'Комментарии Facebook ',
      'FIREBASE.PANEL.TITLE':	'Последние 8 будильников',
      'FIREBASE.PANEL.LOADING':	'Загрузка будильников пользователей интернета',
      'FIREBASE.PARAGRAPH':	'',
      'FIREBASE.LOOKFOR':	'Найти будильник среди',
      'REGISTRED.ALARM':	'Сохраненных'
  });

$translateProvider.translations('de',{
  'MENU.WEBSITE.NAME': 'Wake-me-up.co',
  'WEBSITE.TITLE':	'Der favorit Online-Erwachen den Surfern',
  'WEBSITE.DESCRIPTION':	'Nutzen Sie Ihre Youtube, Twitch,Deezer, Soundcloud, Mixcloud links um Sie aufzuwachen',
  'LOADING':	'Wird geladen',
  'URL':	'URL',
  'ADD.YOURS':	'Sprache hinzufügen',
  'LANGUAGE':	'Sprache',
  'HOUR':	'Stunde',
  'HHOUR':	'stunde',
  'MINUTE':	'Minute',
  'MMINUTE':	'minute',
  'MENU.ALARM.NAME':	'Alarm',
  'MENU.CHRONO.NAME':	'Stoppuhr',
  'MENU.COMMENTS.NAME':	'Kommentare',
  'MENU.FACEBOOK':	'Facebook-Seite		',
  'ALARM.PANEL.TITLE':	'Alarmeinstellungen',
  'ALARM.PANEL.PLATFORM':	'Musikplatform',
  'ALARM.PANEL.PLATFORM.DESCRIPTION':	'Benützten Sie youtube oder deezer!',
  'ALARM.YOURCHOICE':	'Deine Musik! Schlag sie auf die Seite vor	',
  'ALARM.PANEL.RADIO':	'Radio',
  'ALARM.PANEL.RADIO.DESCRIPTION':	'Benutzen Sie eine Link Radio	',
  'ALARM.RADIO1':	'Kronehit',
  'ALARM.RADIO1.URL':	'http://www.kronehit.at/',
  //'ALARM.RADIO2':	',
  //'ALARM.RADIO2.URL':	',
  //'ALARM.RADIO3':	',
  //'ALARM.RADIO3.URL':	',
  //'ALARM.RADIO4':	',
  'ALARM.PANEL.TEST':	'testen die URL	',
  'ALARM.PANEL.ACTIVATE' :	'Aktivieren',
  'ALARM.PANEL.OFF':	'aufhören',
  'ALARM.WILL.RING':	'Der Wecker wird in 3 Minuten läuten.',
  'ALARM.KEEPON.MESSAGE':	'Schalten Sie das Computer nicht, damit der Wecker funktionnieren kann	',
  'FORM.ERROR.URL':	'URL nicht gültig. Beispiel :',
  'FORM.ERROR.MINUTE':	'Minuten sind nicht im richtigen Format. Sie müssen zwischen 0 und 59 sein',
  'FORM.ERROR.HOUR':	'Die Uhr ist nicht im richtigen Format. Sie musst zwischen 0 und 23 sein',
  'FORM.ERROR':	'Uhr Format nicht gültig. Beispiel		',
  'CHRONO.PANEL.TITLE':	'Stoppuhr',
  'CHRONO.BUTTON.START':	'Start',
  'CHRONO.BUTTON.PAUSE':	'Pause',
  'CHRONO.BUTTON.LAP':	'Umdrehung',
  'CHRONO.BUTTON.STOP':	'Halt',
  'CHRONO.BUTTON.CLEAR':	'abbrechen',
  'CHRONO.BUTTON.RESUME':	'fortsetzen',
  'CHRONO.RECORD.TIME':	'Zeit speichern',
  'COMMENTS.PANEL.TITLE':	'Kommentar',
  'FIREBASE.PANEL.TITLE':	'Die 8 letzte Wecker in Echtzeit',
  'FIREBASE.PANEL.LOADING':	'Laden die Wecker den Internet-Nutzer',
  'FIREBASE.PARAGRAPH':	'Wenn es zu lange dauert, es kann sein, dass der Firebase-Freiaccount seine maximal Anzahl der Verbindungen erreicht hat.',
  'FIREBASE.LOOKFOR':	'Sucht ein Wecker auf :',
  'REGISTRED.ALARM':	'gespeichert',
  'FOOTER.PART1':	'Wacht Sie auf mit :',
  'FOOTER.PART2':	'Seit 2011',
  'FOOTER.IS.OPENSOURCE':	'ist Open source',
  'AD.PANEL.TITLE':	'Werbung',
  'AD.PANEL.SUBTITLE':	'Weil ein Website zu bauen dauert lange',
  'AD.PANEL.PARAGRAPH1':	'Du benutzst Adblock, genau so wie ich. Aber ich habe viel Zeit für dieses Website gespendet. Es gibt nur eine Werbung runter am Ende der Seite, und eine Video-Werbung unter die Einstellungen, die automatisch verschwindet.',
  'AD.PANEL.PARAGRAPH2':	'Wenn du entscheidest, die Werbung nicht zu stoppen, dann danke ich dir sehr. Sonst respektiere ich dein Wahl natürlich. Auf jedem Fall, geniess deine GIFs!'
  });


//@TODO
    //$translateProvider.translations('ja', {});
    //$translateProvider.translations('ko', {});
    //$translateProvider.translations('tr', {});

    $translateProvider.fallbackLanguage(['en', 'fr']);
  });
