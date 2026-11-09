
var input = document.getElementById('input');
var addBtn = document.getElementById('addbtn');
var list = document.getElementById('list');
var tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

addBtn.addEventListener('click', function(){

    if (input.value.trim() == "") {
        alert("input must not be empty");
        return;
    }

    // create an element
    var li = document.createElement('li');
    li.innerText = input.value;

    // create button
    var button = document.createElement('button');
    button.innerText = "remove";
    button.className = "delete";

    button.addEventListener('click', function(){
        li.remove();
tasks = tasks.filter(function(item) {
    return item !== input.value;
});
localStorage.setItem("myTasks", JSON.stringify(tasks));
    });
    window.addEventListener("load", function() {
    tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.innerText = task;

        var button = document.createElement("button");
        button.innerText = "Remove";
        button.className = "delete";

        button.addEventListener("click", function() {
            li.remove();
            tasks = tasks.filter(function(item) {
                return item !== task;
            });
            localStorage.setItem("myTasks", JSON.stringify(tasks));
        });

        li.appendChild(button);
        list.appendChild(li);
    });
});


    li.appendChild(button);

    // append the element
    list.appendChild(li);
    tasks.push(input.value);
localStorage.setItem("myTasks", JSON.stringify(tasks));

    input.value = "";

});
