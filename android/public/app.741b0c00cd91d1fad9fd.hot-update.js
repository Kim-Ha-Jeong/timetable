webpackHotUpdate("app",{

/***/ "../../../../src/BoothButton.js":
/*!*********************************************************************!*\
  !*** C:/Users/kha03/Desktop/forMarketing-master/src/BoothButton.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../@babel/runtime/helpers/getPrototypeOf.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../@babel/runtime/helpers/assertThisInitialized.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../@babel/runtime/helpers/inherits.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../../react/index.js"));var _reactNative=__webpack_require__(/*! react-native */ "../../../react-native-web/dist/index.js");var _Style=_interopRequireDefault(__webpack_require__(/*! ./Style */ "../../../../src/Style.js"));var firebase=_interopRequireWildcard(__webpack_require__(/*! firebase */ "../../../firebase/dist/index.cjs.js"));var _jsxFileName="C:\\Users\\kha03\\Desktop\\forMarketing-master\\src\\BoothButton.js";var BoothButton=function(_React$Component){(0,_inherits2.default)(BoothButton,_React$Component);function BoothButton(props){var _this;(0,_classCallCheck2.default)(this,BoothButton);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(BoothButton).call(this,props));_this.state={name:[],dayStart:'',dayEnd:'',start:'',end:''};_this.componentDidMount=_this.componentDidMount.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(BoothButton,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;var col=this.props.col;var row=this.props.row;var addName='';var flag=0;firebase.database().ref().child("users").once("value").then(function(result){var flagA=0;result.forEach(function(resultChild){var key=resultChild.key;var basicname=resultChild.child('name').val();var nametest=resultChild.child('name').val().slice(1,3);var name=nametest.concat(" ");var number=resultChild.child('number').val();var position=resultChild.child('position').val();var team=resultChild.child('team').val();var time=firebase.database().ref("users/"+key+"/timetable/"+col+"/"+row);var use=firebase.database().ref("users/"+key+"/attend");firebase.database().ref('select').once('value').then(function(choice){var start=choice.child('start');var end=choice.child('end');console.log(start,end);for(var i=start;i<=end;i++){time.on("value",function(tt){if(tt.val()===false&&flag===0){console.log('fail',i);if(row==i&&(col==="Mon"||col==="Tue"||col==="Wed")){console.log('success');var k=0;use.transaction(function(info){if(flagA<5&&_this2.state.name.length<5){if(info>0&&k==0){_this2.setState({name:_this2.state.name.concat(name)});console.log(_this2.state.name);console.log(flagA);k=1;flagA=flagA+1;return info-1;}}});}}else if(tt.val()==null&&flag===0){_this2.setState({name:_this2.state.name.concat(_this2.props.text)});flag=1;}});}});});});}},{key:"render",value:function render(){return _react.default.createElement(_reactNative.TouchableOpacity,{style:[_Style.default.tileButton,this.props.style],__source:{fileName:_jsxFileName,lineNumber:94}},_react.default.createElement(_reactNative.Text,{style:_Style.default.makeText,__source:{fileName:_jsxFileName,lineNumber:95}},this.state.name));}}]);return BoothButton;}(_react.default.Component);exports.default=BoothButton;

/***/ })

})
//# sourceMappingURL=app.741b0c00cd91d1fad9fd.hot-update.js.map