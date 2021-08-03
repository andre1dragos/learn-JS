const delInput1 = document.querySelector('.nameLdnDel');
const delInput2 = document.querySelector('.nameOtherDel');
const createBtn1 = document.querySelector('#createDel1');
const createBtn2 = document.querySelector('#createDel2');
const list1 = document.querySelector('#ldnList');
const list2 = document.querySelector('#othersList');

createBtn1.addEventListener('click', (e)=>{
    if(delInput1.value != ""){
        e.preventDefault();

        //create new row
        const newRow = document.createElement('li');
        newRow.textContent = delInput1.value;
        newRow.style.textTransform = 'uppercase';
        list1.appendChild(newRow);

        //create observation input
        const observ = document.createElement('input');
        observ.style.minWidth = '25rem'
        observ.style.right = '27rem';
        observ.style.textTransform = 'lowercase'
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
        remBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        newRow.appendChild(remBtn);
    }

    delInput1.value = '';

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

createBtn2.addEventListener('click', (e)=>{
    if(delInput2.value != ""){
        e.preventDefault();

        //create new row
        const newRow = document.createElement('li');
        newRow.textContent = delInput2.value;
        newRow.style.textTransform = 'uppercase';
        list2.appendChild(newRow);

        //create observation input
        const observ = document.createElement('input');
        observ.style.minWidth = '25rem'
        observ.style.right = '27rem';
        observ.style.textTransform = 'lowercase'
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
        remBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        newRow.appendChild(remBtn);
    }

    delInput2.value = '';

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