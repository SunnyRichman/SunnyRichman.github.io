'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "059eb5a4702a87749ffe7fd4c6645c6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab01b77b5bf39c86f16c70681a663764",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0dd24ae4d5b310838874ee5244ceca8c",
".git/logs/refs/heads/master": "6135637c981b37aa854dc297f1d82260",
".git/logs/refs/remotes/origin/master": "10f7c7b441a09459dce9c64b0d6b8523",
".git/objects/01/212163acb1526c587a75999d2342dc3cb530c4": "b305a64e1ecf9f03943e9f2276542ea3",
".git/objects/02/27a4da4d2a65522a20920d51c37f3144fcb474": "c707ccde5d3134a8296cd2ced760654c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/f7747cc2a3cf4875de0c7ec924c03beda920b6": "271e6f971aa843801f4eddcc84517755",
".git/objects/0b/56a0163dafd55a39646bb0cf8d402686a89f51": "4116c3c15f86a356635a4a1c1613a749",
".git/objects/19/5caada065db12d587e291d220daa8f19149492": "94c39495a8a6f072b6c597cc02c736c6",
".git/objects/28/1c82962782d640245541fb38a856f805e04868": "55af693ac26ef76c7b8cc8a88155c0cc",
".git/objects/28/787fddc7b23287fcc7c028fc12326028e60dd2": "055e532e17309fe6b2a94ac024a0b972",
".git/objects/29/418520c83a48028322ac2f44dea763e5d2a577": "33e987958a831de72308c5a540327ee9",
".git/objects/29/47e5eee6d964c20853748c0f1f283a0be6c55e": "fc3fcd02f2268f8b4f89ade2c55c26f8",
".git/objects/2b/4ba49a7a11d2df57fe0ccbb0fec65c66909f26": "efa4c153e44cb6a9454de368ddf4393a",
".git/objects/2b/4df6e214721cf3048efdbbd5dc4c3047fa23aa": "85bef233177dbf0749271451303575bf",
".git/objects/2e/68e5480fc769c17499f114d3c91b5c75f09449": "34006e655df6ca482b343fb41178b260",
".git/objects/2e/f998c395bb6eb27b647c882f8f7eb2129b163e": "f6196ae00a51fb993586aafee93065aa",
".git/objects/30/af33c883ee4433437e2e5a7d4ef53246001865": "ff91723e51f977412a7ee8d056519c02",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/b330b6d3f73eea31702b1ead17d54ce129f36a": "fb33076796f5caf6417a1fa0334f524b",
".git/objects/37/126294fee1d5de4ddaaad866ce4c2918f9811e": "9a72eeb7b9453eaa463223091f7c9df5",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/099dc6ad29a4cee33e74a670e30c9228c2eb99": "fc69e1da31d8846be4ffc19890614b13",
".git/objects/46/69099309ec70cbc1fc8191e6e47a4fc8d9d0f1": "2a95c4a8f81184a87f53de7235bc5738",
".git/objects/48/9d4cf67edb3ea6169704c4ff6d89e6cc906e69": "2858e302b7dee1f18a59c81d620a14b6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/91145e76c020c6084cd6ba4b3f9613ec841a4e": "fe7ecf899b3c0c79630a78c54e406236",
".git/objects/4c/9ab223f3704ca0977d1e78432246237e75e7e6": "fd01e6722b31301482015238397ab315",
".git/objects/4d/b27e796e8da50cd2cbbcd423ea8c6639de3d38": "4547d9e44c9e2afa59a115c63603958e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/53/8ec5bf2a9a5724899daf728577cd0b8beaae90": "91a402a18f3471147ce264a747cc188a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/be15cbf86ba70b0f9376771dd85c4ac60f7d12": "d5ba3ffdb8c5f573640637da22aeb898",
".git/objects/59/bb24379d1c6ca5821ac97fa9a05b76bc610ff5": "53315ea215a529e055b5ac78941e8f38",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/b938491d47f8f47b23e3f9ec06f8f751c3a0fc": "6ff2a716374a95603595e2a57e0bdbfb",
".git/objects/62/1aafeed3ec706af300bf38505b24f3fba69225": "49fe1f76f7ee1e3a6601cd65c05c9f78",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/71f9324fd513e1ce835866cf9963ba3d5ed1d1": "9d5672484b7bdec364d2fe1cf509ad69",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/790786d3ebf2e43b02fa6932e5a20728be32b2": "7f57ab4d4460d775e67718f8f979e85a",
".git/objects/6e/a0dfc161dc48f9900c54c13b522c72a41b012f": "de549b1c114fc5060fccbb2ef2fb35e0",
".git/objects/72/e512dde8b255cb9a467a0c1b96a8bb642757db": "46afa69f8ab7b1baffb860badfef189b",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/76/195be47be5bce33c3589fa11bf004f92b1b535": "82fa22fd378f799cf203d217de9e079e",
".git/objects/77/0a73c014ea192a91bfcb71143d1703b35b0c08": "5bf95e9aeed372d7cbca71ef336c81a5",
".git/objects/78/dc1f3b747759dad4596ff44ab9cdb555f4caa7": "76f26f5dc0bd01695937c60beee4c641",
".git/objects/7b/508bdc1e3c367ff42f074f6d6f91214f765cbd": "8d25777e9cbfd8f340c4fdc35fcb430b",
".git/objects/82/6ba483ffb7bd54c3e649e786a200d09a076867": "68a2d2edfe797676aad088821bc9cb53",
".git/objects/85/19cc91b2b6e01e9882798c9d5b3e2a37717395": "6df801e8c7ac3cb741c437a27967596f",
".git/objects/87/5e8f9a52355539b6dd8e098be40c70e3b5edc3": "a887209219630d139dd3e014f41fbe50",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8e/202914d551f88daf4576d65cbda637e9b15ab2": "5f58aca31804703b423389276ad256c3",
".git/objects/90/2724e5c654c150fc2f50db626e918962b08cf8": "c021b2923e8122df24624a09de9c3c41",
".git/objects/90/bf8da6daed389588df76c2b784a427ed9365e2": "0b8d5b9abcd2fefe4797331bbea5c505",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/e516239d68d6616478b2bad15895dc14f9b087": "768b07ba2405be6dfc2982453328cc79",
".git/objects/92/8852b14bf55a5829d627d44e16eaf011ae833f": "9e93a54c664374e6676bb1f04557cc69",
".git/objects/95/fd27bc3a80dc539eee21d7eb75602586a8e09e": "45cad9f8352656da5a5619bce7bfc7f1",
".git/objects/9e/124b466aad02243367deffe38a839de03fcaa9": "e17bfba08688c059a8bc755d7fdfcb40",
".git/objects/9e/e779ada6753eab5e833350d167bff6747c9ae3": "8468d062c11953a3d3f4eff236f6c95d",
".git/objects/9f/319669136051182c22763c4447d04c21c974bb": "ae56228bbc0607b4cce57b112faa530f",
".git/objects/9f/ada9d653d168fa4e1ee5de42ecb6cd7974ccb6": "830f341b4cb7b9fc5fc7d0ad6f02d4e7",
".git/objects/a4/c8174865eb75fcc99db14a78630b4a9e374d3c": "c9080ceaf6bab2a80a70131427ff7e39",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/af/4efa559ff98efed361bccc0ba13d6fe2ec8ff2": "dee913984ca27aa7fbf92149e801f42b",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b6/06da3ffad345438c82a197b9937b8a7ade0ec7": "bdf852f77f2a59f6bcc10896801f2980",
".git/objects/bf/bd69d96dc088d054decda4d8aa1923092e6f7d": "c75b9cbf9e5c4cd11c213b593c1329c6",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/c7/721642e8e85f6ed9feef549779c825c63da705": "484203313274633f01e10965d97b822c",
".git/objects/c9/00c7f1c567a4e0d62e97f89066e351a615a759": "cedcc9c712b7edce98164861f28861bd",
".git/objects/ce/e8dc3e20c0e62afccf10da3955cf141aa4c193": "e3e0f470ab2fa3f2a5efba8337c74556",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ecdf296340af347d082b8df42876b783ee8c0e": "8b17aff946a0b90279deab9d69a7bd0b",
".git/objects/d7/37d84e6d01a828987640948605bfdc752e2876": "434be5888babaebdbcff2fcb1e947df5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/2f128431db6690baf2f4f8fc0dd1bbd5cca33f": "ca19bf2a1b1f437862261055c7d0933f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/68cd28e1ee4bf00ac559353b3deecea702c9d3": "4f766e8a7576d7fe105985ca21dbc40e",
".git/objects/db/bcbf900691a0cec0c75e34ab402ff04fc41ab0": "4dfdfc4fb77217b865674d185f570c72",
".git/objects/e3/6b68a5f923f19029646bee5a0fe528240a76ab": "7105d19ffb9853525332c7cdf0f9d8ae",
".git/objects/e7/4afce1dbe7bc942a9b2dbf2dbb89f129a5a5fe": "a2d094c0d2e7b338b33fcb701032bf9c",
".git/objects/e8/b1e371823142b9c86804fa51dad4ea72cbbf34": "0e4d85b28297d9a188d08e1b23966d51",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/bdab0ecf9c844b8c20d25e9115c06f9332d3c2": "647d756251203c5c38ac71cf159c6b0c",
".git/objects/ec/19515415a6517722f47b58736dea2fbb00fee3": "c8920a44876c47958cfdfc84a597fd42",
".git/objects/ef/53d37ee2c0381e0d227956306d517919b539a1": "3d948bffbc33958a585d6485c5c09825",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/122c00abd4ac70f86dda58d2ecf940100c10d5": "e5a487a218806b1f98ccf6064b135fee",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/5b9e806dd922e0659dbd0c535508a2c12a80ed": "59a0a2218315220fcba60279228ed483",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/refs/heads/master": "3220d9c35a06c14a2c79b80fa89852db",
".git/refs/remotes/origin/master": "3220d9c35a06c14a2c79b80fa89852db",
"assets/AssetManifest.bin": "8b828fc276ad43c3c21e29b0b9f3370b",
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
"assets/NOTICES": "5e4f56d6db2d3df9738ebac1ff8115b4",
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
"flutter_bootstrap.js": "246bbced7bd1d6206f21c4a881c97f49",
"icons/Icon-192.png": "03758b24e48ac05175ced78f7ef5906c",
"icons/Icon-512.png": "c6341f01f528982f250e9d5b7b21f501",
"icons/Icon-maskable-192.png": "03758b24e48ac05175ced78f7ef5906c",
"icons/Icon-maskable-512.png": "c6341f01f528982f250e9d5b7b21f501",
"index.html": "6d1a920c48fbe4c86e6b50b72b310554",
"/": "6d1a920c48fbe4c86e6b50b72b310554",
"main.dart.js": "77c7253b614b896c0d1cdfc42a5647f4",
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
