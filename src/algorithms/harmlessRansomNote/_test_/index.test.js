import harmlessRansomNote from '../index';

describe('Harmless Ransom Note', () => {
	it('should return true if magazineText is equal to the noteText', () => {
		const noteText = 'This is a secret note';
		const magazineText = noteText;

		expect(harmlessRansomNote(noteText, magazineText)).toBe(true);
	});

	it('should return true if magazineText contains all of the words present in the note', () => {
		const noteText = 'This is a secret note';
		const magazineText = noteText + ' hidden in the words of a magazine';

		expect(harmlessRansomNote(noteText, magazineText)).toBe(true);
	});

	it('should return false if magazineText does not contain all of the words present in the note', () => {
		const noteText = 'This is a secret note';
		const magazineText = 'hidden in the words of a magazine';

		expect(harmlessRansomNote(noteText, magazineText)).toBe(false);
	});

	it("should return false if duplicate words in the note are not also duplicated in the magazine text", () => {
		const noteText = 'This is a secret note, from your secret admirer';
		const magazineText = 'This is a secret note, from your admirer';

		expect(harmlessRansomNote(noteText, magazineText)).toBe(false);
	});

	it("should return true if duplicate words in the note are also duplicated in the magazine text", () => {
		const noteText = 'a secret note, from your secret admirer';
		const magazineText = 'This magazine contains many secrets, such as ' + noteText;

		expect(harmlessRansomNote(noteText, magazineText)).toBe(true);
	});
});