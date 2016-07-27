
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

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    invocationData = {
			adapter:'qlsvAdapter',
			procedure:'getStudents',
			parameters:[]
	};	
	options = {
			onSuccess:doSuccess,
			onFailure:doFailure			
	};
	WL.Client.invokeProcedure(invocationData, options);
}

function doFailure(result){
	alert("ERROR");
	document.getElementById("content").innerHTML="<h3>Failure to retrieve data from server</h3>";	
}

function doSuccess(result){
	var list = result.invocationResult.resultSet;
	var strList = "";
	for(var i=0; i<list.length; i++){
		strList += "<p>" + list[i].id + ", " + list[i].name + ", " + list[i].point + "</p>";
	}
	document.getElementById("content").innerHTML = strList;
}
function putData() {
    var invocationData = {
        adapter: 'qlsvAdapter',
        procedure: 'addStudent',
        parameters: [$('#txtid').val(), $('#txtname').val(), $('#txtclass').val() , $('#txtmark').val()]
    };

    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}

function insertSuccess() {
    alert("success");
}

function insertFailure() {
    alert("failure");
}



function deleteforid(){
    var invocationData = {
        adapter: 'qlsvAdapter',
        procedure: 'deleteStudent',
        parameters: [$('#edtxoa').val()]
    };

    WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
}

function insertSuccess() {
    alert("success");
}

function insertFailure() {
    alert("failure");
}


function update(){
    var invocationData = {
            adapter: 'qlsvAdapter',
            procedure: 'updateStudent',
            parameters: [$('#edtname').val(), $('#edtclass').val(), $('#edtpoint').val() , $('#edtid').val()]
        };

        WL.Client.invokeProcedure(invocationData, {onSuccess: insertSuccess, onFailure: insertFailure});
    }

    function insertSuccess() {
        alert("success");
    }

    function insertFailure() {
        alert("failure");
    }

//function ShowList(){
//	invocationData = {
//			adapter:'qlsvAdapter',
//			procedure:'getStudents',
//			parameters:[]
//	};	
//	options = {
//			onSuccess:doSuccess,
//			onFailure:doFailure			
//	};
//	WL.Client.invokeProcedure(invocationData, options);
//}
//
//function doFailure(result){
//	alert("ERROR");
//	document.getElementById("content").innerHTML="<h3>Failure to retrieve data from server</h3>";	
//}
//
//function doSuccess(result){
//	var list = result.invocationResult.resultSet;
//	var strList = "";
//	for(var i=0; i<list.length; i++){
//		strList += "<p>" + list[i].id + ", " + list[i].name + ", " + list[i].point + "</p>";
//	}
//	document.getElementById("content").innerHTML = strList;
//}
//
//function putData(){
//
//	  alert("Function InsertData called");
//	  var fname = document.forms["ifstudent"]["txtid"].value.toString();
//	  var lname = document.forms["ifstudent"]["txtname"].value.toString();
//	  var email = document.forms["ifstudent"]["txtclass"].value.toString();
//	  var pwd = document.forms["ifstudent"]["txtmark"].value.toString();
//	  // alert("fname"+fname);
//
//	  var invocationData = {
//	    adapter: 'qlsvAdapter',
//	    procedure: 'procedure4',
//	    parameters:[fname,lname,email,pwd]
//	  };
//
//	  var options = {
//	    onSuccess : InsertDataSuccess,
//	    onFailure : InsertDataFailed,
//	    timeout : 30000
//	  };
//	  WL.Client.invokeProcedure(invocationData, options);
//	}
//
//	function InsertDataSuccess(result){
//	  alert("Success");
//	  WL.Logger.debug("Retrieve success" +  JSON.stringify(result));
//	}
//
//	function InsertDataFailed(result){
//	  alert("Failure");
//	  WL.Logger.debug("Retrieve success" +  JSON.stringify(result));
//	}