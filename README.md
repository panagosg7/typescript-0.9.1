### This is a deprecated, non-maintained version based on TypeScript 0.9.1. The newer version is based on Typescript 1.0 and can be found here: https://github.com/panagosg7/TypeScript


**This is a fork of the [TypeScript](https://typescript.codeplex.com/) compiler, a Scalable JavaScript variant with types, classes and modules.**

It has been modified to work as a front-end to the [language-ecmascript](https://github.com/UCSD-PL/language-ecmascript) and [NanoJS](https://github.com/UCSD-PL/nano-js). More information as to how to use it for this purpose can be found [here](https://github.com/UCSD-PL/nano-js).


## TypeScript


### Install

    npm install -g typescript



### Usage
    
    tsc hello.ts



### Build

1.  Install Node if you haven't already (http://nodejs.org/)
2.  Install Jake, the tool we use to build our compiler (https://github.com/mde/jake). To do this, run `npm install -g jake`.
3.  To use jake, run one of the following commands: 
    - `jake local` - This builds the compiler. The output is in built/local in the public directory 
    - `jake clean` - deletes the build compiler 
    - `jake LKG` - This replaces the LKG (last known good) version of the compiler with the built one.
        - This is a bootstrapping step to be executed whenever the built compiler reaches a stable state.
    - `jake tests` - This builds the test infrastructure, using the built compiler. 
    - `jake runtests` - This runs the tests, using the built compiler and built test infrastructure. 
        - You can also override the host or specify a test for this command. Use host=<hostName> or tests=<testPath>. 
    - `jake baseline-accept` - This replaces the baseline test results with the results obtained from jake runtests. 
    - `jake -T` lists the above commands. 



### Oneline build command:
  
    node bin/tsc.js -out built/local/tsc.js -removeComments -propagateEnumConstants -declaration -noImplicitAny --module commonjs src/compiler/tsc.ts



### Notes

 * The Fidelity test folder has been removed from the entire history to cut down on size.
