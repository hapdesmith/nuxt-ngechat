const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const { app, server } = require('./app');
// const express = require('express');

const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

async function start() {
  const nuxt = new Nuxt(config);

  const { host } = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(nuxt.render);

  server
    .use((req, res) => res.sendFile('/', { root: __dirname }))
    .listen(PORT, () => {
      consola.ready({
        message: `Server listening on http://${host}:${PORT}`,
        badge: true,
    });
  });
}
start();