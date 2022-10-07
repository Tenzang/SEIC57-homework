// const button = document.getElementById('lib-button');
const $button = $('#lib-button');

const makeMadLib = function () {
    // const storyDev = document.getElementById("story");
    const storyDev = `${nounDev} brought ${adjectiveDev} ${personDev} today to work. It was very surprising.`;

    // const personDev = document.getElementById("person").value;
    const personDev = $('#person').val();

    // const adjectiveDev = document.getElementById("adjective").value;
    const adjective = $('#adjective').val();

    // const nounDev = document.getElementById("noun").value;
    const noun = $('#noun').val();


    // storyDev.innerHTML = (`${nounDev} brought ${adjectiveDev} ${personDev} today to work. It was very surprising.`);
    console.log('makeMadLib');
};

// button.addEventListener('click', makeMadLib);
$button.on('click', makeMadLib);