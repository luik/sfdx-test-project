# SFDX  App

# Help Sample Commands

Mainly as a record of the needed commands

```
cat sfdx-test-project/.git/config
rm -rf sfdx-test-project
git clone https://github.com/luik/sfdx-test-project.git
cd sfdx-test-project
sfdx force:org:list
sfdx force:config:set defaultdevhubusername=lyucra@devhub.com
sfdx force:org:create -f config/project-scratch-def.json 
sfdx force:org:list
sfdx force:config:set defaultusername=test-uulzrhmarbhx@example.com
sfdx force:data:tree:import -f data/Case.json
sfdx force:org:open

---------------------------------------------------------------------------------

sfdx force:data:soql:query --query "Select Origin, Subject, Description From Case"
sfdx force:data:tree:export --query "Select Origin, Subject, Description From Case" -d data

----------------------------------------------------------------------------------

sfdx force:org:delete --targetusername test-uulzrhmarbhx@example.com

----------------------------------------------------------------------------------

sfdx force:package:install --package 04t0H000001Dy1g

-------------------------------------------------------------------------------

sfdx force:user:password:generate

-------------------------------------------------------------------------------



sfdx force:user:display
```


## Dev, Build and Test


## Resources


## Description of Files and Directories


## Issues


