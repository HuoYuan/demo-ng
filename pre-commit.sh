#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".
export PATH=/usr/local/Cellar/node/0.10.32/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/git/bin:$PATH;
RED='\033[0;31m'
NC='\033[0m' # No Color
echo "Before your committing, lint your codes firstly.";
npm run lint;
if [ "$?" != "0" ]; then
  echo;
  echo "${RED}[Error]${NC} There are some problems in the project.";
  echo "${RED}[Error]${NC} Fix them before committing or suggest a change to the rules defined in .eslintrc.";

  exit 1;
fi
