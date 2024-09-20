const containerToObserver = document.querySelector('.plans-container')
const allPlans = document.querySelectorAll('.plan')

// criando observador
const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        const plan = entry.target
        if(entry.isIntersecting){
            allPlans.forEach((plan, index) =>{
                setTimeout(() => {
                    plan.classList.add("show")
                }, 300 + index * 600)
            })
        }else{
            allPlans.forEach((plan, index) =>{
                setTimeout(() => {
                    plan.classList.remove("show")
                }, 300 + index * 600)
            })
        }
    })
},{
    threshold: 0.7
})

observer.observe(containerToObserver)
