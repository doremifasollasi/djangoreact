# Here is the SPA (Single Page Application).
## INTRO
The Web application "Categories and Posts" consists of two parts: 
backend - folder "mainapp" (which is implemented on Django) and 
frontend - folder "mainapp-ui" (which is implemented on React). 

Thanks to the dependency settings, we will be able to raise the frontend and backend with one command:

`python manage.py runserver`

When setting up the application, we will need two terminals (I used "Visual Studio Code"). In both, you will need to activate the virtual environment (below will be the cover instructions on how to create a "venv" and how to activate it).

Additionally. SPA was developed on Windows. During development I used "Visual Studio Code", "SQLiteStudio", "Postman".
Because this is my first project using React, I needed to install "Node.js" and "Node Package Manager".

There are several options for structuring the DjangoReact project. I decided that in the root folder I would have a folder with a Django project ("djangoreact_project")  and a second folder - with a virtual environment ("djangoreact_venv"). 
I also decided, that the backend (django-app "mainapp") and frontend ("mainapp-ui") will be created on the same level - within the django project (in the "djangoreact_project" folder).

# so, let's do it (Django + React = App "Categories and Posts")

In order to start the site, you need to enter the following commands step by step in the first or second terminal "cmd" according to the instructions.

## Setting environment DJANGO (first terminal)

### Create and activate a virtual environment in the "djangoreact" folder (ie the newly created "djangoreact_venv" folder will appear on the same level as the "djangoreact_project" folder). Type in cmd terminal following:

`python -m venv djangoreact_venv`

`cd djangoreact_venv`

`cd Scripts`

`activate`

### Next step - switch to folder "mainapp" and set up dependens. 
For it, enter the following step by step:

`cd..` ----- (the command will move to the directory by "Scripts" to "djangoreact_venv")

`cd..` ----- (the command will move to the directory by "djangoreact_venv" to "djangoreact")

`cd djangoreact_project`

`cd mainapp`

`pip install -r requirements.txt`(for Windows)


## Setting REACT (open second cmd terminal with venv)
Check availability Node.js and Node Package Manager (if they do not exist, then install them). Commands for check:

`node --version` (for ex. result >>> v14.16.0)

`npm --version` (for ex. result >>> 6.14.11)

For work with REACT you need open in parallel second terminal, where also need activate venv.
Afte instalation / checking the version  Node.js and Node Package Manager, enter following in cmd terminal for REACT (in folder "mainapp-ui"):

`npm install react-scripts --save`  >>> (create folder "node_modules" in folder "mainapp-ui")

`npm install --save bootstrap`

`npm install --save react-router-dom`

`npm run build` >>> (create folder "build")

To check if it starts, enter:

`npm start` >>> (After these commands server http://127.0.0.1:8000/ will rise.)


## Setting DJANGO (first terminal)

### Return to first terminal and and record all changes:

`cd..` ----- ( the command will move to the directory by "mainapp" to "djangoreact_project")

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py collectstatic` (>>> Type 'yes' to continue, or 'no' to cancel:)

Enter: `yes`

### Next step - create superuser (administrator) to access the link http://127.0.0.1:8000/admin/
Through the DjangoAdmin you can change categories and posts. Let`s create:

`python manage.py createsuperuser`

`python manage.py collectstatic` (>>> Type 'yes' to continue, or 'no' to cancel:)


## Then run server (first terminal):

`python manage.py runserver`

After these commands you activate the virtual environment and the site (Django + React) on the server http://127.0.0.1:8000/ will rise.
