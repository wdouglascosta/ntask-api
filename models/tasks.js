module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "ver o lula ser preso"},
                {title: "Arrancar o nervo do pescoço do Mateus"}
            ]);
        }
    };
};