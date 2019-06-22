import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	})
})

describe('index.html', () => {
	it('should say Hello Express', done => {
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index,(err, window) => {
			const p = window.document.getElementsByTagName('p')[0]
			expect(p.innerHTML).to.equal("Hello Express");
			done();
			window.close();
		});
	})
})