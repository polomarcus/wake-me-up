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
            'ALARM.PANEL.MINUTE' : 'Minute',
            'ALARM.PANEL.SECOND' : 'Second',
            'ALARM.PANEL.ACTIVATE' : 'Activate',

            //ERROR
            'FORM.ERROR.URL' : 'The URL is not valid, example: http://www.youtube.com/watch?v=KGyZY4HNumw',
            'FORM.ERROR.MINUTE' : 'Les minutes ne sont pas au bon formats, entre 0 et 59.',
            'FORM.ERROR.HOUR' : 'The URL is not valid, example: ',

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

            //MENU
            'MENU.ALARM.NAME' : 'Alarme',
            'MENU.CHRONO.NAME' : 'Chronomètre',
            'MENU.COMMENTS.NAME' : 'Commentaires',
            'MENU.FACEBOOK' : 'Page Facebook',
            'MENU.OLD.VERSION' : 'Version 1',

            //ALARM PANEL
            'ALARM.PANEL.TITLE' : 'Paramètres alarmes',
            'ALARM.PANEL.PLATFORM' : 'Plateforme musicale',
            'ALARM.PANEL.PLATFORM.DESCRIPTION' : 'Utilisez Youtube, SoundCloud...',
            'ALARM.PANEL.RADIO' : 'Radio',
            'ALARM.PANEL.RADIO.DESCRIPTION' : 'Utilisez un lien radio',
            'ALARM.PANEL.TV' : 'Télévision',
            'ALARM.PANEL.TV.DESCRIPTION' : 'Regarder la télévision',
            'ALARM.PANEL.URL' : 'URL',
            'ALARM.PANEL.TEST' : 'Tester l\'URL',
            'ALARM.PANEL.HOUR' : 'Heure',
            'ALARM.PANEL.MINUTE' : 'Minute',
            'ALARM.PANEL.SECOND' : 'Seconde',

            'ALARM.PANEL.ACTIVATE' : 'Activer',
            'ALARM.PANEL.OFF' : 'Off',
            'ALARM.WILL.RING' : 'L\'alarme sonnera dans',

            //ERROR
            'FORM.ERROR.URL' : 'The URL is not valid, example: http://www.youtube.com/watch?v=KGyZY4HNumw',
            'FORM.ERROR.MINUTE' : 'Les minutes ne sont pas au bon formats, entre 0 et 59.',
            'FORM.ERROR.HOUR' : 'The URL is not valid, example: ',

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

            //FOOTER
            'FOOTER.PART1' : 'Vous réveille avec',
            'FOOTER.PART2' : 'depuis 2011'

    });

        $translateProvider.translations('de_DE', {});
    }]);