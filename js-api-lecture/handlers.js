import {baseURL, fetchSettings} from "./constants.js";
import {mapButtonsForUpdate, mapUserToDelete, mapUserToUpdate, mapUserToView} from "./maps.js";


/**
 * References to Modal pieces
 * @type {{all: Element, head: Element, container: Element, main: Element, foot: Element}}
 */
// Modal elements
export const modal = {
    all: document.querySelector("#modal"),
    main: document.querySelector("#modal > main"),
    head: document.querySelector("#modal > header"),
    foot: document.querySelector("#modal > footer"),
    container: document.querySelector("#modal-container") // represents the background
}



// Handles creating the confirmation view to delete
export const handleDeleteView = (event) => {
    console.log("handle Delete")
    toggleModal();

    modal.head.innerHTML = `<h3>Do you wish to delete this User?</h3>`
    modal.main.innerHTML = "<p>If you delete this User its gone forever.</p>"
    modal.foot.innerHTML = mapUserToDelete(event.target.value);

    $("button.confirm").click(handleDoDelete);

};

// Example: delete fetch request
const handleDoDelete = (event) => {
    event.preventDefault();

    // TODO: Delete User by ID
    // TODO: Hide Modal
    // TODO: Reload form
}



// Example: get fetch request
export const handleDisplayProfile = (event) => {
    toggleModal();
    // TODO: Create fetch to get the profile information
    // TODO: Map info to modal in view.
}





// Example: get fetch request
export const handleDisplayUpdate = (event) => {

    //TODO: Get Data from user by Id
    //TODO: Map to update form
    //TODO: Add handlers

};



// Example: PUT fetch request
export const handleDoUpdate = (event) => {
    event.preventDefault();

    // TODO: GET form data
    // TODO: Update the user with the new form data.
    // TODO: hide modal.

}

const handleCreateUserView = (event) => {
    // TODO: Create form for users to fill out.
}


// Example: POST request
const handleDoCreateUser = () => {
    // TODO: Create a new User!
}





// Modal handling
export const toggleModal = () => {
    // show hide modal logic
    modal.container.classList.toggle("hide")
    modal.all.classList.toggle("hide");
}

export const enableModal = () => {
    modal.container.classList.remove("hide")
    modal.all.classList.remove("hide");
}


