relay-services
==============

Relay Services app for admins

Deploy Procedures:

1. npm install 
2. bower install
3. grunt -force
4. cd dist
5. jar cvf ../app-relay-services.war .
6. cd ..
7. scp app-relay-services.war <user> @ <target machine> : <jboss app server deploy folder>
