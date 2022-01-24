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
    "revision": "c15602f4cea1eb0b1a7bd7ff439d5cf4"
  },
  {
    "url": "articles-template.html",
    "revision": "9dcea42862096ee59c5b13cce0465888"
  },
  {
    "url": "assets/css/0.styles.75f1e615.css",
    "revision": "5d227091aa4235ee9b88c2e91fa884c0"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/js/1.12f2c4fd.js",
    "revision": "8cb765a59abd183aec0c0a596b08aded"
  },
  {
    "url": "assets/js/10.c1ac867e.js",
    "revision": "3ffe0c37f6d1ef8a5f30d40602bd6acb"
  },
  {
    "url": "assets/js/11.688b50c2.js",
    "revision": "290af626105b7e2da5f9e4edeaf9862e"
  },
  {
    "url": "assets/js/12.788a3c48.js",
    "revision": "2cc450a642eb63a216cbf38c64b2dcc9"
  },
  {
    "url": "assets/js/13.e8b51563.js",
    "revision": "f3cef4266837b6cdac429b2005d03cbd"
  },
  {
    "url": "assets/js/14.948f2119.js",
    "revision": "3244f76aa8d97d79151245ad55d138ca"
  },
  {
    "url": "assets/js/15.2daee23c.js",
    "revision": "b19dfaa42771b4f5f26d9e65d30da664"
  },
  {
    "url": "assets/js/16.e05cd644.js",
    "revision": "2d6bd3c070458b038c88ce7c93c17780"
  },
  {
    "url": "assets/js/17.fa04d5d9.js",
    "revision": "fab91ecb9e70523d3f0cb7080b5adab7"
  },
  {
    "url": "assets/js/18.d1a16efc.js",
    "revision": "8d32e656fdb29ac0f716074f54ef12f2"
  },
  {
    "url": "assets/js/19.611cf047.js",
    "revision": "7c515e7ec51e50fb1d25f0e3ed376e66"
  },
  {
    "url": "assets/js/2.d2beb245.js",
    "revision": "6e3afad2d8e7bed5085e8c089e493f8a"
  },
  {
    "url": "assets/js/20.1047730c.js",
    "revision": "e6d280444a6c529b49ced523acd44207"
  },
  {
    "url": "assets/js/21.e3204091.js",
    "revision": "c3f9d07690c7e3624b89a9ba70de0bdc"
  },
  {
    "url": "assets/js/22.0b101ca4.js",
    "revision": "ccefa1d0c4764656d6b0c5acb5b71088"
  },
  {
    "url": "assets/js/23.3efb1689.js",
    "revision": "2a70c2dad6413536c1c07c83612a6ec2"
  },
  {
    "url": "assets/js/24.30d78009.js",
    "revision": "b92326df9ae313b9df6fd3e679597c79"
  },
  {
    "url": "assets/js/25.151f516c.js",
    "revision": "4df48961d14e8bd07eba3804cde259ae"
  },
  {
    "url": "assets/js/26.78ffff9b.js",
    "revision": "e8423e78449a25bbbaeb97ff80888578"
  },
  {
    "url": "assets/js/27.5360271b.js",
    "revision": "5868350ab200e11bab073b9a88f6bcec"
  },
  {
    "url": "assets/js/28.1e5afff6.js",
    "revision": "c8efe4b5fa735387c3bf9202baa94884"
  },
  {
    "url": "assets/js/29.455c8b1b.js",
    "revision": "4f0a556b8bcd3fe5ec35ba5d74573d24"
  },
  {
    "url": "assets/js/30.9527c91d.js",
    "revision": "7eac8d78e07d6d28d369101f6fd15753"
  },
  {
    "url": "assets/js/31.4f5d60e3.js",
    "revision": "d90c6e2f001da42f52d15b49974b9a1b"
  },
  {
    "url": "assets/js/32.39633e36.js",
    "revision": "448da119d0f1a930b6664fa0441428cc"
  },
  {
    "url": "assets/js/33.1ad2fcf6.js",
    "revision": "c8070b6ec0a386718f2fb76553948b77"
  },
  {
    "url": "assets/js/34.d4622fa2.js",
    "revision": "955b15ff2137fafe21cb5edf81f898cd"
  },
  {
    "url": "assets/js/35.3ac2d349.js",
    "revision": "f70f170d58028dd20f79fd222235ec84"
  },
  {
    "url": "assets/js/36.ad912a0f.js",
    "revision": "cddd6c8d4ddab54fd59622afa400d814"
  },
  {
    "url": "assets/js/37.04c79495.js",
    "revision": "f32a2ee8039ccdf7676f20455da159e5"
  },
  {
    "url": "assets/js/38.43f35c9b.js",
    "revision": "c97b44293b86833963ad5269fad94cf0"
  },
  {
    "url": "assets/js/39.483bb617.js",
    "revision": "dbcbf613393360190ad1e8ab3e32fffa"
  },
  {
    "url": "assets/js/4.872a6d2d.js",
    "revision": "d65df399e838270732f9f50353eb03af"
  },
  {
    "url": "assets/js/40.e89b96bc.js",
    "revision": "8c3ac6476d9db37b1794f58bb6bb26df"
  },
  {
    "url": "assets/js/41.24871253.js",
    "revision": "edbda66e719ba0612776617841e4de09"
  },
  {
    "url": "assets/js/42.a868883a.js",
    "revision": "16564f172ff21c3f954d4260f4cb074a"
  },
  {
    "url": "assets/js/43.96f8373a.js",
    "revision": "e9982497f9545a757e4c18c1d83b936c"
  },
  {
    "url": "assets/js/44.00c64a12.js",
    "revision": "fee13cb7473b8e3750bc4dbc4c09f1b7"
  },
  {
    "url": "assets/js/45.229075d5.js",
    "revision": "dd5eab8c2f050a08553007c3de8afa0c"
  },
  {
    "url": "assets/js/46.1895b233.js",
    "revision": "fd82dc34dce47c0559a8dfe2747e618e"
  },
  {
    "url": "assets/js/47.7ba88b87.js",
    "revision": "02a7145190bd747b7f94751132f8cc56"
  },
  {
    "url": "assets/js/48.15eb88b7.js",
    "revision": "a8ece09847f2fc7a242c46667b35e9df"
  },
  {
    "url": "assets/js/49.04b56d50.js",
    "revision": "c9adb64e5865117d1129d6633ab3f133"
  },
  {
    "url": "assets/js/5.99fb7b4f.js",
    "revision": "904f414aa9fa8dc4e9692beffd99fa29"
  },
  {
    "url": "assets/js/50.9f8b64ff.js",
    "revision": "c06a3d4a94038288aefec40cc056aa0b"
  },
  {
    "url": "assets/js/51.b957f52d.js",
    "revision": "71dd52cf5aad82816aead4328e2dc334"
  },
  {
    "url": "assets/js/52.3c63a6ad.js",
    "revision": "df87bc146456d18c9e43fd1a445748d1"
  },
  {
    "url": "assets/js/53.205ba4ea.js",
    "revision": "95569bf28ab56de45074abc991512b3e"
  },
  {
    "url": "assets/js/54.c2ec0c70.js",
    "revision": "3dc638c58f100fef33e1468fdc58c86f"
  },
  {
    "url": "assets/js/55.1173f38d.js",
    "revision": "ec6d7fb4621bd08775d0af28d5f321eb"
  },
  {
    "url": "assets/js/56.79a1955c.js",
    "revision": "1e5a280adc618525876566c3f245aa3a"
  },
  {
    "url": "assets/js/57.c8b153f0.js",
    "revision": "60bfe2d275f70aeb5d321d899004b71d"
  },
  {
    "url": "assets/js/58.78c0217e.js",
    "revision": "aad36c499aeecbe9cb55a814f281bba0"
  },
  {
    "url": "assets/js/59.8ac95bd3.js",
    "revision": "6ae31bce7eebe2da2c3899a8b9098d7e"
  },
  {
    "url": "assets/js/6.feb34efe.js",
    "revision": "3bba4e2578565a2ec356cf4d99503299"
  },
  {
    "url": "assets/js/60.cfc3d47f.js",
    "revision": "7976e51aa3edc24b4b720ef0601d6935"
  },
  {
    "url": "assets/js/61.3d8c12d6.js",
    "revision": "924d87dd1c3603330cd06caa1547ccdd"
  },
  {
    "url": "assets/js/7.3fa19c7b.js",
    "revision": "32dfee1a6fa717d1f362a12c04f7d2f0"
  },
  {
    "url": "assets/js/8.95041957.js",
    "revision": "7aa6c0ac5ff099d5d355aac0cf99b208"
  },
  {
    "url": "assets/js/9.a984a877.js",
    "revision": "999b6e34e274b121adf87854f1c6323c"
  },
  {
    "url": "assets/js/app.b4ae4c89.js",
    "revision": "0fca5b4277bdb3ad488ca3bc3df1d31a"
  },
  {
    "url": "categories/CSS Weekly/index.html",
    "revision": "0f504ad54467a1380928a2f1177aa4bc"
  },
  {
    "url": "categories/Frontend Focus/index.html",
    "revision": "4df93db1b2f0acfc73cc925911e089cf"
  },
  {
    "url": "categories/index.html",
    "revision": "a74b3a3039b6f2dd3efb65dbab7bbdd9"
  },
  {
    "url": "categories/JavaScript Weekly/index.html",
    "revision": "4b7f1fa16707c813b6fb737fb30f7792"
  },
  {
    "url": "categories/Mobile Dev Weekly/index.html",
    "revision": "ce3453a8cb159cb011c44b12f2023929"
  },
  {
    "url": "categories/Node Weekly/index.html",
    "revision": "8401735e780c78bc9cae16f089c2574b"
  },
  {
    "url": "categories/React Status/index.html",
    "revision": "a4b952a8739c0bc9db90fc9d9ecd1ad3"
  },
  {
    "url": "css_weekly/485/breaking_out_of_the_box.html",
    "revision": "71e7c5ceedb87ec3a7315f8c10aba0cb"
  },
  {
    "url": "css_weekly/485/building_a_toast_component.html",
    "revision": "b908e9819f7255041b406077059e74e9"
  },
  {
    "url": "css_weekly/485/combat_css_blockage_with_this_one_weird_little_trick.html",
    "revision": "633cc1602940b5c9ffbbb2afecde02e4"
  },
  {
    "url": "css_weekly/485/details_and_summary.html",
    "revision": "443b2232f41c78687aa1dc78a7eeb6c3"
  },
  {
    "url": "css_weekly/485/dynamic_color_manipulation_with_css_relative_colors.html",
    "revision": "61ab744db58777f8443181782bb8e0f0"
  },
  {
    "url": "css_weekly/485/ffflux.html",
    "revision": "af8887d0e436a3334e6b0497da117915"
  },
  {
    "url": "css_weekly/485/index.html",
    "revision": "1a895e491f088601d957efcf67b094ea"
  },
  {
    "url": "css_weekly/485/standardizing_focus_styles_with_css_custom_properties.html",
    "revision": "d6635e5184cd1a8b7601341d7811ddc3"
  },
  {
    "url": "css_weekly/486/compat_2021_holiday_update.html",
    "revision": "6e26eac61f802a3cea163309c03dc769"
  },
  {
    "url": "css_weekly/486/css_me_not.html",
    "revision": "0d232284218a83e38c5070066a10e5ea"
  },
  {
    "url": "css_weekly/486/cutsom_properties.html",
    "revision": "7353f2527e758baa05d5ec0221b61a66"
  },
  {
    "url": "css_weekly/486/has_selector.html",
    "revision": "38b1cb8a1f08431b588f322200af19f0"
  },
  {
    "url": "css_weekly/486/index.html",
    "revision": "cf50f4374be8a9b8f8970d1b4c564486"
  },
  {
    "url": "css_weekly/486/preference_queries.html",
    "revision": "7aff634d763f947a3e57037760066ffe"
  },
  {
    "url": "css_weekly/486/smoothly_reverting_css_animations.html",
    "revision": "f34e336b274e68cef667c693f4ea5fac"
  },
  {
    "url": "css_weekly/486/SVGcode.html",
    "revision": "9bec8b609859d05c1dd84355d8b073de"
  },
  {
    "url": "css_weekly/486/tailwind_and_the_femininity_of_CSS.html",
    "revision": "7dfe9c2673d69e8e782b8afbffb1220f"
  },
  {
    "url": "frontend_focus/514/index.html",
    "revision": "f0109a135464cf0aa2e6cab8440d5dd5"
  },
  {
    "url": "frontend_focus/514/status_targeted_caching_headers.html",
    "revision": "9aa11e660d21cf61922fbc752f0b5dcc"
  },
  {
    "url": "frontend_focus/523/frontend_web_performance.html",
    "revision": "6d7983c95c3d35739fc4f9089aecc49f"
  },
  {
    "url": "frontend_focus/523/index.html",
    "revision": "495098f9ca02dfd7dbdda68fcf4bca80"
  },
  {
    "url": "images/logo.png",
    "revision": "67d6738dce3ba181d73067fe3010039c"
  },
  {
    "url": "images/organization.png",
    "revision": "e54d5badf04c3086a9c398bb7481d7a3"
  },
  {
    "url": "index.html",
    "revision": "8ed3bd6ce0a294f3f60eac92b46a36a5"
  },
  {
    "url": "javascript_weekly/399/index.html",
    "revision": "d9b9dca2fdd95dd4a88bc30dfbc0b875"
  },
  {
    "url": "javascript_weekly/399/js_engine_optimizing_prototype.html",
    "revision": "d86ab5f72cce3990b2a6937847266460"
  },
  {
    "url": "javascript_weekly/399/js_engine_shape_and_inline_caches.html",
    "revision": "cace489c792b3017f12f2071f1e78366"
  },
  {
    "url": "javascript_weekly/523/index.html",
    "revision": "3185bc7806d49d81e1260fa7109716cd"
  },
  {
    "url": "javascript_weekly/523/undefined_VS_null.html",
    "revision": "8e7e91444a3cabf0e63287055031706d"
  },
  {
    "url": "javascript_weekly/554/ES2022_Feature_Class_Static_Initialization_Blocks.html",
    "revision": "742da307421a153e3ab69ccbe1aeff09"
  },
  {
    "url": "javascript_weekly/554/index.html",
    "revision": "540ea284ed181563ffa19f7364c8958e"
  },
  {
    "url": "javascript_weekly/570/build_tools_compare.html",
    "revision": "349be5866eb87e45863d478c94bfac5e"
  },
  {
    "url": "javascript_weekly/570/ES2021_new_feature.html",
    "revision": "0d35b8de4b3f5df5e16c882981b1aa09"
  },
  {
    "url": "javascript_weekly/570/index.html",
    "revision": "83902dae855eda23fcb471bd56c37a7c"
  },
  {
    "url": "javascript_weekly/570/svelte_vs_react.html",
    "revision": "d50f7195c20eb976fe5d0dd21ba14cd1"
  },
  {
    "url": "javascript_weekly/570/ternary.html",
    "revision": "0179bd60dc10c2482ebefc7d509cdf9a"
  },
  {
    "url": "javascript_weekly/571/flatMap.html",
    "revision": "8931f30be2d474fd33980619e781757d"
  },
  {
    "url": "javascript_weekly/571/fuite.html",
    "revision": "b0f9cc3e00833fc69ed93d76addf7e09"
  },
  {
    "url": "javascript_weekly/571/index.html",
    "revision": "61676a690c53971fd4040702816cf97b"
  },
  {
    "url": "mobile_dev_weekly/382/index.html",
    "revision": "77d73fdbb516968db04560ef5441fd13"
  },
  {
    "url": "mobile_dev_weekly/382/webrtc.html",
    "revision": "51a94a421c15904f5185673a53a3df19"
  },
  {
    "url": "mobile_dev_weekly/383/bashful_button.html",
    "revision": "12bbd844d56e8c10100ea0be37c616ef"
  },
  {
    "url": "mobile_dev_weekly/383/index.html",
    "revision": "5ce027442144dde224c7fede9eedb22b"
  },
  {
    "url": "mobile_dev_weekly/383/modile_first_or_desktop_first.html",
    "revision": "9e171cf0eaeed6c1cf5c49f96e697e34"
  },
  {
    "url": "node_weekly/417/index.html",
    "revision": "061b5a38a25dc94066ca824364449682"
  },
  {
    "url": "node_weekly/417/Nodejs_memory_limits_what_you_should_know.html",
    "revision": "93bd1d57609025fd5f526dfc2168074c"
  },
  {
    "url": "node_weekly/419/index.html",
    "revision": "934e9bf14aef0f95e25947187800b3a6"
  },
  {
    "url": "node_weekly/419/Nodejs_Framework_Selection_Guide.html",
    "revision": "3102d2b021e5d0d8529c8e50a5927fb8"
  },
  {
    "url": "react_status/271/A_Visual_Guide_to_useEffect.html",
    "revision": "c2726bb8cd413fc1cf7aa1ef0cb96c15"
  },
  {
    "url": "react_status/271/index.html",
    "revision": "79f579048084090b33046e07c3230497"
  },
  {
    "url": "tag/babel/index.html",
    "revision": "8556a5adfde6e612d751d20e93646fed"
  },
  {
    "url": "tag/Babel/index.html",
    "revision": "1db0d5c88ac6c67465bfec116cc22695"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "08f6f7531ac2d1732a25f29c61184020"
  },
  {
    "url": "tag/Chrome/page/2/index.html",
    "revision": "2c81115fc206db826c003ff594fcf3de"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "65fdb504173ad6b5eeb2cca37e80de0f"
  },
  {
    "url": "tag/CSS/page/2/index.html",
    "revision": "ae9805c3e4e0613413fe43c14f842ece"
  },
  {
    "url": "tag/ECMAScript/index.html",
    "revision": "3c57fd43a11bcf7c4ffd69e463945127"
  },
  {
    "url": "tag/ECMAScript/page/2/index.html",
    "revision": "16118ef968d23dcf984026d17767eeae"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "2b0a805806df4d4ae6439d08e5ab3490"
  },
  {
    "url": "tag/HTML/page/2/index.html",
    "revision": "8509afc80a7fe577956b67329dc5d68d"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "c21d5123ee1392d094a26ef1d49f168c"
  },
  {
    "url": "tag/index.html",
    "revision": "ebd57a83c03484a7d1f9871b31d0d765"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "913de6b51be7d6c8c94eb6dfc3d77f4e"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "8349de9c87ff59829d8bf962adac0db0"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2c14c3cb3215f5a875f68e77ecf23a7a"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "e821b74aa9f2ed3fc8d0d09d0db3d5b7"
  },
  {
    "url": "tag/Parcel/index.html",
    "revision": "bf3743b437b68a65c36e66c977db41a2"
  },
  {
    "url": "tag/React/index.html",
    "revision": "64b6406184f17780a50833a09d5b863e"
  },
  {
    "url": "tag/React/page/2/index.html",
    "revision": "c58f47e04d6337bef5fd7c1172ec6b02"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "e4a1dadd6996af48fe9faf3eeaa4ce77"
  },
  {
    "url": "tag/Svelte/index.html",
    "revision": "252fccdd28d6fb25b3fb38511c216262"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "c026748862e92cc8a8dff7375d17f69f"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "789986711392d3d45ebe2f9414d7f9ca"
  },
  {
    "url": "tag/TypeScript/page/2/index.html",
    "revision": "23c912870b81a8ec54137f4e716cb4e4"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "5df1c76790a8fae105987126d52904e4"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "5146b478808e08b168212621716e593c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "978a8ce9d3a24f81fd59ed9152e078d8"
  },
  {
    "url": "tag/Vue/page/2/index.html",
    "revision": "8c0636b8fc675375bb18552bad3ea127"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "b508a319760ea2c51d1117ba272f715b"
  },
  {
    "url": "tag/webpack/page/2/index.html",
    "revision": "710499b4c0c24638384e9d8c1a1503f2"
  },
  {
    "url": "tag/游览器/index.html",
    "revision": "f693dc9c593e85167e2a59a74a95ef65"
  },
  {
    "url": "tag/游览器/page/2/index.html",
    "revision": "69d4e9eb4c12495d502338cd0b68ffa0"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "2cc38567b813a3d9bf2037e51ece02c9"
  },
  {
    "url": "tag/网络/page/2/index.html",
    "revision": "65dbe7766c66554a89582e4ff9d2c8eb"
  },
  {
    "url": "timeline/index.html",
    "revision": "593c2c7e6a7acf356a1bb2ede9871a8c"
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
