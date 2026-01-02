const taken = "taken";
const open  = "open";
const close = "close";
const { exec } = require("child_process");
const args = process.argv.slice(2)
if(args == taken){
    exec("blinkstick red", (error, stdout, stderr) => {
        if (error) {
            console.error('error: ${error.message}');
            return;
        }
        if (stderr) {
            console.error('Stderr: ${stderr}');
            return;
        }
        console.log('Session taken');
    });
}	
else if(args == open){
    exec("blinkstick yellow", (error, stdout, stderr) => {
        if (error) {
            console.error('error: ${error.message}');
            return;
        }
        if (stderr) {
            console.error('Stderr: ${stderr}');
            return;
        }
        console.log('Session open');
    });
}	
else if(args == close){
    exec("blinkstick off", (error, stdout, stderr) => {
        if (error) {
            console.error('error: ${error.message}');
            return;
        }
        if (stderr) {
            console.error('Stderr: ${stderr}');
            return;
        }
        console.log('Session off');
    });
}