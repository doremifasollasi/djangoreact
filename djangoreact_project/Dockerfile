FROM python:3.8

# Install curl, node, & yarn
RUN apt-get -y install curl \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash \
  && apt-get install nodejs \
  && curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /app/mainapp

# Install Python dependencies
COPY ./mainapp/requirements.txt /app/mainapp/
RUN pip3 install --upgrade pip -r requirements.txt

# Install JS dependencies
WORKDIR /app/mainapp-ui

COPY ./mainapp-ui/package.json ./mainapp-ui/yarn.lock /app/mainapp-ui/
RUN $HOME/.yarn/bin/yarn install

# Add the rest of the code
COPY . /app/

# Build static files
RUN $HOME/.yarn/bin/yarn build

# Have to move all static files other than index.html to root/
# for whitenoise middleware
WORKDIR /app/mainapp-ui/build

RUN mkdir root && mv *.ico *.js *.json root

# Collect static files
RUN mkdir /app/mainapp/staticfiles

WORKDIR /app

# SECRET_KEY is only included here to avoid raising an error when generating static files.
# Be sure to add a real SECRET_KEY config variable in Heroku.
RUN DJANGO_SETTINGS_MODULE=hello_world.settings.production \
  SECRET_KEY=somethingsupersecret \
  python3 manage.py collectstatic --noinput

EXPOSE $PORT

CMD python3 manage.py runserver 0.0.0.0:$PORT
