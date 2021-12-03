create more than one app into single folder
parent-folder=> npm i -D lerna
			 => npx lerna init => lerna.json file need to add version
			 => move all the application into packages folder inside
			 =>npx lerna clean -y(for seperate node-modules removing)
			 =>npx lerna bootstrap --hoist (for check all dependency in all project and install common node-modules)
	=> common package.json file write "scripts":{"start" : "lerna run start",}
	=> all packages application should script start is needed.

project source video:
https://www.youtube.com/watch?v=j0FiMekdeOs