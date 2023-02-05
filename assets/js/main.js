/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters_active')
        })
        target.classList.add('filters_active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
    })
})

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
