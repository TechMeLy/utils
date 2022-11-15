import { isValidEmail, isValidVnPhone } from "../src/regex";
import { describe, test, expect, it } from "vitest";

const dataTest = {
	valid: {
		phone: [
			"0388888888",
			"0588888888",
			"0788888888",
			"0888888888",
			"0988888888",
			"0300000000",
			"0710000000",
		],
		email: [
			"email@example.com",
			"firstname.lastname@example.com",
			"email@subdomain.example.com",
			"firstname+lastname@example.com",
			"firstname.lastname@example.com",
			"email@example.museum",
			"email@example.co.jp",
			"firstname-lastname@example.com",
			"1234567890@example.com",
		],
	},
	invalid: {
		phone: [
			"01200000000",
			"01690000000",
			"01734305551",
			"09123456781123",
			"0123430555111111",
			"1234567890",
		],
		email: [
			"email.example.com",
			"email@example@example.com",
			"email@111.222.333.44444",
			"email@example..com",
		],
	},
};

describe("Check regex", () => {
	describe("Test valid phone", () => {
		dataTest.valid.phone.forEach((phone) => {
			test(`Should return true when phone is ${phone}`, () => {
				expect(isValidVnPhone(phone)).toEqual(true);
			});
		});
	});

	describe("Test invalid phone", () => {
		dataTest.invalid.phone.forEach((phone) => {
			test(`Should return false when phone is use ${phone}`, () => {
				expect(isValidVnPhone(phone)).toEqual(false);
			});
		});
	});

	describe("Test valid email", () => {
		dataTest.valid.email.forEach((email) => {
			it(`When user use ${email}`, () => {
				expect(isValidEmail(email)).toEqual(true);
			});
		});
	});

	describe("Test invalid email", () => {
		dataTest.invalid.email.forEach((email) => {
			it(`When user use ${email}`, () => {
				expect(isValidEmail(email)).toEqual(false);
			});
		});
	});
});
