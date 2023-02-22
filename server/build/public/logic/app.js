var BASE_URL = 'https://abeldev.vercel.app';

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

const updateCount = async () => {
	const count = document.getElementById('count');

	const options = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};
	const response = await fetch(`${BASE_URL}/api/v1/article/all`, options);
	const res = await response.json();

	let articleCount =
		res.data.result.latest3.length + res.data.result.articles.length;

	count.textContent = `Articles in DB : ${articleCount}`;
};
updateCount();

const updateArticles = async () => {
	const input = document.getElementById('page');
	let page = input.value;

	if (!page) {
		showToast('error', 'Please input a page!!');
		return;
	}
	const options = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};
	const response = await fetch(`${BASE_URL}/api/v1/article/${page}`, options);
	const res = await response.json();

	showToast(res.status, res.data.message);
	updateCount();
};
const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', updateArticles);

const updateMessage = async () => {
	const messageContainer = document.getElementById('messageContainer');

	const options = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};
	const response = await fetch(`${BASE_URL}/api/v1/messages`, options);
	const res = await response.json();
	const data = res.data.result;

	messageContainer.innerHTML = ``;

	data.forEach((curr) => {
		let container = document.createElement('div');

		container.classList.add(
			'flex',
			'p-4',
			'mt-4',
			'space-x-2',
			'w-50%',
			'bg-gray-50',
			'rounded-lg',
			'shadow-lg',
			'max-w-md'
		);
		container.innerHTML = `
    <div class="flex flex-col border-r pr-4">
    <a
      href="mailto:${curr.email}"
      class="text-xs font-[500] text-[#116852] hover:text-[#169b79]"
      >${curr.email}</a
    >
    <p class="font-[500]">John doe</p>
    <div
      class="flex justify-center items-center text-[#169b79] ml-auto mt-2 h-8 w-8 border border-[#169b79] p-2 rounded hover:text-white hover:bg-[#169b79] cursor-pointer active:bg-[#2cdaae]"
    >
      <span
        class="material-symbols-outlined deleteBtn messageDelBtn"
        id="${curr._id}"
      >
        delete
      </span>
    </div>
  </div>

  <div>
    <p
      class="text-md font-Raleway text-slate-600 font-[700] whitespace-normal underline"
    >
      ${curr.subject}
    </p>

    <p
      class="text-sm font-Raleway text-slate-600 font-[500] whitespace-normal"
    >
      ${curr.message}
    </p>
  </div>
</div>

`;

		messageContainer.appendChild(container);
	});
	console.log(data);
};
updateMessage();

const deleteMessage = async (e) => {
	const options = {
		method: 'DELETE',
		headers: new Headers({
			Accept: 'application/json',
			'Access-Control-Allow-Origin': `${BASE_URL}`,
			'Content-Type': 'application/json',
		}),
	};

	const response = await fetch(
		`${BASE_URL}/api/v1/messages/${e.target.id}`,
		options
	);

	const data = await response.json();
	showToast(data.status, data.message);

  updateMessage();
};

// Mutation Observer setup
const callback = (mutationsList, observer) => {
	for (let mutation of mutationsList) {
		if (mutation.type === 'childList') {
			const messageDelBtn = Array.from(
				document.getElementsByClassName('messageDelBtn')
			);

			for (let btn of messageDelBtn) {
				btn.addEventListener('click', deleteMessage);
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
