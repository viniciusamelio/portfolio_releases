'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "34d7779f9fa8958299bea6c801e66b11",
".git/config": "c45e4591539a70ed6e6e8d3c9c870d11",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "abd5b4444f165e6e8c5b97446bbace62",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68bdd3d9681d97e2ac52837531372d33",
".git/logs/refs/heads/master": "68bdd3d9681d97e2ac52837531372d33",
".git/logs/refs/remotes/heroku/master": "72c7f4757002fbdc2c6936e8ebb8d26c",
".git/objects/01/f4418603b77e8a2ba640db671b59249f4bb637": "f0ed4efe39adaf7980f978ccf2f43767",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/04/339144166e9ad997ec5830b4954e5af0772635": "93ce1778bce2f116a931f1f3ecd81579",
".git/objects/0b/c2aaa3ec6d07ddafe78960dc90cb58415f950f": "f60cebd0d8429e58b84f205849cbae31",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/19/72aa2532d642d3e58dc9de1aa24588e2baf5da": "262db9fa1f191b14c6eb8be5c71bc36a",
".git/objects/1e/ab157a4d741ad1dc727191fc75b063656665ab": "9581d36cc5bbd7ec827bae2c60af1a1c",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/e2dd7bc1f2617c1e8ce7deb7b4cd17ea2664b0": "265f3115ed3ee9ef9a8d30ae3416c064",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/d10073d99994f7bb4d3ce8e37820c2adecfabd": "f549cfec29ec7fc5524b504323394aa6",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/35/6d904f080d5708a0defaec1ad3714f5017c9c7": "d674428f965785e0d9a86bd6109e6343",
".git/objects/44/0f010785448858aa22d09ab7691e690d3f31f9": "1ae03f926ad0274742661bdb93c14fbc",
".git/objects/4a/568742f7d675f879ff854e8e0d65a9124b43a1": "d881f3d2c6efe296df8bb74ca6663aaf",
".git/objects/4a/c9644013f3ddfe59a892eb0094ee00729b051d": "0cff9cdd57e8598f1f1b0b021e0a2f27",
".git/objects/4e/2b566482818ce7244b6fdad20c3eed1ebaac40": "ed305ba5d741be59269b23cdc3a54822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/56/2632c2feb49362e488babe6450c894ef767efa": "1e969d8da3ad307efdfc71287cc6f5de",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/c3cce847a20e3d6b6c3b12b9f7d6cee9375a64": "a4b2c069594c16282f234f08ec58e230",
".git/objects/6d/095a07482985f28d70aa68a7ab2358fea814d0": "e2a0c546b00fcb5092e1c6c06ef7d80a",
".git/objects/6d/4bf8c0407941087876523ff824ba4e9c9e701a": "e53375456e5bf25a700e366f55bf295b",
".git/objects/72/250711b93b90f4027039f709a7a732b79ebdb0": "30462f9b703ce9cc18784c682c06ccf6",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/aa53104b063396ed47599e5a2bcf97612f08a9": "eb25735e6ed3b671a5e1f7a6da9ddb3b",
".git/objects/78/dc5d36424fbe0200e06c7c9301ad01f137bd4a": "132b468d5d4fdde1bfe430cb2d21be1c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/60aba68e02ba14a9d535b2ddea77744ba0d5d4": "3f684204a7eeb0aa9f699ec8a5ff5a39",
".git/objects/86/a1a34ec1548f253a7e597fa9745889f2a08e2f": "c566aa8e0b51024b0807553341a0b411",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1a0ee81499be11f125fc0a66d91900786691f3": "c93b18e0279916794de99204d42945dc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/dd056d048dd7da9924e40eb9576a30b1c0ff80": "f22d0e37085b071f2f6cf85b9256619c",
".git/objects/8e/dc879671074dbc2c32df25a091d19a92c7f83f": "d2d67f7846e95ab09f6856697550912e",
".git/objects/9a/2f4bdbf5f1f4184eb7e248640a994f8acdaa69": "2069d2df5660ed10e8bdd450c94fd3cf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/04c4b4b1554cf92dbdc9675a13663a59e85991": "48d0273f0b68ee22d2170eb9b754938f",
".git/objects/a8/decd07e3a813af060365ea1bc6095f9a9ddb7a": "20f7a6d8e17b36ce2f53d75ab57a9d46",
".git/objects/a9/5679e63c2ce083def54b86390cb095e54adfbc": "dd2b672fc4f9ec608dbf611b02445fad",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b4/0c94e1a44604f7914173619c593c2ab74b94f5": "26fe653c455762d0fc08e8713356b283",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c769585e64b2aa8bf102f5062bee0d3faab56b": "e846756a6cd26f5d84ce4963390e09d3",
".git/objects/c6/69fe11b52e2586993fa60a93e021d632ed3b9e": "e66864ce71107203faf1bcc8cec1be7d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d4/c6e228949cc81bbfbf5f75a12d739f9bda70e3": "179e42cc9a9735b77405b34ceb9ca279",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/d7dd9adb22123e92add046bf3b6000161c3b78": "cfaf7374e9b7081d74f5b9738370db72",
".git/objects/da/b3e6a66dd667b9c494ce9490481ee2a99d8bba": "cf8d7fb0e75b3947dddb287b06826b9f",
".git/objects/dd/b3c858cceba4c6ebbc6d1423b12b8b1d3f7c35": "8c7c08b678904b9397062b02585052c8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/49610c578c2e3f2b4592571828b5419d8d14a8": "a1271ab3b1a51f0ac460723c540eb28b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/11fcc749a2465f179de5eea7b04c3efba44095": "13fbc6ea36d41456dee5bfd8cd56597c",
".git/objects/f7/29d77094867280888677e9ede5a09da48a6994": "3491fa5a43e9e9f5e00442a123eccbad",
".git/objects/f7/32f57154c437519c23e7d3146e0b59ebf2b59a": "ef4f7ae6e7330ee9238c366425beaf0d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "47103b51157c0c4cf2b126ed09878203",
".git/refs/remotes/heroku/master": "47103b51157c0c4cf2b126ed09878203",
"assets/AssetManifest.json": "4dd8c74ea086ca10f2a225ded2713e26",
"assets/assets/fonts/Cocogoose%2520Pro%2520Italic-trial.ttf": "ff45b6b09e18a4e06822d1d61e862d35",
"assets/assets/fonts/Cocogoose%2520Pro%2520Light%2520Italic-trial.ttf": "0fcb934be3e7a575a00ea980ae14f4f9",
"assets/assets/fonts/Cocogoose%2520Pro%2520Light-trial.ttf": "b4e46f03d0e03a9192dc3c2ad1a4e104",
"assets/assets/fonts/Cocogoose%2520Pro%2520Semilight%2520Italic-trial.ttf": "f3d5158e8d9b948d80fabe596b4e9218",
"assets/assets/fonts/Cocogoose%2520Pro%2520Semilight-trial.ttf": "39b86773ce0ca6575430484e263746e2",
"assets/assets/fonts/Cocogoose%2520Pro%2520Thin%2520Italic-trial.ttf": "a9dc2245d52132f790dfe5eb93b71139",
"assets/assets/fonts/Cocogoose%2520Pro%2520Thin-trial.ttf": "d85c699a2cf2aa2c04d034bcea9aa8a9",
"assets/assets/fonts/Cocogoose%2520Pro%2520UltraLight%2520Italic-trial.ttf": "65c9ff8b3678f9f7b81da31fe2e01082",
"assets/assets/fonts/Cocogoose%2520Pro%2520Ultralight-trial.ttf": "970dcca1d4f88e36064431b05be1757b",
"assets/assets/fonts/Cocogoose%2520Pro-trial.ttf": "ee56e6fb8331ee7376b3495d4adaf348",
"assets/assets/images/abstract-technology-hi-tech-background-banner-template-with-copy-space-vector.jpg": "aa0541ab0fd2d6a4385f2d6cfa94d516",
"assets/assets/images/bg.jpg": "f6901770937f7dd0c32b6c3aaba42fe6",
"assets/assets/images/dart.png": "5be06c5542e29610e703974c1ab156a1",
"assets/assets/images/docker.svg": "9d5d38646d9c3bce28981c697b25a5f1",
"assets/assets/images/flutter.svg": "af294f95b3f4b285875d4bbcf554c7d7",
"assets/assets/images/me.png": "0bf5471544a6040dbe5d6d1fcb752aa8",
"assets/assets/images/mongodb%25201.svg": "f906648cf779d9708cbfa72c42a43623",
"assets/assets/images/mysql%25201.svg": "1b56104999267a1c0e7819dbe9eee6ed",
"assets/assets/images/node-js.svg": "718cc5b49ba11d2543ee8055ffb3400b",
"assets/assets/images/nodejs.svg": "9a1a3e4cb641d6aefc865eb46aa6e8da",
"assets/assets/images/react.svg": "16d28242c2381ce99dfb83d5579556bd",
"assets/FontManifest.json": "ae22c3aef84cf45439f28419ccddb005",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d2c501782cb766c0816547fac24e62ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/shaders/ink_sparkle.frag": "2a58b60a6ffe5df6343e247f3ef54482",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc72e881555349148631c7d9faa2454a",
"/": "bc72e881555349148631c7d9faa2454a",
"main.dart.js": "62395325bb9dcc336db34ca2ce677613",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"package.json": "d98a36f2856d1ed759f8bce7aea363b8",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
