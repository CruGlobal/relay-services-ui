relay-services
==============

Relay Services app for admins

Deploy Procedures:

1. grunt -force
2. cd dist
3. jar cvf ../app-relay-services.war .
4. cd ..
5. scp app-relay-services.war <user>@<target machine>:<jboss app server deploy folder>
