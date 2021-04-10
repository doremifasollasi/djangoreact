# Django + React App Tutorial (and try implement Docker)

## To start the site, you must enter the following commands in turn in the terminal.
## Create and activate a virtual environment in the "djangoreact" folder (ie the newly created "djangoreact_venv" folder will appear on the same level as the "djangoreact_project" folder)
`python -m venv djangoreact_venv`
`cd djangoreact_venv`
`cd Scripts`
`activate`

## Then run server:
`cd..` ----- ( the command will move to the directory "djangoreact_venv")
`cd..` ----- ( the command will move to the directory "djangoreact")
`cd djangoreact_project`
`python manage.py runserver`

## After these commands you activate the virtual environment and the site (Django, React) on the server http://127.0.0.1:8000/ will rise.

If exist some problem, then try enter following (in folder "mainapp"):
`pip3 install -r requirements.txt`
or
`pip install -r requirements.txt`


## Setting up the app
Checkout the branch for a given tutorial, and run 
`docker-compose build`

## Running the app on local
Run `docker-compose up` to see messages in the terminal. 
Run `docker-compose start` to run the app in the background.
