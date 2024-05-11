let items = [ /* your items array */];

let container = document.querySelector('.freelancers');

for (let i = 0; i < items.length; i++) {
    let freelancerDiv = document.createElement('div');
    freelancerDiv.className = 'all';

    let imageDiv = document.createElement('div');
    imageDiv.className = 'image';

    let img = document.createElement('img');
    img.src = items[i][0];
    imageDiv.appendChild(img);

    let descrDiv = document.createElement('div');
    descrDiv.className = 'descr';

    let h1 = document.createElement('h1');
    h1.textContent = items[i][1];
    descrDiv.appendChild(h1);

    let h5 = document.createElement('h5');
    h5.textContent = items[i][2];
    descrDiv.appendChild(h5);

    let a = document.createElement('a');
    a.href = '#';
    a.textContent = 'View Profile';
    descrDiv.appendChild(a);

    freelancerDiv.appendChild(imageDiv);
    freelancerDiv.appendChild(descrDiv);

    container.appendChild(freelancerDiv);
}


