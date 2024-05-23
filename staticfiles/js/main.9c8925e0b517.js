const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})
const selectImage1 = document.querySelector('.select-image1');
const inputFile1 = document.querySelector('#file1');
const imgArea1 = document.querySelector('.img-area1');

selectImage1.addEventListener('click', function () {
	inputFile1.click();
})

inputFile1.addEventListener('change', function () {
	const image1 = this.files[1]
	if(image1.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea1.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img1 = document.createElement('img');
			img1.src = imgUrl;
			imgArea1.appendChild(img1);
			imgArea1.classList.add('active');
			imgArea1.dataset.img1 = image1.name;
		}
		reader.readAsDataURL(image1);
	} else {
		alert("Image size more than 2MB");
	}
})