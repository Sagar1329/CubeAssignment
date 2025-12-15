
const subscriptionRadios = document.querySelectorAll(
    "input[name='subscription']"
);

const singleSub = document.querySelector(".single-sub");
const doubleSub = document.querySelector(".double-sub");

subscriptionRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "double") {
            singleSub.classList.remove("active");
            doubleSub.classList.add("active");
        } else {
            doubleSub.classList.remove("active");
            singleSub.classList.add("active");
        }
    });
});



const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", () => {
        accordionItems.forEach(i => {
            i.classList.remove("active");
            i.querySelector(".icon").textContent = "+";
        });

        item.classList.add("active");
        icon.textContent = "−";
    });
});
