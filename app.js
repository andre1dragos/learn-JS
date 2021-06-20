const delInput = document.querySelector('.nameDel');
const createBtn = document.querySelector('.createDel');
const list = document.querySelector('.List');
delInput.placeholder = 'London';

createBtn.addEventListener('click', (e)=>{
    if(delInput.value != ""){
        e.preventDefault();

        //create new row
        const newRow = document.createElement('li');
        newRow.textContent = delInput.value;
        newRow.style.textTransform = 'uppercase';
        list.appendChild(newRow);

        //create observation input
        const observ = document.createElement('input');
        observ.style.minWidth = '30rem'
        observ.style.right = '27rem';
        observ.placeholder = 'observation';
        newRow.appendChild(observ);

        //create priority input
        const priority = document.createElement('input');
        priority.style.right = '15rem';
        priority.placeholder = 'priority';
        newRow.appendChild(priority);

        //create driver input
        const driver = document.createElement('input');
        driver.placeholder = 'driver';
        newRow.appendChild(driver);

        //create remove button
        const remBtn = document.createElement('span');
        remBtn.innerHTML = 'x';
        newRow.appendChild(remBtn);
    }

    delInput.value = '';

    //create remove function
    const remove = document.querySelectorAll('span')
    for(let i=0; i< remove.length; i++){
        remove[i].addEventListener('click', ()=>{
            remove[i].parentElement.style.opacity = '0';
            setTimeout(()=>{
                remove[i].parentElement.style.display = 'none';
                remove[i].parentElement.remove();
            },500);
        })
    }
})
