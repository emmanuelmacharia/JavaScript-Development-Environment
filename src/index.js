import numeral from 'numeral';
//API IMPORT
import {getUsers} from './api/userApi';

//STYLES:
import './index.css';
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
		<td><a href="#" data-id= "${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
	});
	global.document.getElementById('users').innerHTML = userBody;
})
