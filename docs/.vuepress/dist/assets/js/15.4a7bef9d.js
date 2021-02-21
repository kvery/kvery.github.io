(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{508:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue项目部署到nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目部署到nginx"}},[s._v("#")]),s._v(" vue项目部署到nginx")]),s._v(" "),a("h2",{attrs:{id:"一-vue项目打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-vue项目打包"}},[s._v("#")]),s._v(" 一.vue项目打包")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("修改config/index.js（注意一定是")]),s._v("build"),a("strong",[s._v("里面的，下面")]),s._v("dev"),a("strong",[s._v("中也有这个配置）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C%E7%86%99%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200617110222162.png",alt:"image-20200617110222162"}})]),s._v(" "),a("p",[s._v("如果用到了图标还需更改")]),s._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C%E7%86%99%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200617110451275.png",alt:"image-20200617110451275"}})])])]),s._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C%E7%86%99%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200617110513000.png",alt:"image-20200617110513000"}})]),s._v(" "),a("p",[a("strong",[s._v("2.打包成dist文件")])]),s._v(" "),a("p",[s._v("​\t\t"),a("strong",[s._v("1)命令行执行")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("2)这时我们就可以把生成的dist文件扔到服务器就可以了")])]),s._v(" "),a("p",[s._v("​\t\t"),a("strong",[s._v("3)可以使用xshell进行远程连接，xftp进行文件传输")])]),s._v(" "),a("p",[a("strong",[s._v("3.配置nginx")])]),s._v(" "),a("p",[s._v("​\t\t"),a("strong",[s._v("1)使用docker下载nginx的镜像来部署")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker pull nginx:alpine\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("2)先创建挂载目录")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /docker_volume/nginx/html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /docker_volume/nginx/conf\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("3)运行容器")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run -id --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx /docker nginx:alpine\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("4)复制nginx的default.conf")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx:/etc/nginx/conf.d/default.conf /docker_volume/nginx/conf\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("5)结束上面的nginx")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker stop nginx\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("6)重新创建nginx容器,并添加映射")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker run -id --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 -v /docker_volume/nginx/html:/usr/share/nginx/html -v /docker_volume/nginx/conf:/etc/nginx/conf.d nginx:alpine\n")])])]),a("p",[s._v("​\t\t"),a("strong",[s._v("7)将dist文件夹放到挂载目录中")])]),s._v(" "),a("p",[s._v("​\t\t"),a("strong",[s._v("8)可以将dist文件夹改名")])]),s._v(" "),a("p",[s._v("​\t\t"),a("strong",[s._v("9)在浏览器访问")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://宿主机IP地址/dist文件夹改名后的名称\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);