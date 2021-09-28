# Filter Invalid DOM Props

[![CircleCI](https://circleci.com/gh/socialtables/filter-invalid-dom-props.svg?style=svg)](https://circleci.com/gh/socialtables/filter-invalid-dom-props)

A simple helper function to filter out invalid dom properties. Useful when spreading into at html element in react applications (and maybe for other things).

## Use

```js
import filterInvalidDOMProps from "filter-invalid-dom-props";
const properties = {
	onClick: () => {},
	value: "cool",
	type: "text",
	christophercolumbus: "notcool"
};
const filteredProps = filterInvalidDOMProps(properties);
/* returns
	{
		onClick: () => {},
		value: "cool",
		type: "text"
	};
*/
```
- - -

Copyright (C) 2016 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
