'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'measure center pa2 pt3 pt5-ns' },
    _react2.default.createElement(_Header2.default, { title: '\uD83D\uDD28' }),
    _react2.default.createElement(
      'h1',
      null,
      '\uD83D\uDD28'
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex flex-column' },
      _react2.default.createElement(
        'label',
        { className: 'fw6 mb3' },
        _react2.default.createElement('i', { className: 'ion-social-github' }),
        ' Github'
      ),
      _react2.default.createElement(
        _link2.default,
        {
          href: '/github-email'
        },
        _react2.default.createElement(
          'span',
          { className: 'f6 link dim br1 ph3 pv2 mb3 dib blue b--blue ba pointer' },
          'Email Finder'
        )
      ),
      _react2.default.createElement(
        _link2.default,
        {
          href: '/github-trending'
        },
        _react2.default.createElement(
          'span',
          { className: 'f6 link dim br1 ph3 pv2 mb2 dib blue b--blue ba pointer' },
          'Trending'
        )
      )
    )
  );
};

var _react = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _link = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFLZSxZQUFZO0FBQ3pCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSwrQkFBZjtBQUNFLHNEQUFRLE9BQU0sY0FBZCxHQURGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhGO0FBS0U7QUFBQTtBQUFBLFFBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVUsU0FBakI7QUFDRSw2Q0FBRyxXQUFVLG1CQUFiLEdBREY7QUFBQTtBQUFBLE9BREY7QUFLRTtBQUFBO0FBQUE7QUFDRSxnQkFBSztBQURQO0FBR0U7QUFBQTtBQUFBLFlBQU0sV0FBVSx5REFBaEI7QUFBQTtBQUFBO0FBSEYsT0FMRjtBQWFFO0FBQUE7QUFBQTtBQUNFLGdCQUFLO0FBRFA7QUFHRTtBQUFBO0FBQUEsWUFBTSxXQUFVLHlEQUFoQjtBQUFBO0FBQUE7QUFIRjtBQWJGO0FBTEYsR0FERjtBQTZCRCxDOztBQWxDRDs7OztBQUNBOzs7O0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZvdWFkL2Rldi9zcmMvZ2l0aHViLmNvbS9mb3VhZC90b29scy9pbmRleCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVhc3VyZSBjZW50ZXIgcGEyIHB0MyBwdDUtbnNcIj5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCLwn5SoXCIgLz5cblxuICAgICAgPGgxPvCflKg8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ3NiBtYjNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLWdpdGh1YlwiIC8+IEdpdGh1YlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9naXRodWItZW1haWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjYgbGluayBkaW0gYnIxIHBoMyBwdjIgbWIzIGRpYiBibHVlIGItLWJsdWUgYmEgcG9pbnRlclwiPlxuICAgICAgICAgICAgRW1haWwgRmluZGVyXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL2dpdGh1Yi10cmVuZGluZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmNiBsaW5rIGRpbSBicjEgcGgzIHB2MiBtYjIgZGliIGJsdWUgYi0tYmx1ZSBiYSBwb2ludGVyXCI+XG4gICAgICAgICAgICBUcmVuZGluZ1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==