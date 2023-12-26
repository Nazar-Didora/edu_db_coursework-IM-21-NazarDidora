/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8d8621949e9b9da95bec31f925683282"
  },
  {
    "url": "assets/css/0.styles.c372bcfa.css",
    "revision": "d2c594b214a62a7362a068db0decce2f"
  },
  {
    "url": "assets/img/business_actors.541b7f52.jpg",
    "revision": "541b7f521c8d5af28423294fb1c7a3eb"
  },
  {
    "url": "assets/img/ckan.78bddb68.png",
    "revision": "78bddb68dcd27ea45b695b00956a6434"
  },
  {
    "url": "assets/img/cloude.b48a1c44.jpg",
    "revision": "b48a1c443f1f03e26e278576b8bd44ca"
  },
  {
    "url": "assets/img/create.12e0b9f5.jpg",
    "revision": "12e0b9f5d32aec576823a7b1aa38ccfe"
  },
  {
    "url": "assets/img/crowdsourcing.abc54512.jpg",
    "revision": "abc545121419715bb1bf3e4b2de91384"
  },
  {
    "url": "assets/img/data_gov.0a1216bd.png",
    "revision": "0a1216bda60133bf7e84f798dddfbf87"
  },
  {
    "url": "assets/img/database.aba810cd.jpg",
    "revision": "aba810cd53c228329a5c00e6ee060b99"
  },
  {
    "url": "assets/img/ERR_Diagram.eaa9b24b.png",
    "revision": "eaa9b24b80e9a9dcd975e15d9cc23b6c"
  },
  {
    "url": "assets/img/get_after.01af8e21.jpg",
    "revision": "01af8e2115986910a0b292e81137e4bf"
  },
  {
    "url": "assets/img/get_all.f900c5c7.jpg",
    "revision": "f900c5c70b758123abacf0e533dc0d86"
  },
  {
    "url": "assets/img/get_by_id.947dfa6e.jpg",
    "revision": "947dfa6ec02b90bd5db6467f4d947918"
  },
  {
    "url": "assets/img/get_error.a2d253a3.jpg",
    "revision": "a2d253a39e79323f814731e94fc4e2e7"
  },
  {
    "url": "assets/img/machine_learning.31b771f2.jpg",
    "revision": "31b771f2debbfff781cf573473788a37"
  },
  {
    "url": "assets/img/opendatasoft.bbab4790.png",
    "revision": "bbab4790100e26097cadd67de1ddbeee"
  },
  {
    "url": "assets/img/rbac.0a226d39.jpg",
    "revision": "0a226d39b61a5e540e6d408b2e656997"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/socrata.34930cdd.png",
    "revision": "34930cddd7c17fd3ccfce8e0a08e4cb2"
  },
  {
    "url": "assets/img/update.b14e2ac9.jpg",
    "revision": "b14e2ac9efb8809fc1774fed57f056ad"
  },
  {
    "url": "assets/img/webscrapping.688f5706.jpg",
    "revision": "688f570695020ea6ee0d402bd5542cbf"
  },
  {
    "url": "assets/js/1.0a11ca99.js",
    "revision": "243e1a9d2cb1dd4c14bbdbd23f10667b"
  },
  {
    "url": "assets/js/10.18d0454f.js",
    "revision": "397439c0d60f2e5ed5a6e63fe443034f"
  },
  {
    "url": "assets/js/13.010ed0e4.js",
    "revision": "69b3e69bfbe214d734722cfd8e235f4c"
  },
  {
    "url": "assets/js/14.5bf85c69.js",
    "revision": "7752f88a6ae3057011fc366e78e50506"
  },
  {
    "url": "assets/js/15.9e1f0fc9.js",
    "revision": "010c84ceda56c84575d6e1088c6563d3"
  },
  {
    "url": "assets/js/16.90b322a4.js",
    "revision": "8572c82f4ef5f22b5dadfbc89369fa87"
  },
  {
    "url": "assets/js/17.1ed05f6a.js",
    "revision": "b623489e011561793217809deb5087b4"
  },
  {
    "url": "assets/js/18.02ce786a.js",
    "revision": "58c385d2bb99c37bc4b8930ba6eed0b9"
  },
  {
    "url": "assets/js/19.16e0b028.js",
    "revision": "53f19fc1b7a144e5efea4c72cde6482f"
  },
  {
    "url": "assets/js/2.9c08b5ce.js",
    "revision": "89f4ac550fa25354bbe3eab2463ba475"
  },
  {
    "url": "assets/js/20.22604222.js",
    "revision": "0b967fb75bc41da44ea10c7f2925ca95"
  },
  {
    "url": "assets/js/21.99e4f29c.js",
    "revision": "c80a7de429434e9734b24d7aca9de61a"
  },
  {
    "url": "assets/js/22.c4804eae.js",
    "revision": "670a8531dba75d2f13066ef07a16915f"
  },
  {
    "url": "assets/js/23.a443e5b0.js",
    "revision": "cf2741e2a90ed09c178bcd4f6f96bb08"
  },
  {
    "url": "assets/js/24.344101b2.js",
    "revision": "49d81031cf28220cb574a52550899df9"
  },
  {
    "url": "assets/js/25.288d131b.js",
    "revision": "ffc17c0bf054f8aa9813e807ff963632"
  },
  {
    "url": "assets/js/26.f86e80ed.js",
    "revision": "1d08b73f746bcc2251dcaa5c679b57e6"
  },
  {
    "url": "assets/js/27.c3611601.js",
    "revision": "bffa03b8f41667f74013e7537553d445"
  },
  {
    "url": "assets/js/28.baa6e17c.js",
    "revision": "c5abe6c8dc013ec443e64a1bb6b77b53"
  },
  {
    "url": "assets/js/29.990d0ca7.js",
    "revision": "2efb4bf6284708f41cdb361d3d4a6c3c"
  },
  {
    "url": "assets/js/3.55c33bba.js",
    "revision": "10f31f23ef8a9518a159d0af12392fb4"
  },
  {
    "url": "assets/js/30.2aaa2abb.js",
    "revision": "51400ae22cf58cecdedaf8ef092c4418"
  },
  {
    "url": "assets/js/31.2b4f30a4.js",
    "revision": "7a3ab775984f3d27a3edd5da335c0ac7"
  },
  {
    "url": "assets/js/32.ab588c65.js",
    "revision": "851c15ca54d90bc8b3564d177717354f"
  },
  {
    "url": "assets/js/33.52fb516f.js",
    "revision": "dacb0f2c581461ae3494b721cbfb3677"
  },
  {
    "url": "assets/js/34.05de9676.js",
    "revision": "43785f80b160f0974176b961b5728001"
  },
  {
    "url": "assets/js/35.40581844.js",
    "revision": "8f245a6b1ad869bb0e7392f1d7b377c5"
  },
  {
    "url": "assets/js/36.aaaa6487.js",
    "revision": "87eda2cd4f0aa11293f97ea714186f57"
  },
  {
    "url": "assets/js/37.4587d86a.js",
    "revision": "1bd4cc9b4165efef96c2b1a07d727c7b"
  },
  {
    "url": "assets/js/38.fd5eccd0.js",
    "revision": "25f79e04f3e92a00d13681eb15e78d8b"
  },
  {
    "url": "assets/js/39.03f22b40.js",
    "revision": "b6b5975e2c3b1115a16f2e01ce09a6a3"
  },
  {
    "url": "assets/js/4.ea8269fd.js",
    "revision": "3c9f8ad44c966560a2f331b28d27b6a3"
  },
  {
    "url": "assets/js/41.120d8f64.js",
    "revision": "eccf621964ff631050f6675ae29f37c8"
  },
  {
    "url": "assets/js/5.ff4fb1ed.js",
    "revision": "02cfcc0c8fccc6d89b546dfc9dda0221"
  },
  {
    "url": "assets/js/6.75ae4dbb.js",
    "revision": "fd10d9e205cea945952a1fa70afb1b31"
  },
  {
    "url": "assets/js/7.fff42f40.js",
    "revision": "9ed68b217181529b559fcd6bc6924f8a"
  },
  {
    "url": "assets/js/8.8fa11fda.js",
    "revision": "f892240fb42368423709407fa1c5b7b0"
  },
  {
    "url": "assets/js/9.6f7210ce.js",
    "revision": "4495cc92fbbdbf65a6b2b5bcf8ac233a"
  },
  {
    "url": "assets/js/app.8a0f9ee4.js",
    "revision": "bee808023a03a0cd8a2b31df728256df"
  },
  {
    "url": "assets/js/vendors~docsearch.784e33e4.js",
    "revision": "f129e06c6647255e79f5e79fedd11fc3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "55424a5937373edcbc3b9bd79dfc0969"
  },
  {
    "url": "design/index.html",
    "revision": "4cb72b2b413bdcfb8d1a4dd7afecfb29"
  },
  {
    "url": "index.html",
    "revision": "dbee2cebe110875d93525ad6111fb613"
  },
  {
    "url": "intro/index.html",
    "revision": "79c609edf084e419c3af276f0d12e46e"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "cc220a8e5506711f2ffaf4b47b224ffc"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "351b145758fff6791052c8749f7f9853"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "a83e231c0176e5166ab8678a7a36d486"
  },
  {
    "url": "software/index.html",
    "revision": "f2f3f4499ff9f54bbbcfb3a005d11e7c"
  },
  {
    "url": "test/index.html",
    "revision": "0db99d1bc704113111918b9d1d692895"
  },
  {
    "url": "use cases/index.html",
    "revision": "61cd6f1c288d42c799a03e082b36a94e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
