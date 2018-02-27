let rootNode = document.getElementById("root");

function createTree(structure) {
    let newFolder = document.createElement('ul');
    for (let i in structure) {
        let liNode = document.createElement('li');
        if (structure[i].folder) {

            liNode.innerHTML = '<div><i class="material-icons orange">folder</i> ' +
                structure[i].title + '</div>';
            liNode.firstChild.classList.add('folder');
            if (structure[i].children) {

                let childUl = createTree(structure[i].children);
                liNode.appendChild(childUl);
            } else {

                liNode.innerHTML += "<ul><i>Folder is empty</i></ul>";
            }
        } else {

            liNode.innerHTML = '<div><i class="material-icons grey">insert_drive_file</i> ' +
                structure[i].title + '</div>';
        }
        newFolder.appendChild(liNode);
    }
    return newFolder;
}

rootNode.onclick = function(event) {

    let target = event.target;
    while (target !== this) {
        if (target.tagName === 'DIV' && target.classList.contains('folder')) {
            if (target.firstChild.innerHTML === 'folder') {

               target.firstChild.innerHTML = 'folder_open';
            } else {
                target.firstChild.innerHTML = 'folder';
            }
            target.parentNode.classList.toggle('toggle');
            return;
        }
        target = target.parentNode;
    }
};

rootNode.appendChild(createTree(structure));