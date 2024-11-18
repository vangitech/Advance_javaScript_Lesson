export  function riskyOperation(){
    if(Math.random() > 0.5){
        throw new Error('Something went wrong')
    }else{
        return 'Operation Successful Good Work'
    }
}

try{
    let result = riskyOperation();
    console.log (result)
} catch (error){
    console.error('There is an issue:', error.message, error.name )
}finally{
    console.log('Enter a number:')
}