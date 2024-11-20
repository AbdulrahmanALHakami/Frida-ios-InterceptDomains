with frida framework in this repo i will explain how you can intercept and hooking the domains thats iOS Applications open it 
follow the steps.


#to install the frida framework ;
pip3 install frida-tools 
to look up the process of your target app connect your iPhone to USB then write in terminal :

frida-ps -Uai 
choose your target app then type;
frida -U -p <PID> -l domain.js

this command will hook the NSURLSesstion-CFNetwork methods that your app using in runtime 



Abdulrahman Al-Hakami
Twitter:@d7xsa

