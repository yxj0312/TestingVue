import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification';

test('that it renders a notification', t=>{
    // t.is(Notification.data().message,'Hello World');
    new Vue(Notification).$mount();
});
