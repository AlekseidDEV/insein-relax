export const repairModule = () => {
    const repairModal = document.querySelector('.popup-repair-types')


    // const test = () => {
    //     return fetch('../crm-backend/db.json', {
    //         method: 'GET'
    //     }).then((r) => console.log(r.json()))
    // }

    // test()

    const getContent = () => {
        return fetch('../crm-backend/db.json', {
            method: 'GET'
        }).then((r) => r.json())
    }

    const changeContent = (target) => {
        const activeBtn = document.querySelector('.active_o')
        
        if(!target.matches('.active_o')){
            activeBtn.classList.remove('active_o')
            target.classList.add('active_o')

            getContent()
            .then((data) => {
                const filteredData = data.filter((item) => item.type === activeBtn.textContent)

                console.log(filteredData);
                // *! Разобраться почему после фильтра, нет данных о разделе "Стены: Монтажные работы"
            })
            .catch(() => {
                alert('возникла ошибка, попробуйте позже')
            })
        }
    }

    repairModal.addEventListener('click', (e) => {
        if(e.target === repairModal || e.target.closest('.close')){
            repairModal.style.visibility = 'hidden'
        }else if(e.target.matches('.popup-repair-types-nav__item')){
            changeContent(e.target)
        }
    })
}