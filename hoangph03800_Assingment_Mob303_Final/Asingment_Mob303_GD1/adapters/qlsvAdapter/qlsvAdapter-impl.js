/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/*******************************************************************************
 * Implementation code for procedure - 'procedure1'
 * 
 * 
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}


/*******************************************************************************
 * Implementation code for procedure - 'procedure2'
 * 
 * 
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}


/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * 
 */

var selectStatement = WL.Server.createSQLStatement("select * from student");

function getStudents() {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}

var addStatement = WL.Server.createSQLStatement("insert into student (id, name, class, point) values (?, ?, ?, ?)");

function addStudent(ma, ten, lop, diem) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [ma, ten, lop, diem]
	});
}
	
var updateStatement = WL.Server.createSQLStatement("update student set name=?, class=?, point=? where id=?");

function updateStudent(ten, lop, diem, ma) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [ten, lop, diem, ma]
	});
}

var deleteStatement = WL.Server.createSQLStatement("delete from student where id=?");

function deleteStudent(ma) {
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [ma]
	});
}