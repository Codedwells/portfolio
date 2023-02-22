'use strict';
var BASE_URL = 'http://localhost:3000';

const showToast = (icon, message) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});
	Toast.fire({
		icon: icon,
		title: message,
	});
};

document.body.classList.add('hidden');
(() => {
	const date = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const dateString = date.toLocaleDateString('en-US', options);

	const navDate = document.getElementById('navDate');
	navDate.innerText = dateString;
})();

const checkAuth = async () => {
	const options = {
		method: 'GET',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};
	const response = await fetch(`${BASE_URL}/api/v1/admin/admauth`, options);

	let data = await response.json();
	let session = JSON.parse(sessionStorage.getItem('_idAentf'));

	if (data.data.Auth && session._AAtIeuzPCY) {
		data.data.Auth
			? document.body.classList.remove('hidden')
			: showToast('error', 'An error occured please try again!!');
		return;
	}

	showToast('error', 'An error occured please try again!!');

	let newHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="shortcut icon" href="https://img.icons8.com/fluency/96/null/warning-shield.png" type="image/x-icon"><title>BoostCTR</title><style>*{font-family:Google sans,Arial}body,html{margin:0;padding:0}.flex-container{display:flex;justify-content:center;align-items:center;height:100vh;color:#fff;animation:colorSlide 15s cubic-bezier(.075,.82,.165,1) infinite}.flex-container .text-center{text-align:center}.flex-container .text-center h1,.flex-container .text-center h3{margin:10px;cursor:default}.flex-container .text-center h1 .fade-in,.flex-container .text-center h3 .fade-in{animation:fadeIn 2s ease infinite}.flex-container .text-center h1{font-size:8em;transition:font-size .2s ease-in-out;border-bottom:1px dashed #fff}.flex-container .text-center h1 span#digit1{animation-delay:.2s}.flex-container .text-center h1 span#digit2{animation-delay:.3s}.flex-container .text-center h1 span#digit3{animation-delay:.4s}.flex-container .text-center button{border:1px solid #fff;background:0 0;outline:0;padding:10px 20px;font-size:1.1rem;font-weight:700;color:#fff;text-transform:uppercase;transition:background-color .2s ease-in;margin:20px 0}.flex-container .text-center button:hover{background-color:#fff;color:#555;cursor:pointer}@keyframes colorSlide{0%{background-color:#152a68}25%{background-color:#4169e1}50%{background-color:#2e8b57}75%{background-color:tomato}100%{background-color:#152a68}}@keyframes fadeIn{from{opacity:0}100%{opacity:1}}</style></head><body><div class="flex-container"><div class="text-center"><h1><span class="fade-in" id="digit1">O</span><span class="fade-in" id="digit2">O</span><span class="fade-in" id="digit3">P</span><span class="fade-in" id="digit1">S</span><span class="fade-in" id="digit3"><img src="https://img.icons8.com/fluency/96/null/warning-shield.png"></span></h1><h3 class="fadeIn">NOT AUTHORIZED!</h3><button id="goHome" type="button" name="button">Go Home</button></div></div></body><script>const btn=document.getElementById("goHome"),goHome=()=>{window.location.href="./login.html"};btn.addEventListener("click",goHome);</script></html>`;
	document.write(newHtml);
	document.body.classList.remove('hidden');

	setTimeout(() => {
		//  window.location.href = './login.html';
	}, 1000);
};
window.onload = () => {
	checkAuth();
};

const handleLogout = async () => {
	sessionStorage.removeItem('_idAentf');

	const options = {
		method: 'GET',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};
	const response = await fetch(`${BASE_URL}/api/v1/admin/logout`, options);
	const data = await response.json();

	showToast('success', 'You have logged out!!!');
	setInterval(() => {
		window.location.reload();
	}, 1200);
};
const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', handleLogout);

const addSubject = async (e) => {
	e.preventDefault();

	const subjectForm = document.getElementById('subjectForm');

	let formData = new FormData(subjectForm);
	let subject = formData?.get('subject');
	let score = formData?.get('score');
	let formula = formData?.get('formula');
	let type = formData?.get('type');

	if (!subject || !score || !formula || !type) {
		showToast('error', 'Please fill all the inputs!!!');
		return;
	} else if (isNaN(score)) {
		showToast('error', 'The score has to be a number!!');
		return;
	}

	const options = {
		method: 'POST',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			subject,
			score,
			formula,
			type,
		}),
	};

	const response = await fetch(`${BASE_URL}/api/v1/subject`, options);
	const data = await response.json();

	if (data.status === 'success') {
		showToast(data.status, data.message);
	}

	getSubjectLines();
	document.getElementById('subjectForm').reset();
};
const subjectBtn = document.getElementById('subjectBtn');
subjectBtn.addEventListener('click', addSubject);

const getSubjectLines = async () => {
	const options = {
		method: 'GET',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(`${BASE_URL}/api/v1/subject/admin`, options);
	const tableBody = document.getElementById('tableBody');

	const data = await response.json();

	if (data.status === 'error') return;

	let subjects = data?.data;
	tableBody.innerHTML = null;

	for (let item of subjects) {
		var row = document.createElement('tr');
		row.classList.add('bg-white', 'border-b', 'hover:bg-gray-50');

		row.innerHTML = `
        <td scope="row" class="flex items-center px-1 py-4 text-gray-900 whitespace-nowrap dark:text-white border-r">
            <div
                class="flex justify-center items-center text-[#169b79] h-8 w-8 border border-[#169b79] p-2 rounded hover:text-white hover:bg-[#169b79] cursor-pointer active:bg-[#2cdaae] ml-3"
            >
                <span class="material-symbols-outlined deleteBtn sbjBtn" id="${item._id}"> delete </span>
            </div>
            <div class="pl-1">
                <div class="text-base font-semibold whitespace-normal md:text-start md:px-4">${item.subject}</div>
            </div>
        </td>
        <td class="px-1 py-4 text-center whitespace-normal border-r">${item.score}</td>
        <td class="px-1 py-4 text-center whitespace-normal border-r md:text-start md:px-4">${item.formula}</td>
        <td class="px-1 py-4 text-center whitespace-normal md:text-start md:px-4">${item.type}</td>
        `;
		tableBody.appendChild(row);
	}
};
getSubjectLines();

const deleteSubject = async (e) => {
	const options = {
		method: 'DELETE',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(
		`${BASE_URL}/api/v1/subject/${e.target.id}`,
		options
	);

	const data = await response.json();
	showToast(data.status, data.message);

	getSubjectLines();
};

const getTips = async () => {
	const options = {
		method: 'GET',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(`${BASE_URL}/api/v1/tips`, options);

	const data = await response.json();

	let tips = data.data;

	const tipContainer = document.getElementById('tipContainer');
	tipContainer.innerHTML = null;

	for (let tip of tips) {
		let div = document.createElement('div');
		div.classList.add('flex', 'flex-col', 'space-y-6');

		div.innerHTML = `
        <div class="flex flex-row w-full mt-2 justify-between text-gray-600 font-Ubuntu bg-gray-100 p-2 whitespace-normal rounded">
            <q>${tip.tip}</q>
            <div
                class="flex justify-center items-center text-[#169b79] h-8 w-8 border border-[#169b79] p-2 rounded hover:text-white hover:bg-[#169b79] cursor-pointer active:bg-[#2cdaae]"
            >
                <span class="material-symbols-outlined deleteBtn tipDelBtn" id="${tip._id}"> delete </span>
            </div>
        </div>
        `;

		tipContainer.appendChild(div);
	}
};
getTips();

const addTip = async (e) => {
	e.preventDefault();
	const quoteForm = document.getElementById('quoteForm');

	let formData = new FormData(quoteForm);
	let tip = formData?.get('quote');
	let category = formData?.get('category');

	const options = {
		method: 'POST',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			tip,
			category,
		}),
	};

	const response = await fetch(`${BASE_URL}/api/v1/tips`, options);
	const data = await response.json();

	if (data.status === 'success') {
		showToast(data.status, data.message);
	}
	getTips();

	document.getElementById('quoteForm').reset();
};
const quoteBtn = document.getElementById('quoteBtn');
quoteBtn.addEventListener('click', addTip);

const deleteTip = async (e) => {
	const options = {
		method: 'DELETE',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(
		`${BASE_URL}/api/v1/tips/${e.target.id}`,
		options
	);

	const data = await response.json();
	showToast(data.status, data.message);

	getTips();
};

const getMessages = async () => {
	const options = {
		method: 'GET',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(`${BASE_URL}/api/v1/message`, options);

	const data = await response.json();

	if (data.status === 'error') return;

	let messages = data?.data;

	const messagesContainer = document.getElementById('messagesContainer');
	messagesContainer.innerHTML = null;
	for (let message of messages) {
		let div = document.createElement('div');
		div.classList.add(
			'flex',
			'p-4',
			'space-x-3',
			'w-[50%]',
			'bg-gray-50',
			'rounded-lg',
			'shadow-lg',
			'max-w-md'
		);

		div.innerHTML = `
        <div class="flex flex-col border-r pr-4">
            <a href="mailto:${message.email}" class="text-xs font-[500] text-[#116852] hover:text-[#169b79]">${message.email}</a>
            <p class="font-[500]">${message.name}</p>
            <div
                class="flex justify-center items-center text-[#169b79] ml-auto mt-2 h-8 w-8 border border-[#169b79] p-2 rounded hover:text-white hover:bg-[#169b79] cursor-pointer active:bg-[#2cdaae]"
            >
                <span class="material-symbols-outlined deleteBtn messageDelBtn" id="${message._id}"> delete </span>
            </div>
        </div>
        <p class="text-sm font-Raleway text-slate-600 font-[700] whitespace-normal">
            ${message.message}
        </p>
        `;

		messagesContainer.appendChild(div);
	}
};
getMessages();

const deleteMessages = async (e) => {
	const options = {
		method: 'DELETE',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(
		`${BASE_URL}/api/v1/message/${e.target.id}`,
		options
	);

	const data = await response.json();

	showToast(data.status, data.message);

	getMessages();
};

const updateFilter = async (e) => {
	var update;
	if (e.target.id === 'latest') {
		update = 'latest';
	} else {
		update = 'random';
	}

	const options = {
		method: 'PUT',
		credentials: 'include',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			update,
		}),
	};

	const response = await fetch(`${BASE_URL}/api/v1/utils/filters`, options);

	const data = await response.json();

	getMessages();
	showToast(data.status, data.message);
};
let filterForm = document.getElementById('filterForm');
filterForm.addEventListener('change', updateFilter);

const changePassword = () => {
	Swal.fire({
		title: 'Change Password',
		html: `
		<input type="password" id="previousPassword" placeholder="Previous password" autocomplete="off" style='margin-top:10px; outline-color:#169b79;'/>
      <input type="password" id="newPassword" placeholder="New password" autocomplete="off" style='margin-top:10px; outline-color:#169b79;'/>
      <input type="password" id="confirmPassword" placeholder="Confirm password" autocomplete="off"  style='margin-top:10px; margin-bottom:10px; outline-color:#169b79;'/>
    `,
		confirmButtonColor: '#169b79',
		showCancelButton: true,
		confirmButtonText: 'Change Password',
	}).then((result) => {
		if (result.value) {
			// Get the previous password, new password, and confirm password values
			const prevPassword = document.getElementById('previousPassword').value;
			const newPassword = document.getElementById('newPassword').value;
			const confirmPassword = document.getElementById('confirmPassword').value;

			// Validate the passwords
			if (newPassword !== confirmPassword) {
				// Show an error if the new password and confirm password do not match
				Swal.fire({
					icon: 'error',
					title: 'Error',
					confirmButtonColor: '#169b79',
					text: 'The new password and confirm password do not match.',
				});
			} else {
				// Send a fetch request to change the password
				fetch(`${BASE_URL}/api/v1/admin/update`, {
					method: 'PUT',
					credentials: 'include',
					headers: new Headers({
						Accept: 'application/json',
						'Access-Control-Allow-Origin': `${BASE_URL}`,
						'Content-Type': 'application/json',
					}),
					body: JSON.stringify({
						prevPassword,
						newPassword,
					}),
				}).then((response) => {
					if (response.ok) {
						// Show a success message if the password was changed successfully
						Swal.fire({
							icon: 'success',
							title: 'Success',
							confirmButtonColor: '#169b79',
							text: 'The password was changed successfully.',
						});
					} else {
						// Show an error message if there was a problem changing the password
						Swal.fire({
							icon: 'error',
							title: 'Error',
							confirmButtonColor: '#169b79',
							text: 'There was a problem changing the password.',
						});
					}
				});
			}
		}
	});
};

const changePassBtn = document.getElementById('adminSet');
changePassBtn.addEventListener('click', changePassword);

// Mutation Observer setup
const callback = (mutationsList, observer) => {
	for (let mutation of mutationsList) {
		if (mutation.type === 'childList') {
			const sbjBtns = Array.from(document.getElementsByClassName('sbjBtn'));
			const tipDelBtn = Array.from(
				document.getElementsByClassName('tipDelBtn')
			);
			const messageDelBtn = Array.from(
				document.getElementsByClassName('messageDelBtn')
			);

			for (let btn of sbjBtns) {
				btn.addEventListener('click', deleteSubject);
			}

			for (let btn of tipDelBtn) {
				btn.addEventListener('click', deleteTip);
			}

			for (let btn of messageDelBtn) {
				btn.addEventListener('click', deleteMessages);
			}
		}
	}
};
const observer = new MutationObserver(callback);

observer.observe(document.body, {
	attributes: true,
	childList: true,
	subtree: true,
});
