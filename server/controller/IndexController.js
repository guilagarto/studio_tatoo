const controller = {
    index: function (req, res, next) {
        res.render('index', { title: 'Studio LilPeep' });
    },
    agenda: function (req, res, next) {
        res.render('agenda', { title: 'Agende seu horário' });
    },
    bioLilPeep: function (req, res, next) {
        res.render('bioLilPeep', { title: 'Bio Lil Peep' });
    },
    blog: function (req, res, next) {
        res.render('blog', { title: 'blog Lil and Peep' });
    },
    chat: function (req, res, next) {
        res.render('chat', { title: 'envie uma mensagem' });
    },
    colecao: function (req, res, next) {
        res.render('colecao', { title: 'Galeria de Imagens' });
    },
    faleConosco: function (req, res, next) {
        res.render('faleConosco', { title: 'Fale Conosco' });
    },
    home: function (req, res, next) {
        res.render('home', { title: 'Landing Page' });
    }

};

module.exports = controller;