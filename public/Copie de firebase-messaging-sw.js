// ==================================================
// Yetu Firebase Messaging Service Worker
// ==================================================
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

// ⚙️ Configuração do Firebase
firebase.initializeApp({
  apiKey: "TUA_API_KEY_AQUI",
  authDomain: "teu-projeto.firebaseapp.com",
  projectId: "teu-projeto",
  storageBucket: "teu-projeto.appspot.com",
  messagingSenderId: "TEU_SENDER_ID",
  appId: "TEU_APP_ID",
  measurementId: "TEU_MEASUREMENT_ID"
});

// Inicializa o Messaging
const messaging = firebase.messaging();

// 📩 Listener para mensagens em background
messaging.onBackgroundMessage(payload => {
  console.log('[Firebase Messaging] Mensagem recebida em segundo plano:', payload);

  const notificationTitle = payload.notification?.title || 'Yetu Notificação';
  const notificationOptions = {
    body: payload.notification?.body || 'Nova atualização disponível.',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    data: { url: payload.fcmOptions?.link || '/' }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
