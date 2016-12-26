'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement(
      'title',
      null,
      title || 'Toolkit'
    ),
    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
    _react2.default.createElement('link', {
      href: 'https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css',
      rel: 'stylesheet'
    }),
    _react2.default.createElement('link', {
      href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      rel: 'stylesheet'
    }),
    _react2.default.createElement(
      'style',
      null,
      'html, body, a {\n        color: #00386C;\n        font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        font-weight: 500;\n      }'
    )
  );
};

exports.default = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQ3BCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFRQSxlQUFTO0FBQWpCLEtBREY7QUFFRSw0Q0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxxQ0FBOUIsR0FGRjtBQUdFO0FBQ0UsWUFBSyx1REFEUDtBQUVFLFdBQUk7QUFGTixNQUhGO0FBT0U7QUFDRSxZQUFLLHFFQURQO0FBRUUsV0FBSTtBQUZOLE1BUEY7QUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsR0FEb0I7QUFBQSxDQUFmOztrQkF1QlFELE0iLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mb3VhZC9kZXYvc3JjL2dpdGh1Yi5jb20vZm91YWQvdG9vbHMvaW5kZXgiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IHRpdGxlIH0pID0+IChcbiAgPEhlYWQ+XG4gICAgPHRpdGxlPnt0aXRsZSB8fCAnVG9vbGtpdCd9PC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgIDxsaW5rXG4gICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFjaHlvbnNANC42LjEvY3NzL3RhY2h5b25zLm1pbi5jc3NcIlxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgLz5cbiAgICA8bGlua1xuICAgICAgaHJlZj1cImh0dHBzOi8vY29kZS5pb25pY2ZyYW1ld29yay5jb20vaW9uaWNvbnMvMi4wLjEvY3NzL2lvbmljb25zLm1pbi5jc3NcIlxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgLz5cbiAgICA8c3R5bGU+XG4gICAgICB7YGh0bWwsIGJvZHksIGEge1xuICAgICAgICBjb2xvcjogIzAwMzg2QztcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9YH1cbiAgICA8L3N0eWxlPlxuICA8L0hlYWQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19