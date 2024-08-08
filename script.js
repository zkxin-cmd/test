function generateRandomNumbers() {
    const average = parseFloat(document.getElementById('averageInput').value);
    const minRange = parseInt(document.getElementById('minInput').value);
    const maxRange = parseInt(document.getElementById('maxInput').value);
    const count = parseInt(document.getElementById('countInput').value);
    const groups = parseInt(document.getElementById('groupsInput').value);

    if (isNaN(average) || isNaN(minRange) || isNaN(maxRange) || isNaN(count) || isNaN(groups) || count <= 0 || groups <= 0 || minRange >= maxRange) {
        alert("请输入有效的参数！");
        return;
    }

    const container = document.getElementById('randomNumbersContainer');
    container.innerHTML = ''; // 每次生成前清空之前的内容

    for (let g = 0; g < groups; g++) {
        let validGroup = false;
        let randomNumbers;

        while (!validGroup) {
            randomNumbers = [];
            let sum = 0;

            // Generate count - 1 random integers
            for (let i = 0; i < count - 1; i++) {
                const num = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
                randomNumbers.push(num);
                sum += num;
            }

            // Calculate the last number to ensure the average is correct
            const lastNumber = Math.round(average * count - sum);

            if (lastNumber >= minRange && lastNumber <= maxRange) {
                randomNumbers.push(lastNumber);
                validGroup = true; // Mark the group as valid if the last number is within range
            }
        }

        // Create and append the element for this group
        const groupDiv = document.createElement('div');
        groupDiv.className = 'random-group';
        randomNumbers.forEach(num => {
            const span = document.createElement('span');
            span.textContent = num;
            groupDiv.appendChild(span);
        });
        container.appendChild(groupDiv);
    }
}
