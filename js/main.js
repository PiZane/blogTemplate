var headerData = {
    title: 'blogTitle',
    intro: 'Intro'
};
var avatarData = {
    url: './img/avatar.png',
    alt: 'this is my avatar'
};
var menuData = [
    {
        url: "./category/1",
        title: "菜单一"
    },
    {
        url: "./category/2",
        title: "菜单二"
    },
    {
        url: "./category/3",
        title: "菜单三"
    },
    {
        url: "./category/4",
        title: "菜单四"
    }
];
Vue.component('z-header', {
    template: '<h1>{{title}}</h1><h2>{{intro}}</h2>',
    data: function () {
        return headerData;
    },
});
Vue.component('z-menu', {
    template: 'aaa',
    data: function () {
        return menuData;
    }
});
new Vue({
  el: '#app'
})
