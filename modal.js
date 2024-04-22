function showAllBtns() {
    document.getElementById("tellStoryAnonymBtn").style.display = "";
    document.getElementById("tellStoryBtn").style.display = "";

    document.getElementById("tellStoryName").style.display = "";
    document.getElementById("tellStoryMail").style.display = "";
    document.getElementById("tellStoryPhone").style.display = "";
}

function tellStoryAnonym() {
    document.getElementById("tellStoryBtn").style.display = "none";
    document.getElementById("tellStoryName").style.display = "none";
    document.getElementById("tellStoryMail").style.display = "none";
    document.getElementById("tellStoryPhone").style.display = "none";
    document.getElementById("dialog").showModal();
}

function tellStory() {
    document.getElementById("tellStoryAnonymBtn").style.display = "none";
    document.getElementById("dialog").showModal();
}

function closeModal() {
    showAllBtns();
    document.getElementById("dialog").close();
}