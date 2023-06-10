# PROTRACTOR FRONT END AUTOMATED TESTS

![](./assets/readMeMd/protractorAT1.gif)

## TABLE OF CONTENTS

[OVERVIEW](#overview)

[PRE REQUISITES](#prerequisites)

[USE CASES](#use-cases)

[HELP MENU](#help-menu)

[REPORT](#report)

## OVERVIEW

The objective of this README.md document file is to provide help on how to install, update and run the automated tests on a Protractor E2E Front End Automated Test project, as a Proof of Concept (POC).

It has a Command Line Interface (CLI) helping a user or a pipeline cloud to inform scripts and so on.

Also, it supports BDD based scenarios features files, and generates a pretty dashboard report at the end of each test cycle.

![](./assets/readMeMd/bddFeature1.png)

![](./assets/readMeMd/reportDashboard1.png)

![](./assets/readMeMd/reportScenario1.png)


## PREREQUISITES

1. NPM: ^8.11.0;
2. Node (TS-Node): ^16.16.0.

In the project folder, open a terminal and run the following command:

```
npm install
```

This step install and update all project dependencies.

Note: from time to time, it may be necessary to update the web-driver version in the package.json file.

The following steps are required to configure the eslint and prettier libraries.

### Web Storm or IntelliJ

There is no need to install any plugin, except some configuration are required:

#### STEP 1

1. Press <i>CTRL+ALT+S</i> to open Settings dialog:

![](./assets/readMeMd/esLint1.png)

#### STEP 2

1. Search for `ESLint`, go to <b>Languages & Frameworks</b> section and then select <b>ESLint</b>;


2. Select the <b>Manual ESLint configuration</b> radiobox and then select in the <b>ESLint package:</b> combobox the path inside the <i>node_modules</i> folder;


3. Select the <b>Run eslint --fix on save</b> checkbox:

![](./assets/readMeMd/esLint2a.png)

4. Click in the <b>All actions on save...</b> link:

![](./assets/readMeMd/esLint2b.png)

5. Select both <b>Run eslint --fix</b> and <b>Run Prettier</b> checkboxes:

![](./assets/readMeMd/esLint2c.png)

6. In the <b>Run Prettier</b> checkbox section, click in the <b>Configure...</b> link:

![](./assets/readMeMd/esLint2d.png)

7. Similar to the ESLint plugin process from the menu, click in the <b>Manual Prettier configuration</b> checkbox and then select <b>Prettier package:</b> the path inside the <b>node_modules</b> folder;


8. Click in the <b>Run on save</b> checkbox and then click in both <b>Apply</b> and <b>OK</b> buttons:

![](./assets/readMeMd/esLint2e.png)

9. Search for `Node.js`, go to <b>Languages & Frameworks</b> section and then select <b>Coding assistance for Node.js</b>;

![](./assets/readMeMd/node1.png)

### VSCODE

Need to install two plugins:

1. [Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint);
2. [Eslint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Note: In VSCODE, both Eslint and Prettier configuration is done automatically.

## USE CASES

```
ts-node e2e_cli.ts
ts-node e2e_cli.ts --script protractor
ts-node e2e_cli.ts --script allfeatures
ts-node e2e_cli.ts --script wm-update
```

Note: the `allfeatures` script provides a headless automation execution testing. By the other hand, the `protractor` one executes it openning a browser.

## HELP MENU

```
> ts-node e2e_cli.ts --help

Usage: ts-node e2e_cli.ts [--script allfeatures]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
      --script   NPM script to be executed. E.G.:
                 allfeatures|wm-update|protractor
                                               [string] [default: "allfeatures"]
  -s, --site     A site to be opened. E.G.: https://roadmap.sh/
                                       [string] [default: "https://roadmap.sh/"]
      --output   Console output type.
                                    [choices: "full", "plain"] [default: "full"]
```

## REPORT

After running some script, a folder named `.tmp/report` will dynamically be created in the project folder, which contains a `index.hmtl` report file, as follows:

![](./assets/readMeMd/reportDashboard1.png)

![](./assets/readMeMd/reportScenario1.png)

In case a step from a scenario fails, a screenshot will be attached to report:  

![](./assets/readMeMd/reportError1.png)

Note that the only possible configuration a switch between Light/Dark themes modes.

See also:

[Future of Angular E2E & Plans for Protractor #5502](https://github.com/angular/protractor/issues/5502).