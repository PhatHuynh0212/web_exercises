$(document).ready(function () {
    const form = $("form");
    const submitBtn = $(".btn-submit");
    const resetBtn = $(".btn-reset");
    const resultDiv = $(".result");
    const nameInput = $("#name");
    const ageInput = $("#age");
    const results = [];

    const isValid = (obj) => {
        for (const key in obj) {
            if (
                !obj[key] ||
                (Array.isArray(obj[key]) && obj[key]?.length === 0)
            ) {
                return false;
            }
        }

        return true;
    };

    const handleFillForm = (record) => {
        form.trigger("reset");
        nameInput.val(record.name);
        ageInput.val(record.age);
        $(`input[name="gender"][value="${record.gender}"]`).prop(
            "checked",
            true
        );
        record.hobbies?.forEach((hobby) => {
            $(`input[name="hobby"][value="${hobby}"]`).prop("checked", true);
        });
    };

    const renderList = () => {
        resultDiv.html("");
        results.forEach((result) => {
            const button = $("<button>", {
                class: "btn btn-outline-info m-2",
                text: result.name,
            });

            button.on("click", () => handleFillForm(result));

            resultDiv.append(button);
        });
    };

    submitBtn.on("click", (e) => {
        e.preventDefault();

        const gender = $('input[name="gender"]:checked').val();
        const hobbies = [];
        $('input[name="hobby"]:checked').each(function () {
            hobbies.push($(this).val());
        });

        const record = {
            name: nameInput.val(),
            age: ageInput.val(),
            gender,
            hobbies,
        };

        if (!isValid(record)) {
            alert("Please, enter the missing element");
            return;
        }

        results.push(record);
        renderList(results);
        form.trigger("reset");
    });

    resetBtn.on("click", () => {
        form.trigger("reset");
    });
});
