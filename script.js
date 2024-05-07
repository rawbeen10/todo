function newElement() {
    let li = document.createElement("li");
    let taskJ = document.getElementById('task').value;
    let taskName = document.createTextNode(taskJ);
    li.appendChild(taskName);
    if (taskJ === "") {
        alert("You must write something!");
    } else {
        document.getElementById('myList').appendChild(li);
    }

    let divButtons = document.createElement('div')
    divButtons.classList.add('buttons')
    li.appendChild(divButtons)

    let checked = document.createElement('span');
    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
  </svg>`;
    checked.className = "checkBtn";
    checkBtn.setAttribute('class', 'checkButton');
    checked.appendChild(checkBtn);
    checkBtn.onclick = function () {
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none';
        } else {
            li.style.textDecoration = 'line-through';
        }
    };
    divButtons.appendChild(checked);

    let span = document.createElement('span');
    let delBtn = document.createElement('button');
    delBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>`;
    delBtn.setAttribute('class', "deleteButton");
    span.className = 'delete';
    span.appendChild(delBtn);

    delBtn.onclick = function () {
        let span = this.parentNode;
        let div = span.parentNode;
        let li = div.parentNode;
        let list = li.parentNode;
        list.removeChild(li);
    };
    divButtons.appendChild(span);

    let editSpan = document.createElement('span');
    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', "editButton");
    editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
  </svg>`;
    editSpan.appendChild(editBtn);
    divButtons.appendChild(editSpan);

    editBtn.onclick = function () {
        let text = li.firstChild.textContent; // Store the original task text
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = text;
        li.replaceChild(inputField, li.firstChild); // Replace task text with input field
        inputField.focus();

        // Save the edited task when the user presses Enter or clicks outside the input field
        inputField.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                let newText = inputField.value;
                if (newText !== "") {
                    let taskName = document.createTextNode(newText);
                    li.replaceChild(taskName, inputField); // Replace input field with new text node
                } else {
                    alert("You must write something!");
                }
            }
        });

        // Save the edited task when the user clicks outside the input field
        inputField.addEventListener('blur', function () {
            let newText = inputField.value;
            if (newText !== "") {
                let taskName = document.createTextNode(newText);
                li.replaceChild(taskName, inputField); // Replace input field with new text node
            } else {
                alert("You must write something!");
            }
        });
    };
    document.getElementById('task').value = ""
}

document.getElementById("task").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        newElement();
    }

});
