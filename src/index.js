import numeral from 'numeral';
//API IMPORT
import {getUsers, deleteUser} from './api/userApi';

//STYLES:
import './index.css';
// import { link } from 'fs';
// import { get } from 'http';


/* eslint-disable no-console */
const val = numeral(1000).format('$0.0.00')
console.log(`I would pay ${val} for the dog biscuits`);


// API CALL WITH DATA
// DISPLAY USER DATA
getUsers().then(result => {
	let userBody = "";

	result.forEach(user => {
		userBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
	});
	document.getElementById('users').innerHTML = userBody;

	const deleteLinks = document.getElementsByClassName("deleteUser");

	//Must use array.from to create a real array from the DOM collection
	//getElementsByClassname returns an array-like object
	Array.from(deleteLinks, link => {
		link.onclick = function (event) {
			const element = event.target;
			event.preventDefault();
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		};
	});
})


