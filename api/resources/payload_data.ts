import { faker } from "@faker-js/faker"

/**
 * Creates fake user data as an example.
 * This example can be expanded to match application needs
 * @example
 * "name": faker.name.firstName() + " " + faker.name.lastName(),
 * "job": faker.name.jobTitle()
 * @returns {name} -- first and last name using faker data.
 * @returns {job} -- job title using faker data. 
 */

export const createFakeUserData = {
    "name": faker.name.firstName() + " " + faker.name.lastName(),
    "job": faker.name.jobTitle()
}