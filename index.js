/** @format */

const participentName = document.querySelector('#participentName');
const participentNameShow = document.querySelector('#participentNameShow');
const shuffle = document.querySelector('#shuffle');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');

let param = [];

participentName.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		let newName = e.target.value.split(', ');

		if (participentName.value !== '') {
			newName.forEach((single) => {
				param.push(single);
				let item = madeul(single);
				participentNameShow.appendChild(item);
			});
        } else {
            alert('You must enter partifipend name')
        }
	}
});

function madeul(name) {
	let li = document.createElement('li');
	li.classList.add('list-group-item');
	li.innerHTML = name;

	return li;
}
