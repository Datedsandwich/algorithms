const harmlessRansomNote = (noteText, magazineText) => {
	const noteArray = noteText.split(' ');
	const magazineArray = magazineText.split(' ');

	const magazine = {};

	magazineArray.forEach((word) => {
		if(!magazine[word]) {
			magazine[word] = 0;
		}

		magazine[word]++;
	});

	let noteIsPossible = true;

	noteArray.forEach((word) => {
		if(!magazine[word]) {
			noteIsPossible = false;
		} else {
			magazine[word]--;

			if(magazine[word] < 0) {
				noteIsPossible = false;
			}
		}
	});

	return noteIsPossible;
};

export default harmlessRansomNote;