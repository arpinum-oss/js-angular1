/* @ngInject */
function loadingDirective($document) {
  return {
    restrict: 'A',
    link: link
  };

  function link(scope, elem, attr) {
    elem.bind('click', e => {
      e.stopPropagation();
    });
    $document.bind('click', () => {
      scope.$apply(attr.onOutsideClick);
    });
  }
}

export default loadingDirective;
