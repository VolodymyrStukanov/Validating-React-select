# Validating select
## Problem

There was a problem with validating of React select component. I have not found any suitable for me way to validate the selector. So, I decided to write it myself. 

## Solution

There is a validating react select module in folder "src\modules". It contains the general React select component which needs to be validated. The module allow to validate the select and show the result to users. The styles can be changed depending on the needs of the project easily

## Usage example
There two usage cases of this module in the "src/App.js" file. The selector with "RequiredUserSelector" inputId parameter is required. If an user focuses on it and does not select any option, an inscription appears that this selector is required. The selector with "OptionaluserSelector" inputId parameter is not required. So, if an user focuses on it and does not select any option, the inscription does not appears.
