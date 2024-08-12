# String Calculator React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

Input: a string of comma-separated numbers
Output: an integer, sum of the numbers

Examples:

1. Input: “”, Output: 0
2. Input: “1”, Output: 1
3. Input: “1,5”, Output: 6

Allow the add method to handle new lines between numbers (instead of commas).
("1\n2,3" should return 6)

Support different delimiters:
To change the delimiter, the beginning of the string will contain a separate
line that looks like this: "//[delimiter]\n[numbers...]". For example, "//;\n1;2" where
the delimiter is ";" should return 3.

Calling add with a negative number will throw an exception: "negative numbers not
allowed <negative_number>". 
If there are multiple negative numbers, show all of them in the exception
message, separated by commas.
   

Deployed Url: https://string-calculator-five.vercel.app/
