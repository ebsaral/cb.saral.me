import { Validator } from "jsonschema";
import { readFile } from 'fs/promises';
import pkg from '@next/env';
const { loadEnvConfig } = pkg;

loadEnvConfig(process.cwd())

const v = new Validator();

const propertyFileNames = ["Metadata"]
const schemaName = "main"

for (let fileName of propertyFileNames) {
	const property = JSON.parse(
		await readFile(
			new URL(`./properties/${fileName}.json`, import.meta.url)
		)
	);
	v.addSchema(property);
}

const schema = JSON.parse(
	await readFile(
		new URL(`./${schemaName}.json`, import.meta.url)
	)
);

const runAsync = async () => {
	let hasError = false

	for(let locale of ["tr", "en"]) {
		const json = JSON.parse(
			await readFile(
				new URL(`../${locale}.json`, import.meta.url)
			)
		);
		console.info(`Validating schema: ${locale}.json`)
		const result = v.validate(json, schema, {nestedErrors: true})
		
		if(result.valid) {
			console.info(`Successfully validated schema: ${locale}.json`)
		}
		else {
			console.log(`Errors found in ${locale} schema:`)
			console.error(result.toString())
			hasError = true
		}
	}

	if(hasError) {
		throw new Error("Schema validation failed.")
	}
	else {
		console.info("Schema validation is successful.")
	}
}

;(async () => {
	await runAsync()
})().catch(err => {
	console.error(err)
	throw err
})