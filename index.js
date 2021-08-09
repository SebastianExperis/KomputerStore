(async function () {

    async function fetchComputers() {
        const response = await fetch('https://noroff-komputer-store-api.herokuapp.com/computers');
        const computers = await response.json();
        return computers;
    }

    let computers = [];
    computers = await fetchComputers();
    console.log(computers);

    const computersElement = document.getElementById("computers");



    const addComputersToMenu = (computers) => {
        computers.forEach(x => addComputerToMenu(x));
    }

    const addComputerToMenu = (computer) => {
        const computerElement = document.createElement("option");
        computerElement.value = computers.id;
        computerElement.appendChild(document.createTextNode(computer.title));
        computersElement.appendChild(computerElement);
    }
const addWork = (work) => {

}
}())