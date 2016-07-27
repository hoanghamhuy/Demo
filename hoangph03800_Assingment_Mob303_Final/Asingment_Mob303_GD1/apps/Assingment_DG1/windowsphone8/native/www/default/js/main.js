
/* JavaScript content from js/main.js in folder common */
var busyIndicator = null;
function wlCommonInit(){
	require([ "layers/core-web-layer", "layers/mobile-ui-layer" ], dojoInit);
	busyIndicator= new  WL.BusyIndicator(null,{text:"Đang kiểm tra dữ liệu..."} );
	$('#tbnsubmit').click(busyIndicatorDemo);
}
function busyIndicatorDemo() {
	busyIndicator.show();
	setTimeout(function(){
		busyIndicator.hide();
		checkFistName();
		checkLastName();
	}, 1000);
}
function checkFistName () {
	var strFistName = $('#txtid').val();
	if(strFistName==""){
		//alert("Bạn vui lòng nhập Firt Name...")
		document.write("Bạn vui lòng nhập ma sinh vien...");
		$('#txtid').focus();
	}
}
function ckeckLastName() {
	var strLastName = $('#txtname').val();
	if(strLastName==""){
		//alert("Bạn vui lòng nhập Last Name...")
		document.write("Bạn vui lòng nhập tên...")
		$('#txtname').focus();
	}
}
function ckecktxtclass() {
	var strLastName = $('#txtclass').val();
	if(strLastName==""){
		//alert("Bạn vui lòng nhập Last Name...")
		document.write("Bạn vui lòng nhập lớp...")
		$('#txtclass').focus();
	}
}
function ckecktxtmark() {
	var strLastName = $('#txtmark').val();
	if(strLastName==""){
		//alert("Bạn vui lòng nhập Last Name...")
		document.write("Bạn vui lòng nhập điểm...")
		$('#txtmark').focus();
	}
}
//---------------------------------------------------------------------------------
function dojoInit() {
	require([ "dojo/ready", "dojo/parser", "dojox/mobile", "dojo/dom", "dijit/registry", "dojox/mobile/ScrollableView", "dojox/mobile/Heading", "dojox/mobile/TabBar", "dojox/mobile/TabBarButton", "dojox/mobile/Pane", "dojox/mobile/View", "dojox/mobile/ListItem", "dojox/mobile/Button", "dojox/mobile/IconItem", "dojox/mobile/Accordion", "dojox/mobile/ContentPane" ], function(ready) {
		ready(function() {
		});
	});
}

/* JavaScript content from js/main.js in folder windowsphone8 */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}