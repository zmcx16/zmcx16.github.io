const test = require("tape");
const filterDOMProps = require("../dist").default;

test("it should filter invalid properties and leave valid ones", assert => {
	const properties = {
		onClick: () => {},
		value: "cool",
		type: "text",
		christophercolumbus: "notcool",
		"aria-label": "accessible",
		"data-extra": "smart"
	};
	const filteredProps = filterDOMProps(properties);
	assert.equal(Object.keys(filteredProps).length, 5);
	assert.equal(filteredProps.value, properties.value);
	assert.equal(filteredProps.onClick, properties.onClick);
	assert.equal(filteredProps.type, properties.type);
	assert.equal(filteredProps["aria-label"], properties["aria-label"]);
	assert.equal(filteredProps["data-extra"], properties["data-extra"]);
	assert.notEqual(filteredProps.christophercolumbus, properties.christophercolumbus);
	assert.end();
});
