// Operation error
function riskyOperation(){
    // Simulate an error
    if (Math.random() >  0.5) {
        throw new Error('Something went wrong');
    }else{
        return 'Operation completed successfully';
    }

}

try {
    let result = riskyOperation();
    console.log(result);  // Output: Operation completed successfully

} catch (error){
     console.error("An error occured:", error.message, error.name);
}finally {
    console.log('This will always run');
}

//validate the user
function validateUserInput(input){
    if(!input) {
        throw new Error('Input is required');
    }
    console.log(input)
}

try {
    validateUserInput("evangel");
} catch (error) {
    console.error(error.message)
}