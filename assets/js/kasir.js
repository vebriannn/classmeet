const select = document.getElementById('selectedItems');
const result = document.querySelector('.results')
const jmlBeliDiv = document.querySelector('.jumlahBeli')
const formjml = document.getElementById('totalbelii');
const btnBeli = document.querySelector('.btn-belii');
const bayarItems = document.querySelector('.bayarItems')
const hasilTotal = document.getElementById('totalbayar')
const btnBayar = document.querySelector('.btn-bayar')

var selectedAppend = ["items"]
var bayar = 0


select.addEventListener('click', () => {
    result.classList.replace('opacity-0', 'opacity-100')
    jmlBeliDiv.classList.replace('opacity-0', 'opacity-100')
    bayarItems.classList.replace('opacity-0', 'opacity-100')
    selectedAppend[0] = select.value
    console.log(selectedAppend)
})

btnBeli.addEventListener('click', (e) => {
    if(formjml.value != "") {
        if(selectedAppend[0] == "pulpen") {
            var rumus = 3000 * formjml.value
            bayar = rumus
            result.innerHTML = "Harga Barang : " + rumus
        }
        else if(selectedAppend[0] == "pensil") {
            var rumus = 2000 * formjml.value
            result.innerHTML = "Harga Barang : " + rumus
            bayar = rumus
        }
        else if(selectedAppend[0] == "buku") {
            var rumus = 5000 * formjml.value
            result.innerHTML = "Harga Barang : " + rumus
            bayar = rumus
        }
        else if(selectedAppend[0] == "penghapus") {
            var rumus = 1500 * formjml.value
            result.innerHTML = "Harga Barang : " + rumus
            bayar = rumus
        }
    }
    else {
        alert("Maaf Anda Harus Inputkan Total Barang")
    }
})

btnBayar.addEventListener('click', () => {
    if(hasilTotal.value >= bayar) {
        var hasiljmll = hasilTotal.value - bayar;
        alert('Terima Kasih tlah berbelanja\n kembalian uang anda : ' + hasiljmll)
        window.location.href = "kasir.html"
    }
    else {
        alert('Maaf uang yang di bayar kurang, silahkan melakukan penbayaran ulang')
    }
})