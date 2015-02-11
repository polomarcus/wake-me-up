angular.module('i18n', [
    'pascalprecht.translate'
])
.config(['$translateProvider', function ($translateProvider) {

        $translateProvider.translations('en_US', {
            //WEBSITE
            'MENU.WEBSITE.NAME' : 'Online-alarm-clock.com',

            //PLURAL
            'PLURAL' : 's',
            'SINGLE' : '',
            'ZERO' : '',

            //MESSAGE
            'LOADING' : 'Loading',
            'URL' : 'URL',

            //MENU
            'MENU.ALARM.NAME' : 'Alarm clock',
            'MENU.CHRONO.NAME' : 'Chronometer',
            'MENU.COMMENTS.NAME' : 'Comments',
            'MENU.FACEBOOK' : 'Facebook page',
            'MENU.OLD.VERSION' : 'Version 1',

            //ALARM PANEL
            'ALARM.PANEL.TITLE' : 'Alarm settings',
            'ALARM.PANEL.PLATFORM' : 'Musical Platform',
            'ALARM.PANEL.PLATFORM.DESCRIPTION' : 'Use Youtube, SoundCloud...',
            'ALARM.PANEL.RADIO' : 'Radio',
            'ALARM.PANEL.RADIO.DESCRIPTION' : 'Use a radio link',
            'ALARM.PANEL.TV' : 'Television',
            'ALARM.PANEL.TV.DESCRIPTION' : 'Watch TV',
            'ALARM.PANEL.URL' : 'URL',
            'ALARM.PANEL.TEST' : 'Test URL',
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
            'FIREBASE.LOOKFOR' : 'Look for a alarm on the',
            'REGISTRED.ALARM' : 'registred',

            //FOOTER
            'FOOTER.PART1' : 'Wakes up you with',
            'FOOTER.PART2' : 'since 2011'

        });

        $translateProvider.translations('fr_FR', {
            //WEBSITE
            'MENU.WEBSITE.NAME' : 'Reveil-en-ligne.fr',

            //PLURAL
            'PLURAL' : 's',
            'SINGLE' : '',
            'ZERO' : '',

            //MESSAGE
            'LOADING' : 'Chargement',
            'URL' : 'URL',

            //TIME
            'HOUR' : 'Heure',
            'HHOUR' : 'heure',
            'MINUTE' : 'Minute',
            'MMINUTE' : 'minute',
            'SECOND' : 'Seconde',
            'SSECOND' : 'seconde',

            //MENU
            'MENU.ALARM.NAME' : 'Alarme',
            'MENU.CHRONO.NAME' : 'Chronomètre',
            'MENU.COMMENTS.NAME' : 'Commentaires',
            'MENU.FACEBOOK' : 'Page Facebook',
            'MENU.OLD.VERSION' : 'Version 1',

            //ALARM PANEL
            'ALARM.PANEL.TITLE' : 'Paramètres alarme',
            'ALARM.PANEL.PLATFORM' : 'Plateforme musicale',
            'ALARM.PANEL.PLATFORM.DESCRIPTION' : 'Utilisez Youtube, SoundCloud...',
            'ALARM.PANEL.RADIO' : 'Radio',
            'ALARM.PANEL.RADIO.DESCRIPTION' : 'Utilisez un lien radio',
            'ALARM.PANEL.TV' : 'Télévision',
            'ALARM.PANEL.TV.DESCRIPTION' : 'Regarder la télévision',
            'ALARM.PANEL.URL' : 'URL',
            'ALARM.PANEL.TEST' : 'Tester l\'URL',

            'ALARM.PANEL.ACTIVATE' : 'Activer',
            'ALARM.PANEL.OFF' : 'Off',
            'ALARM.WILL.RING' : 'L\'alarme sonnera dans',

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
            'FOOTER.PART2' : 'depuis 2011'

    });

        $translateProvider.translations('de_DE', {});
    }]);