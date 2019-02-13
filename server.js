'use strict';

const Hapi = require('hapi');
const cuid = require('cuid');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        cors: true
    }
});

// Step 2???
server.route({
    path: '/',
    method: 'GET',
    handler: () => {
        return {
            message: 'Welcome to the Todos API'
        }
    }
});
server.route({
    path: '/todos',
    method: 'POST',
    handler: (request, h) => {
        let { id, description } = request.payload;
        const result =
        {
            id: cuid(),
            description
        }

        const response = h.response(result)
            .code(201);

        return response;
    }
});

// Step 3: profit
const init = async () => {
    await server.start();
    console.log(`server is running at ${server.info.uri}`);
}

init();