<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Disciplinas</title>
	</head>
	<body>
		<table>
			<c:forEach var="disciplina" items="${disciplinas}">
					<tr>
						<td>${disciplina}</td>
					</tr>				
			</c:forEach>
		</table>
		
		<h1>${valor}</h1>
	
	</body>
</html>