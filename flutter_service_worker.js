'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b828fc276ad43c3c21e29b0b9f3370b",
"assets/AssetManifest.bin.json": "788681e7fa574b300bf922617009695c",
"assets/AssetManifest.json": "d446fdd47c8e37a2dd94c097af298514",
"assets/assets/ecart_project/user_manual.pdf": "7f4f08724a959e2e02a81b6b2ec75413",
"assets/assets/festa_project/adminAccManagement1.png": "e1ce25fe3be317c54eb148e9224ce643",
"assets/assets/festa_project/adminAccManagement2.png": "d49ca35266b125ffa5d4d30c192f62e9",
"assets/assets/festa_project/adminPortal.png": "c557e1f3f8c5e973e7697f161b9d64f7",
"assets/assets/festa_project/albumManagement1.png": "2f3d153d8298f3ae9cf9cbb6b3f65a31",
"assets/assets/festa_project/albumManagement2.png": "b6ff3dc6fa12b739de04e5f340494318",
"assets/assets/festa_project/albumPage.png": "9b2c29590192d223c712b08ba3bb6ef3",
"assets/assets/festa_project/index.png": "d4d9202b8cbb951cb09bc7606b451862",
"assets/assets/festa_project/searchPage.png": "cfb282f1ad4f6afea6feee1b74396a01",
"assets/assets/festa_project/searchResults.png": "901d0f141460f188473cc9392e580ea1",
"assets/assets/festa_project/singleAlbumManagement.png": "040a8e62d92b0ea10984aa4d1bab2710",
"assets/assets/festa_project/teamPage.png": "96e1c7de21993b426028fced02463785",
"assets/assets/festa_project/webproject_report.pdf": "ed99336726b10b2ac42910da7c1508e9",
"assets/assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/icons/contacts/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/assets/icons/contacts/gmail.svg": "febead9156934b31f071a1e4664d9122",
"assets/assets/icons/contacts/linkedin.svg": "05a86a0c4dfa89a3370294d478045963",
"assets/assets/icons/contacts/outlook.svg": "a0d5d78b054c1fa48cee6b2430db3f52",
"assets/assets/icons/contacts/telephone.svg": "9d9697a925635538a7fc6819e6337b4f",
"assets/assets/icons/expertises/css.svg": "2348e003fa97f1e2a6955aae79911a2c",
"assets/assets/icons/expertises/dart.svg": "9bdebce5ff1d66b398d9ffccd878a5e3",
"assets/assets/icons/expertises/elasticsearch.svg": "054de0c15b259a52d0d8c79bdcf23cda",
"assets/assets/icons/expertises/flutter.svg": "ea67ff4e8060634c0008c912a810338e",
"assets/assets/icons/expertises/html5.svg": "60355ba2b28d03b4e5309a326de1bfde",
"assets/assets/icons/expertises/java.svg": "c35bc6824a4fc421ced749981b633bfb",
"assets/assets/icons/expertises/javascript.svg": "50b1f12e766978b8b947c986193a175b",
"assets/assets/icons/expertises/kibana.svg": "14bc44b711b4cffb9d9384890f0ead07",
"assets/assets/icons/expertises/mongodb.svg": "6212cfc762500f22443465de26bd690a",
"assets/assets/icons/expertises/mysql.svg": "863dfa17a3cdb94115c3b1204b98b164",
"assets/assets/icons/expertises/nodedotjs.svg": "f216a4a331e174408defcde7ff8327d1",
"assets/assets/icons/expertises/openai.svg": "67826939b37d9873afb39fba9714d3f3",
"assets/assets/icons/expertises/spring.svg": "cc61c5ef9494bb3a6e8483116457de3d",
"assets/assets/ir_project/index.jpg": "457a920e551c9aa8c787e837c3764d10",
"assets/assets/ir_project/multiplewordquery.jpg": "9caf277fda9c24aedf0c93c13765b36d",
"assets/assets/ir_project/multiplewordqueryResult.jpg": "bef6e41b19e65c1ba4ab91158fe4484e",
"assets/assets/ir_project/onewordquery.jpg": "44dbadb210f200004e0bff51e3d2c10f",
"assets/assets/ir_project/onewordqueryResult.jpg": "21fb1b422011bf4c34206507a00f596e",
"assets/assets/ir_project/partialmatch.jpg": "7cf997cfbfdd6ca61cb8613cda678418",
"assets/assets/ir_project/partialmatchResult.jpg": "56ef50cd0615c1c514d4286edd802d6c",
"assets/assets/ir_project/ranking.jpg": "15ac69a1b024d2e8c2605b448fa226d2",
"assets/assets/profile.jpg": "653bd37939167fc78e6f56beaf2e9ded",
"assets/FontManifest.json": "7163af5017818916604e24a1654ad5c1",
"assets/fonts/MaterialIcons-Regular.otf": "1fc686271384fbce1d4ebf176b8d11da",
"assets/NOTICES": "60a69dec180a23f66cd300a6770abdc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "df5d082352a44beb47841fd17f794c4a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d705e1de0e177b9f06ce35fe823e3bf0",
"icons/Icon-192.png": "03758b24e48ac05175ced78f7ef5906c",
"icons/Icon-512.png": "c6341f01f528982f250e9d5b7b21f501",
"icons/Icon-maskable-192.png": "03758b24e48ac05175ced78f7ef5906c",
"icons/Icon-maskable-512.png": "c6341f01f528982f250e9d5b7b21f501",
"index.html": "6d1a920c48fbe4c86e6b50b72b310554",
"/": "6d1a920c48fbe4c86e6b50b72b310554",
"main.dart.js": "e15b3fb6432e19ba4d586325e3368590",
"manifest.json": "61ad491428f23d3c27a4f4d1a73fc217",
"version.json": "0b49d464a85e7e9fd232d96fe021c4e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
