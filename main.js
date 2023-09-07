const ckb = document.getElementById('ckb');

ckb.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

const ckbMobile = document.getElementById('ckb-mobile');

ckbMobile.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
