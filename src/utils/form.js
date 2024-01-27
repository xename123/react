export function getFormData(form, setUser) {
    const errors = validateForm(form);
    if (errors) return;

    const formData = {
        email: "",
        name: "",
        picture: "",
        password: "",
    };

    const data = new FormData(form);

    for (let [name, value] of data) {
        formData[name] = value;
    }
    setUser(formData);
}
export function validateForm(form) {
    const requiredItems = form.querySelectorAll("[data-required]");

    let errors = 0;

    [...requiredItems].forEach((item) => {
        if (
            (item.type === "text" || item.type === "number") &&
            item.value === ""
        ) {
            item.classList.add("error");
            ++errors;
            return;
        }
        if (item.type === "number") {
            const maxValue = +item.max;
            const minValue = +item.min;
            if (maxValue && item.value > maxValue) {
                item.value = maxValue;
            }
            if (minValue && item.value < minValue) {
                item.value = minValue;
            }
            return;
        }
        if (item.type === "email") {
            if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(item.value)) {
                item.classList.add("error");
                ++errors;
                return;
            }
        }
        if (item.type === "password") {
            if (item.value < item.min) {
                ++errors;
                item.classList.add("error");
                return;
            }
        }
        item.classList.remove("error");
    });

    return errors;
}
