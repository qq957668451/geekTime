import Vue from "vue";
const that = this;
const Store = function Store(options = {}) {
  const { state = {}, mutations = {} }: any = options;
  (that as any)._vm = new Vue({
    data: {
      $$state: state,
    },
  });
  (that as any)._mutations = mutations;
};
Store.prototype.commit = function(type: any, payload: any) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload);
  }
};
Object.defineProperties(Store.prototype, {
  state: {
    get: function() {
      return this._vm._data.$$state;
    },
  },
});
export default { Store };
