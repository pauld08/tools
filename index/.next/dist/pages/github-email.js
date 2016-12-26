'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _link = require('/Users/fouad/dev/src/github.com/fouad/tools/index/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubEmail = function (_Component) {
  (0, _inherits3.default)(GithubEmail, _Component);

  function GithubEmail(props) {
    (0, _classCallCheck3.default)(this, GithubEmail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GithubEmail.__proto__ || (0, _getPrototypeOf2.default)(GithubEmail)).call(this, props));

    _this._onRepoChange = function (ev) {
      _this.setState({
        repo: ev.target.value
      });
    };

    _this.fetchEmailFromRepo = function (ev) {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      var repo = _this.state.repo;

      var endpointHost = 'https://github-email-uchjnsbwjo.now.sh/';

      _this.setState({
        email: 'Loading...'
      });

      _axios2.default.get(endpointHost + repo).then(function (res) {
        console.log(res);
        _this.setState({
          email: res.data
        });
      }).catch(function (err) {
        _this.setState({
          email: err.toString()
        });
      });
    };

    _this.state = {
      repo: '',
      email: ''
    };
    return _this;
  }

  (0, _createClass3.default)(GithubEmail, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          repo = _state.repo,
          email = _state.email;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, { title: 'Github Email Finder' }),
        _react2.default.createElement(
          'form',
          { onSubmit: this.fetchEmailFromRepo },
          _react2.default.createElement(
            'div',
            { className: 'measure center pt5' },
            _react2.default.createElement(
              _link2.default,
              {
                href: '/'
              },
              _react2.default.createElement(
                'span',
                { className: 'f6 link dim br1 ph3 pv2 mb2 dib blue b--blue ba pointer' },
                '\u2190 Back'
              )
            ),
            _react2.default.createElement(
              'h1',
              { className: 'fw5' },
              'Github Email Finder'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'comment', className: 'f6 b db mb2' },
              'Repository Name'
            ),
            _react2.default.createElement('input', {
              className: 'input-reset ba b--black-20 pa2 mb2 db w-100',
              type: 'text',
              placeholder: 'fouad/fireworks',
              onChange: this._onRepoChange
            }),
            _react2.default.createElement(
              'small',
              { className: 'f6 black-60 db mb2' },
              'Enter the ',
              'user\'s repo',
              ', e.g. ',
              _react2.default.createElement(
                'code',
                null,
                'fouad/fireworks'
              ),
              '.'
            ),
            _react2.default.createElement(
              'button',
              { className: 'f6 link dim br1 ph3 pv2 mb2 dib white bg-blue bn pointer' },
              'Find email'
            ),
            email ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'strong',
                null,
                email
              )
            ) : null
          )
        )
      );
    }
  }]);
  return GithubEmail;
}(_react.Component);

exports.default = GithubEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dpdGh1Yi1lbWFpbC5qcyJdLCJuYW1lcyI6WyJHaXRodWJFbWFpbCIsInByb3BzIiwiX29uUmVwb0NoYW5nZSIsImV2Iiwic2V0U3RhdGUiLCJyZXBvIiwidGFyZ2V0IiwidmFsdWUiLCJmZXRjaEVtYWlsRnJvbVJlcG8iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN0YXRlIiwiZW5kcG9pbnRIb3N0IiwiZW1haWwiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxnSkFDWkEsS0FEWTs7QUFBQSxVQXlEcEJDLGFBekRvQixHQXlESixVQUFDQyxFQUFELEVBQVE7QUFDdEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLGNBQU1GLEdBQUdHLE1BQUgsQ0FBVUM7QUFESixPQUFkO0FBR0QsS0E3RG1COztBQUFBLFVBK0RwQkMsa0JBL0RvQixHQStEQyxVQUFDTCxFQUFELEVBQVE7QUFDM0IsVUFBSUEsRUFBSixFQUFRO0FBQ05BLFdBQUdNLGNBQUg7QUFDQU4sV0FBR08sZUFBSDtBQUNEOztBQUowQixVQU1uQkwsSUFObUIsR0FNVixNQUFLTSxLQU5LLENBTW5CTixJQU5tQjs7QUFPM0IsVUFBTU8sZUFBZSx5Q0FBckI7O0FBRUEsWUFBS1IsUUFBTCxDQUFjO0FBQ1pTLGVBQU87QUFESyxPQUFkOztBQUlBLHNCQUFNQyxHQUFOLENBQVVGLGVBQWVQLElBQXpCLEVBQ0dVLElBREgsQ0FDUSxlQUFPO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDQSxjQUFLZCxRQUFMLENBQWM7QUFDWlMsaUJBQU9LLElBQUlDO0FBREMsU0FBZDtBQUdELE9BTkgsRUFPR0MsS0FQSCxDQU9TLGVBQU87QUFDWixjQUFLaEIsUUFBTCxDQUFjO0FBQ1pTLGlCQUFPUSxJQUFJQyxRQUFKO0FBREssU0FBZDtBQUdELE9BWEg7QUFZRCxLQXhGbUI7O0FBRWxCLFVBQUtYLEtBQUwsR0FBYTtBQUNYTixZQUFNLEVBREs7QUFFWFEsYUFBTztBQUZJLEtBQWI7QUFGa0I7QUFNbkI7Ozs7NkJBRVM7QUFBQSxtQkFJSixLQUFLRixLQUpEO0FBQUEsVUFFTk4sSUFGTSxVQUVOQSxJQUZNO0FBQUEsVUFHTlEsS0FITSxVQUdOQSxLQUhNOzs7QUFNUixhQUNFO0FBQUE7QUFBQTtBQUNFLDBEQUFRLE9BQU0scUJBQWQsR0FERjtBQUdFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS0wsa0JBQXJCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHNCQUFLO0FBRFA7QUFHRTtBQUFBO0FBQUEsa0JBQU0sV0FBVSx5REFBaEI7QUFBQTtBQUFBO0FBSEYsYUFERjtBQVNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLEtBQWQ7QUFBQTtBQUFBLGFBVEY7QUFXRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxTQUFmLEVBQXlCLFdBQVUsYUFBbkM7QUFBQTtBQUFBLGFBWEY7QUFjRTtBQUNFLHlCQUFVLDZDQURaO0FBRUUsb0JBQUssTUFGUDtBQUdFLDJCQUFZLGlCQUhkO0FBSUUsd0JBQVUsS0FBS047QUFKakIsY0FkRjtBQW9CRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxvQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFDa0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURsQztBQUFBO0FBQUEsYUFwQkY7QUF1QkU7QUFBQTtBQUFBLGdCQUFRLFdBQVUsMERBQWxCO0FBQUE7QUFBQSxhQXZCRjtBQTJCR1csb0JBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVNBO0FBQVQ7QUFERixhQURELEdBSUc7QUEvQk47QUFERjtBQUhGLE9BREY7QUF5Q0Q7Ozs7O2tCQW9DWWIsVyIsImZpbGUiOiJnaXRodWItZW1haWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZvdWFkL2Rldi9zcmMvZ2l0aHViLmNvbS9mb3VhZC90b29scy9pbmRleCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY2xhc3MgR2l0aHViRW1haWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXBvOiAnJyxcbiAgICAgIGVtYWlsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVwbyxcbiAgICAgIGVtYWlsXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIHRpdGxlPVwiR2l0aHViIEVtYWlsIEZpbmRlclwiIC8+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuZmV0Y2hFbWFpbEZyb21SZXBvfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lYXN1cmUgY2VudGVyIHB0NVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmNiBsaW5rIGRpbSBicjEgcGgzIHB2MiBtYjIgZGliIGJsdWUgYi0tYmx1ZSBiYSBwb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgJmxhcnI7IEJhY2tcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnc1XCI+R2l0aHViIEVtYWlsIEZpbmRlcjwvaDE+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tbWVudFwiIGNsYXNzTmFtZT1cImY2IGIgZGIgbWIyXCI+XG4gICAgICAgICAgICAgIFJlcG9zaXRvcnkgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1yZXNldCBiYSBiLS1ibGFjay0yMCBwYTIgbWIyIGRiIHctMTAwXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZvdWFkL2ZpcmV3b3Jrc1wiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblJlcG9DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImY2IGJsYWNrLTYwIGRiIG1iMlwiPlxuICAgICAgICAgICAgICBFbnRlciB0aGUge2B1c2VyJ3MgcmVwb2B9LCBlLmcuIDxjb2RlPmZvdWFkL2ZpcmV3b3JrczwvY29kZT4uXG4gICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmNiBsaW5rIGRpbSBicjEgcGgzIHB2MiBtYjIgZGliIHdoaXRlIGJnLWJsdWUgYm4gcG9pbnRlclwiPlxuICAgICAgICAgICAgICBGaW5kIGVtYWlsXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAge2VtYWlsID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e2VtYWlsfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfb25SZXBvQ2hhbmdlID0gKGV2KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZXBvOiBldi50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2hFbWFpbEZyb21SZXBvID0gKGV2KSA9PiB7XG4gICAgaWYgKGV2KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIGNvbnN0IHsgcmVwbyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGVuZHBvaW50SG9zdCA9ICdodHRwczovL2dpdGh1Yi1lbWFpbC11Y2hqbnNid2pvLm5vdy5zaC8nXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiAnTG9hZGluZy4uLidcbiAgICB9KVxuXG4gICAgYXhpb3MuZ2V0KGVuZHBvaW50SG9zdCArIHJlcG8pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVtYWlsOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlbWFpbDogZXJyLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViRW1haWxcbiJdfQ==