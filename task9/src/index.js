function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        modal.classList.remove('scale-95', 'opacity-0');
        modal.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('scale-100', 'opacity-100');
    modal.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('translate-x-full', 'opacity-0');
    toast.classList.add('translate-x-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-x-0', 'opacity-100');
        toast.classList.add('translate-x-full', 'opacity-0');
    }, 3000);
}
