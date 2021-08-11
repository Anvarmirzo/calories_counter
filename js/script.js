document.addEventListener('DOMContentLoaded', () => {
	('use strict');

	const Info = {
		gender: 'male',
		age: null,
		height: null,
		weight: null,
		activity: 'min',
	};

	function hasNull(obj) {
		const hasNull = Object.values(obj).some((x) => x === null || x === '');
		return hasNull;
	}

	const submitBtn = document.querySelector('.form__submit-button');
	const resetBtn = document.querySelector('.form__reset-button');

	const result = document.querySelector('.counter__result');

	/* Submit Info */
	submitBtn.addEventListener('click', function (e) {
		e.preventDefault();
		if (result.classList.contains('counter__result--hidden')) {
			result.classList.remove('counter__result--hidden');
		}

		/* Calculate Calories Normal */
		const weightMaintain = 10 * Info.weight + 6.25 * Info.height - 5 * Info.age;

		const caloriesNorm = document.getElementById('calories-norm');
		const caloriesMin = document.getElementById('calories-minimal');
		const caloriesMax = document.getElementById('calories-maximal');

		/* Calculate Calories Minimal */

		let caloriesNormValue = 1;

		if (Info.gender === 'male') {
			const N = weightMaintain + 5;

			switch (Info.activity) {
				case 'min':
					caloriesNormValue = N * 1.2;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'low':
					caloriesNormValue = N * 1.375;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'medium':
					caloriesNormValue = N * 1.55;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'high':
					caloriesNormValue = N * 1.725;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'max':
					caloriesNormValue = N * 1.9;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				default:
					break;
			}
		} else {
			const N = weightMaintain - 161;

			switch (Info.activity) {
				case 'min':
					caloriesNormValue = N * 1.2;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'low':
					caloriesNormValue = N * 1.375;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'medium':
					caloriesNormValue = N * 1.55;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'high':
					caloriesNormValue = N * 1.725;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				case 'max':
					caloriesNormValue = N * 1.9;
					caloriesNorm.innerHTML = caloriesNormValue;
					caloriesMin.innerHTML = (
						caloriesNormValue * 0.15 +
						caloriesNormValue
					).toFixed(2);
					caloriesMax.innerHTML = (
						caloriesNormValue -
						caloriesNormValue * 0.15
					).toFixed(2);
					break;

				default:
					break;
			}
		}
	});

	/* Clear Info */
	resetBtn.addEventListener('click', function (e) {
		Info.gender = 'male';
		Info.age = null;
		Info.height = null;
		Info.weight = null;
		Info.activity = null;
		submitBtn.disabled = true;
		result.classList.add('counter__result--hidden');
		setTimeout(() => {
			resetBtn.disabled = true;
		}, 10);
	});

	/* Get user gender */
	function getGender() {
		const genders = document.getElementsByName('gender');

		for (let gender of genders) {
			gender.addEventListener('input', function () {
				Info.gender = this.value;
			});
		}
	}
	getGender();

	/* Get user age */
	function getAge() {
		const age = document.getElementById('age');
		age.addEventListener('input', function () {
			Info.age = this.value;
		});
	}
	getAge();

	/* Get user height */
	function getHeight() {
		const height = document.getElementById('height');
		height.addEventListener('input', function () {
			Info.height = this.value;
		});
	}
	getHeight();

	/* Get user weight */
	function getWeight() {
		const weight = document.getElementById('weight');
		weight.addEventListener('input', function () {
			Info.weight = this.value;
		});
	}
	getWeight();

	/* Get user activity */
	function getActivity() {
		const activityList = document.getElementsByName('activity');
		for (let currentActivity of activityList) {
			currentActivity.addEventListener('input', function () {
				Info.activity = this.value;
			});
		}
	}
	getActivity();

	function checkInfo() {
		const inputs = document.getElementsByTagName('input');
		for (const input of inputs) {
			input.addEventListener('input', function (e) {
				if (!hasNull(Info)) {
					submitBtn.disabled = false;
					resetBtn.disabled = false;
				} else {
					submitBtn.disabled = true;
					resetBtn.disabled = true;
				}
			});
		}
	}
	checkInfo();
});

/* 
Формулы
Поддержание веса
// Для женщин:
// N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в 
// годах) − 161
// Для мужчин:
// N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в 
// годах) + 5
// Полученное значение (N) умножаем на коэффициент активности. Результат и будет 
// нормой калорий для поддержания веса.
// Коэффициенты активности
// • Минимальная: 1.2.
// • Низкая: 1.375.
// • Средняя: 1.55.
// • Высокая: 1.725.
// • Очень высокая: 1.9.
Формулы для набора и сброса веса
• Набор веса: прибавляем 15% от нормы к этой норме.
• Сброс веса: вычитаем 15% от нормы из этой нормы.
*/
