# Django + React App Tutorial (and try implement Docker)


## To start the site, you must enter the following commands in turn in the terminal.

### Setting environment DJANGO (first terminal)

Create and activate a virtual environment in the "djangoreact" folder (ie the newly created "djangoreact_venv" folder will appear on the same level as the "djangoreact_project" folder)
`python -m venv djangoreact_venv`
`cd djangoreact_venv`
`cd Scripts`
`activate`

Next step - enter following (in folder "mainapp"):
`cd..` ----- (the command will move to the directory by "Scripts" to "djangoreact_venv")
`cd..` ----- (the command will move to the directory by "djangoreact_venv" to "djangoreact")
`cd djangoreact_project`
`cd mainapp`
`pip3 install -r requirements.txt` or `pip install -r requirements.txt`


### Setting REACT
Check availability Node.js and Node Package Manager:
`node --version` (for ex. result >>> v14.16.0)
`npm --version` (for ex. result >>> 6.14.11)
If they does not exist, then install their.

Thenenter following in other terminal (in folder "mainapp-ui" (!!! Also must be venv !!!)):
`cd mainapp-ui`

After input following:
`npm install react-scripts --save`  >>> (create folder "node_")
`npm install --save bootstrap`
`npm install --save react-router-dom`
`npm run build`

To check if it starts, enter
`npm start`

### Setting DJANGO (first terminal)

Return in first terminal and enter:
`cd..` ----- ( the command will move to the directory by "mainapp" to "djangoreact_project")

`python manage.py makemigrations`
`python manage.py migrate`
`python manage.py collectstatic` (>>> Type 'yes' to continue, or 'no' to cancel:)
Enter: `yes`

## Then run server (first terminal):
`python manage.py runserver`

After these commands you activate the virtual environment and the site (Django + React) on the server http://127.0.0.1:8000/ will rise.


!!! Dockerization requires refactoring !!!
## Setting up the app
Checkout the branch for a given tutorial, and run 
`docker-compose build`

## Running the app on local
Run `docker-compose up` to see messages in the terminal. 
Run `docker-compose start` to run the app in the background.
