const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector('.form input'),
qrImg = wrapper.querySelector('.qr-code img'),
generateBtn = wrapper.querySelector('.form button');

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    console.log(qrValue);
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    wrapper.classList.add("active");
});