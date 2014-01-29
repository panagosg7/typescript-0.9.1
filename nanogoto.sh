#! /bin/bash

USER=pvekris
SERVER=goto.ucsd.edu
TMP_PATH=/var/tmp
FILENAME=$(basename $1)
HSENV_PATH=/home/pvekris/Documents/research/liquid-js/.hsenv/bin
NANO_PATH=/home/pvekris/Documents/research/liquid-js/.hsenv/cabal/bin/nanojs

scp $1 $USER@$SERVER:$TMP_PATH/FILENAME

ssh $USER@$SERVER "	export PATH=\$PATH:/home/pvekris/.root/bin ; \
			source $HSENV_PATH/activate  > /dev/null ; \
			nanojs liquid $TMP_PATH/$FILENAME ; 
			deactivate_hsenv > /dev/null "

