import Vue from 'vue';
import SerialPort from 'serialport';
import edge from 'electron-edge-js';

Vue.prototype.$serial = SerialPort;
Vue.prototype.$edge = edge;