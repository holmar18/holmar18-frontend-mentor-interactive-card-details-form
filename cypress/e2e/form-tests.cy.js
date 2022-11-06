describe('Test form name input', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/');
	});

	it('Input name should contain Jon Jonsson', () => {
		cy.get('.forminput')
			.first()
			.click()
			.type('Jon Jonsson')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('Jon Jonsson');
			});
	});

	it('Card should contain name from input', () => {
		cy.get('.forminput').first().click().type('Jon Jonsson');

		cy.get('.card-name').contains('Jon Jonsson');
	});

	it('test blank name input should show error (Cannot be blank)', () => {
		// Write input card input
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('1234 5678 9123 4567');

		// Write input MM
		cy.get('input[placeholder="MM"]').click().type('12');

		// Write input YY
		cy.get('input[placeholder="YY"]').click().type('24');

		// Write input CVC
		cy.get('input[placeholder="e.g 123"]').click().type('123');

		cy.get('.confirmation-btn').click();

		cy.get('.forminput-errMsg').contains("Can't be blank");
	});
});

describe('Test form card input', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/');
	});

	it('Input card should contain 1234 5678 9123 4567', () => {
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('1234 5678 9123 4567')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('1234 5678 9123 4567');
			});
	});

	it('Card should contain card number from input', () => {
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.first()
			.click()
			.type('1234 5678 9123 0000');

		cy.get('.card-number').contains('1234 5678 9123 0000');
	});

	it('Test typing characters into card input should be empty', () => {
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('easdf')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('');
			});
	});

	it('test blank card input should show error (Cannot be blank)', () => {
		// Write input card input
		cy.get('input[placeholder="e.g Jane Appleesed"]')
			.click()
			.type('Jane Appleased');

		// Write input MM
		cy.get('input[placeholder="MM"]').click().type('12');

		// Write input YY
		cy.get('input[placeholder="YY"]').click().type('24');

		// Write input CVC
		cy.get('input[placeholder="e.g 123"]').click().type('123');

		cy.get('.confirmation-btn').click();

		cy.get('.forminput-errMsg').contains("Can't be blank");
	});
});

describe('Test month input', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/');
	});

	it('Month should contain 12', () => {
		cy.get('input[placeholder="MM"]')
			.click()
			.type('12')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('12');
			});
	});

	it('Write characters to input should be empty', () => {
		cy.get('input[placeholder="MM"]')
			.click()
			.type('asd')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('');
			});
	});

	it('Card display should have month 12', () => {
		cy.get('input[placeholder="MM"]').click().type('12');

		cy.get('.card-expire').contains('12');
	});

	it('test MONTH input should show error (Cannot be blank)', () => {
		// Write input card input
		cy.get('input[placeholder="e.g Jane Appleesed"]')
			.click()
			.type('Jane Appleased');

		// Write input Card number
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('1234 5678 9123 0000');

		// Write input YY
		cy.get('input[placeholder="YY"]').click().type('24');

		// Write input CVC
		cy.get('input[placeholder="e.g 123"]').click().type('123');

		cy.get('.confirmation-btn').click();

		cy.get('.forminput-errMsg').contains("Can't be blank");
	});
});

describe('Test year input', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/');
	});

	it('Year should contain 24', () => {
		cy.get('input[placeholder="YY"]')
			.click()
			.type('24')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('24');
			});
	});

	it('Write characters to input should be empty', () => {
		cy.get('input[placeholder="YY"]')
			.click()
			.type('asd')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('');
			});
	});

	it('Card display should have year 22', () => {
		cy.get('input[placeholder="YY"]').click().type('22');

		cy.get('.card-expire').contains('22');
	});

	it('test YEAR input should show error (Cannot be blank)', () => {
		// Write input card input
		cy.get('input[placeholder="e.g Jane Appleesed"]')
			.click()
			.type('Jane Appleased');

		// Write input Card number
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('1234 5678 9123 0000');

		// Write input MM
		cy.get('input[placeholder="MM"]').click().type('12');

		// Write input CVC
		cy.get('input[placeholder="e.g 123"]').click().type('123');

		cy.get('.confirmation-btn').click();

		cy.get('.forminput-errMsg').contains("Can't be blank");
	});
});

describe('Test CVC input', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/');
	});

	it('CVC should contain 123', () => {
		cy.get('input[placeholder="e.g 123"]')
			.click()
			.type('123')
			.invoke('val')
			.then((val) => {
				expect(val).to.equal('123');
			});
	});

	it('Card backside display should have year 123', () => {
		cy.get('input[placeholder="e.g 123"]').click().type('123');

		cy.get('.back-number').contains('123');
	});

	it('test CVC input should show error (Cannot be blank)', () => {
		// Write input card input
		cy.get('input[placeholder="e.g Jane Appleesed"]')
			.click()
			.type('Jane Appleased');

		// Write input Card number
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('1234 5678 9123 0000');

		// Write input MM
		cy.get('input[placeholder="MM"]').click().type('12');

		// Write input YY
		cy.get('input[placeholder="YY"]').click().type('24');

		cy.get('.confirmation-btn').click();

		cy.get('.forminput-errMsg').contains("Can't be blank");
	});
});

describe('Thank you screen', () => {
	beforeEach(() => {
		cy.viewport(1920, 1120);
		cy.visit('http://localhost:3000/');
	});

	it('Thank you screen should appear', () => {
		// Write input card input
		cy.get('input[placeholder="e.g Jane Appleesed"]')
			.click()
			.type('Jane Appleased');

		// Write input Card number
		cy.get('input[placeholder="e.g 1234 5678 9123 0000"]')
			.click()
			.type('1234 5678 9123 0000');

		// Write input MM
		cy.get('input[placeholder="MM"]').click().type('12');

		// Write input YY
		cy.get('input[placeholder="YY"]').click().type('24');

		cy.get('.confirmation-btn').click();

		// Write input CVC
		cy.get('input[placeholder="e.g 123"]').click().type('123');

		cy.get('.confirmation-btn').click();

		cy.get('h1').contains('THANK YOU!');
	});
});
