/* @ngInject */
function scopeOnceDecorator($delegate) {
  let Scope = $delegate.__proto__.constructor;

  Scope.prototype.$once = function (name, listener) {
    let self = this;
    let deregister = self.$on(name, function () {
      deregister();
      listener.apply(self, arguments);
    });
    return deregister;
  };
  return $delegate;
}

export default scopeOnceDecorator;
