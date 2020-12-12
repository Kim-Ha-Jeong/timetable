webpackHotUpdate("app",{

/***/ "../../../../src/MainScreen.js":
/*!********************************************************************!*\
  !*** C:/Users/kha03/Desktop/forMarketing-master/src/MainScreen.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../../@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../../@babel/runtime/helpers/getPrototypeOf.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../../@babel/runtime/helpers/assertThisInitialized.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../../@babel/runtime/helpers/inherits.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "../../../react/index.js"));var _reactNative=__webpack_require__(/*! react-native */ "../../../react-native-web/dist/index.js");var _Style=_interopRequireDefault(__webpack_require__(/*! ./Style */ "../../../../src/Style.js"));var _FooterButton=_interopRequireDefault(__webpack_require__(/*! ./FooterButton */ "../../../../src/FooterButton.js"));var _AntDesign=_interopRequireDefault(__webpack_require__(/*! react-native-vector-icons/AntDesign */ "../../../react-native-vector-icons/AntDesign.js"));var _Ionicons=_interopRequireDefault(__webpack_require__(/*! react-native-vector-icons/Ionicons */ "../../../react-native-vector-icons/Ionicons.js"));var firebase=_interopRequireWildcard(__webpack_require__(/*! firebase */ "../../../firebase/dist/index.cjs.js"));var _jsxFileName="C:\\Users\\kha03\\Desktop\\forMarketing-master\\src\\MainScreen.js";var MainScreen=function(_React$Component){(0,_inherits2.default)(MainScreen,_React$Component);function MainScreen(props){var _this;(0,_classCallCheck2.default)(this,MainScreen);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(MainScreen).call(this,props));_this.firstMakeTimetable=function(){var user=firebase.auth().currentUser;var isExist=firebase.database().ref('users/'+user.uid+'/name');isExist.on("value",function(result){if(!result.val()){var info=user.photoURL.split('/');firebase.database().ref('users/'+user.uid).set({name:user.displayName,team:info[0],position:info[1],number:info[2],timetable:{Mon:{1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false},Tue:{1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false},Wed:{1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false},Thu:{1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false},Fri:{1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false}}});}});_this.props.navigation.push('Timetable');};_this.makeLabor=function(){var isExist=firebase.database().ref('labor/');isExist.on("value",function(result){if(!result.val()){firebase.database().ref().put({labor:{Mon:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},Tue:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},Wed:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},Thu:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''},Fri:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''}}});}});_this.props.navigation.push('BoothSetting');};_this.firstMakeTimetable=_this.firstMakeTimetable.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(MainScreen,[{key:"componentDidMount",value:function componentDidMount(){firebase.database().ref().child("users").once("value").then(function(result){var flagA=0;result.forEach(function(resultChild){var key=resultChild.key;var position=resultChild.child('position').val();var team=resultChild.child('team').val();var attend=firebase.database().ref("users/"+key);if(position==="팀장"||position==="부팀장"||team==="마케팅"){attend.update({attend:4});}else{attend.update({attend:3});}});});}},{key:"render",value:function render(){var _this2=this;return _react.default.createElement(_reactNative.View,{style:_Style.default.container,__source:{fileName:_jsxFileName,lineNumber:189}},_react.default.createElement(_reactNative.TouchableOpacity,{style:[_Style.default.arrow,this.props.style],onPress:function onPress(){return _this2.props.navigation.navigate('Login');},__source:{fileName:_jsxFileName,lineNumber:190}},_react.default.createElement(_Ionicons.default,{name:"ios-arrow-back",size:30,color:"#ec1468",__source:{fileName:_jsxFileName,lineNumber:194}})),_react.default.createElement(_reactNative.Image,{source:__webpack_require__(/*! ./icon.png */ "../../../../src/icon.png"),style:_Style.default.icon,__source:{fileName:_jsxFileName,lineNumber:196}}),_react.default.createElement(_FooterButton.default,{buttonText:"\uC2DC\uAC04\uD45C \uB9CC\uB4E4\uAE30",style:_Style.default.mainButton,onPress:this.firstMakeTimetable,__source:{fileName:_jsxFileName,lineNumber:200}}),_react.default.createElement(_FooterButton.default,{buttonText:"\uC624\uD504\uB77C\uC778 \uBD80\uC2A4 \uC778\uB825\uD45C",style:_Style.default.mainButton,onPress:this.makeLabor,__source:{fileName:_jsxFileName,lineNumber:205}}),_react.default.createElement(_FooterButton.default,{buttonText:"\uD589\uC0AC \uC778\uB825\uD45C",style:_Style.default.mainButton,onPress:function onPress(){return _this2.props.navigation.navigate('Event');},__source:{fileName:_jsxFileName,lineNumber:210}}),_react.default.createElement(_reactNative.TouchableOpacity,{style:{marginTop:35},onPress:function onPress(){return _this2.props.navigation.navigate('Setting');},__source:{fileName:_jsxFileName,lineNumber:215}},_react.default.createElement(_AntDesign.default,{name:"setting",color:"#ec1468",size:30,__source:{fileName:_jsxFileName,lineNumber:219}})));}}]);return MainScreen;}(_react.default.Component);exports.default=MainScreen;

/***/ })

})
//# sourceMappingURL=app.3bc95a2181b400b54340.hot-update.js.map