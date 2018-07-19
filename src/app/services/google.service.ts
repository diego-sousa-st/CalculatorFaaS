import { Injectable } from '@angular/core';

@Injectable()
export class GoogleService {

	web: any = {
		client_id: "92272643744-tu2be6kb332mfsdg25hlapiki8vsm2gh.apps.googleusercontent.com",
		project_id: "high-territory-210723",
		auth_uri: "https://accounts.google.com/o/oauth2/auth",
		token_uri: "https://accounts.google.com/o/oauth2/token",
		auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
		client_secret: "2N3nlKRf_cAtPRyv6prlToz0"
	}

	constructor() { }

	// handleClientLoad() {
	// 	gapi.load('client:auth2', this.initClient);
	// }
	// /**
	// *  Initializes the API client library and sets up sign-in state
	// *  listeners.
	// */
	// initClient() {
	// 	gapi.client.init({
	// 		clientId: this.web.cliente_id,
	// 	}).then(() => {
	// 		// Listen for sign-in state changes.
	// 		gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
	// 		// Handle the initial sign-in state.
	// 		this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	// 		// authorizeButton.onclick = this.handleAuthClick;
	// 		// signoutButton.onclick = this.handleSignoutClick;
	// 	});
	// }
	// /**
	// *  Called when the signed in status changes, to update the UI
	// *  appropriately. After a sign-in, the API is called.
	// */
	// updateSigninStatus(isSignedIn) {
	// 	if (isSignedIn) {
	// 		// authorizeButton.style.display = 'none';
	// 		// signoutButton.style.display = 'block';
	// 		this.listLabels();
	// 	} else {
	// 		// authorizeButton.style.display = 'block';
	// 		// signoutButton.style.display = 'none';
	// 	}
	// }
	// /**
	// *  Sign in the user upon button click.
	// */
	// handleAuthClick(event) {
	// 	gapi.auth2.getAuthInstance().signIn();
	// }
	// /**
	// *  Sign out the user upon button click.
	// */
	// handleSignoutClick(event) {
	// 	gapi.auth2.getAuthInstance().signOut();
	// }
	// /**
	// * Append a pre element to the body containing the given message
	// * as its text node. Used to display the results of the API call.
	// *
	// * @param {string} message Text to be placed in pre element.
	// */
	// appendPre(message) {
	// 	let pre = document.getElementById('content');
	// 	let textContent = document.createTextNode(message + '\\n');
	// 	pre.appendChild(textContent);
	// }
	// /**
	// * Print all Labels in the authorized user's inbox. If no labels
	// * are found an appropriate message is printed.
	// */
	// listLabels() {
	// 	gapi.client.gmail.users.labels.list({
	// 		'userId': 'me'
	// 	}).then((response) {
	// 		let labels = response.result.labels;
	// 		appendPre('Labels:');
	// 		if (labels && labels.length > 0) {
	// 			for (i = 0; i < labels.length; i++) {
	// 				let label = labels[i];
	// 				appendPre(label.name)
	// 			}
	// 		} else {
	// 			appendPre('No Labels found.');
	// 		}
	// 	});
	// }
	// script(async = '', defer = '', src = 'https://apis.google.com/js/api.js', onload = 'this.onload=function(){};handleClientLoad()', onreadystatechange = "if (this.readyState === 'complete') this.onload()")

}
