const NOME_CACHE = 'fluxo-financeiro-v1';
const ARQUIVOS = [
  'gerenciador_contas_inteligente.html',
  'manifesto.json'
];

// Instala o aplicativo no aparelho e guarda os arquivos necessários
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(NOME_CACHE).then((cache) => {
      return cache.addAll(ARQUIVOS);
    })
  );
});

// Faz o aplicativo funcionar mesmo se o usuário estiver totalmente sem internet
self.addEventListener('fetch', (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((resposta) => {
      return resposta || fetch(evento.request);
    })
  );
});
