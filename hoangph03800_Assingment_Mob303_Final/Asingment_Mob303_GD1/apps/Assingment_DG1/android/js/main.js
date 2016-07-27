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