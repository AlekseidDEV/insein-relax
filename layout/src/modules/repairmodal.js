export const repairModule = () => {
    const repairModal = document.querySelector('.popup-repair-types')
    const startBtn = document.querySelector('.active_o')
    const tableWrapper = document.querySelector('.popup-repair-types-content-table')

    let dataServer = []

    const renderCont = (strFillter = startBtn.textContent, classActive = startBtn.dataset['type']) => {
        const dataFilter = dataServer.filter((item) => item.type === strFillter)

        const newTable = document.createElement('table')
        const newTbody = document.createElement('tbody')

        newTable.classList.add('popup-repair-types-content-table__list', 'active_table')
        tableWrapper.appendChild(newTable)
        newTable.appendChild(newTbody)

        for(let i = 0; i < dataFilter.length; i++){
            const newTr = document.createElement('tr')
            const tdName = document.createElement('td')
            const newUnits = document.createElement('td')
            const newCost = document.createElement('td')

            tdName.textContent = dataFilter[i].name
            newUnits.textContent = dataFilter[i].units
            newCost.textContent = dataFilter[i].cost

            newTr.appendChild(tdName);
            newTr.appendChild(newUnits);
            newTr.appendChild(newCost);
            
            newTr.classList.add('mobile-row')
            tdName.classList.add("repair-types-name")
            newUnits.classList.add("repair-types-name")
            newCost.classList.add("repair-types-name")

            newTbody.append(newTr)
        }

        newTable.setAttribute('id', classActive)
    }

    const getContent = () => {
        return fetch('../crm-backend/db.json', {
            method: 'GET'
        }).then((r) => r.json())
        .then((data) => {
            dataServer = data
            renderCont()
        })
    }

    const changeContent = (target) => {
        const activeBtn = document.querySelector('.active_o')
        const tableSearch = document.querySelector(`#${target.dataset['type']}`)
        const activeTable = document.querySelector('.active_table')

        if(!target.matches('.active_o')){
            activeBtn.classList.remove('active_o')
            target.classList.add('active_o')
        }

        
        if(tableSearch){
            activeTable.classList.remove('active_table')
            tableSearch.classList.add('active_table')
        } else{
            activeTable.classList.remove('active_table')
            renderCont(target.textContent, target.dataset['type'])
        }
    }

    repairModal.addEventListener('click', (e) => {
        if(e.target === repairModal || e.target.closest('.close')){
            repairModal.style.visibility = 'hidden'
        }else if(e.target.matches('.popup-repair-types-nav__item')){
            changeContent(e.target)
        }
    })

    getContent()
}