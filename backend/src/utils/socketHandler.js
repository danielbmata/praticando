module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Novo usuário conectado');

        socket.on('disconnect', () => {
            console.log('Usuário desconectado');
        });
    });
};
