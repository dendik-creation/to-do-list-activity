var kegiatanInput = document.querySelector('#kegiatanInput');
var kegiatanList = document.querySelector('#kegiatanList');
var btnTambah = document.querySelector('#btnTambah');


kegiatanInput.addEventListener('input', () => {
    if(kegiatanInput.value.length > 0){
        btnTambah.removeAttribute('disabled');
    }else{
        btnTambah.setAttribute('disabled', true);
    }
});

let kegiatanData = [
    'Doing homework',
    'Cleaning the bed room',
    'Washing clothes',
    'Lunch with side dishes of chicken',
    'Nap'
]

function index(){
    kegiatanList.innerHTML = "";

    if(kegiatanData.length > 0){
        for(let i = 0; i < kegiatanData.length; i++){
            let text = "<li class='list-group-item'><span>"+ kegiatanData[i] +"</span><button class='btn btn-sm btn-outline-info position-absolute end-25' onclick='editKegiatan("+[i]+")'>Edit</button><button class='btn btn-sm btn-outline-danger position-absolute end-0' onclick='deleteKegiatan("+[i]+")'>Delete</button></li>"
            kegiatanList.insertAdjacentHTML('afterbegin', text);
        }
    }else{
        let empty = "<h6 class='fs-6 badge bg-danger'>No recent activity</h6>"
        kegiatanList.insertAdjacentHTML('afterbegin',empty);
    }
}

index();

function create(){
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    kegiatanData.push(kegiatanInput.value)
    kegiatanList.appendChild(li);
    kegiatanInput.value = '';
    btnTambah.setAttribute('disabled', true)
    index();
}

function editKegiatan(id){
    let kegiatanEdit = prompt('Edit Kegiatan', kegiatanData[id]);
    kegiatanData[id] = kegiatanEdit;
    index();
}

function deleteKegiatan(id){
    kegiatanData.splice(id, 1);
    index();
}