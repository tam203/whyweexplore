About
====================
A JS app for playing (and creating in the future) simple point and click adventures. Inspired by and created for Why? The Explorable Story see
http://spaceappschallenge.org/project/why-the-explorable-story/ and http://www.explorablestory.org/ 

The app is OpenShift CakePHP cartridge but the app currently uses no PHP and is pure HTML/JS but using OpenShift can be easily deployed to the VM (simple as a git push).
Check out openshift.redhat.com for more info on OpenShift cartridges.

The JS is based on the AMD pattern and is powered by dojo - http://dojotoolkit.org/

A demo is currently hosted at http://whyweexplore-theomccaie.rhcloud.com/roomPlayer.html#tree_house_in_woods_room 



CakePHP on OpenShift
====================

This git repository helps you get up and running quickly w/ a CakePHP installation
on OpenShift.  The backend database is MySQL and the database name is the
same as your application name (using $_ENV['OPENSHIFT_APP_NAME']).  You can call
your application by whatever name you want (the name of the database will always
match the application).


Running on OpenShift
----------------------------

Create an account at http://openshift.redhat.com/

Create a php-5.3 application (you can call your application whatever you want)

    rhc app create -a cake -t php-5.3

Add MySQL support to your application

    rhc cartridge add -a cake -c mysql-5.1

Add this upstream CakePHP repo

    cd cake
    git remote add upstream -m master git://github.com/openshift/cakephp-example.git
    git pull -s recursive -X theirs upstream master
    # note that the git pull above can be used later to pull updates to CakePHP
    
Then push the repo upstream

    git push

That's it, you can now checkout your application at (default admin account is admin/admin):

    http://cake-$yournamespace.rhcloud.com


NOTES:

GIT_ROOT/.openshift/action_hooks/deploy:
    This script is executed with every 'git push'.  Feel free to modify this script
    to learn how to use it to your advantage.  By default, this script will create
    the database tables that this example uses.

    If you need to modify the schema, you could create a file 
    GIT_ROOT/.openshift/action_hooks/alter.sql and then use
    GIT_ROOT/.openshift/action_hooks/deploy to execute that script (make sure to
    back up your application + database w/ 'rhc app snapshot save'first :) )

CakePHP Security:
    If you're doing more than just 'playing' be sure to edit app/config/core.php
    and modify Security.salt and Security.cipherSeed.
