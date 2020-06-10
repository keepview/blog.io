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
    "revision": "5f002f514f7d3c142c9b0bb410c800f2"
  },
  {
    "url": "assets/css/0.styles.a90f5cff.css",
    "revision": "9431b0116a64c411489a1d96bd05c4cd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.78893ca6.js",
    "revision": "db7246e837837a6055e1858e19f3b171"
  },
  {
    "url": "assets/js/10.05fd87f7.js",
    "revision": "2dfb3b802b2c161feeceabba358284d0"
  },
  {
    "url": "assets/js/11.e61a4e37.js",
    "revision": "af941bd032a760f50e33a2318eba4352"
  },
  {
    "url": "assets/js/12.b414bca2.js",
    "revision": "5bb7165f1883b77a45e54fc8956337ce"
  },
  {
    "url": "assets/js/13.8aec9e92.js",
    "revision": "efbce552f284d51577fa68eaa2cf5d6f"
  },
  {
    "url": "assets/js/14.35e3189f.js",
    "revision": "b0f712a4d788ef89c58c43d3bd9448e6"
  },
  {
    "url": "assets/js/15.7aaf5d77.js",
    "revision": "459c37fed2a4d377f047c61507bf92ef"
  },
  {
    "url": "assets/js/16.b8bbf08b.js",
    "revision": "809d2df57f5b117401d7ad8b292f3e95"
  },
  {
    "url": "assets/js/17.4edaf5c9.js",
    "revision": "1a06ce23c691c8abff6a356ecc55088d"
  },
  {
    "url": "assets/js/18.039a0a6d.js",
    "revision": "44a418692a91ea6b7e4dfdeb3f9748db"
  },
  {
    "url": "assets/js/19.3e445be9.js",
    "revision": "46b4f3d63f2c1e7ce9ae30613deeb8aa"
  },
  {
    "url": "assets/js/20.d33f5242.js",
    "revision": "222ac5d9f10d55354aeb19408400d87f"
  },
  {
    "url": "assets/js/21.fe68c386.js",
    "revision": "9f67549527387e51c13066b7240053d7"
  },
  {
    "url": "assets/js/22.8841d9ec.js",
    "revision": "12f2e5604bab7f583000bfce7e9a0320"
  },
  {
    "url": "assets/js/23.262c0ba1.js",
    "revision": "37a5be261b64fa6c305bc1546fed6b4e"
  },
  {
    "url": "assets/js/24.ebe597b2.js",
    "revision": "1ee3f9753f6a13607630f8364b0b374a"
  },
  {
    "url": "assets/js/25.035a0954.js",
    "revision": "bac18ac8c142102e659c10240a3f65a2"
  },
  {
    "url": "assets/js/26.8d5de71b.js",
    "revision": "6ba7b6432b85b2b4c366b65da94435c8"
  },
  {
    "url": "assets/js/27.51d76653.js",
    "revision": "2d702c585caa33626b27bdb50c80183c"
  },
  {
    "url": "assets/js/28.7a51028b.js",
    "revision": "b82e6d8a12ee2ad96beae7e61d3ef926"
  },
  {
    "url": "assets/js/29.002fd548.js",
    "revision": "59ace53173c88155a26b539e1eea0ceb"
  },
  {
    "url": "assets/js/3.cc4be54a.js",
    "revision": "18e356eb737c4a47fbc946896043dd6c"
  },
  {
    "url": "assets/js/30.6ac84822.js",
    "revision": "9f59f95500b4ae1bb6eedf994fad299c"
  },
  {
    "url": "assets/js/31.1df9ce43.js",
    "revision": "dfc1cc2f8ebd7e618d12c16f18fcec6e"
  },
  {
    "url": "assets/js/32.7c9231b0.js",
    "revision": "71e1565f27e54f156cb1f8a94224c2e5"
  },
  {
    "url": "assets/js/33.d142e985.js",
    "revision": "597d92ee63e1da4cdd9447a15d13733a"
  },
  {
    "url": "assets/js/34.7bec74c4.js",
    "revision": "946bc44e08c54138b486b3e09aa1eafa"
  },
  {
    "url": "assets/js/35.24a790f8.js",
    "revision": "b4a731a0ce8e940e4ace803ace0354fd"
  },
  {
    "url": "assets/js/36.c906d051.js",
    "revision": "47a409e69f85911491697e03e0eec64a"
  },
  {
    "url": "assets/js/37.dd297b2a.js",
    "revision": "65b4b60990634b5783636cadbba30a2a"
  },
  {
    "url": "assets/js/38.1d0afb1f.js",
    "revision": "a12b6dabd8d58a81a18f356f83ece0d4"
  },
  {
    "url": "assets/js/39.93ca75b9.js",
    "revision": "e44e9d0bb78a608c1c917c76c21283d2"
  },
  {
    "url": "assets/js/4.507904d3.js",
    "revision": "57d077a895b3ee1e9e73b490796b9731"
  },
  {
    "url": "assets/js/40.3f671e1b.js",
    "revision": "9d359c376004fe2eef69ba71ba62738d"
  },
  {
    "url": "assets/js/41.907d670b.js",
    "revision": "b35c456f19e21b443f73c970f0a613e2"
  },
  {
    "url": "assets/js/42.badc6f1f.js",
    "revision": "5c390476a6799c2f5bd34638a15ec4de"
  },
  {
    "url": "assets/js/43.5b27fd04.js",
    "revision": "d908c8977d61cac20c1e67896fc0946e"
  },
  {
    "url": "assets/js/44.45a07b74.js",
    "revision": "e515820d384209594503e6dabcc1db0b"
  },
  {
    "url": "assets/js/45.e5d36f6c.js",
    "revision": "6335ed6171b0e260dc4adaebf7133fb1"
  },
  {
    "url": "assets/js/46.e2852906.js",
    "revision": "97a216717270d4dc3db6ce93dbf268a5"
  },
  {
    "url": "assets/js/47.ab3790c3.js",
    "revision": "d3e55862f4fd7e9cd572627f8d31c56f"
  },
  {
    "url": "assets/js/48.5860fd5d.js",
    "revision": "a267441ee7b3b1f13ca0c178c1c64803"
  },
  {
    "url": "assets/js/49.6e89a7f2.js",
    "revision": "a3a8165c2be17168e1183cd2fcebce71"
  },
  {
    "url": "assets/js/5.958fd2e4.js",
    "revision": "bb173cfcb44698186e4351371ebf029a"
  },
  {
    "url": "assets/js/50.951faa20.js",
    "revision": "8cbb3554c265609ddaf912d52ddde747"
  },
  {
    "url": "assets/js/51.fac01f49.js",
    "revision": "b81ec0ff3bd2134958de87a106efa2d9"
  },
  {
    "url": "assets/js/52.7b17c1cd.js",
    "revision": "03884be8cf0e07151194e519572a7e71"
  },
  {
    "url": "assets/js/53.e15dd733.js",
    "revision": "7446e44c638508713a72e68b350c6232"
  },
  {
    "url": "assets/js/54.1d801049.js",
    "revision": "2ed7d4fdbd2099ea48718889e6edace6"
  },
  {
    "url": "assets/js/55.2f24151a.js",
    "revision": "15f03ced5315b16e2084d9ec3157b064"
  },
  {
    "url": "assets/js/56.3747189d.js",
    "revision": "bbd4d0d4c9f21c7006dc9005af8a6aad"
  },
  {
    "url": "assets/js/57.0131a0f4.js",
    "revision": "0142237b6bb1ed63c828a12e8a22bcaa"
  },
  {
    "url": "assets/js/58.851d65cd.js",
    "revision": "cb56df8d2b2e7d4538dc902592c93f49"
  },
  {
    "url": "assets/js/59.3f2cd7dc.js",
    "revision": "69813ae0a258b9bf57e46cfc5af1579b"
  },
  {
    "url": "assets/js/6.20ab9055.js",
    "revision": "e251694476ce557d564b6c375d34d045"
  },
  {
    "url": "assets/js/60.2ada0eae.js",
    "revision": "d82acebc0bd001abb0487ee7f41d02e3"
  },
  {
    "url": "assets/js/61.cfa7f20c.js",
    "revision": "4b19c73914585cc946f480a1dc82f1c9"
  },
  {
    "url": "assets/js/62.8a347f38.js",
    "revision": "6d568f3104c3d1d3f3e7d68e676f613e"
  },
  {
    "url": "assets/js/63.325221ea.js",
    "revision": "566bcfb8271e214a59c1b2b02cac72c8"
  },
  {
    "url": "assets/js/64.0843aade.js",
    "revision": "c628e2b08d1a05c36b74924a9a7db8dd"
  },
  {
    "url": "assets/js/65.00cc176f.js",
    "revision": "7bbfb153b305f965d97b8e6b176d4e61"
  },
  {
    "url": "assets/js/66.aa3469f2.js",
    "revision": "7da0dd52ac3ffe69672369e54b6b0d25"
  },
  {
    "url": "assets/js/67.81d50aa4.js",
    "revision": "912eb8318bf7f36c052ab05edec37d8c"
  },
  {
    "url": "assets/js/68.433be9c2.js",
    "revision": "73b92cfb45aa252fe9255d36d39b8c01"
  },
  {
    "url": "assets/js/69.1aa47479.js",
    "revision": "36d3f132992b680a84fdfb8d7ab25c18"
  },
  {
    "url": "assets/js/7.84abc75f.js",
    "revision": "53c379296a9e3564ba63b8901b3b1332"
  },
  {
    "url": "assets/js/70.d4dff4b3.js",
    "revision": "995a7815273d0f6cba031ab113e86579"
  },
  {
    "url": "assets/js/71.84cb43c5.js",
    "revision": "ee7a055ea9b3ed0be654554ed3942c9f"
  },
  {
    "url": "assets/js/72.dd998c1e.js",
    "revision": "b0190c4fef67b0f91e8c672ce4010548"
  },
  {
    "url": "assets/js/73.39ea7f07.js",
    "revision": "999a223cf15adb7d94b4a8c243cb4730"
  },
  {
    "url": "assets/js/74.5524cbe2.js",
    "revision": "ae173e98d01eecf741b6068267430487"
  },
  {
    "url": "assets/js/8.dc3958dd.js",
    "revision": "5130622f81215358fbbe5549c7ff2edc"
  },
  {
    "url": "assets/js/9.abb41c8e.js",
    "revision": "a7d48b2750842a7d5fe95a2e152c9205"
  },
  {
    "url": "assets/js/app.e7a882fb.js",
    "revision": "b5e84d5084591adce355db585c626665"
  },
  {
    "url": "categories/后端开发/index.html",
    "revision": "330f1ed58b4981cf9f313b7b2aac6f6a"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "c3eb2e05f6c2f34264074be2d7c728c4"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "67b131c8ce43549afb85448f1f32d880"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "a3b72f0a67c66a7ff99ce3d94d02e145"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "ee053ff4b48ee1275711cca9dd837401"
  },
  {
    "url": "categories/前端开发/page/5/index.html",
    "revision": "026bce97038746e1038e5fd3cd6021fe"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "9eaaf996a9c199fb332ec61f7e2eb86f"
  },
  {
    "url": "categories/index.html",
    "revision": "3ac3606c3f19dc3ae2563c244e8271fb"
  },
  {
    "url": "images/avatar.png",
    "revision": "439d27f1529b8472c78e8b969590bc1f"
  },
  {
    "url": "images/banner.jpg",
    "revision": "86a9499f59ad03654d37002bba9ecbd9"
  },
  {
    "url": "images/head.png",
    "revision": "0cc034080ad1989c44e802bf1090fc79"
  },
  {
    "url": "images/line_bg.svg",
    "revision": "5825f033c6ff12cd1ed1f3c99dff5e4b"
  },
  {
    "url": "index.html",
    "revision": "9e5193a96536ea5cc107ce741d711837"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "9d417a6e72b04be85c6fa3c0010b8f81"
  },
  {
    "url": "note/随笔.html",
    "revision": "26035da30fa5599411df8ef379242948"
  },
  {
    "url": "note/TypeScript 学习总结.html",
    "revision": "2159df252bfb074d23f731c847106c45"
  },
  {
    "url": "resume/个人简历.html",
    "revision": "79fbb80cc0163cfdd109b636c8e5cb4a"
  },
  {
    "url": "server/JAVA__Java-JDBC.html",
    "revision": "3b580c5d3fd2184591fc4d811667d0b7"
  },
  {
    "url": "server/MongoDB__学习笔记.html",
    "revision": "486ba0bd6dc09b2e1c864a1341a124da"
  },
  {
    "url": "server/Node__模块系统.html",
    "revision": "0cc7fda0d693b94bdfeef66493569f43"
  },
  {
    "url": "server/Node__事件驱动模型.html",
    "revision": "f48f0aee871d56987f4f1f03c370d038"
  },
  {
    "url": "server/Node__npm-nrm-nvm.html",
    "revision": "37660c18e903a8666d0935ecc4ac502a"
  },
  {
    "url": "tag/模板引擎/index.html",
    "revision": "611651d09fa87f6740ef65bcdd1135d0"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "a389d4653bb08b64fe8b3d7306a13e1a"
  },
  {
    "url": "tag/原生JS/page/2/index.html",
    "revision": "15d286cbbbfdc1c988640fc7f5bffe25"
  },
  {
    "url": "tag/Bower/index.html",
    "revision": "20615e30691575c977972a367d4004d4"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "4cafb4977585b90630e64677d8464186"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "d6e3cbd2d2b01cdd0e7bf402a9ea4584"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "66c8cfb160b721e11c956436d0d09f65"
  },
  {
    "url": "tag/element-ui/index.html",
    "revision": "e47fb9bc49529a1a17e42f58e996947c"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "cfbe3a5f8d0e07676d7f25fa5085ddd9"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "2a5b223c82690e8632802646646d9405"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "a68593aa9ccdd5b3aa8e00523a8e23de"
  },
  {
    "url": "tag/Gulp/index.html",
    "revision": "7d8f9910a168146edd7198d9941b695d"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "0ed9ff51dccbd38e7a0583c6a308388c"
  },
  {
    "url": "tag/http/index.html",
    "revision": "3a1cc6a9282e623d862947a71e23514a"
  },
  {
    "url": "tag/IE/index.html",
    "revision": "99b94515441939f95c352079667a2668"
  },
  {
    "url": "tag/index.html",
    "revision": "f5074b48ab3a7f73f9850b885b22900b"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "1c665b4a3f899f2551dd4a297d0df324"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "93401f1d14df60b7a732e52bcabb7ee2"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "2150adab95c3ef5ac8025e30cb3c2e1d"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "b8b724a8adb511af261f83f27887316e"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "61a7e64d0b5ad2bfcb423cce4e16badf"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "3ffb9ac2565decceb21d2282daac8311"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "6fb8996110d61667c4543cb9a0f8e67c"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "ed185d163f2ce4e21c4e6757a1fff655"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "e5aeeabf65f6c9e040ec66536e2a0457"
  },
  {
    "url": "tag/Vue-Cli/index.html",
    "revision": "b67071b5c4d540df32b566a4eaccac21"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "7e96f77b1ec7ffa0cab3463d85e2b573"
  },
  {
    "url": "timeline/index.html",
    "revision": "d6e6483d16c905743a04d0455260dafe"
  },
  {
    "url": "utils/htmlToPdf.js",
    "revision": "0b146b124c46dc099d621035b5bb2499"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "d43115b4902f8e92f2cc294a2fb38f9c"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "07c3bc8aa594a21c89e2b04515c8b9fa"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "8d25f47d348be2e4bf460a9950b99468"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "c7be25752f6f007ebb2bff1a145eca11"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "b5bc5b49463bfabb06f53c2aa029f83c"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "959dea4f954e80e4e0677908b1acaef8"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "4f7c52de7fde282a13858d81bd036450"
  },
  {
    "url": "web/html.css/HTML__Jade 模板引擎.html",
    "revision": "8154dd52626f49577c5c8be68145f667"
  },
  {
    "url": "web/html.css/IE__兼容问题总结.html",
    "revision": "58ffb03c989bb4e692d401a783a92539"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "836c1436421ea7b2081dac9cab624c7f"
  },
  {
    "url": "web/html.css/Mobile__适配方案.html",
    "revision": "5e5a7f9d03487a9e9b884b53dc6bb68b"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "f533f9d16ed874e9fc8023af6632f0e6"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "f4b3991b9bf7fa909af3b68ad0243917"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "2df90539d99111ddf0e79c0ee31130bf"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "474ebce4716cf5779f9635990619dc0e"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "bf55210f5347e06598f0f82022650ea3"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "615debf1033a63b76400ed0913a01730"
  },
  {
    "url": "web/javascript/JS__封装功能函数.html",
    "revision": "8b69b0c242b608e0348e760a7b499da0"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "4b308d0d5e707ac29c3ce863c023ba94"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "1049430bd64fcb7b401b93f4e6aa7725"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "6acd24e3056d8d8ca71068c8ccf91a62"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "443e4aa02c3208543af99bbb60c278e5"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "a808b08fee9f74465e09cf013460bbee"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "5e3ddcf650262a4d64ad9dc9c2ae0417"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "68d0e5a74d7210f72257e926ec5aa122"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "3106994081d0a5f671ba74f32606fb08"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "8eba1301fb396c6e542fee89b6562154"
  },
  {
    "url": "web/javascript/TS__高级语法.html",
    "revision": "c5f74d93612082be33f2562a131eb939"
  },
  {
    "url": "web/javascript/TS__基础语法入门.html",
    "revision": "39216eacb3e0f84e9f3ebf1bcef83805"
  },
  {
    "url": "web/javascript/TS__语法进阶.html",
    "revision": "2f026b8757d1aa8ce82a63f2a0afdea0"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "917535fbb812d442c963ecede2b5daf8"
  },
  {
    "url": "web/plugin/Element-UI__表格动态编辑.html",
    "revision": "88ff5560e26c7d02147ce584284ef6f6"
  },
  {
    "url": "web/plugin/Element-UI__分页组件封装.html",
    "revision": "23521c79398cf5efd73dcf948d0b8b8f"
  },
  {
    "url": "web/plugin/Element-UI__实现树形选择器.html",
    "revision": "c5cec95e5c139611457e069fb129fba5"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "78876116aa6d3c9959b362718ce720bc"
  },
  {
    "url": "web/plugin/jQuery__插件开发基础.html",
    "revision": "bd9547e1d56d354aae078ddbd56af14d"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "7b2497d4cd6fa64c3f762aafed09f8c3"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "4d7678d5200b9faf9082cafa3964c569"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "86ae5205107e49fec033b9af94fbf600"
  },
  {
    "url": "web/tools/Bower__包管理工具.html",
    "revision": "0884ff956070fd1885000e292f39cbd8"
  },
  {
    "url": "web/tools/Gulp__构建工具.html",
    "revision": "097c8b711e80b12dde7dd428b8210252"
  },
  {
    "url": "web/vue/Vue__常见问题解决方案.html",
    "revision": "0caec60ddaec1f7676fd25de4a0a796f"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "2d01d8f36def1fb9908d325a9a6f3aba"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "bcaf3e3aa90f4a34b7559bbd32690a7d"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "244f1c525725ebf57f5f6bb5de8436d9"
  },
  {
    "url": "web/vue/Vue-Cli3__构建项目（二）设置接口代理.html",
    "revision": "0ede7c21702644abe9b3a182aee68e23"
  },
  {
    "url": "web/vue/Vue-Cli3__构建项目（三）配置 TypeScript.html",
    "revision": "d39c5f4d73def1f35b40d50b9fe98ff9"
  },
  {
    "url": "web/vue/Vue-Cli3__构建项目（一）构建初始项目.html",
    "revision": "a4412c495fceeb394b7106a579a0d99a"
  },
  {
    "url": "web/vue/Vue-router__路由.html",
    "revision": "6403c35dc6057a105053c8a87b5bfc5d"
  },
  {
    "url": "web/vue/Vue-Vuex__状态管理.html",
    "revision": "884e77d403b7f6ff750ad0a2146a0970"
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
