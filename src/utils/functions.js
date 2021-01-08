

export const scrollListener = () => {
    const navbar = document.getElementById('navbar')

    let lastscroll = 0
    document.addEventListener('scroll', () => {
        let position = window.pageYOffset
        if (navbar && navbar.style) {
            if (position >= lastscroll) {
                navbar.style.top = -navbar.clientHeight + 'px'
            } else {
                navbar.style.top = '0px'
            }
            lastscroll = window.pageYOffset
        }
    })
}